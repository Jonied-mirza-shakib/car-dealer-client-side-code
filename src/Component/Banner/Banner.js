import React from 'react';
import img1 from '../../img/car1.png';
import img3 from '../../img/car3.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-6">
                        <img className='w-100' src={img1} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img className='w-100' src={img3} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-12 banner-title">
                            <h3 className='text-center'>welcome to the most stunning </h3>
                            <h1 className='text-center'>car dealer website</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;