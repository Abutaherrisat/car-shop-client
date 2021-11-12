import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        if (data.rating > 5 || data.rating < 0) {
            alert("Please give rating between 1 to 5")
        }

        else {
            axios.post('https://frozen-coast-33750.herokuapp.com/review', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Service has been added successfully')
                        reset()
                    }
                })
        }
    };
    return (
        <div className="add-services">
            <h2 className="text-center mt-2">Add Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="name" value={user.displayName} />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("rating")} placeholder="rating" />
                <input {...register("img")} placeholder="img url" value={user.photoURL} />
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default Review;