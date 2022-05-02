import React from 'react';
import notFoundImg from '../../img/download.png'

const NotFound = () => {
    return (
        <div className='container' style={{ height: '400px' }}>
            <div className="row">
                <div className="col-12 mx-auto text-center">
                    <h1 className='pt-5'>Oops!!!</h1>
                    <img className='pt-2' src={notFoundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;