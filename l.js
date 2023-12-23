let i;
let num = prompt("enter the character");
function countvowel(num) {
  let vowellist = "aeiouAEIOU";
  let vcount = 0;

  for (let i = 0; i < num.length; i++) {
    if (vowellist.indexOf(num[i]) !== -1) {
      vcount++;
    }
  }
  return vcount;
}
console.log(countvowel(num));
