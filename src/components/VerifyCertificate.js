import axios from 'axios';
import React, { useState } from 'react';

const VerifyCertificate = () => {
  const [id, setId] = useState("");
  const [isValid, setIsValid] = useState(null);

  const verifyCert = async () => {
    const res = await axios.get(`http://localhost:8000/verify/${id}`);
    setIsValid(res.data.valid);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} placeholder="Certificate ID" />
      <button onClick={verifyCert}>Verify</button>
      {isValid != null && <p>{isValid ? "Valid Certificate" : "Invalid Certificate"}</p>}
    </div>
  );
};

export default VerifyCertificate;
