import React from "react";
import "./login.css";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <body>
            <div id="login">
                <div id="header">Log In</div>
                <form id="loginform">
                    <div id="usernameSection">
                        <label for="username" id="usernameLabel">Username: </label>
                        <input type="text" id="username" placeholder="Enter Username" required autocomplete="username"></input>
                    </div>
                    <div id="passwordSection">
                        <label for="password" id="passwordLabel">Password: </label>
                        <input type="text" id="password" placeholder="Enter Password" required></input>
                    </div>
                    <input id="signinButton" type="submit" value="Sign In"></input>
                </form>

                <a href="signup.html">
                    <button id="signupButton">New User? Sign Up!</button>
                </a>
            </div>
        </body>

    );
}


export default Login;