//Functions - performs specific task
//            can be called multiple times
//            optionally takes input as 
//            parameters and optionally
//            returns value

/////////function declaration
function isPositive(num){//parameter
    return num>0
    //true or false ah return pannum
}

console.log(isPositive(-4))//argument

// function sayHello(){
//     console.log('hello')
// }

// sayHello()
// //hoisting
// // JavaScript Hoisting refers to the 
// // process whereby the interpreter appears
// // to move the declaration of functions, 
// // variables or classes to the top of their
// // scope, prior to execution of the code
// console.log(findProduct(4,7)) 
//FUNCTION AH DEFINE PANNAAMA MUTHAL CALL PANNIDU PIRAKU DEFINE PANNALAAM


// function findProduct(a,b){
//     return a*b
// }


// console.log(findProduct(4,7))
// console.log(findProduct)
// //ipd kodutha intha functionye oru value mari kaadum
// console.log(typeof findProduct)
// //function endu answer tharum

// //////default parameters//////
// function greet(name='there'){
//     console.log('hi',name)
// }
//greet('Ram')
// greet()
//ipd parameter ah kodukkala enda default ah koduththa parameter ah eduthukkum

//////////recursion - function calling itself//////////
//factorial - product of first n numbers
//5! = 5*4*3*2*1 = 5*4*3*2*1
// function factorial(n){
//     if(n==1)
//         return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

/////////function expression///////
//assigned to a variable as object
// let a = 100
// // console.log(isEven(5))
// //error kaadum eanna initialization panna munnam call panna vidaathu(function expression)
// let isEven = function(num){
//     //isEven-function ooda name
//     return num%2==0
// }
// console.log(isEven(5))
// // console.log(isEven)

// let arr = [ 2, 3, 5, 6, 10]
// let findSum = function(arr){
//     let sum = 0
//     for(let val of arr){
//         sum += val
//     }
//     return sum
// }

// console.log(findSum(arr))

// let volume = function(l,b,h){
//     return l*b*h
// }
//Arrow function ah use panni ennum easy ah kodukkalaam

////////arrow function/////////
// let volume = (l,b,h) => l*b*h
// console.log(volume(7,8,9))

//let FUNCTION NAME=(ARGUMENTS)=>{DEFINITION}
// let arr = [ 2, 3, 5, 6, 10]
// let sumOfArr = arr =>{
//     // oru parameter enda () thevayilla
//     let sum = 0
//     for(let val of arr){
//         sum += val
//     }
//     return sum
// }
// console.log(sumOfArr(arr))

//area of circle
// let area = r => Math.PI*r*r
// console.log(area(5))

// console.clear()
///////// console.clear()-niraya out put irukka kulappama irukkithu enda atha clear panna kudukkalaam

//variable arguments - rest parameters
// let prod = function(...args){
//     // niraya argument kudukkanumna
//     let result = 1
//     for(let val of args)
//         result *= val
//     return result 
// }
// console.log(prod(7,6,5,4))

// let prod2 = function(){
//     let result = 1
//     for(i=0;i<arguments.length;i++)
//       result *= arguments[i]
//     return result 

// }
// console.log(prod2(7,6,5,4))
// //ipd method layum seyyalaam

///////////Generators - generates value one by one/////////
//ithila infinite data va kooda gentrate panniddu irukka mudiyum
// function* indexGenerator(){
//     let index = 1
//     while(true){
//         yield index++
//         //return ku pathila inka yield ude pannanum
//     }
// }

// const gen = indexGenerator();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

//console.clear()

///////10.CALLBACK-function passed as argument
//callback - Function passed as argument

// function greetConsole(name)
// {
//     console.log('hello',name)
// }

// function greetHeading(name)
// {
//     const heading=document.querySelector('h1')
//     heading.innerHTML='hello '+name
// }

// function greet(callback)
// {//call back endrathu oru variable thaan nama vera name um kodukkalaam
//     //function poi callback la store aakum
//     callback('Ram')
//     //naama call pannira function kku name arqument kodukkanum athan
// }

// greet(greetConsole)
// // greet(greetHeading)

// /////NAMA CLLBACK KKU PATHILA FUNCTION DEFINITION AYE ARGUMENT AH KODUKKALAAM
// greet(name=>{
//     const heading=document.querySelector('h1')
//     heading.innerHTML='hello '+name
// })

// /////(11) Foreach
// arr=['deepa','suresh','ramya']

// arr.forEach(print)
// //forEach endra method ah naama arr object use panni invoke pannirukkan
// //arr la irukkura ovvoru value ah eduththu print function ooda val kku kodukkum
// //inka print thaan callback function
// function print(val)
// {
//     console.log(val)
// }

// //nama print function ah arrow function ah kodukkalaam
// arr.forEach(val=>{console.log(val)})

// arr.forEach((val,index,arr)=>{
//     arr[index]=val.toUpperCase()
// })
// //forEach la naame val,index,arr intha moonayum use pannalaam
// //athaavathu intha moonayum ovvonna eduththu kodukkum
// //arr la irukkira value ah uppercase ah maathirathukku
// console.log(arr)

// arr=['ECE','IT','CSC','EEE']

// arr.forEach(val=>{
//     const opt=document.createElement('option')
//     //option aana tag  opt ah create panniyachchu
//     opt.textContent=val
//     //enna display aakanum endrathukkaaka
//     opt.value=val
//     //ithu html antha value athukkaaka
//     document.getElementById('branch').appendChild(opt)
//     //brach select element ooda child ah add panniyaachu


// })

// 

// ////(13)filter-returns new array by checking each value of original arr using call back in
// let cost=[35,234,12,34,54,123]

// let lessthan100=cost.filter(x=> x<100)
// //x<100 endra condtionkku eaththamaari filter pannitharum
// console.log(lessthan100)

// ///////(14)reduce-executes reducer callback and return accumulated result

// let cost=[35,234,12,34,54,123]
// let cartTotal=cost.reduce((total,el)=>total+el)
// //cost.reduce((total athaavathu accumulate ,element,index,arr)=>total+element,initial value)
// console.log(cartTotal)

// arr2d=[["a","b","c"],
// ["c","d","f"],
// ["d","f","g"]]

// console.log(arr2d.flat())
// //2d array ah 1d array ah maathum

// let count=arr2d.flat().reduce(
//     (accumuator,currVal)=>{
//         if(accumuator[currVal])
//         {
//             accumuator[currVal]++
//         }
//         else
//         {
//             accumuator[currVal]=1
//         }
//         return accumuator
//     }
//     ,{}//empty object ah kudukkiram
// )
// console.log(count)

// ///////(15) RETURNING FUNCTIONS AND CLOSURE
// let a=100
// function func1()
// {
//     let b,c
//     //local variables
//     console.log('a is',a)
//     //JS la function kku veliya irukkira(outer scope) variables ayum access pannikka mudiyum
// }
// func1()
// a=200
// func1()

// //returning functions-higher order function
// //lexical scoping-inner scope can access outer scope
// function outer(name)
// {
//     let outerVariable='Bread'
//     function inner()
//     {
//         let innerVariable='Butter'
//         console.log('inner variable',innerVariable)
//         console.log('outer variable',outerVariable)
//         console.log('a is ',a)
//         console.log('Hello ',name)
//     }
//     return inner
//     //function ah return pannirathukku "()" podathevalla 
// }
// let call1 =outer('vidya')
// call1()
// //vidya endrathu outer function da but inka last ah innaer function thaan return aakithu soo name ah knapakam vachirukku ITHUTHAAN CLOSURE

// function makeAdder(x)
// {
//     return function(y)
//     {
//         return x+y
//     }
// }

// let add5=makeAdder(5)
// console.log(add5(10))
// console.log(add5(100))
// //outer function eppavo run aaki mudinchithu but antha inner function antha vlue ah ennum bind panni vachirukku ithuthaan closure
////(16)Memory management/allocation
let bigNum=900000000000000000000089999n
const bigNum2=BigInt(10000000000000000000000)
let a=100
a=200
let b=a
b=300

console.log('a is ',a)
console.log('b is ',b)

let obj1={name:'danya',age:24}
let obj2=obj1

obj1.age=25
obj2.name='kumya'

console.log('obj1',obj1)
console.log('obj2',obj2)
////////////////////////////////