
function checkNumber(n)
{
    n <= 10;
    if (n < 5) 
    {
      console.log("Faible");
    } 
    else if(n === 5 || n === 6)
    {
      console.log("Moyen");
    }
}
console.log(checkNumber(2));
console.log(checkNumber(5));
console.log(checkNumber(6));

module.exports = checkNumber;
