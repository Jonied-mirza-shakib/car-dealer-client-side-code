import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineWhatsApp, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'darkblue', padding: '30px' }}>
            <div className="row w-100">
                <div className="col-12">
                    <p style={{ fontSize: '20px' }} className='text-center text-light'>©Copyright 2022 Car Dealer</p>
                    <div className='icon mx-auto text-center'>
                        <a href='#'><BsFacebook /></a>
                        <a href='#'><AiOutlineWhatsApp /></a>
                        <a href='#'><AiOutlineInstagram /></a>
                        <a href='#'><AiFillLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;