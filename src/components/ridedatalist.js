import React from 'react';
import RideData from './ridedata';
import { array, number, func } from 'prop-types';
import historyIcon from '../images/History.png';

const RideDataList = () => {

    return (
        <div>
            <div id='datalist-title-content'>
                <img id='datalist-img' src={historyIcon} alt='History Icon' />
                <h1 id='datalist-title'>Past Rides</h1>
            </div>
            <div id='datalist-content'>

                {/* don't hardcode the ride data here. instead, map through
                the pastRideData prop. */}

                <div className='container datalist-containe'>
                    <div className='row'>
                        <div className='col-md-4 datalist-content'>Joe Uber</div>
                        <div className='col-md-4 datalist-content'>Here</div>
                        {/* attach the event handler passed in as a prop */}
                        <div className='col-md-4 datalist-content'><button
                            className='btn btn-danger btn-sm delete-button pull-right'> x </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 datalist-content'>8/31/2019</div>
                        <div className='col-md-4 datalist-content'>There</div>
                        {/* attach the event handler passed in as a prop */}
                        <div className='col-md-4 datalist-content'><button
                            className='btn btn-info btn-sm update-button pull-right'>&#x21bb;</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Pass monthlyRides and averageRideLength as props
            to RideData */}

            <RideData />
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