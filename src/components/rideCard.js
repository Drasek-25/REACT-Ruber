import React from 'react';
import { array, number, func } from 'prop-types';
import historyIcon from '../images/History.png';

const RideCard = ({ rideObj, toggleEditMode, deleteRide, handleEditRideData }) => {

    return (
        <div className='container datalist-containe'>
            <div className='row'>
                <div className='col-md-4 datalist-content'>{`${rideObj.firstName} ${rideObj.lastName}`}</div>
                <div className='col-md-4 datalist-content'>{rideObj.pickupLocation}</div>
                <div className='col-md-4 datalist-content'>
                    <button
                        className='btn btn-danger btn-sm delete-button pull-right'
                        onClick={() => deleteRide(rideObj)}
                    > x </button>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 datalist-content'>{rideObj.date}</div>
                <div className='col-md-4 datalist-content'>{rideObj.dropoffLocation}</div>
                <div className='col-md-4 datalist-content'>
                    <button
                        className='btn btn-info btn-sm update-button pull-right'
                        onClick={() => (handleEditRideData(rideObj), toggleEditMode())}
                    >&#x21bb;</button>
                </div>
            </div>
        </div>
    );


};


export default RideCard;