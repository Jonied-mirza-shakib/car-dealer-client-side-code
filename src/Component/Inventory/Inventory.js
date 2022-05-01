import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { carsId } = useParams();
    const [car, setCar] = useState();
    const [decrease, setDecrease] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/data/${carsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [carsId])


    const navigateDetail = id => {
        navigate(`/update/${id}`);
    }

    return (
        <div className='inventory' style={{ backgroundColor: 'dimgray' }}>
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 mx-auto">
                    <div className="card w-50 h-100 mx-auto">
                        <div className="card-body">
                            <img className='w-100' src={car?.img} alt="" />
                            <h3>{car?.name}</h3>
                            <p>{car?.description}</p>
                            <div className='d-flex justify-content-between'>
                                <h6>price: {car?.price}</h6>
                                <h6>quantity: {car?.quantity}</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button onClick={() => navigateDetail(car._id)} className='btn btn-warning'>Update</button>
                                <button className='btn btn-primary'>Deliverd</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;