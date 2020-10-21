import React, { useState } from 'react';
import './App.css';
import BookRideForm from './components/bookrideform';
import RideDataList from './components/ridedatalist';
import Header from './components/header';
import BookRideEditForm from './components/bookrideeditform';

const App = () => {
  //add prop values on every component
  //preventDefault on form workaround to be resolved
  //bookRideForm does not show reset values after submit
  //rides this month ignores the year
  //avg ride lengths is all rides ever
  const initialRideData = [
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'Uber',
      date: '3/31/2019',
      pickupLocation: 'Here',
      dropoffLocation: 'There',
      rideLength: 4
    },
    {
      id: 2,
      firstName: 'Joe',
      lastName: 'Uber',
      date: '2/31/2019',
      pickupLocation: 'Here',
      dropoffLocation: 'There',
      rideLength: 3
    },

  ];
  const [rideData, setRideData] = useState(initialRideData)
  const [editMode, setEditMode] = useState(false)
  const [editRideData, setEditRideData] = useState(null)

  const submitNewRide = (obj) => {
    setRideData([...rideData, obj])
  }
  const submitEditRide = (obj) => {
    setRideData([...rideData].map(currObj => { return currObj.id === obj.id ? obj : currObj }))
    setEditRideData(null)
    toggleEditMode()
  }
  const toggleEditMode = () => {
    setEditMode(!editMode)
    editMode && setEditRideData(null)
  }
  const deleteRide = (obj) => {
    setRideData([...rideData].filter(currObj => currObj.id !== obj.id))
  }
  const handleEditRideData = (obj) => {
    setEditRideData(obj)
  }

  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col-md-6'>
          {editMode
            ? <BookRideEditForm
              submitEditRide={submitEditRide}
              toggleEditMode={toggleEditMode}
              rideData={rideData}
              editRideData={editRideData}
            />
            //preventDefault workaround to be resolved
            : <BookRideForm
              submitNewRide={submitNewRide}
              rideData={rideData}
            />
          }
        </div>
        <div className='col-md-6'>
          <RideDataList
            rideData={rideData}
            toggleEditMode={toggleEditMode}
            deleteRide={deleteRide}
            handleEditRideData={handleEditRideData}
          />
        </div>
      </div>
    </div>
  )
}



export default App;
