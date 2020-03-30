import React from 'react';
import { func } from 'prop-types';
import carIcon from '../images/car-icon.png';

const BookRideForm = () => {

    // 1. Create and initialize state variable for form data.
    // 2. Implement two-way binding on form inputs.
    // 3. Implement an onSubmit function for the form to call
    //    addRide function passed in as a prop. Then clear
    //    the form.


    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={carIcon} alt='Car Icon' />
                <h1 id='form-title'>Book Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content'>
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input placeholder="Enter your First Name" type='text' className='form-control input-form' name='firstName' id='first-name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input placeholder="Enter your Last Name" type='text' className='form-control input-form' name='lastName' id='last-name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input placeholder="Enter your Pickup Location" type='text' className='form-control input-form' name='pickup' id='pick-up' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input placeholder="Enter your Drop Off Location" type='text' className='form-control input-form' name='dropoff' id='drop-off' required />
                    </div>
                    <button type='submit' className='btn btn-primary submit-button'>Submit</button>
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