import React, { useState } from 'react';
import { func, object } from 'prop-types';
import editCarIcon from '../images/edit-ride.png';

const BookRideEditForm = ({ submitEditRide, toggleEditMode, rideData, editRideData }) => {

    const [form, setForm] = useState(editRideData)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        submitEditRide({ ...form });
    }


    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={editCarIcon} alt='Car Icon' />
                <h1 id='form-title'>Edit Ride</h1>
            </div>
            <div id='form-content' >
                <form id='form-inner-content' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='first-name'
                            name='firstName'
                            value={form.firstName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='last-name'
                            name='lastName'
                            value={form.lastName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input
                            type='text'
                            className='form-control'
                            id='pick-up'
                            name='pickupLocation'
                            value={form.pickupLocation}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input
                            type='text'
                            className='form-control'
                            id='drop-off'
                            name='dropoffLocation'
                            value={form.dropoffLocation}
                            onChange={handleChange}
                            required />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-warning submit-button'
                    >Update</button>
                </form>
            </div>
        </div>
    );
}

BookRideEditForm
    .propTypes = {
    updateRide: func,
    editRideData: object
};

export default BookRideEditForm;