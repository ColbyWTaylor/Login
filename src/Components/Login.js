import React, { useState } from "react";

function Login() {
  const submit = () => {
    console.log("user name: " + username + ", password: " + password);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState(false);

  return (
    <div className="sectionOutline">
      {registeredUser && <h1>Login</h1>}
      {!registeredUser && <h1>Register</h1>}
      <p onClick={() => setRegisteredUser(!registeredUser)}>
        {registeredUser ? "Register instead" : "Login instead"}
      </p>
      <p>Name: {username}</p>
      <input onChange={(e) => setUsername(e.target.value)} />
      <p>UltraSecret Passphrase:</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Login;
