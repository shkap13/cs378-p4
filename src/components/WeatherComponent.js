import React, {useState, useEffect} from 'react';
import './WeatherComponent.css';

const WeatherFetchingComponent = ({latitude, longitude}) => {
    let lat = latitude;
    let longt = longitude;
    let url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${longt}&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FChicago&forecast_days=1`;
    // console.log("url is: " + url);
    const [temp_data, setTempData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const response_json = await response.json();
                setTempData(response_json.hourly.temperature_2m);
                // console.log('response_json: ', response_json.hourly.temperature_2m[0]);
                // console.log('temp_data', temp_data);
            }
            catch (err){
                console.log('there was an error', err);
            }
        };

        fetchData();
    }, [url]);

    if(temp_data == null){
        return <div> LOADING... ONE MOMENT PLEASE</div>
    }

    let times_strings = new Array();

    times_strings[0] = '12 AM';
    for(let i = 1; i < 12; i++){
        times_strings[i] = `${i} AM`;
    }

    times_strings[12] = '12 PM';
    for(let i = 1; i < 12; i++){
        times_strings[i+12] = `${i} PM`;
    }

    let half_times = new Array();

    for(let i = 0; i < times_strings.length/2; i++){
        half_times[i] = times_strings[2 * i];
    }

    let half_temps = new Array();

    for(let i = 0; i < temp_data.length/2; i++){
        half_temps[i] = temp_data[2 * i];
    }

    return (
        <div className='centered-container'>
            <div>
                <div className='column'>
                <h3>TIME</h3>
                {half_times.map((item, index) => (
                    <div key={`col1_${index}`}>{item}</div>
                ))}
                </div>
            </div>

            <div>
                <div className='column'>
                <h3>TEMPERATURE</h3>
                {half_temps.map((item, index) => (
                    <div key={`col2_${index}`}>{item} F</div>
                ))}
                </div>
            </div>
        </div>

        
    );
}

export default WeatherFetchingComponent;