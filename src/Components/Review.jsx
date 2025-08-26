// Review.jsx
import React from "react";

const Review = () => {
  // Dummy uploaded docs data
  const uploadedDocs = [
    { id: 1, name: "Aadhar Card", status: "Pending", feedback: "" },
    { id: 2, name: "PAN Card", status: "Verified", feedback: "" },
    { id: 3, name: "Driving License", status: "Rejected", feedback: "Fraud detected" },
  ];

  // Status color mapping
  const statusColors = {
    Pending: "orange",
    Verified: "green",
    Rejected: "red",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Document Review & Status</h2>
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th style={cellStyle}>Document Name</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {uploadedDocs.map((doc) => (
            <tr key={doc.id}>
              <td style={cellStyle}>{doc.name}</td>
              <td style={{ ...cellStyle, color: statusColors[doc.status] }}>{doc.status}</td>
              <td style={cellStyle}>{doc.feedback || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Table cell style
const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

export default Review;
