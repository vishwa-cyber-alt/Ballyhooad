import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    dob: '',
    country: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      const phoneNumber = formData.number.replace(/\D/g, ''); 
      if (phoneNumber.length !== 10) {
        alert("Please enter a valid Phone Number.");
        return;
      }
    }
    if (isLogin) {
      alert("Login successful!");
    } else {
      alert("Sign up successful!");
    }

    setFormData({
      name: '',
      email: '',
      number: '',
      dob: '',
      country: '',
      password: ''
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      number: '',
      dob: '',
      country: '',
      password: ''
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      number: '',
      dob: '',
      country: '',
      password: ''
    });
  };

  return (
    <div className={`container ${!isLogin ? 'signup-container' : ''}`}>
  <h2>{isLogin ? 'Login' : 'Sign Up'} Form</h2>
  {isLogin ? (
    <LoginForm 
      formData={formData} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
    />
  ) : (
    <SignUpForm 
  formData={formData} 
  handleChange={handleChange} 
  handleSubmit={handleSubmit} 
  handleReset={handleReset}
/>

  )}
  <p>
    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
    <button onClick={toggleForm}>
      {isLogin ? 'Sign Up' : 'Login'}
    </button>
  </p>
</div>

  );
}

export default App;
