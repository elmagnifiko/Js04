function checkEvenOdd(nombre) 
{
    if (nombre % 2 === 0) 
    {
    return "Pair";
    } 
    else 
    {
    return "Impair";
    }
}
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(4));

module.exports = checkEvenOdd;