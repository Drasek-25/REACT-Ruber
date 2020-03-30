import React, { useState } from 'react';
import './App.css';
import BookRideForm from './components/bookrideform';
import RideDataList from './components/ridedatalist';
import Header from './components/header';
import BookRideEditForm from './components/bookrideeditform';

const App = () => {

  // Other state variables that may be useful:
  // pastRideData
  // editRideData
  // editIndex
  // monthlyRides
  // averageRideLength

  // 1. Create and initialize state variables.
  // 2. Create four new methods to handle add ride, delete ride, edit
  //    ride and update ride.
  // 3. Pass appropriate props to child components. Each component has
  //    PropTypes indicating the props that it needs.
  const initialState = {
    isRideEditing: false,
  }

  const [state, setState] = useState(initialState);

  const rideHistoryPage = () => {
    return (
      <div className='row'>
        <div className='col-md-6'>
          {state.isRideEditing
            ? <BookRideEditForm />
            : <BookRideForm />
          }
        </div>
        <div className='col-md-6'>
          <RideDataList />
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <Header />
      {
        rideHistoryPage()
      }
    </div>
  );
}


export default App;
