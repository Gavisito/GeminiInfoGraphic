import React from 'react';


const ProductForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="productName">What is the name of your product?</label>
      <input type="text" id="productName" name="productName" required />
      <label htmlFor="productDescription">What is your product?</label>
      <textarea id="productDescription" name="productDescription" required />
      <label htmlFor="productAdditionalInfo">Is there anything else you would like to include?</label>
      <textarea id="productAdditionalInfo" name="productAdditionalInfo" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
