import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://infinite-everglades-72393.herokuapp.com/data`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='row w-100 pb-5' style={{ backgroundColor: 'dimgray' }}>
            <div className="col-12">
                <div className="container">
                    <h2 className='text-center pt-5 pb-3 text-light'>Please Add Item</h2>
                </div>
            </div>
            <div className="col-12">
                <div className="container">
                    <form style={{ backgroundColor: 'darkcyan', padding: '20px' }} className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3 p-2 border-2 rounded' placeholder='Name' {...register("name")} />
                        <textarea className='mb-3 p-2 border-2 rounded' placeholder='Description' {...register("description")} />
                        <input className='mb-3 p-2 border-2 rounded' placeholder='Price' type="text" {...register("price")} />
                        <input className='mb-3 p-2 border-2 rounded' placeholder='quantity' type="text" {...register("quantity")} />
                        <input className='mb-3 p-2 border-2 rounded' placeholder='Photo Url' type="text" {...register("img")} />
                        <input className='btn btn-primary' type="submit" value='Add Item' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;