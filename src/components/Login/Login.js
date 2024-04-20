import './Login.css';
import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import croplogo from "../assets/croplogo.png";
import axios from 'axios';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const history = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/login", {
                email, password
            })
                .then(res => {
                    if (res.data.message == "exist") {
                        history("/home")
                    }
                    else if(res.data.message =="notexist"){
                       alert("User have not sign up")
                    }

                })
                .catch(e => {
                    alert("User have not sign up")
                    console.log(e);
                })
        }

        catch (e) {
            console.log(e);
        }
    }

    return (
        <body className="Loginpage">

            <div className="logo">
                <img src={croplogo} alt="healthhero" className='reslogo'></img>

            </div>
            <div className="x">
                <a href='home' className='resx'><HiMiniXMark /></a>

            </div>
            <div className="wrapper">



                <h1>Login</h1>


                <div className="login-signup">
                    <p4>No accout?</p4>
                    <Link to="/signup"> Sign up </Link>
        
                </div>

                <h4 className="headingemail">Email</h4>
                <form action="POST">
                    <div className="input-box">
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
       
                </form>

                <h4 className="headingpass">Password</h4>

                <form action="POST">
                    <div className="input-box">
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                        <IoEyeOffOutline className='eyeicon-login' />
                    </div>

                </form>
               

                <div className="remember-forget">
                    <label><input type="checkbox" ></input>Remerber me</label>
                    <a href="Forget" > Forget password?</a>
                </div>


                <div>

                    <button className="normallogin" type="submit" onClick={submit}>Login</button>

                </div>

                <div className='setor-login'>
                <div className="linelog"></div>
                <h5>OR</h5>
                <div className="linelog"></div>
                </div>
                <div className="facebook">
                    <button className="loginface" type="submit" onClick={submit}>Login with Facebook</button>
                    <FaFacebook className='facebookicon' />
                </div>

                <div className="google">
                    <button className="logingoogle" type="submit" onClick={submit}>Login with Google</button>
                    <FcGoogle className='googleicon' />
                </div>





            </div>
        </body>
    )



}