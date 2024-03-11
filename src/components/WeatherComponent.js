import React, {useState, useEffect} from 'react';

const WeatherFetchingComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch();
                const response_json = await response.json();
                setData(response_json);
            }
            catch (err){
                console.log('there was an error');
            }
        }
    });
}