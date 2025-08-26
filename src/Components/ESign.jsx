import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ESign = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [signed, setSigned] = useState(false);
  const [error, setError] = useState('');

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`Simulated OTP sent: ${otp}`);
  };

  const verifyOtp = () => {
    if (otpInput === generatedOtp) {
      setSigned(true);
      setError('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>e-Sign Document</h2>

      {/* Document Preview */}
      <div style={styles.previewBox}>
        <h4>Document Preview</h4>
        <p>This is a simulated document that the user will sign.</p>
        <p><strong>Applicant:</strong> Rahul Sharma</p>
        <p><strong>Purpose:</strong> Identity Verification & Consent</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>

        {signed && (
          <div style={styles.signature}>
            <p>🖋️ Signed digitally by Aadhaar eSign</p>
          </div>
        )}
      </div>

      {/* OTP Section */}
      {!signed && (
        <>
          {!otpSent ? (
            <button onClick={sendOtp} style={styles.button}>Send OTP</button>
          ) : (
            <div style={{ marginTop: '1rem' }}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                style={styles.input}
              />
              <button onClick={verifyOtp} style={styles.button}>Verify & Sign</button>
            </div>
          )}
          {error && <p style={styles.error}>{error}</p>}
        </>
      )}

      {/* Navigation */}
      <div style={styles.navButtons}>
        <Link to="/review" style={styles.link}>⬅ Back to Review</Link>
        {signed && <Link to="/dashboard" style={styles.link}>✅ Go to Dashboard</Link>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  previewBox: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '1rem',
    backgroundColor: '#fff',
  },
  signature: {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: '#e6ffe6',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '5px',
    color: 'green',
  },
  input: {
    padding: '0.5rem',
    width: '100%',
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    width: '100%',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  navButtons: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: '0.5rem',
  },
};

export default ESign;
