import './App.css';
import WeatherFetchingComponent from './components/WeatherComponent';
import DynamicButton from './components/DynamicButton';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import { all, async } from 'q';



function App() {
  let [all_buttons, setAllButtons] = useState([
    {id: 1, long: -97.73, lat: 30.26}, 
    {id: 2, long: -95.36, lat: 29.76}, 
    {id: 3, long: -96.80, lat: 32.77}
  ]);

  const [long, setLong] = useState(-97.73);
  const [lat, setLat] = useState(30.26);

  const handle_city_click = (new_lat, new_long) => {
    setLat(new_lat);
    setLong(new_long);
  };

  const adding_new_city = (new_lat, new_long) => {
    setAllButtons((all_buttons) => [...all_buttons, {id: all_buttons.length + 1, lat: new_lat, long: new_long}])
  };

  const handle_lat = (e) => {
    setLat(e.target.value)
  }

  const handle_long = (e) => {
    setLong(e.target.value)
  }

  const handle_plus = () => {
    adding_new_city(lat, long);
  };


  return (
    <div>
      <div className='button_box'>
        {all_buttons.map((button) => (
          <DynamicButton 
            key={button.id}
            lat = {button.lat}
            long = {button.long}
            onClick={() => handle_city_click(button.lat, button.long)}
          />
        )
        )}
      </div>

      <div className='centered-container'>
        <input className= "input-box" type="number" placeholder='Enter Latitude....' onChange={handle_lat}/>
        <input className= "input-box" type="number" placeholder='Enter Longitude...' onChange={handle_long}/>
        <button className="plus_button" onClick={handle_plus}> + </button>

      </div>

      <WeatherFetchingComponent longitude={long} latitude={lat} />
    </div>
  );
}

export default App;
