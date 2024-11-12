import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardTitle } from './kard';
import { Button } from './button';
import { Input } from './Input';
import { Store, MapPin } from 'lucide-react';

const PaymentGateway = () => {
  const location = useLocation();
  const productData = location.state?.productData;
  const [quantity, setQuantity] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const pricePerKg = productData?.pricePerKg || 0.0;
  const calculateTotal = () => (quantity * pricePerKg).toFixed(2);

  const handlePayment = async () => {
    if (!mobileNumber || !selectedOperator) {
      alert('Please enter your mobile number and select a payment method.');
      return;
    }

    const paymentData = {
      mobile: mobileNumber,
      amount: calculateTotal(),
      operator: selectedOperator,
      product: productData?.name,
    };

    setLoading(true);
    setPaymentStatus(null);

    try {
      const initResponse = await axios.post('http://localhost:5000/payments/initialize', paymentData);
      const { charge_id } = initResponse.data.data;

      alert(`Please confirm the payment on your mobile phone (${selectedOperator === 'airtel' ? 'Airtel Money' : 'Tnm Mpamba'})`);

      // Polling the payment verification status
      const pollPaymentStatus = setInterval(async () => {
        try {
          const verifyResponse = await axios.get(`http://localhost:5000/payments/verify/${charge_id}`);
          
          if (verifyResponse.data.status === 'success') {
            clearInterval(pollPaymentStatus);
            setPaymentStatus('success');
            setLoading(false);
          } else if (verifyResponse.data.status === 'failed') {
            clearInterval(pollPaymentStatus);
            setPaymentStatus('failed');
            setLoading(false);
          }
        } catch (error) {
          console.error('Error verifying payment:', error);
          clearInterval(pollPaymentStatus);
          setPaymentStatus('error');
          setLoading(false);
        }
      }, 10000); // Poll every 10 seconds
    } catch (error) {
      console.error('Error initiating payment:', error);
      setLoading(false);
      setPaymentStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="relative h-[300px] md:h-full overflow-hidden">
              <img 
                src={productData?.imageUrl}
                alt={productData?.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Product Details */}
            <div className="p-6">
              <CardTitle className="text-2xl font-bold mb-4">Payments</CardTitle>
              
              <h2 className="text-xl font-semibold mb-2">{productData?.name}</h2>
              
              <div className="text-gray-600 mb-4">
                <p className="mb-4">{productData?.description}</p>
                
                <div className="flex items-center gap-2 mb-2">
                  <Store className="w-4 h-4" />
                  <span>{productData?.farmName}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{productData?.location}</span>
                </div>
                
                <div className="font-semibold mb-4">
                  Price per kg: K{pricePerKg.toFixed(2)}
                </div>
              </div>

              {/* Quantity Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    placeholder="Add Quantity"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center">
                  <span>Total: K{calculateTotal()}</span>
                </div>
              </div>

              {/* Mobile Number Input */}
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Payment Methods</h3>
                <p className="text-gray-600 mb-4">Select a payment method</p>
                <div className="space-y-3">
                  <Button
                    variant={selectedOperator === 'airtel' ? 'solid' : 'outline'}
                    className="w-full justify-between h-14"
                    onClick={() => setSelectedOperator('airtel')}
                  >
                    <div className="flex items-center gap-2">
                      <img 
                        src={require('../../Assets/Images/airtel mw money.png')} 
                        alt="Airtel Money"
                        className="w-8 h-8"
                      />
                      <span>Airtel Money</span>
                    </div>
                  </Button>

                  <Button
                    variant={selectedOperator === 'tnm' ? 'solid' : 'outline'}
                    className="w-full justify-between h-14"
                    onClick={() => setSelectedOperator('tnm')}
                  >
                    <div className="flex items-center gap-2">
                      <img 
                        src={require('../../Assets/Images/images.png')} 
                        alt="Tnm Mpamba"
                        className="w-8 h-8"
                      />
                      <span>Tnm Mpamba</span>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Pay Button */}
              <Button
                className="w-full bg-blue-500 text-white h-12"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Pay'}
              </Button>

              {/* Payment Status */}
              {paymentStatus && (
                <div className={`mt-4 text-center font-semibold ${paymentStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {paymentStatus === 'success' ? 'Payment successful!' : paymentStatus === 'failed' ? 'Payment failed.' : 'An error occurred during payment.'}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentGateway;
