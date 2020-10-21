import React from 'react';
import RideData from './ridedata';
import { array, number, func } from 'prop-types';
import historyIcon from '../images/History.png';
import RideCard from './rideCard'

const RideDataList = ({ rideData, toggleEditMode, deleteRide, handleEditRideData }) => {

    return (
        <div>
            <div id='datalist-title-content'>
                <img id='datalist-img' src={historyIcon} alt='History Icon' />
                <h1 id='datalist-title'>Past Rides</h1>
            </div>
            <div id='datalist-content'>
                {[...rideData].map(rideObj => (<RideCard
                    key={rideObj.id}
                    rideObj={rideObj}
                    toggleEditMode={toggleEditMode}
                    deleteRide={deleteRide}
                    handleEditRideData={handleEditRideData}
                />))}
            </div>
            <RideData rideData={rideData} />
        </div>
    );
};

RideDataList.propTypes = {
    pastRideData: array,
    onRideDeleteButton: func,
    onRideEditButton: func,
    monthlyRides: number,
    averageRideLength: number
};

export default RideDataList;