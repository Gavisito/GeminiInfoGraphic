import React from 'react';


const CompanyForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="companyName">What is the name of your company?</label>
      <input type="text" id="companyName" name="companyName" required />
      <label htmlFor="companyDescription">What does your company do?</label>
      <textarea id="companyDescription" name="companyDescription" required />
      <label htmlFor="companyCompetitors">Why are you better than your competitors?</label>
      <textarea id="companyCompetitors" name="companyCompetitors" required />
      <label htmlFor="companyAdditionalInfo">Is there anything else you would like to include?</label>
      <textarea id="companyAdditionalInfo" name="companyAdditionalInfo" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
