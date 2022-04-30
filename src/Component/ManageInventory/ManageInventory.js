import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useHooks from '../../Hooks/useHooks';
import './ManageInventory.css'

const ManageInventory = () => {
    const [car, setCar] = useHooks();
    const navigate = useNavigate();

    const navigateDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="mangeInventory pt-5">
            <div className='container'>
                <div className="row">
                    {
                        car.map(cars => <div key={car._id} className='col-lg-4'>
                            <div className="card text-center">
                                <div className="card-body">
                                    <img className='w-100' src={cars.img} alt="" />
                                    <h5>{cars.name}</h5>
                                    <p>{cars.description.slice(0, 150)}</p>
                                    <div className='cars'>
                                        <p>Price: {cars.price}</p>
                                        <p>Quantity: {cars.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <Link to='/addItem'>
                            <button type='button' className='btn btn-primary fs-4'>Add Item</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageInventory;