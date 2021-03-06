import React, { useEffect, useState } from 'react';
import './LogIn.css'
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const resetPassword = async () => {
        // const email = setEmail(event.target.value);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [navigate, user])


    const handleLoginform = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div style={{ backgroundColor: 'dimgray' }}>
            <div className="container">
                <div className="row">
                    <h4 className='fs-4 text-light text-center pt-5 pb-3'>Login Please !!!</h4>
                    <div className="col-12">
                        <div className='w-50 mx-auto' style={{ backgroundColor: 'aliceblue', padding: '30px', marginBottom: '50px', borderRadius: '10px' }}>
                            <Form onSubmit={handleLoginform}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                </Form.Group>
                                <input className='form-submit btn btn-primary' type="submit" value="Login" />
                            </Form>
                            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none text-warning' onClick={resetPassword}>Reset Password</button> </p>
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            {
                                loading && <p>Loading...</p>
                            }
                            <p> Are You New Person? <span> <Link className='text-warning' to='/signup' >Create an Account</Link></span> </p>
                            <ToastContainer />
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;