/* 
La sucesión Fibonacci es una secuencia infinita de números naturales. Los primeros son: 1 1 2 3 5 8 13 21 34 55 89 .... La secuencia comienza con 1 y 1. De ahí en adelante cada número se calcula con la suma de los dos anteriores.

Usando recursividad
*/

const fib = (num) => {
    if (num == 0 || num == 1) return 1;
    return fib(num - 1) + fib(num - 2)
};

console.log(fib(6)); //13
