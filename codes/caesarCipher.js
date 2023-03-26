const alphabet = {
    'a':0,'b':1,'c':2,'d':3, 'e':4, 'f':5, 'g':6,
    'h':7,'i':8,'j':9,'k':10, 'l':11, 'm':12, 'n':13,
    'o':14,'p':15,'q':16,'r':17, 's':18, 't':19, 'u':20,
    'v':21,'w':22,'x':23,'y':24, 'z':25
}
const reverseAlphabet = Object.entries(alphabet).reduce((obj, [letter, number]) => {
    obj[number] = letter;
    return obj;
  }, {});
//one by one find the letter's number
//shift it
//return it as the new word first letter
function ceaserCipher(string, shiftNum){
    let newWord= '';
    for(let i=0; i<string.length; i++){
        const letter = string.substring(i, i+1);
        if(letter!=' ' &&  (/[^\w\s]/.test(letter))==false){
        newWord = newWord + shift(alphabet[letter], shiftNum);}
        else if (letter==' '){
            newWord= newWord + ' ';
        }
        else{
            newWord= newWord + letter;
        }
    }
    return newWord;
}
function shift(number, shiftNumber){
        return reverseAlphabet[(number+shiftNumber)%26];
}

export {ceaserCipher};