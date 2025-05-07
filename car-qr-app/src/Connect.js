import React from "react";

const phoneNumber = "+918239053872"; // Replace with your number

const Connect = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contact Me</h2>
      <a href={`tel:${phoneNumber}`}>
        <button style={{ padding: "10px 20px", margin: "10px" }}>📞 Call Now</button>
      </a>
      <a
        href={`https://wa.me/${phoneNumber.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{ padding: "10px 20px", margin: "10px" }}>💬 WhatsApp Me</button>
      </a>
    </div>
  );
};

export default Connect;
