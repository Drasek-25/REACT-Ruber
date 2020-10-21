import React, { useState } from 'react';
import { func } from 'prop-types';
import carIcon from '../images/car-icon.png';

const BookRideForm = ({ submitNewRide, rideData }) => {
    const initialForm = {
        firstName: '',
        lastName: '',
        pickupLocation: '',
        dropoffLocation: ''
    }
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const getDate = () => {
        const d = new Date();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const year = d.getFullYear();
        return `${month}/${day}/${year}`;
    }
    //preventDefault is being used as a crutch
    //this makes it so the entire page doesnt
    //refresh on submit, however it allows and 
    //empty form to be submitted.
    const handleSubmit = (e) => {
        e.preventDefault()
        submitNewRide(
            {
                ...form,
                id: rideData.length + 1,
                date: getDate(),
                rideLength: Math.floor(Math.random() * 50) + 3
            }
        );
        setForm(initialForm)
    }


    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={carIcon} alt='Car Icon' />
                <h1 id='form-title'>Book Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input
                            placeholder="Enter your First Name"
                            type='text'
                            className='form-control input-form'
                            name='firstName'
                            id='first-name'
                            value={form.firstName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input
                            placeholder="Enter your Last Name"
                            type='text'
                            className='form-control input-form'
                            name='lastName'
                            id='last-name'
                            value={form.lastName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input
                            placeholder="Enter your Pickup Location"
                            type='text'
                            className='form-control input-form'
                            name='pickupLocation'
                            id='pick-up'
                            value={form.pickupLocation}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input
                            placeholder="Enter your Drop Off Location"
                            type='text'
                            className='form-control input-form'
                            name='dropoffLocation'
                            id='drop-off'
                            value={form.dropoffLocation}
                            onChange={handleChange}
                            required />
                    </div>
                    <button
                        className='btn btn-primary submit-button'
                        onClick={(e) => handleSubmit(e)}
                    >Submit</button>
                </form>
            </div>
        </div>
    );
}

BookRideForm
    .propTypes = {
    addRide: func
};

export default BookRideForm;