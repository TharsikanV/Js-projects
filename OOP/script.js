// //(17)OOP
// let user1={
//     name:'Ramya',
//     age:22,
//     login()
//     {
//         console.log('You are logged in')
//     },
//     logout()
//     {
//         console.log('you are logged out')
//     }
// }
// let user2={
//     name:'Rama',
//     age:22,
//     login()
//     {   
//         console.log('Hi',this.name)
//         console.log('You are logged in')
//     },
//     logout()
//     {
//         console.log('you are logged out')
//     }
// }
// let user3={
//     name:'amya',
//     age:28,
//     login()
//     {   
//         console.log('Hi',this.name)
//         //this - ippa entha object la irukkiramo antha object ooda name
//         //verum name nu koduththa error varum
//         console.log('You are logged in')
//     },
//     logout()
//     {
//         console.log('you are logged out')
//     }
// }
// user2.login()
// user3.login()
// //(17.1)Class is a template of properties and methods
// //static- common variables/methods for class accessed wiyh className
// class User    //base/parent/super class
// {   
//     static numberOfUsers=0
//     constructor(name,age)
//     {   //instance variables
//         // beacause ovveru object/instance kkum thanithaniya allocate aakithu
//         this.name=name
//         this.age=age
//         User.numberOfUsers++
//         //itha class name.static variable name nnu koduthuthaan access pannanum
//         //ovvoru users ah vara vara increase akiddu irukkum
//     }
//     login()
//     {   
//         console.log('Hi',this.name)
//         console.log('You are logged in')
//     }
//     logout()
//     {
//         console.log('you are logged out')
//     }
//     static displayTotalUsers()
//     {
//         console.log('Total number of Users'+User.numberOfUsers)
//     }
//     //static method use panni irukkam
// }

// let userOne=new User('Vidya',21)
// let userTwo=new User('Ram',43)

// let music=new String('ARR')
// //string ah primitive ah create pannirathukku pathila object (reference) ah create pannalaam

// //console.log('Number of Users',User.numberOfUsers)
// userOne.login()
// userTwo.login()
// //non static method ah object vachchi invike pannaum
// User.displayTotalUsers()
// //static method ah class name vachchi invike pannaum

// ///////(17.2)inheritance
// //derived/child/sub class
// class paiduser extends User
// {   
//    constructor(name,age)
//    {
//     super(name,age)
//     //base class costructor ah call panniram
//     this.storage=100
//     //extrava derived class kku variables venumna kudukkalaam
//    } 
//     message()
//     {
//         console.log('You have 100GB free storage')
//     }
//     ////(17.3)OVERRIDING////
//     login()
//     {
//         console.log('Thank you for your support')
//         return this
//         //current object ah return panniram method chaining kkaaka
//     }
// }

// let paidUser1=new paiduser('dhana',33)
// paidUser1.login()
// //derived class object ah vachi base class method ah access pannikka mudiyum
// paidUser1.message()

// //(17.4)method chaining
// paidUser1.login().message()

// function User(name,age)
// {
//     this.name=name
//     this.age=age
//     // this.login=function()
//     // {
//     //     console.log("You are logged in ")
//     // }
//     // //ipd method define panna athu prototype la varaathu
// }
// //class illaama ennannu oop pannirathunnu paakka

// User.prototype.login=function()
// {
//     console.log('Hi',this.name)
//     console.log("You are logged in")
// }
// //login method prototype la varanuum endrathukkaaka
// //prototypela iruntha derived panna good ah irukkum
// let user1=new User('amhar',32)
// user1.login()

// ////(17.5) get and set
// class Temperature
// {
//     constructor(temp)
//     {
//         this._temp=temp
//         //private variables kku _name podurathu oru valakkam
//     }
//     get temp()
//     {
//         //return this._temp
//         return `${this._temp} deg celcius`
//         //nama itha format panni kooda return pannalaam

//     }
//     set temp(temp)
//     {
//         if(temp>100)
//         {
//             temp=100
//         }
//         //nama check panni kooda set pannikkalaam
//         this._temp=temp
//     }
// }

// let temp1=new Temperature(25)
// temp1.temp=120
// //100 ah thaan eduthikkum
// console.log(temp1.temp)

import Car,{fillGas as fill,repair} 
from "./car.js";
//fillGas method ah fill ende use pannikkalaam
let car1=new Car()
//ippavum pilaikkum html ah scriptla edit pannanum
// import C from "./car.js";
// let car1=new C()
//naama export default edu koduththathaala defaulta enna naama kodukkiramo athye eduthukkum so ithu work aakum
car1.drive()
fill()