import React from 'react';

const countries = ['USA', 'Canada', 'UK', 'India', 'Australia'];

const SignUpForm = ({ formData, handleChange, handleSubmit, handleReset }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Full Name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="number" 
        placeholder="Phone Number" 
        value={formData.number} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="dob" 
        value={formData.dob} 
        onChange={handleChange} 
        required 
      />
      <select 
        name="country" 
        value={formData.country} 
        onChange={handleChange} 
        required
      >
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
    </form>
  );
};

export default SignUpForm;