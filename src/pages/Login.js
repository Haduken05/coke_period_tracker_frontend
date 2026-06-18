import React, { useState } from 'react';
import './style/LoginStyle.css';

import {Link} from 'react-router-dom';

const Login = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    return(

        <div className="app-container">
            <div className={`login-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                
                <div className="login-left">

                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="sphere sphere-3"></div>

                    <h1>{isSignUp ? "Create Account" : "Welcome"}</h1>
                    <h2>{isSignUp ? "Join us today!" : "Please sign in to continue"}</h2>

                </div>

                <div className="login-right"> 

                    <div className="login-form-header">
                        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
                    </div>

                    <form className="login-form">

                        {isSignUp && (
                            <div className="login-form-input-wrapper">
                                <input type="text" className="login-form-input" placeholder="Name"/>

                                <svg 
                                    className="login-icon"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round"
                                    >
                                    <circle cx="12" cy="7" r="4"></circle>
                                    
                                    <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"></path>
                                    </svg>


                            </div>
                        )}

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

                        {!isSignUp && (
                            <div className="login-form-options">
                                <label className="remember-me">
                                    <input type="checkbox"/>
                                        Remember Me       
                                </label>
                                <Link to="/dashboard" className="forgot-password"> Forgot Password? </Link>
                            </div>
                        )}

                        <div className="login-actions-container">
                            <button type="submit" className="login-btn-primary">
                                {isSignUp ? 'Create Account' : 'Sign In'}
                            </button>

                            {!isSignUp && (
                                <>
                                    <div className="login-divider">Or</div>
                                    <button type="button" className="login-btn-secondary">Continue with Google</button>
                                </>
                            )}
                        </div>

                    </form>

                    <div className="login-form-footer">
                        {isSignUp ? (
                            <p> Already have an account? 
                                <span className="login-toggle-link" onClick={() => setIsSignUp(false)}> Sign In</span> 
                            </p>
                        ) : (
                            <p> Don't have an account?
                                <span className="login-toggle-link" onClick={() => setIsSignUp(true)}> Create Account</span>
                            </p>
                        )}
                    </div>
                
                </div>

            </div>
        </div>
        
    );
}

export default Login;