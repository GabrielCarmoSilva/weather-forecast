import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Forecast() {
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    console.log(lat);
    console.log(lng);

    const history = useHistory();

    const [temp, setTemp] = useState('');
    const [feels_like, setFeelsLike] = useState('');
    const [humidity, setHumidity] = useState('');
    const [name, setName] = useState('');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ce76a4437fd480fbd0f23015c5926a9a`)
        .then(response => {
            console.log(response.data);
            setTemp((response.data.main.temp - 273.15).toFixed(1));
            setFeelsLike((response.data.main.feels_like - 273.15).toFixed(1));
            setHumidity(response.data.main.humidity);
            setName(response.data.name);
        })

    function handleBack() {
        history.push('/');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11" />
                <div className="col-1">
                    <button className="btn btn-dark back" onClick={handleBack}>Voltar</button>
                </div>
            </div>
            <br></br>
            <div className="weather">
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6">
                        <p>{name}</p>
                    </div>      
                </div>    
                <div className="row temperature">    
                    <h1>{temp} ºC agora</h1>
                </div>    
                <p className="row feels-like">Sensação térmica {feels_like} ºC</p>
                <p className="row feels-like">Umidade relativa: {humidity}%</p>
            </div>    
        </div>
    );        
}