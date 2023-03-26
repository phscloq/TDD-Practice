function analyzeArray(data){

const object = {
    average: average(data),
    min: min(data),
    max: max(data),
    length: data.length
};
return object;
}
function average(data){
    let total=0;
    for(let i=0; i<data.length; i++){
        total+=data[i];
    }
    return total/data.length;
}
function min(data){
    let min=data[0];
    for(let i=1; i<data.length; i++){
        if(data[i]<min){
            min=data[i];
        }
    }
    return min;
}
function max(data){
    let max=0;
    for(let i=0; i<data.length; i++){
        if(data[i]>max){
            max=data[i];
        }
    }
    return max;
}
export {analyzeArray};