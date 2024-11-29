import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    productType: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/products', formData);
      onProductAdded(response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-poppins ">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="productType"
        placeholder="Product Type"
        value={formData.productType}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
