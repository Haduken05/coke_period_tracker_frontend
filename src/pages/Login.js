import React from 'react';
import {Link} from 'react-router-dom';

import './style/LoginStyle.css';
import { useLoginService } from '../services/loginService';

const Login = () => {

    const {
        isVisible, setIsVisible,
        isSignUp, setIsSignUp,
        isVerifying, 
        isLoading,
        timer,
        isTimerActive,
        formData,
        message, setMessage,
        error, setError,
        handleInputChange,
        handleRequestCode,
        handleRegisterSubmit,
        handleSignInSubmit
    } = useLoginService();

    return(

        <div className="app-container">
            <div className={`login-container ${isSignUp ? 'sign-up-mode' : ''}`}>
                
                <div className="login-left">

                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="sphere sphere-3"></div>

                    <h1>{isSignUp ? (isVerifying ? "Verify Email" : "Create Account") : "Welcome"}</h1>
                    <h2>{isSignUp ? (isVerifying ? "Enter the 6-digit code" : "Join us today!") : "Please sign in to continue"}</h2>

                </div>

                <div className="login-right"> 

                    <div className="login-form-header">
                        <h2>{isSignUp ? (isVerifying ? 'Enter OTP' : 'Create Account') : 'Sign In'}</h2>
                    </div>

                    <div className={`message-container ${error ? 'error-message visible' : message ? 'success-message visible' : ''}`}>
                        {error || message}
                    </div>

                    <form 
                        className="login-form" 
                        key={isSignUp ? (isVerifying ? "otp-stage-form" : "signup-stage-form") : "signin-stage-form"}
                        onSubmit={isSignUp ? (isVerifying ? handleRegisterSubmit : handleRequestCode) : handleSignInSubmit}>

                        {/* Registration Only: Name Field */}
                        {isSignUp && !isVerifying &&(
                            <div className="login-form-input-wrapper">
                                <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="login-form-input" 
                                placeholder="Name"/>

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
                        {!isVerifying && (
                            <div className="login-form-input-wrapper">
                                <input 
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="login-form-input"
                                    placeholder="myEmail@gmail.com"
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
                        )}

                        {/* Password Input Field */}
                        {!isVerifying && (
                            <div className="login-form-input-wrapper"> 
                                <input 
                                    type={isVisible ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
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
                        )}                        
                        
                        {/* Verification Code Input Field */} 
                        {isSignUp && isVerifying && (
                            <div className="login-form-input-wrapper">
                                    <input
                                        type="text"
                                        name="verificationCode"
                                        className="login-form-input"
                                        placeholder="Enter Verification Code"
                                        value={formData.verificationCode}
                                        onChange={handleInputChange}
                                        maxLength="6"    
                                    />

                                    <svg 
                                        className="login-icon" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="22" 
                                        height="22" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round">
                                            
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                            </div>
                        )}                       

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

                            {isSignUp && isVerifying && isTimerActive && (
                                <div style={{ color: '#6c5ce7', marginBottom: '10px', fontSize: '0.9rem', textAlign: 'center'}}>
                                    Resend available in: <strong>{timer}s</strong>
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="login-btn-primary"
                                disabled={isLoading || (isSignUp && !isVerifying && isTimerActive)}
                            >
                                {isLoading ? (
                                    <span className="loading-spinner-text">Loading...</span>
                                ) : isSignUp ? (
                                    isVerifying ? 'Confirm Code & Register' : (isTimerActive ? `Wait ${timer}s` : 'Send Code')
                                ) : 'Sign In'}
                            </button>
                            
                            {isSignUp && isVerifying && !isTimerActive &&(
                                <span
                                    className="login-toggle-link"
                                    style={{ textAlign: 'center', display: 'block', marginTop: '10px', fontSize: '0.9rem'}}
                                    onClick={handleRequestCode}
                                >
                                    Didn't receive the code? Resend
                                </span>
                            )}


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
                                <span className="login-toggle-link" onClick={() => { setIsSignUp(false); setError(''); setMessage(''); }}> Sign In</span> 
                            </p>
                        ) : (
                            <p> Don't have an account?
                                <span className="login-toggle-link" onClick={() => { setIsSignUp(true); setError(''); setMessage(''); }}> Create Account</span>
                            </p>
                        )}
                    </div>
                
                </div>

            </div>
        </div>
        
    );
}

export default Login;