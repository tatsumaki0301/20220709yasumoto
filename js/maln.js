const array = [2, 4, 7, 5, 4, 3, 8];
console.log(array);
const filteredArry = array.filter(function (ele, i) {
  return array.indexOf(ele) === i;
})
console.log(filteredArry);


function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year}年はうるう年です。`;
  } else {
    return `${year}年はうるう年ではないです。`
  }
}

console.log(leapyear(2020));
console.log(leapyear(2021));
