import {minimum,list,toDate,maximum} from "../script/TimeFunctions"

let min,max,mid;
let canvas,ctx;
let code = [];

function commonDraw(){

    ctx.beginPath();
    //left limit
    ctx.moveTo(min,(mid/2));
    ctx.lineTo(min,(mid/2)*3)
    // mid line
    ctx.moveTo(min, mid);
    ctx.lineTo(max, mid);
    // right limit
    ctx.moveTo(max,(mid/2));
    ctx.lineTo(max,(mid/2)*3)
    ctx.stroke();
}

export function canvasInit(){
    
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    
    canvas.width=1000;
    canvas.height=200;
    
    let width = canvas.width;
    let height = canvas.height;

    mid = Math.round(height/2);
    min = Math.round(width * 5)/100 ;
    max = Math.round(width * 95)/100 ;
    
    commonDraw();   
}

function subTime(timeList,minimumTime){
    let result = [];
    for (const i of timeList) {
        result.push( toDate(i) - toDate(minimumTime) )
        }
    return result

}

export function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    commonDraw();

    code = subTime(list,minimum);
    let maxLimit = toDate(maximum) - toDate(minimum) ;
    let temp;
        
    for (let i =0 ; i<code.length;++i){
        ctx.beginPath();
        ctx.moveTo(min+((code[i]/maxLimit)*(max-min)), mid-10);
        ctx.lineTo(min+((code[++i]/maxLimit)*(max-min)), mid-10);
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    ctx.lineWidth = 1;
    for (const i of code) {
        ctx.beginPath();
        temp =  (i/maxLimit)
        ctx.arc(min+(temp*(max-min)), mid-10, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
    }
    code = [];
}
