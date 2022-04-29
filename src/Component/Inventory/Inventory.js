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
        <div className='inventory'>
            <div className="container">
                <h1>{car?.name}</h1>
            </div>

        </div>
    );
};

export default Inventory;