import React from 'react';
import './NestedExpance.css';

import Expance from './Expance';

 import Card from '../UI/Card';

 function NestedExpance(props){
return (
    <Card className="expanceclass">
       <Expance
     date={props.item[0].date}
     title={props.item[0].title} 
     amount={props.item[0].amount} />
 
 <Expance
    date={props.item[1].date}
     title={props.item[1].title} 
     amount={props.item[1].amount} />
 
 <Expance
     date={props.item[2].date}
     title={props.item[2].title} 
     amount={props.item[2].amount} />
 
  <Expance
   date={props.item[3].date}
    title={props.item[3].title} 
    amount={props.item[3].amount}/>

</Card>

);


 }


 export default NestedExpance;