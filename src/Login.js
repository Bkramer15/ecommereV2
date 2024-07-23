import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    emailOrUsername: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      emailOrUsername: '',
      password: ''
    };

    // Validation logic (example: checking if fields are empty)
    if (!formData.emailOrUsername) {
      errors.emailOrUsername = 'Email or Username is required';
      valid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here (e.g., submit data to backend)
      console.log('Form is valid. Submitting...', formData);
      // Example: You can reset the form data after submission
      setFormData({
        emailOrUsername: '',
        password: ''
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-100 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`w-full transform border-b-2 bg-transparent text-lg duration-300 ${formErrors.emailOrUsername ? 'border-red-500' : 'focus-within:border-indigo-500'}`}>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Email or Username"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            />
          </div>
          {formErrors.emailOrUsername && <p className="text-xs text-red-500 mt-1">{formErrors.emailOrUsername}</p>}

          <div className={`w-full transform border-b-2 bg-transparent text-lg duration-300 ${formErrors.password ? 'border-red-500' : 'focus-within:border-indigo-500'}`}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            />
          </div>
          {formErrors.password && <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>}

          <button type="submit" className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            Log In
          </button>
        </form>

        <div className="text-center">
          <p className="text-lg font-medium text-indigo-500 underline-offset-4 hover:underline">Forgot Password</p>
          <p className="text-sm text-gray-600">Need to register? <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-800">Sign Up</Link></p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
