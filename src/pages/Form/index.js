import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoImg from '../../assets/thunder.png';

export default function Form() {
    const [place, setPlace] = useState('');
    const history = useHistory();

    async function handlePlace(e) {
        e.preventDefault();

        await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=16b62879c1404021a40bb3c6b27fac2a`)
            .then(response => {
                localStorage.setItem('lat', response.data.results[0].geometry.lat);
                localStorage.setItem('lng', response.data.results[0].geometry.lng);
            })

        history.push('/forecast');  
    }    

    return (
        <div className="container-fluid">
            <div className="row">
                <img className="logo" src={logoImg} alt="Logo" />  
            </div>
            <br></br>
            <div className="row">
                <div className="col-1" />
                <form onSubmit={handlePlace}>
                    <div className="row">
                        <div className="col-1" />
                        <div className="col-8">
                            <input className="form-control" size="150"
                                placeholder="Digite seu local"
                                value={place}
                                onChange={e => setPlace(e.target.value)}
                            />
                        </div>
                        <div className="col-3">   
                            <button className="btn btn-dark" type="submit">Enviar</button>
                        </div>    
                    </div>    
                </form>
            </div>
        </div>
    );
}