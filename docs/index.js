const eliminarAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/*
  Ejercicio 1: Reverse a String
  Escribe una función reverseString que tome una cadena como entrada y devuelva la cadena invertida.
*/

function reverseString(str) {
  if(typeof str !== 'string') throw new Error('El parámetro debe ser texto')
  return str.split('').reverse().join('')
}

/*
  Ejercicio 2: Check for Palindrome
  Escribe una función isPalindrome que tome una cadena como entrada 
  y devuelva true si la cadena es un palíndromo, y false en caso contrario.
*/
function isPalindrome(str) {
  if(typeof str !== 'string') throw new Error('El parámetro debe ser texto')
  const cleanSTR = eliminarAcentos(str).toLowerCase()
  return cleanSTR === cleanSTR.toLowerCase().split('').reverse().join('')
}

/*
  Ejercicio 3: Find the Nearest Pair
  Dado un array de números enteros, 
  encuentra el par de elementos cuya diferencia es mínima. 
  En otras palabras, encuentra dos números en el array que 
  estén más cerca el uno del otro en términos de valor absoluto.

  Ejemplo:

  Entrada: [4, 2, 1, 7, 9, 10]
  Salida: [1, 2]
*/

function closestPair(arr) {
  if(!Array.isArray(arr)) throw new Error('El parámetro debe ser un array')
  if(arr.length < 2) throw new Error('El arreglo debe tener al menos dos elementos')
  if(arr.some(e => isNaN(e))) throw new Error('El arreglo debe contener solo números')
  
  arr.sort((a, b) => a - b)
  
  let min = Infinity
  let par = []  
  
  for(let [i, e] of arr.entries()){
    if(isNaN(e)) throw new Error('El arreglo debe contener solo números')
    let diff = Math.abs(arr[i] - arr[i + 1])
    if(diff < min){
      min = diff
      par = [arr[i], arr[i + 1]]
    }
  }
  return par
}



/*
  Ejercicio 4: Calculadora - Programación Orientada a Objetos
  La calculadora debe ser capaz de realizar operaciones aritméticas básicas, 
  como suma, resta, multiplicación y división. 
  Además, debe mantener un registro del último resultado calculado 
  para que los usuarios puedan acceder a él si es necesario.

  La calculadora debe ser una clase llamada Calculator, que tenga los siguientes métodos:
  - add(a, b): Este método toma dos números como argumentos y devuelve la suma de los mismos. 
    Además, actualiza el último resultado calculado.

  - subtract(a, b): Este método toma dos números como argumentos y devuelve la resta del primero menos el segundo. 
    Además, actualiza el último resultado calculado.

  - multiply(a, b): Este método toma dos números como argumentos y devuelve el producto de los mismos. 
    Además, actualiza el último resultado calculado.

  - divide(a, b): Este método toma dos números como argumentos y devuelve el cociente del primero dividido por el segundo.
    Si el segundo número es cero, se debe lanzar un error indicando que la división por cero no está permitida. 
    Además, actualiza el último resultado calculado.

  - getLastResult(): Este método devuelve el último resultado calculado por la calculadora, simulando un historial.

  Además de estos métodos, debes agregar una función más compleja a la clase Calculator, 
  que calcule la potencia de un número. 
  Esta función debe ser asignada al prototipo de la clase y se llamará exponentiate(base, exponent). 
  Esta función toma dos argumentos: la base y el exponente, y devuelve la base elevada a la potencia del exponente. 
  La función debe manejar correctamente los casos donde el exponente es cero o negativo, lanzando un error en este último caso.
  Además, actualiza el último resultado calculado.

*/

class Calculator{
  lastResult = null
  
   add(num1, num2){
     if(isNaN(num1) || isNaN(num2)) throw new Error('Los datos ingresados no corresponden a números')
     this.lastResult = Number(num1) + Number(num2) 
     return this.lastResult
  }

  subtract(num1, num2){
    if(isNaN(num1) || isNaN(num2)) throw new Error('Los datos ingresados no corresponden a números')
    this.lastResult = Number(num1) - Number(num2) 
    return this.lastResult
  }

  multiply(num1, num2){
    if(isNaN(num1) || isNaN(num2)) throw new Error('Los datos ingresados no corresponden a números')
    this.lastResult = Number(num1) * Number(num2) 
    return this.lastResult
  }

  divide(num1, num2){
    if(isNaN(num1) || isNaN(num2)) throw new Error('Los datos ingresados no corresponden a números')
    if(num2 === 0) throw new Error('No se puede dividir por cero')
    this.lastResult = Number(num1) / Number(num2) 
    return this.lastResult
  }
  
  getLastResult(){
    return this.lastResult
  } 
}

Calculator.prototype.exponentiate = function(base, exponent){
  if(isNaN(base) || isNaN(exponent)) throw new Error('Los datos ingresados no corresponden a números')
  if(exponent < 0) throw new Error('El exponente no puede ser negativo')
  this.lastResult = Math.pow(Number(base), Number(exponent))
  return this.lastResult
}

module.exports = {
  closestPair,
  isPalindrome,
  reverseString,
  Calculator,
}