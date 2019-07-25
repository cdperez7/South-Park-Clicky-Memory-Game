import React from 'react';
import "./Jumbotron.css"

const Jumbotron = () => (
    <div className='jumbotron jumbotron-fluid'>
        <div className="container text-center">
            <h1 className="display-4">South Park Memory Game</h1>
            <p className="lead">Click on a characters to earn points, but you cannot click the same person more than once!</p>
        </div>
    </div>
);

export default Jumbotron;