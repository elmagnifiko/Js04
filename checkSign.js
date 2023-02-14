function checkSign(n) 
{
    if (n < 0) 
    {
      console.log("Negatif");
    } 
    else 
    {
      console.log("Positif");
    }
}
console.log(checkSign(-10));
console.log(checkSign(0));
console.log(checkSign(10));

module.exports = checkSign;