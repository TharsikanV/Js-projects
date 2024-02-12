//ES6- modules
export default class Car{
    drive(){
        console.log("Driving")
    }
}
//oru file kku ulla oru export default ah thaan koduthukka mudiyum
export function fillGas(){
    console.log('filling Gas')
}

export function repair()
{
    console.log('repairing')
}

// export default Car
// export {fillGas,repair}
//ipd kodukirathukku pathila munnukke kodukklaam
//ithellaathayum naama vera file ah use pannikka mudyum
//but ithu maddum pothaathu namkku enka venumo antha edathila naama import pannikkanum

//(18)Asynchronous