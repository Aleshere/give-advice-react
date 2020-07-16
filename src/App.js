import React, { Component } from 'react';
import axios from 'axios';

import './App.css';


export default class App extends Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            this.setState({ advice: advice });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className='app'>
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvice} >
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}
