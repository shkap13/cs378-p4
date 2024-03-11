import React, {useState, useEffect} from 'react';
import './DynamicButton.css';

const DynamicButton = ({lat, long, onClick}) => {
    return (
        <div className='centered-container'>
            <button className="button" onClick={onClick}>{lat}, {long}</button>
        </div>
    );
};

export default DynamicButton;