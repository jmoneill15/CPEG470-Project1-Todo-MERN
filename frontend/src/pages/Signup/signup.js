import React from "react";
import "./signup.css";
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <body>
            <div id="signup">
                <div id="header">Sign Up</div>
                <div id="form">
                    <form id="signupForm">
                        <div id="usernameSection">
                            <label id="username">Enter a Username:</label>
                            <input type="text" id="usernameInput" required></input>
                        </div>
                        <div id="password1Section">
                            <label id="password1">Create a Password:</label>
                            <input type="text" id="passwordInput1" required></input>
                        </div>
                        <div id="password2Section">
                            <label id="password2">Confirm Password:</label>
                            <input type="text" id="passwordInput2" required></input>
                        </div>
                        <input id="submitButton" type="submit" ></input>
                    </form>
                </div>
                <a href="index.html">
                    <button>Back to Login</button>
                </a>

            </div>
        </body>
    );
}


export default Signup;