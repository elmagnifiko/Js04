function checkSign(n) 
{
    if (n < 0) 
    {
      return "Negatif" ;
    } 
    else 
    {
      return "Positif" ;
    }
}
console.log(checkSign(-10));
console.log(checkSign(0));
console.log(checkSign(10));

module.exports = checkSign;