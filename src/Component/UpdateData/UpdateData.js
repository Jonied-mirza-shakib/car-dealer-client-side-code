import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateData.css'

const UpdateData = () => {
    const { updateId } = useParams();
    const [update, setUpdate] = useState({});
    useEffect(() => {
        const url = `https://infinite-everglades-72393.herokuapp.com/data/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data));
    }, []);
    const handleUpdate = event => {
        event.preventDefault();
        let name = event.target.name.value;
        let img = event.target.img.value;
        let description = event.target.description.value;
        let price = event.target.price.value;
        let quantity = event.target.quantity.value;
        const allData = { name, img, description, price, quantity };
        console.log(allData)
        const url = `http://localhost:5000/data/${updateId}`;
        console.log(url)
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(allData),
        })
            .then((res) => res.json())
            .then((data) =>
                console.log(data)
            );
        event.target.reset();
    }
    return (
        <div className="row w-100" style={{ backgroundColor: 'dimgray' }}>
            <div className="container pt-5 pb-5">
                <div className="col-12">
                    <h1 className='text-center text-light'>Please Update car Information</h1>
                </div>
                <div className="col-12">
                    <div className='w-50 mx-auto form'>
                        <form onSubmit={handleUpdate} className='d-flex flex-column'>
                            <input className='p-2 rounded' type="text" name="name" placeholder='Name' />
                            <input className='p-2 rounded' type="text" name="img" placeholder='Photo Url' />
                            <textarea className='p-2 rounded' name="description" placeholder='Description'></textarea>
                            <input className='p-2 rounded' type="text" name="price" placeholder='Price' />
                            <input className='p-2 rounded' type="text" name="quantity" placeholder='quantity' />
                            <input type="submit" className='btn btn-warning fs-5' value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;