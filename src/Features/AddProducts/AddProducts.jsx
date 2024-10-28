import React, { useState } from 'react';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [minOrder, setMinOrder] = useState('');
    const [maxOrder, setMaxOrder] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            productName,
            productDescription,
            price,
            stock,
            minOrder,
            maxOrder,
            category,
            image,
        });

        // Clear form after submission
        setProductName('');
        setProductDescription('');
        setPrice('');
        setStock('');
        setMinOrder('');
        setMaxOrder('');
        setCategory('');
        setImage(null);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Product Description</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Image</label>
                    <input
                        type="file"
                        //onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Min Order</label>
                    <input
                        type="number"
                        value={minOrder}
                        onChange={(e) => setMinOrder(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Max Order</label>
                    <input
                        type="number"
                        value={maxOrder}
                        onChange={(e) => setMaxOrder(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <button type="button" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Add Category
                    </button>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
