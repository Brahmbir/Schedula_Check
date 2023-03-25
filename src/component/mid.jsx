import '../style/midCard.css'

import React, { useState } from 'react'
import { avaTime } from "../script/TimeFunctions"
import { draw } from "../script/canvas"

function getValue(hlist) {
    let result = [];
    for (const i of hlist) {
        i.style.backgroundColor = "#A5BECC";

        if (i.childNodes[1].value == '' && i.childNodes[3].value == '') {
            i.style.backgroundColor = "#f09292";
            continue;
        }
        result.push([i.childNodes[1].value, i.childNodes[3].value]);
    }
    return result;
}

function getTimeData() {
    let limit1, limit2;

    const person1_TimeNodes = Array(document.getElementById('1').children[1].childNodes)[0];
    const person2_TimeNodes = Array(document.getElementById('2').children[1].childNodes)[0];

    let person1_TimeList = getValue(person1_TimeNodes);
    let person2_TimeList = getValue(person2_TimeNodes);

    limit1 = ["9:00", "22:00"];
    limit2 = ["9:00", "22:30"];

    return [person1_TimeList, limit1, person2_TimeList, limit2];
}

function MidCard() {
    const compute = () => {
        const Promi = new Promise(() => { setTimelist((prev) => prev = avaTime(getTimeData(), true)) })
        Promi.then(draw());
    }
    let [timelist, setTimelist] = useState([]);
    return (
        <div className="mid">
            <button onClick={compute} >compute</button>
            <div className="res">
                {timelist.map((tim, i) => <ResCard key={i} time={tim} />)}
            </div>
        </div>
    )
}

function ResCard(props) {
    return (
        <p className='result'>{props.time[0][0]} / {props.time[0][1]} {">>"} {props.time[1]} min</p>
    )
}

export default MidCard