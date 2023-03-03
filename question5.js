const STRING = "Hey Jude!";

const arrayStr = STRING.split('');
const newArray = [];

for(let i = arrayStr.length - 1; i >= 0; i--) {
  newArray.push(arrayStr[i]);
}

console.log(newArray.join(''));