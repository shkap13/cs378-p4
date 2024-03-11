import './App.css';
import WeatherFetchingComponent from './components/WeatherComponent';
import DynamicButton from './components/DynamicButton';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import { async } from 'q';



function App() {


  return (
    <div>
      <DynamicButton></DynamicButton>
      <WeatherFetchingComponent longitude={long} latitude={lat} />
      <div className='head'> 
      </div>
    </div>
  );
}

export default App;
