import React from 'react';
import './Dealer.css'
import { AiFillCar } from 'react-icons/ai';
import { RiMessage2Fill } from 'react-icons/ri';
import { BsTruckFlatbed } from 'react-icons/bs';
import { AiOutlineWallet } from 'react-icons/ai';


const Dealer = () => {
    return (
        <div style={{ backgroundColor: 'darkcyan' }}>
            <div className="row w-100">
                <div className="col-12">
                    <div className="container pt-3 text-center">
                        <p className='text-light fs-4'>Welcome to our website</p>
                        <h1 style={{ color: 'darkblue', marginBottom: '10px' }}>CAR DEALER</h1>
                        <p className='text-light'>Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites. The Theme has been Created especially for automotive dealers, car resellers, car service stations, mechanic workshop and auto motor retailers.</p>
                    </div>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-12">
                    <div className="container">
                        <div className="dealer">
                            <div>
                                <h3><AiFillCar /></h3>
                                <p>ALL BRANDS</p>
                            </div>
                            <div>
                                <h3><RiMessage2Fill /></h3>
                                <p>FREE SUPPORT</p>
                            </div>
                            <div>
                                <h3><BsTruckFlatbed /></h3>
                                <p>DEALERSHIP</p>
                            </div>
                            <div>
                                <h3><AiOutlineWallet /></h3>
                                <p>AFFORDABLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dealer;