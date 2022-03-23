import React, { useState } from 'react'

const Form = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validate, setValidate] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        if (validate != true){
            return
        }
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const nameMessage = () => {
        if (username.length < 1) {
            return (<p></p>)
        }
        if (username.length < 2) {
            setValidate(false)
            return (
                <p>Username too short</p>
            )
        }
        setValidate(true)
    }

    const emailMessage = () => {
        if (email.length < 1) {
            return (<p></p>)
        }
        if (email.length < 5) {
            return (
                <p>Email too short</p>
            )
        }
    }

    const passwordMessage = () => {
        if (password.length < 1){
            return(<p></p>)
        }
        else if (password != confirmPassword) {
            return (<p>Passwords must match</p>)
        }
        else if (password.length < 8){
            return(<p>Passwords must be longer than 8</p>)
        }
        else {
            return (
                <p></p>
            )
        }
    }


    return (
        <div>
            <form onSubmit={createUser}>
                {/* <h3>{nameMessage()}</h3> */}
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value), () => nameMessage()} value={username} />
                </div>
                <h3>{emailMessage()}</h3>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <h3>{passwordMessage()}</h3>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <input type="submit" value="Submit" />
            </form>

            <div>
                <p>Username: {username}</p>
                <p>email: {email}</p>
                <p>password: {password}</p>
            </div>




        </div>
    );
};

export default Form