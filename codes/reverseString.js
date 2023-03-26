function reverseString(string){
    let reversed= ''; 
    for(let i=string.length-1; i>=0; i--){
        reversed = reversed + string.substring(i, i+1);
    }
    return reversed;
}
export {reverseString};