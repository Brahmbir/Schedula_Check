let [minimum,maximum, list] =[,,[]] ;

export function toDate(str){
    return new Date(2000,1,1 ,str.split(":")[0],str.split(":")[1],0);
    }

function freeTime(list){
    let result = [];
    for (let i=0;i<list.length;++i){
        result.push([list[i],list[++i]]);
    }
    return result;
}

function diffTime(arra,bool=0){
    let diff = new Array();
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


function check(freetim,person2,tostring = false){
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

function timeListSet(array){
    let result = [];
    for(const i of array){
        let ok = 1;
        for (const j of result) {
           if(j[0]==i[0]&&j[1]==i[1]){
                ok = 0;
                break;
            }
        }
        if(ok){ result.push(i);}
    }
    return result;
}
function time_List(person,limit){
    let result = [];
    result.push(limit[0]);
    for (let i of person) {
        for (let j of i) {
            if(result.includes(j)){
                result.splice(result.indexOf(j)) }
            else{result.push(j);}
            }}
    result.push(limit[1]);
    for (let i in result) {  result[i] = toDate(result[i]);  }

    return result;
}

export function avaTime([p1,limit1,p2,limit2],tostring){ 
    // reset data for canvas
    list =[];
    
    // here was the error 
    //     I wrote 2 instead of 1       👇    
    // let diff1 = diffTime(freeTime(time2));

    // available time period of person 1
    let TListOfPerson1 = time_List(timeListSet(p1),limit1);
    let timeDiffOfPreson1 = diffTime(freeTime(TListOfPerson1));
    
    // available time period of person 1
    let TListOfPerson2 = time_List(timeListSet(p2),limit2);
    let timeDiffOfPreson2 = diffTime(freeTime(TListOfPerson2));
    
    let result = check(timeDiffOfPreson1, timeDiffOfPreson2 ,tostring);
    
    // data for canvas
    for (const i of result) {
        list.push(i[0][0]);
        list.push(i[0][1]);
    }
    toDate(limit1[0]) > toDate(limit2[0]) ? minimum = limit2[0] :  minimum = limit1[0];
    toDate(limit1[1]) > toDate(limit2[1]) ? maximum = limit2[1] :  maximum = limit1[1]; 

    return result
}

export {minimum,list,maximum}