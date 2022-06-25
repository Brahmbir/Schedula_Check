import React ,{useState,useEffect}from 'react'
import "../style/person.css"
import "../style/timeslo.css"

import plus from "../file/plus.png"
import bin from "../file/bin.png"


function TimeCard(props) {

  let count = 0 ;
  function setCount(t){
    count=t+5;
    return count}
  function setCo(t){
    return t}

  let [demoSlot,setDemoSlot] = useState([]);
  const [timeSlot,setTimeSlot] = useState([]);

  const demo=()=>{

    setDemoSlot( demoSlot=[])
    let p;
    let g = [];

    if (props.no == '1'){
      p= [["10:00","12:00"],["12:00","13:00"],["16:00","18:00"]];
    }
    else{
      p= [["10:00","11:30"],["12:30","14:30"],["14:30","15:00"],["16:00","17:00"]];
    }
    for (const i of p) {
      // console.log(i);
      // setDemoSlot(demoSlot.concat(
      // <TimeSlot key={demoSlot.length} id={props.no+setCo(demoSlot.length)} imfo={i} />
      // ));
      g.push(<TimeSlot key={demoSlot.length} id={props.no+setCo(demoSlot.length)} imfo={i} />)
    }
    setDemoSlot(demoSlot.concat(g))
  }

  const add=()=>{
    setTimeSlot(timeSlot.concat(<TimeSlot key={timeSlot.length+5} id={props.no+setCount(timeSlot.length)  }  />));
  }
  return (
    <div className="person" id={props.no}>
      <div className="top">
        <p>person_{props.no}</p>
        <button className='demo'onClick={demo}> <h3>Demo</h3></button>

        <div className='limit'>
        {/* <input type="time" id={'l'+props.no} ></input>
        <input type="time" id={'h'+props.no} ></input> */}
        </div>
        <button type='button' onClick={add}><img src={plus} alt="add"></img></button>
      </div>
    
      <div className="time">
      {demoSlot}
      {timeSlot}
      </div>
    </div>
  )
}

function TimeSlot(props){

  const del=(id) => document.getElementById(id);

  function remove(){
    let rem = del(props.id);
    rem.remove();
  }
  return(
    <div className="timeslot" id={props.id}>
      <p>from</p>

      {props.imfo?<input type="time" id="appt" name="appt" defaultValue={props.imfo[0]}  required></input>:
                <input type="time" id="appt" name="appt" required></input>      
      }
      
      <p>to</p>
      {props.imfo?<input type="time" id="appt" name="appt" defaultValue={props.imfo[1]}  required></input>:
                <input type="time" id="appt" name="appt" required></input>      
      }    
      <button className='but' onClick={()=> remove()}> <img src={bin}></img>
        </button>

    </div>
  )
}
export default TimeCard
