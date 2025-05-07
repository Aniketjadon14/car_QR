import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QR = () => {
  const contactUrl = "http://192.168.1.12:3000/Connect"; // Replace with your deployed URL

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Scan to Contact Me</h2>
        <QRCodeCanvas value={contactUrl} size={256} />
        <p className="mt-4 text-gray-600">Call or WhatsApp after scanning</p>
      </div>
    </div>
  );
};

export default QR;
