import React ,{useState,useEffect}from 'react'
import '../style/midCard.css'
import {fun} from "../script/TimeFunctions"
import {draw} from "../script/canvas"

// function getLimit(num){
//     let l,h;
//     l = document.getElementById('l'+num).value;
//     h = document.getElementById('l'+num).value;

//     l==''? l='09:00':l;
//     h==''? h='22:00':h;
//     return [l,h]
// }

function getValue(hlist){
    let result = [];    
    for (const i of hlist) {
        i.style.backgroundColor = "#A5BECC";  

        if(i.childNodes[1].value=='' && i.childNodes[3].value==''){
            i.style.backgroundColor = "#f09292";  
            continue;
        }
        result.push([i.childNodes[1].value,i.childNodes[3].value]);
    }
    return result;
}

function getTime(){
    let p1,p2,limit1,limit2;

    const person1= Array(document.getElementById('1').children[1].childNodes);
    const person2= Array(document.getElementById('2').children[1].childNodes);

    p1 = getValue(person1[0]);
    p2 = getValue(person2[0]);

    limit1 =["9:00","22:00"];
    limit2 = ["9:00","22:30"];

    // limit1 = getLimit(1);
    // limit2 = getLimit(2);
    
 return [p1,limit1,p2,limit2];
}

function MidCard(){
    const compute=()=>{
        setTimelist(timelist=fun(getTime(),1)[0])
        draw();
    }

    let [timelist,setTimelist] = useState([]) ;
    return(
        <div className="mid">
            <button onClick={compute} >compute
            </button>
            <div className="res">
                {timelist.map( (tim,i) => <ResCard key={i} time={tim} /> )}
                 {/* {timelist.length} */}
            </div>
        </div>
    )
}

function ResCard(props){
    return(
        <p className='result'>{props.time[0][0]} / {props.time[0][1]} {">>"} {props.time[1]} min</p>
    )
}

export default MidCard