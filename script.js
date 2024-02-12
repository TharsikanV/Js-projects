//alert("I will kill you")
// oru alert message ah page la kaaddum
//dynamically typed language

///////////variables- 8 bytes/////////
/*let score=0//initialization
score=10//1010 binary formela thaan poi memoryla store aakum
// assignment
console.log("score is "+score)
//output:- score is 10
console.log("Hello")
// console ah Hello endu print aakum
let amount=0
amount=1000
console.log("Your bill amount is Rs. "+amount)
const pi=3.34
// constant an maaraama irukkira values kku kudukkalaam
// var val=10
// ithu rompa palaya consept ippa use panna thevalla*/

////////// operators////////////////
//1.Arithmatic:-+ - * * / ++ -- ** %
//2.Assignment:-= += -= *= /= %= **=
//3.comparison:-==(Type ah consider pannaathu) ===(Type ah consider pannum) != !== < > <= >=
//4.Logical:-&& || !
//5.Bitwise:-& | ~ ^(XOR-etaahavthu onnu 1) <<(bit valu ellam left kku shift aakidum kadasiya irukkirathula 0 varum) >>(rightla pokum but kadsiya irukkirathu 0 iruntha 0 1 iruntha 1) >>>(ithu muthal maari)
// console.log(5/0)
// Infinity endu value output varum
// console.log(0/0)
//output:-NaN
// console.log(Math.sqrt(-1))
//Output:-NaN
// let b
// console.log(b)
//output:-undefined
// a=3
// console.log(typeof a)
//number
// console.log("5"-1)
//4
/////////////////input//////////////
// let name=prompt("What's your name?")
// input box onnu varum
// console.log("Hi",name)
// ,kuduththa space viddu varum
// let a=prompt("Enter a number:")
// console.log(Number(a)+10)
//prompt la edukkira inputs ellaam string aah thaan vaankum
// Number(a):- String a ah number ah maathalaam
///////DOM(Document Object Model)///////
// dom ethukkaaka enda athu javascript la irunthu html ah complete ah access pannikka mudiyanum endrathukkaaka
// console.log(document)
// web page ooda code athaavathu documents ah access pannikka mudijum
// console.log(document.getElementById("message"))
/*console ah  document.getElementById("message") ipd adichcha
antha id kaana code ah kaadum */
//////////////Math Functions///////////
/*console.log(Math.round(5.8))
// 6
console.log(Math.round(5.1))
// 5
console.log(Math.floor(5.8))
//5
console.log(Math.ceil(5.8))
// 6
console.log(Math.ceil(5.1))
// 6
console.log(Math.sqrt(16))
// 4
console.log(Math.abs(-4))
// 4
console.log(Math.pow(2,3))
// 8
console.log(Math.min(5,7,4,2,9,8))
// 2 minimum
console.log(Math.max(5,7,4,2,9,8))
// 9 maximum
console.log(Math.random())
// 0 to 1 kka random ah value tharum
console.log(Math.random()*6)
// 0 to 6 kka random ah value tharum
console.log(Math.floor(Math.random()*6)+1)
// 0 to 6 kku  random ah number tharum
console.log(Math.PI)
// 3.141592653589793
console.log(Math.E)
// 2.718281828459045*/
//////////STRING///////////////
let str1="I am the devil of my world"
let str2="but inside me i am a human"
//console.log(str1+str2)
// strings ah add pannum
//console.log(str1.concat(str2))
//strings ah add pannum
// concat kku ulla nirya string ah kodukkalaam
///////////Partitioning string///////////
//slice(start,end)
//substring(start,end)
//substr(start,length)
/*console.log(str2.slice(4,8))//insi
console.log(str2.slice(5))//nside me i am a human
console.log(str2.slice(-5))//human
console.log(str2.substring(4,7))//ins
console.log(str2.substr(4,5))//insid
*/

/*console.log(str1.replace("devil","god"))
// string ah replace pannikka mudiyum
//replaceall kku ellaathilayum replace pannidum
console.log(str1.toUpperCase())//uppercase
console.log(str1.toLowerCase())//lowercase
console.log(str1.length)//string length ah tharum
console.log(str1.trim())//extrava start and end la irikkira space ellam remove aakidum
console.log(str1.trimStart())//extrava start la irikkira space ellam remove aakidum
console.log(str1.trimEnd())//extrava end la irikkira space ellam remove aakidum*/
/*let bill="Rs.10"
console.log(bill.length)//5 length
console.log(bill.padEnd(7,"0"))//length 7 aakira vara end la 0 ah add pannu
console.log(str1[0])//I
console.log(str1.charAt(0))//I
console.log(str1.charCodeAt(0))//character kkaana unicode number tharum*/
/*console.log(str1.indexOf("I"))//first vaara I ooda index ah tharum
console.log(str1.lastIndexOf("I"))//last ah vaara I ooda index apd illanna -1
console.log(str1.lastIndexOf("z"))//apd illanna -1
console.log(str1.search("devil"))//d ooda index
console.log(str1.search("deviluu"))//illanna -1
console.log(str1.includes("devil"))//true endu theru irukkuthu enda
console.log(str1.startsWith("I"))//true
console.log(str1.endsWith("d"))//true*/

///////////////TEMPLATE LITERALS///////////////////
//introduction in 2015 with ECMASCRIPT6 or ES6
/*let firstName="Ramya"
let lastName="Murali"
let city="chennai"

console.log(firstName+" "+lastName+" Lives in "+city)
//backtick
let msg=`${firstName} ${lastName} lives in ${city}`
console.log(msg)
//" " space podu type pannirathukku pathila ipd seilaam
let msg1=`happy
birthday`
console.log(msg1)
//multi line la sentence kodukklaam 

//single and double quotes in string
msg2=`cat's name is "kuddy"`
console.log(msg2)
//backtick ulla koduthaa nallam*/

//////////////////ARRAYS///////////////
/*let cities=["chennai","Madurai","Trichy"]
let marks=[23,45,67,23,54]
console.log(marks.length)
//array ooda length ah kaadum
console.log(cities.length)
console.log(cities[0])
//idexla irukkira element ah tharum
console.log(marks[marks.length-1])
//last element ah tharum
////mix of int and String 
let arr=[1,2,4,'a',"asd",[2,5]]
console.log(arr)
console.log(arr[5][1])
////2D array///////
let matrix=[[3,2,5],[3,6,7],[6,8,9]]
console.log(matrix[0][0])
/////array methods/////
let array=['a','b','c','d','e']
console.log(array.push('f'))
//push()-add element to the end returns new length
console.log(array)
console.log(array.pop())
//pop()-removes element from the end and returns removed value
console.log(array.shift())
//shift()-removes element from start of the array and return the removed value
console.log(array.unshift("a"))
//unshift()-adds element to the start of the array and returns new length
/*delete array[2]
console.log(array[2])
//delete pannum but shift aakathu*/
/*array.splice(2,2)
console.log(array)
//splice(start,no of element)-delete 2 elements starting at index 2
array.splice(1,1,'m')
console.log(array)
//delete panniddu replace pannalaam
array.splice(1,2,'x','y')
console.log(array)

array.splice(1,0,'b')
console.log(array)
//onnu delete pannama insert pannalaam
console.log(array.splice(1,2,'x','y'))
//delete pannurathukala oru array ah return pannum
//1.1st parameter-starting index
//2.2nd parameter-no,of elements to be deleted from starting index
//3rd parameter-values to be inserted from starting index
console.log(array.slice(1,3))
//slice(starting index,ending index)
//ending index not included
//elements ah kaadum
array.reverse()
//array permanent ah reverse aakiddithu
console.log(array)

let str4=array.join()
console.log(str4)
//join()-convert array to string with ,,

let str5="g,t,f,h"
let arr2=str5.split(',')
//, ah base panni string aakum
console.log(arr2)
//split()-converts string to array

/////concat and spread operator/////
let firstArr=[1,2,3]
let secondArr=[4,5,6]

let joinedArr=firstArr.concat(secondArr)
console.log(joinedArr)
//randu arrays um join aaki oru array ah varum

let joined=[...firstArr,...secondArr]
console.log(joined)
//ipd spread operrater ah use panni kooda join panna mudiyum
//PRACTICE
let Arr=[5,8,10,7,9,11]
console.log(Arr.splice(3,3,17,19,111))
console.log(Arr)
Arr.splice(0,0,100)
console.log(Arr)
Arr.push(200)
console.log(Arr)
Arr.splice(Arr.length-1,1,1000)
console.log(Arr)
Arr.splice(Arr.length/2,0,0)
console.log(Arr)*/

/////////////if else - CONDITIONAL STATEMENT/////////////////
/*let pwd_correct=false
if(pwd_correct)
{
    console.log("You are logged in")
}
else
{
    console.log("Incorrect Password")
}*/

//Comparision Operators:- == === != !== > < >= <= ?:(COnditioanal/ternery operator)
//Logical Operators:- && || !

//max of two numbers
/*let a=20,b=30
let max
/*if(a>b)
{
    max=a
}
else
{
    max=b
}*/
/*max=a>b?a:b
//conditional operator use pannalaam
console.log(max)
console.log("Bye")*/
