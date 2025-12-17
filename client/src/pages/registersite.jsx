import { useState } from "react";
import "../styles/registersite.css";

const RegisterSite = () => {
  // eslint-disable-next-line no-unused-vars
  const [register, setRegister] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          dob: dob,
          password: password,
        }),
      });
      if (!response.ok) {
        const backendError = await response.json();
        setErrorMessage(backendError.message);
        setSuccessMessage("");
        console.log(backendError);
        return;
      }
      const backendSuccess = await response.json();
      setSuccessMessage(backendSuccess.message);
      setErrorMessage("");
      console.log(backendSuccess);
    } catch (error) {
      console.error(error.message);
      console.log("SENDES TIL BACKEND:", { username: name, dob, password });
    }
  };

  return (
    <div className="register-container">
      <input
        value={name} //force the input's value to match the state variable
        onChange={(e) => setName(e.target.value)} // and update the state variable on any edits
        id="name"
        placeholder="Name"
        type="text"
      />

      <input id="email" placeholder="Email" type="text" />

      <input
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        id="dob"
        placeholder="Birthday"
        type="date"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        placeholder="Password"
        type="text"
      />

      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        id="confirmPassword"
        placeholder="Confirm Password"
        type="text"
      />

      <button onClick={() => registerUser()}>Register</button>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default RegisterSite;
