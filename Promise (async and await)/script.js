// const tatkaBook= new Promise((resolve,reject)=>{
//     let bookingSuccess=true
//     if(bookingSuccess)
//     {
//         resolve(456)
//         //argument kuduthirukam
//     }
//     else
//     {
//         reject()
//     }
// })
//mala naama promise ah define maddum thaan pannuram

// tatkaBook.then(Success) //ithu resolve kkaanathu
// .catch(failure)//ithu faliure kkanathu
// //ippathaa definition ah use panniram

// function Success()
// {
//     console.log("Thanks buddy! I will transfer the amt")
// }
// function failure()
// {
//     console.log("Thanks for trying! I will book a bus")
// }

// tatkaBook.then((amt)=>console.log(`Thanks buddy! I have transferred Rs.${amt}`))
// //ipd argument vachum seilaaam
// .catch(()=>console.log("Thanks for trying! I will book a bus"))

//OR kela vaara maari function creat pnni promise ah return panni seyyalaam
// function tatkalBook(){
//     return new Promise((resolve,reject)=>{
//         let bookingSuccess=true
//         if(bookingSuccess)
//         {
//             resolve(456)
//             //argument kuduthirukam
//         }
//         else
//         {
//             reject()
//         }
//     })
//     // inka naama promise ahvee return panniram
// }

// tatkalBook().then((amt)=>console.log(`Thanks buddy! I have transferred Rs.${amt}`))
// .catch(()=>console.log("Thanks for trying! I will book a bus"))

// function tossCoin()
// {
//     return new Promise((resolve,reject)=>{
//         const rand=Math.floor(math.random()*2)
//         //0-head(success) 1-tail(failure)s
//         if(rand==0)
//         {
//             resolve()
//         }
//         else
//         {
//             reject()
//         }
//     })
// }

// tossCoin()
// .then(()=>console.log("Congrats its head! you won"))
// .then(()=>console.log("Congrats its head! you won"))
// .then(()=>console.log("Congrats its head! you won"))
// .then(()=>console.log("Congrats its head! you won"))
// .catch(()=>console.log("sorry you lost its tail"))
// //ipd niraya .then kodukkirathaala code rompa readable ah irukkum

let reachA=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
    {
        setTimeout(resolve,3000,"Vidya reached")
        //setTimeout kku ulla koduththathaala resolve ooda paramters ah 3000(time) kku aduththa kodukkanum
    }
    else
    {
        reject("Vidya not reached")
    }
})
// let reachB=new Promise((resolve,reject)=>{
//     const reached=true
//     if(reached)
//     {
//         setTimeout(resolve,1000,"Ramya reached")
//     }
//     else
//     {
//         reject("Ramya not reached")
//     }
// })

// let reachC=new Promise((resolve,reject)=>{
//     const reached= true
//     if(reached)
//     {
//         setTimeout(resolve,2000,"Latha reached")
//     }
//     else
//     {
//         reject("Latha not reached")
//     }
// })

// Promise.all([reachA,reachB,reachC])
// Promise.fulfilled([reachA,reachB,reachC])
// ovvona pathiyum fullfilled ah details kaadum
// Promise.any([reachA,reachB,reachC])
// ethavathu onnu fullfill aaanale resolve aakidum
// Promise.race([reachA,reachB,reachC])
// ethaavathu onnu settele aanale athoda result ah tharum first ethu resolve aakitho ore reject atha tharum
// reachA.then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// promise 3 stagela thaan irukkum
// 1.pending OR
// 2.resolved OR
// 3.rejected

//(20) async-always returnd a promise
// async function fn()
// {
//     return 'Hello'
// }
// //async use panna promise return pannum
// console.log(fn())
// fn().then((msg)=>console.log(msg))
// //but async use pannum pothu naama 'then' usepanna veendiya avasiyam illa

//.then,.catch kku alternative ah async-active ah use pannalaam 
async function asyncstatus()
{   
    //rejact aachithunna error kaadum so atha handile pannirathukku try-catch blocks use pannanum
    try{
    console.log('hi...')
    res=await reachA
    //oru promise resolve aaka time aakum endrathaala intha promis fulfill aakiravaraikum wait panna intha await keyword ah use panniram
    console.log(res)
    console.log('bye')
    }
    catch(err)
    {
        console.log(err)
    }

}

asyncstatus()
