import { Link, useNavigate } from 'react-router-dom';
import useHooks from '../../Hooks/useHooks';
import './PopularCar.css'

const PopularCar = () => {
    const [car, setCar] = useHooks();
    const navigate = useNavigate();

    const navigateDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='popular-car pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 popular-car-title">
                        <h2>Check out our recent cars</h2>
                        <h1>FEATURE CAR</h1>
                    </div>
                    <div className="row">
                        {
                            car.slice(0, 6).map(cars => <div key={cars._id} className='col-lg-4'>
                                <div className="card text-center">
                                    <div className="card-body">
                                        <img className='w-100' src={cars.img} alt="" />
                                        <h5>{cars.name}</h5>
                                        <p>{cars.description}</p>
                                        <div className='cars'>
                                            <p>Price: {cars.price}</p>
                                            <p>Quantity: {cars.quantity}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => navigateDetail(cars._id)} className='btn btn-warning'>Inventory</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <Link to='/manageInventory'>
                            <button style={{ fontSize: '20px' }} type='button' className='btn btn-primary'>Manage Inventory</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCar;