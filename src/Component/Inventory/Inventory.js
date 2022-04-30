import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { carsId } = useParams();
    const [car, setCar] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/data/${carsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <div className='inventory' style={{ backgroundColor: 'dimgray' }}>
            <div className="container pt-5 pb-5">
                <div className="col-lg-6">
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <img className='w-100' src={car?.img} alt="" />
                            <h3>{car?.name}</h3>
                            <p>{car?.description}</p>
                            <div className='d-flex justify-content-between'>
                                <h6>price: {car?.price}</h6>
                                <h6>quantity: {car?.quantity}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">

                </div>
            </div>

        </div>
    );
};

export default Inventory;