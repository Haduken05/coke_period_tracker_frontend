import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginService = () => {
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        verificationCode: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let interval = null;

        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, timer]);


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(String(email).toLowerCase());
    };

    // API Call
    const API_BASE_URL = 'http://localhost:8080/api';

    const handleRequestCode = async (e) => {
        if (e) e.preventDefault();
        setError('');
        setMessage('');

        if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
            setError('Please fill in all fields to create an account.');
            return;
        }

        if (!formData.email) {
            setError('Please enter your email to receive the verification code.');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${API_BASE_URL}/auth/send-code`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Verification code sent to your email. Please check your inbox.");
                setIsVerifying(true);

                setTimer(60);
                setIsTimerActive(true);

            } else {
                setError(data.error || 'Failed to send verification code. Please try again.');
            }
        } catch (err) {
            setError('An error occurred while sending the verification code. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!formData.verificationCode.trim()) {
            setError('Please enter the verification code sent to your email.');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    code: formData.verificationCode
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Account created successfully! Switching to login...");
                setTimeout(() => {
                    setIsSignUp(false);
                    setIsVerifying(false);
                }, 2000);
            } else {
                setError(data.error || 'Registration failed. Please check your details and try again.');
            }
        } catch (err) {
            setError('An error occurred during registration. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!formData.email.trim() || !formData.password.trim()) {
            setError('Please enter your email and password.');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                if (response.status === 401 && data.error && data.error.includes("registration setup")) {
                    setError('Your account setup is incomplete. Redirecting you to verifying your email...');
                    setTimeout(() => {
                        setError('');
                        setIsSignUp(true);
                        setIsVerifying(true);
                        setMessage('Please enter the verification code sent to your email to complete your registration.');
                    }, 2000);

                    return;
                }

                setError(data.error || 'Login failed. Please check your credentials and try again.');
            }
        } catch (err) {
            setError('An error occurred during login. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isVisible, setIsVisible,
        isSignUp, setIsSignUp,
        isVerifying, setIsVerifying,
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
    }
}