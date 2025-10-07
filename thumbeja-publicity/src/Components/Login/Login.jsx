import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        setIsLoading(true);
        setError('');
        // Simulate API call (replace with your fetch/axios)
        await new Promise(resolve => setTimeout(resolve, 2000)); // Mock delay
        console.log('Login successful:', credentials);
        setIsLoading(false);
        // Redirect after success
        navigate('/dashboard');
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
    };

    const buttonVariants = {
        hover: { scale: 1.02, boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)' },
        tap: { scale: 0.98 }
    };

    const handleEmailChange = (e) => {
        setCredentials({ ...credentials, email: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setCredentials({ ...credentials, password: e.target.value });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    background: 'white',
                    padding: '3rem 2.5rem',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Animated background subtle glow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        pointerEvents: 'none',
                    }}
                />

                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                        color: '#333',
                        fontSize: '2rem',
                        fontWeight: 600,
                    }}
                >
                    Welcome Back
                </motion.h1>

                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: [0, -5, 0], opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, x: { duration: 0.2 } }}
                            style={{
                                color: '#e74c3c',
                                textAlign: 'center',
                                marginBottom: '1rem',
                                fontSize: '0.9rem',
                            }}
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>

                <motion.form
                    onSubmit={handleSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: 500 }}>
                            Email
                        </label>
                        <motion.input
                            type="email"
                            id="email"
                            value={credentials.email}
                            onChange={handleEmailChange}
                            whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' }}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                border: '2px solid #e1e5e9',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                transition: 'all 0.2s ease',
                                outline: 'none',
                            }}
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: 500 }}>
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <motion.input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={credentials.password}
                                onChange={handlePasswordChange}
                                whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' }}
                                style={{
                                    width: '100%',
                                    padding: '1rem 3rem 1rem 1rem',
                                    border: '2px solid #e1e5e9',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s ease',
                                    outline: 'none',
                                }}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#aaa',
                                    fontSize: '1.2rem',
                                }}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%' }}
                                    />
                                    <span style={{ marginLeft: '0.5rem' }}>Signing In...</span>
                                </motion.div>
                            ) : (
                                <motion.span
                                    key="login"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Sign In
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '1.5rem',
                        fontSize: '0.9rem',
                        color: '#666',
                    }}
                >
                    Don't have an account?{' '}
                    <Link to="/signup" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>
                        Sign up here
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Login;