import React, { useState } from 'react';
import signupImage from '/GNU/Newhospital/signup-frontend/src/assets/images/doc.jpg';
import '/GNU/Newhospital/signup-frontend/src/assets/styles/Signup.css';

const SignUpForm = () => {
  const [, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the signup data to your backend API
    // ...

  };

  return (
    <div className="form-container">
      <img src={signupImage} alt="Signup" className="image" />
      <form className="form" onSubmit={handleSubmit} method='post'>
      <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="First Name" className="input" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" className="input" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" className="input" onChange={handleInputChange} />
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
