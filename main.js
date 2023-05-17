 alert('hello world')

let number1 = 2
let number2 = 1

 let soma = number1 + number2

 let isSomaaNumber = typeof soma === 'number'

 if (isSomaaNumber) {
   alert('é um número')
 } else {
   alert('Não é um número')
 }

 let isSomaaString = typeof soma === 'string'

 if (isSomaaString) {
  alert('é uma string')
 } else {
   alert('Não é uma string')
 }

 let isSomaaBoolean = typeof soma === 'boolean'

if (isSomaaBoolean) {
  alert('é Boolean')
 } else {
   alert('Não é Boolean')
 }

 let sub = number1 - number2
 let mult = number1 * number2
 let div = number1 / number2

 alert(soma)
 alert(sub)
 alert(mult)
 alert(div)

 function isEven(num) {
   return num % 2 ? 'Não é um nuḿero par' : 'é par';
 }

 alert(isEven(soma))

function isOdd(num) {
  return num % 2 ? 'é impar' : 'Não é impar';
}

alert(isOdd(soma))