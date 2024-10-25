import axios from 'axios';
import React, { useState } from 'react';

const UploadExcel = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:8000/upload", formData);
    alert("File uploaded!");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload Excel</button>
    </div>
  );
};

export default UploadExcel;
