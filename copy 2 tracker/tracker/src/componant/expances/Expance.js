import React from "react";

import './Expance.css';

import ExpanceDate from './ExpanceDate';
   
 import Card from '../UI/Card';

function Expance(props) { 

     return (
        <Card className="exp-item">
        <ExpanceDate date = {props.date} />
       <div className="exp-item-decription">
                <h2>{props.title}</h2>
                <div className="exp-item-price"> {props.amount} </div>
        </div>
        </Card>
    
); 
}
export default Expance;
