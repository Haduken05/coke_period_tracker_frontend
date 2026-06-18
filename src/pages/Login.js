import React, { useState } from 'react';
import './style/LoginStyle.css';

import {Link} from 'react-router-dom';

const Login = () => {

    const [isVisible, setIsVisible] = useState(false);

    return(

        <div className="app-container">
            <div className="login-container">
                
                <div className="login-left">

                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="sphere sphere-3"></div>

                    <h1>Welcome</h1>
                    <h2>Please sign in to continue</h2>

                </div>

                <div className="login-right">

                    <div className="login-form-header">
                        <h2>Sign In</h2>
                    </div>

                    <form className="login-form">

                        {/* Username Input Field */}
                        <div className="login-form-input-wrapper">
                            <input 
                                type="text"
                                className="login-form-input"
                                placeholder="Email"
                            />
                            <svg 
                                className="login-icon"
                                width="22" 
                                height="22" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            >
                                <rect 
                                    x="2" 
                                    y="4" 
                                    width="20" 
                                    height="16" 
                                    rx="2"
                                ></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>

                            </svg>
                        </div>

                        {/* Password Input Field */}
                        <div className="login-form-input-wrapper"> 
                            <input 
                                type={isVisible ? "text" : "password"}
                                className="login-form-input"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                onClick={() => setIsVisible(!isVisible)}
                                className="login-icon"
                                aria-label={isVisible ? "Hide password" : "Show password"}
                            >
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    {isVisible ? (
                                        <>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </>
                                    ) : (
                                            <>
                                                <path d="M2 10a13.74 13.74 0 0 0 20 0"></path>

                                                <path d="M4 12 2.5 14"></path>
                                                <path d="M9 14v3"></path>
                                                <path d="M15 14v3"></path>
                                                <path d="M20 12 21.5 14"></path>
                                            </>
                                    )}
                                </svg>
                            </button>
                        </div> 

                        <div className="login-form-options">
                            <label className="remember-me">
                                <input type="checkbox"/>
                                    Remember Me       
                            </label>
                            <Link to="/dashboard" className="forgot-password"> Forgot Password? </Link>
                        </div>

                        <div className="login-actions-contaienr">
                            <button type="submit" className="login-btn-primary">Sign In</button>
                            <div className="login-divider">Or</div>
                            <button type="button" className="login-btn-secondary">Continue with Google</button>
                        </div>

                    </form>

                    <p className="login-form-footer">
                        Don't have an account?
                    </p>
                
                </div>

            </div>
        </div>
        
    );
}

export default Login;