import React from 'react';
import { number } from 'prop-types';

const RideData = () => {

    // Rides and average ride length should be passed in as props
    
    return (
        <div id='datalist-data'>
            <h6>Rides this month: 0</h6>
            <h6>Average ride length: 4.20 miles</h6>
        </div>
    );
}

RideData.propTypes = {
    monthlyRides: number,
    averageRideLength: number
};

export default RideData;