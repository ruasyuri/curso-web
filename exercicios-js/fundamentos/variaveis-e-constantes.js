/*
 *	Variáveis declaradas com 'var' podem ser redeclaradas
 *	e receber um novo valor.
 *
 *	Variáveis declaradas com 'let' não podem ser redeclaradas,
 *	mas podem receber um novo valor.
 *
 *	Já as variáveis declaradas com 'const' não podem ser redeclaradas
 *	e nem receber um novo valor.
 */

//	Declarando 'var a' e 'let b' e exibindo
var a = 1
let b = 2

console.log(a, b)
//	1 2

//	Redeclarando 'var a' e 'let b' e exibindo
var a = 10
let b = 20

console.log(a, b)
//	Identifier 'b' has already been declared

//	Atribuindo novos valores para 'var a' e 'let b' e exibindo
a = 3
b = 4

console.log(a, b)
//	3 4

//	Declarando 'const c' e exibindo
const c = 5

console.log(c)
//	5

//	Redeclarando 'const c' e exibindo
const c = 50

console.log(c)
//	Identifier 'c' has already been declared

//	Atribuindo novo valor para 'const c' e exibindo
c = 6

console.log(c)
//	Assignment to constant variable.
