import React from "react";
import "./login.css"

const Login = (props) =>{

    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return(
        <section className = "login">
            <div className = "container">
                <div className = "accountBlock">
                    <h2 className= "signUpHeading">Account Login</h2>
                    <div className = "emailBox">
                        <label className= "emailHeading">Email</label>
                        <input className= "emailInput" name = "email" placeholder = "Email" type = "text" autoFocus required value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                        <p className = "errorMsg">{emailError}</p>
                    </div>
                    <div className = "passwordBox">
                        <label className = "passwordHeading">Password</label>
                        <input className= "passwordInput" placeholder = "Password" type = "password" required valu = {password} onChange = {(e) => setPassword(e.target.value)} />
                        <p className = "errorMsg">{passwordError}</p>
                    </div>
                    <div className = "buttonBox">
                        {hasAccount ? (
                            <>
                                <button className= "submitBtn" onClick = {handleLogin}>Log In</button>
                                <div className = "logInTextBox">
                                    <span className= "logInText">Don't have an account ? </span>
                                    <span className= "btn" onClick = {() => setHasAccount(!hasAccount)}>Sign up</span>
                                </div>
                                
                            </>
                        ) : (
                            <>
                                <button className= "submitBtn" onClick = {handleSignup}>Sign Up</button>
                                <span className= "logInText">Have an account ? </span>
                                <span  className= "btn"  onClick = {() => setHasAccount(!hasAccount)}>Log In</span>
                                
                            </>
                        )}
                    </div>
                 </div>   
                
            </div>
        </section>
    )
}

export default Login;