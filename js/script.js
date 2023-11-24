function convertcelsius(Celsius){
  return Celsius * 1.8 + 32
}

const celsius = parseInt(prompt("enter number"));
const result = convertcelsius(celsius);
alert(result);