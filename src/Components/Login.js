import React, {useState} from 'react'

function Login() {

    const submit = () => {console.log("button clickedd")}
    const [username, setUsername] = useState("")


    return (    <>
    <h2>Login</h2>
    <p>Name:</p><input onChange={e => setUsername(e.target.value)} />
    <p>current name: {username}</p>
    <p>UltraSecret Passphrase:</p><input />
    <br />
    <button onClick={submit}>Login, bucko</button>
    <h3>Register Instead?</h3>
    </>)
}

export default Login;