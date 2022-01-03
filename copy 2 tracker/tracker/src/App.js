import React from "react";

 import NestedExpance from './componant/expances/NestedExpance';
// import Expance from "./componant/Expance";


function App(){
  let expance =[
    {
      id:'e1',
      title:'school fees',
      amount:250,
      date:new Date(2021,5,12)
    },
    {
      id:'e2',
      title:'books',
      amount:550,
      date:new Date(2021,8,22) 
    },
    {
      id:'e3',
      title:'foods',
      amount:450,
      date:new Date(2021,10,18) 
    },
    {
      id:'e4',
      title:'house rent',
      amount:15000,
      date:new Date(2021,10,11) 
    }
  ];

  return(
<div>
<h2>let's get started</h2>
 { 
   <NestedExpance item ={expance} /> }
 
</div>
  );
}

export default App;  
