import React from 'react'
import Api from '../Api'
import './Login.css'

const Login = ({onReceieve}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceieve(result.user)
        } else {
            alert("erro!")
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
        </div>
    )
}

export default Login
