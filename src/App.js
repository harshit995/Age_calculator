import React, { useState } from 'react';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };
  var mydivstyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    border: "2px solid blue",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center"
  }
  var mybuttonstyle = {
    backgroundColor: "red",
    borderRadius: "10%",
    color: "white",
    border: "0px",
    width: "120px",
    height: "40px"
  }
  var myinputstyle = {
    width: "350px",
    height: "30px"
  }
  return (
    <div style={mydivstyle} className="App">
      <h1>Age Calculator</h1><br />
      <h3>Enter your Birth Date</h3>
      <input style={myinputstyle} type="date" id="dob" value={dob} onChange={handleInputChange} /><br /><br />
      <button style={mybuttonstyle} onClick={calculateAge}>Calculate</button>
      {age && <h2>You are {age} years old</h2>}
    </div>
  );
}

export default App;


