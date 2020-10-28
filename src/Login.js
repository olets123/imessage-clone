import { Button } from '@material-ui/core'
import { auth, provider } from './Firebase'
import React from 'react'
import './Login.css'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error ) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://images.idgesg.net/images/article/2018/04/imessageicon-100756099-large.jpg" alt="login-logo" />
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
