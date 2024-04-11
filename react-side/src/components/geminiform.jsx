import React, { useState } from 'react';
import CompanyForm from './companyform';
import ProductForm from './productform';


const GeminiForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setFormData(null); // Reset form data when dropdown value changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
        <p className='dd-title'>What is This Infographic About?</p>
        <select value={selectedOption} onChange={handleSelectChange} className="dropdown">
            <option value="">Select an option</option>
            <option value="company">Company</option>
            <option value="product">Product</option>
        </select>

      {selectedOption === 'company' && (
        <CompanyForm onSubmit={(data) => setFormData(data)} />
      )}
      {selectedOption === 'product' && (
        <ProductForm onSubmit={(data) => setFormData(data)} />
      )}
    </div>
  );
};

export default GeminiForm;
