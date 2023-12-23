let num = Number(prompt("enter the number"));
function reverse_the_number(num) {
  num = num + "";
  return num.split("").reverse().join("");
}
console.log(reverse_the_number(num));
