import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UploadDocuments.css';

const mockAadhaarDB = {
  '123412341234': {
    name: 'Rahul Sharma',
    dob: '1992-07-15',
    gender: 'Male',
    address: '123, MG Road, Delhi',
  },
  '987654321098': {
    name: 'Anjali Verma',
    dob: '1988-03-09',
    gender: 'Female',
    address: '456, Park Street, Mumbai',
  },
};

const UploadDocuments = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [verified, setVerified] = useState(false);
  const [userData, setUserData] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const sendOtp = () => {
    if (aadhaar.length !== 12 || !/^\d+$/.test(aadhaar)) {
      setError('Enter a valid 12-digit Aadhaar number');
      return;
    }
    setError('');
    setOtpSent(true);
    alert('Simulated OTP sent: 123456');
  };

  const verifyOtp = () => {
    if (otpInput === '123456') {
      const data = mockAadhaarDB[aadhaar];
      if (data) {
        setUserData(data);
        setVerified(true);
        setAddress(data.address); // autofill address
        setError('');
      } else {
        setError('Aadhaar not found in records');
      }
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-title">Upload Documents (with KYC)</div>

      {/* Aadhaar KYC Section */}
      <div className="input-group">
        <label>Aadhaar Number</label>
        <input
          type="text"
          placeholder="Enter Aadhaar Number"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          className="input-field"
          required
        />
        <button type="button" onClick={sendOtp} className="btn">
          Send OTP
        </button>
      </div>

      {otpSent && !verified && (
        <div className="input-group">
          <label>OTP</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            className="input-field"
          />
          <button type="button" onClick={verifyOtp} className="btn">
            Verify OTP
          </button>
        </div>
      )}

      {verified && userData && (
        <div className="kyc-details">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>DOB:</strong> {userData.dob}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
        </div>
      )}

      {/* Upload Form Section */}
      <div className="input-group">
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
          required
        />
      </div>
      <div className="input-group">
        <label>Phone No.</label>
        <input
          type="number"
          placeholder="Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-field"
          required
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <Link to="/dashboard" className="btn secondary">Back</Link>
        <Link to="/esign" className="btn primary">Submit</Link>
      </div>
    </div>
  );
};

export default UploadDocuments;
