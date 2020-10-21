import React from 'react';
import { number } from 'prop-types';

const RideData = ({ rideData }) => {

    const getDate = () => {
        const d = new Date();
        const month = d.getMonth() + 1;
        return `${month}`;
    }
    const ridesThisMonth = () => {
        let counter = 0;
        const thisMonth = getDate();
        [...rideData].forEach(obj => {
            let objMonth = '';
            obj['date'].substring(1) === '/'
                ? objMonth = obj['date'].substring(0)
                : objMonth = obj['date'].substring(0, 1)
            if (objMonth === thisMonth) counter++
        })
        return counter
    }
    const averageRideLength = () => {
        return rideData.reduce((acc, curr) => acc + curr.rideLength, 0)
    }

    return (
        <div id='datalist-data'>
            <h6>Rides this month: {ridesThisMonth()}</h6>
            <h6>Average ride length: {averageRideLength()}</h6>
        </div>
    );
}

RideData.propTypes = {
    monthlyRides: number,
    averageRideLength: number
};

export default RideData;