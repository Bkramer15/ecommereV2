import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: ''
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: ''
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
      fullName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: ''
    };

    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    }

    if (!formData.address) {
      errors.address = 'Address is required';
      valid = false;
    }

    if (!formData.city) {
      errors.city = 'City is required';
      valid = false;
    }

    if (!formData.country) {
      errors.country = 'Country is required';
      valid = false;
    }

    if (!formData.state) {
      errors.state = 'State is required';
      valid = false;
    }

    if (!formData.zipcode) {
      errors.zipcode = 'Zipcode is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Submitting...', formData);
      setFormData({
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zipcode: ''
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="container flex-grow max-w-screen-lg mx-auto p-6">
        <div className="bg-white rounded shadow-lg p-4 md:p-8">
          <h2 className="font-semibold text-xl text-center text-gray-600">Sign Up</h2>
          <p className="text-gray-500 text-center mb-6">Sign up to get all the best Deals</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8">

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.fullName ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.email ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address / Street</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.address ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.address && <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.city ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.city && <p className="text-xs text-red-500 mt-1">{formErrors.city}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.country ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.country && <p className="text-xs text-red-500 mt-1">{formErrors.country}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.state ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.state && <p className="text-xs text-red-500 mt-1">{formErrors.state}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.zipcode ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.zipcode && <p className="text-xs text-red-500 mt-1">{formErrors.zipcode}</p>}
            </div>

            <div className="col-span-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="col-span-2 text-center">
              <p className="text-sm text-gray-600">
                Already a member?{' '}
                <Link to="/login" className="font-semibold text-blue-500 hover:text-blue-800">
                  Sign In
                </Link>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Register;
