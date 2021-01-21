import React, {useState} from 'react'

function Login() {

    const submit = () => {console.log("user name: " + username + ", password: " + password)}
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (    <>
    <h2>Login</h2>
    <p>Name:</p><input onChange={e => setUsername(e.target.value)} />
    <p>current name: {username}</p>
    <p>UltraSecret Passphrase:</p><input type="password" onChange={e => setPassword(e.target.value)}/>
    <br />
    <button onClick={submit}>Login, bucko</button>
    <h3>Register Instead?</h3>
    </>)
}

export default Login;