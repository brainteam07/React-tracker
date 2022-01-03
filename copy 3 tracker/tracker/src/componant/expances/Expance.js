import React, { useState } from "react";
//   useState is hook in reactlibray its import in react  useState is basically function  
import './Expance.css';

import ExpanceDate from './ExpanceDate';

import Card from '../UI/Card';

const Expance = (props) => {

          return (
                <Card className="exp-item">
                        <ExpanceDate date={props.date} />
                        <div className="exp-item-decription">
                                <h2>{props.title}</h2>
                                <div className="exp-item-price"> {props.amount} </div>
                        </div>
                        
                </Card>

        );
}  
export default Expance;
