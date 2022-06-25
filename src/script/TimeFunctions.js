let [minimum,maximum, list] =[,,[]] ;

function toDate(str){
    return new Date(2000,1,1 ,str.split(":")[0],str.split(":")[1],0);
    }

function timeList(pers,lim){
    let result = [];
    result.push(lim[0]);
    for (const i of pers) {
        for (const j of i) {
            if(result.includes(j)){
                result.splice(result.indexOf(j)) }
            else{result.push(j);}
            }}
    result.push(lim[1]);
    for (let i in result) {  result[i] = toDate(result[i]);  }
    return result;
}

function freeTime(list){
    let result = [];
    for (let i=0;i<list.length;++i){
        result.push([list[i],list[++i]]);
    }
    return result;
}

function diffTime(arra,bool=0){
    let diff =new Array();
    for (let i of arra) {
        let temp = ((i[1]-i[0])/60000)
        if(temp){
            diff.push([i,temp]);
        }
        else{
           bool ? diff.push([i,temp]):diff; 
        }
    }
    return diff;
}


function check(freetim,person2,tostring=0){
    let result= new Array();
    let mind ,maxd ,dur;
    for (const i of freetim ) {
        for (const j of person2 ) {
            
            if( i[0][0] < j[0][1]){

                i[0][0] < j[0][0] ? mind = j[0][0] : mind = i[0][0] ;
                i[0][1] > j[0][1] ? maxd = j[0][1] : maxd = i[0][1] ;
                
                dur = ((maxd - mind)/60000);

                if (tostring){
                    mind = mind.toTimeString().slice(0,5);
                    maxd = maxd.toTimeString().slice(0,5);
                }
                result.push([[mind,maxd],dur]);
                break;
            }
        }
    }
    return result;
}
export function subTime(li,mi){

    let result = [];
    for (const i of li) {
        result.push( toDate(i) - mi )
        }
    return result

}

export function fun([p1,limit1,p2,limit2],tostring){ 
    let min,max;
    let time1 = timeList(p1,limit1);
    let time2 = timeList(p2,limit2);
    
    time1[0] > time2[0] ? min =time2[0] :  min =time1[0]; 
    time1[time1.length -1] < time2[time1.length -1] ? max =time2[time1.length -1] :  max =time1[time1.length -1];

    let diff1 = diffTime(freeTime(time2));
    let diff2 = diffTime(freeTime(time2));

    let result = check(diff1, diff2 ,tostring);
    let lis = [];
    for (const i of result) {
        lis.push(i[0][0]);
        lis.push(i[0][1]);
    }

    // console.log(max)
    list = lis;
    minimum = min;

    time1[time1.length -1] < time2[time1.length -1] ? max =time2[time1.length -1] :  max =time1[time1.length -1];

    maximum = 810*60000;
    return [result]
}

export {minimum,list,maximum}

















// export function toDate(str,bool=1){
//     if(bool==0){
//         return str;        
//     }
//     else{

//         return new Date(2000,1,1 ,str.split(":")[0],str.split(":")[1],0);
//     }



// export function timeList( person,limitTime){
//     let listOfTime = new Array();

//     // console.log(setv(person,limitTime));

//     listOfTime.push(toDate(limitTime[0]));
//     for (const i of person) {
//         for (const j of i){
//             if (toDate(j) in listOfTime){}
//             else{
//                 listOfTime.push(toDate(j));
//             }
//         }     
//     }
//     listOfTime.push(toDate(limitTime[1]));    
//     return listOfTime;
// }






// }

// export function timeList( person,limitTime,bool=1){

//     let listOfTime = new Array();

//     console.log(limitTime);
//     limitTime == undefined ? console.log('1')  : listOfTime.push(toDate(limitTime[0],bool));

//     for (const i of person) {
//         for (const j of i){
//             listOfTime.push(toDate(j,bool));
//         }     
//     }
//     limitTime ? console.log('1') : listOfTime.push(toDate(limitTime[0],bool));
    
//     return listOfTime;
// }




// export function freeTime(list){
//     let result=new Array();
//     for (let i=0;i<list.length;++i){


//         result.push([list[i],list[++i]]);
        

//     }
//     return result;
// }





// export function diffTime(arra,bool=0){
//     let diff =new Array();
//     for (let i of arra) {
//         let temp = ((i[1]-i[0])/60000)
//         if(temp){
//             diff.push([i,temp]);
//         }
//         else{
//            bool ? diff.push([i,temp]):diff; 
//         }
//     }
//     return diff;
// }





// export function check(free,person2){
//     let result= new Array();
//     let min ,max;
//     for (const i of free ) {
//         for (let j=1 ; j <person2.length; ++j ) {
//             console.log(person2[j]);
//             //   preson2[j]<=i[0][0] && 

//             if(  person2[j] <= i[0][0] && i[0][1] <=person2[++j] ){
//                  result.push([person2[j-1],person2[j]]);

//             }

//         }
        
//     }
//     return result;

// }