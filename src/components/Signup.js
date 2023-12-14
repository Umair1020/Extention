import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <div id="starter" style={{ display: "none;" }}>
                <div class="title">Get Started</div>
                <div class="title-sub">Create an account to continue</div>
                <button class="google-btn btn" >
                    <img src="./google.png" /> <span>Continue with Google</span>
                </button>
                <br />
                <button id="email-cont" class="email-btn btn">
                    <span>Continue with email</span>
                </button>
                <br />
                <Link to="/"> <div class="title-sub">Have an account? <span class="tologin">Log In</span></div> </Link>

            </div>
        </div>
    )
}

export default Signup