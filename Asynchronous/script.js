//(18)Asyncronous
// console.log('step 1')
// console.log('step 2')
// console.log('step 3')
console.log('Hello...')
function sync()
{
    console.log('step 1')
    console.log('step 2')
    console.log('step 3')
}
sync()
setTimeout(()=>console.log('step1'),4000)
setTimeout(()=>console.log('step2'),2000)
setTimeout(()=>console.log('step3'),1000)
//enna minimum time kku piraku function execute aakanum nu sollum
//setTimeout() ah paathale browser da koduthirum intha time kalichchu execute aakaddum endu
console.log('bye')
//ithu velaikke print aakidum
//*****CALL STACK---->BROWSER---->CALL BACK QUEUE----->CALL STACK */
for(let i=1;i<10;i++)
{
    console.log(i)
}

// setInterval(()=>console.log("hi...."),2000)
//ellaam 2 sec interval ah execute aakum