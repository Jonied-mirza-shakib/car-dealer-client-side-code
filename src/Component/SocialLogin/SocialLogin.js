import React from 'react';
import './SocialLogin.css'
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
    const [signInWithGoogle, user, googlError] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    if (user || user1) {
        navigate('/');
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='borders'>
                            <div className="firs-border w-100"></div>
                            <p className='or-section'>Or</p>
                            <div className="second-border w-100"></div>
                        </div>
                        <p style={{ color: 'red' }}>{googlError?.message}</p>
                        <p style={{ color: 'red' }}>{githubError?.message}</p>
                        <div className='d-flex justify-content-center'>
                            <button onClick={() => signInWithGoogle()} type='button' className='btn btn-primary w-75 d-flex justify-content-center align-items-center'>
                                <p style={{ fontSize: '25px', marginRight: '10px' }}><FcGoogle /></p>
                                <p style={{ fontSize: '15px' }}>Login</p>
                            </button>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button onClick={() => signInWithGithub()} type='button' className='btn btn-primary w-75 d-flex justify-content-center align-items-center'>
                                <p style={{ fontSize: '25px', marginRight: '10px' }}><BsGithub /></p>
                                <p style={{ fontSize: '15px' }}> Login</p>
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SocialLogin;