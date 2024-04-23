import './Signup.css';
import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import croplogo from "../assets/croplogo.png";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const history = useNavigate();


    async function submit(e) {
        e.preventDefault();

    
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setValidEmail(isValidEmail);

       

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                email, password, confirmPassword
            })
                .then(res => {
                    if (res.data.message === "exist") {
                        alert("User already exists")

                    }
                    else if (res.data.message === "Created") {
                        history("/home")
                    }

                })
                .catch(e => {
                    alert("Signup failed. Please try again.")
                    console.log(e);
                })
        }

        catch (e) {
            console.log(e);
        }

    }

    return (
        <body className="Signuppage">

            <div className="logo">
                <img src={croplogo} alt="healthhero" className='reslogo'></img>

            </div>
            <div className="x">
                <a href='home' className='resx'><HiMiniXMark className='xmark' /></a>

            </div>
            <div className="wrapper">



                <h1>Sign up</h1>





                <div className="login-signup1">
                    <p4>Already account?</p4>
                    <Link to="/login" >Login</Link>
                </div>


                <form action="handleSubmit">

                    
                    <h4 className="headingemail">Email</h4>


                    <div className="input-box-sign">
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    {!validEmail && <p className="error-msg">Please enter a valid email address.</p>} 
                    <h4 className="headingpass">Password</h4>


                    <div className="input-box-sign">
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        <IoEyeOffOutline className='eyeicon' />
                    </div>



                    <div>


                        <h4 className="headingconfirm">Confirm Password</h4>
                        <div className="input-box-sign">
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <IoEyeOffOutline className='eyeicon' />
                        </div>

                    </div>
                </form>



                <div>

                    <button className="normalsignup" type="submit" onClick={submit}>Sign up for free</button>

                </div>
              
                <div className='setor-signup'>
                <div className="linesign"></div>
                <h5>OR</h5>
                <div className="linesign"></div>
                </div>

                <div className="facebook">
                    <button className="facesignup" type="submit" onClick={submit}>Continue with Facebook</button>
                    <FaFacebook className='facebookicon-sign' />
                </div>



                <div className="google">
                    <button className="googlesignup" type="submit" onClick={submit}>Continue with Google</button>
                    <FcGoogle className='googleicon-sign' />
                </div>



            </div>
        </body>
    )



}
