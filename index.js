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


function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}




