// Code your solutions in this file
const arrayString = ["Guadalupe", "Ollie", "Aki"];

function writeCards(arrayString,eventNames){
     const messages=[]
    for(let i=0;i<arrayString.length;i++){
        messages.push(`Thank you, ${arrayString[i]}, for the wonderful ${eventNames} gift!`);
            }
    return messages
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise")
const messages=[]
function countDown(int){
    let i=int; while(i>=0) {int--; }
    console.log(int)}

    console.log(int)


countDown(4)