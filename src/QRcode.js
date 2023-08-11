import React from 'react'
import {QRCodeCanvas} from 'qrcode.react';
import "./App.css";

function QRcode() {
  return (
    <div>
       <header className="QRcode-header">
      <p>Scan My QR Code</p>
      <QRCodeCanvas value="https://wa.link/ka8uw1" size={300}/>,
    </header>
    </div>
  )
}

export default QRcode
