import React from 'react'
import ReactDOM from 'react-dom/client'
import TimeCard from './person'
import MidCard from './mid'

import "../script/TimeFunctions"
import "../script/canvas"


import '../style/index.css'
import { canvasInit } from '../script/canvas'

let wid = window.innerWidth;
let hei = window.innerHeight;

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='card'>
    <h1>{" > SCHEDULE CHECK "} </h1>
    <TimeCard no='1'/>
    <MidCard />
    <TimeCard no ='2'/>    
  </div>
)

canvasInit();

