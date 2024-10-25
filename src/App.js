import logo from './logo.svg';
import './App.css';
import React from 'react';
import UploadExcel from './components/UploadExcel';
import VerifyCertificate from './components/VerifyCertificate';

function App() {
  return (
    <div className="App">
      <h1>Certificate Generator & Verifier</h1>
      <UploadExcel />
      <VerifyCertificate />
    </div>
  );
}

export default App;
