import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [showLoader, setShowLoader] = useState(false); // For controlling loader visibility 
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowLoader(true); // Show loader on form submission

        setTimeout(() => {

            setShowLoader(false);
        }, 2000);
    };
    return (
        <>
            <div class="logui" id="app">
                <div class="timg"><img src="./badge2.png" style={{ display: "none;" }} /></div>
                {/* <div id="starter" style={{display: "none;"}}>
                    <div class="title">Get Started</div>
                    <div class="title-sub">Create an account to continue</div>
                    <button class="google-btn btn" >
                        <img src="./images/google.png" /> <span>Continue with Google</span>
                    </button>
                    <br />
                    <button id="email-cont" class="email-btn btn">
                        <span>Continue with email</span>
                    </button>
                    <br />
                    <div class="title-sub">Have an account? <span class="tologin">Log In</span></div>

                </div> */}



                <div id="email-login"  >
                    <div class="title2" style={{ textAlign: "center" }}>Login</div>

                    <br />
                    <div class="lb">Email Address</div>
                    <div class="input">
                        <img src="./mail-01.png" /> <input id="lemail" type="email" />
                    </div>
                    <br />
                    <div class="lb">Password</div>
                    <div class="input">
                        <img src="./lock-01.png" /> <input id="lpassword" type="password" />
                    </div>
                    <br />
                    <br />
                    <button id="login" class="email-btn btn">
                        <span>Login</span>
                    </button>
                    <br />
                    <button class="google-btn btn" >
                        <img src="./google.png" /> <span>Continue with Google</span>
                    </button>
                    <br />
                    <Link to="/signup">      <div class="title-sub">Dont have an account? <span class="toreg">Signup</span></div></Link>
                </div>



                {/* <div id="email-reg" style={{display: "none;"}} >
                    <div class="title2" style={{textAlign: "center"}}>Create your account</div>
                    <br />
                    <div class="lb">Email Address</div>
                    <div class="input">
                        <img src="./mail-01.png" /> <input id="remail" type="email" />
                    </div>
                    <br />
                    <div class="lb">Password</div>
                    <div class="input">
                        <img src="./lock-01.png" /> <input id="rpassword" type="password" />
                    </div>
                    <br />
                    <br />
                    <button id="register" class="email-btn btn">
                        <span>Continue</span>
                    </button>
                    <br />
                    <div class="title-sub">Have an account? <span class="tologin">Log In</span></div>
                </div> */}
                {/* <div class="loader hidden">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div> */}
            </div>
            {/* <div id="main2" class="logui extra" style={{display: "none;"}}>
                <div class="timg" style={{textAlign: "left !important"}}><img src="./images/badge2.png" style={{display: "none;"}} /></div>
                <div class="title2">
                    You are now logged in
                </div>
                <div class="sminfo">You can go back to the previous page to continue using the extension</div>
            </div> */}
            {/* <div id="main3" class="logui extra" style={{display: "none;"}}>
                <div class="timg" style={{textAlign: "left !important"}}><img src="./images/badge2.png" style={{display: "none;"}} /></div>
                <div class="title2">
                    Account Registered, Verify email & login
                </div>
                <div class="sminfo"><span class="tologin">Log In</span> to start using extension</div>
            </div>
            <div id="snackbar">...</div> */}
        </>
    )
}

export default Login