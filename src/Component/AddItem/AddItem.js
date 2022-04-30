import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    };
    return (
        <div className='row'>
            <div className="col-12">
                <div className="container mx-auto pt-5">
                    <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='name' className='mb-3' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea placeholder='description' className='mb-3' {...register("description")} />
                        <input placeholder='price' className='mb-3' type="text" {...register("price")} />
                        <input placeholder='Photo Url' className='mb-3' type="text" {...register("img")} />
                        <input type="submit" value='Add Item' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;