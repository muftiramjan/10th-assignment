import axios from "axios";
import React, { useState } from "react";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !address || !city || !state || !zip || !country || !phoneNumber) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setErrorMessage("");  // Reset the error message if form is valid

    console.log("Form submitted with:", {
      name,
      email,
      address,
      city,
      state,
      zip,
      country,
      phoneNumber,
    });

    axios.post('http://localhost:5000/createPayment', {
      amount: 100,
      currency: 'usdt',
    })
    .then((response) => {
      console.log(response);

      const redirectUrl = response.data.paymentUrl;
      if(redirectUrl){
        window.location.replace(redirectUrl)
      }
    })
    .catch((error) => {
      console.error("There was an error processing the payment:", error);
    });
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headlineStyle = {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const selectStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const errorMessageStyle = {
    color: "red",
    marginBottom: "15px",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* Payment Headline */}
      <h1 style={headlineStyle}>Complete Your Payment</h1>

      <h3>Payment Details</h3>

      {/* Name Input */}
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
          style={inputStyle}
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          required
          style={inputStyle}
        />
      </div>

      {/* Address Input */}
      <div>
        <label htmlFor="address" style={labelStyle}>Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="1234 Main St"
          required
          style={inputStyle}
        />
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city" style={labelStyle}>City</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={selectStyle}
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Phoenix">Phoenix</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="San Antonio">San Antonio</option>
          <option value="San Diego">San Diego</option>
          <option value="Dallas">Dallas</option>
          <option value="San Jose">San Jose</option>
        </select>
      </div>

      {/* State Dropdown */}
      <div>
        <label htmlFor="state" style={labelStyle}>State</label>
        <select
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          style={selectStyle}
        >
          <option value="">Select State</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="Florida">Florida</option>
          <option value="New York">New York</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Illinois">Illinois</option>
          <option value="Ohio">Ohio</option>
          <option value="Georgia">Georgia</option>
          <option value="North Carolina">North Carolina</option>
          <option value="Michigan">Michigan</option>
        </select>
      </div>

      {/* Zip Code Input */}
      <div>
        <label htmlFor="zip" style={labelStyle}>Zip Code</label>
        <input
          id="zip"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="10001"
          required
          style={inputStyle}
        />
      </div>

     {/* Country Dropdown */}
<div>
  <label htmlFor="country" style={labelStyle}>Country</label>
  <select
    id="country"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    required
    style={selectStyle}
  >
    <option value="">Select Country</option>
    <option value="United States">United States</option>
    <option value="Canada">Canada</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Australia">Australia</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
    <option value="Japan">Japan</option>
    <option value="India">India</option>
    <option value="China">China</option>
    <option value="Brazil">Brazil</option>
  </select>
</div>


      {/* Phone Number Input */}
      <div>
        <label htmlFor="phoneNumber" style={labelStyle}>Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="(555) 555-5555"
          required
          style={inputStyle}
        />
      </div>

      {/* Error Message */}
      {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}

      {/* Submit Button */}
      <button type="submit" style={buttonStyle}>Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
