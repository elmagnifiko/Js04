
function checkNumber(n)
{
    if (n < 5) 
    {
      console.log("Faible");
    } 
    else
    {
      console.log("Moyen");
    }
}
console.log(checkNumber(2));
console.log(checkNumber(5));
console.log(checkNumber(6));

module.exports = checkNumber;