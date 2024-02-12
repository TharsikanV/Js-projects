//(16)set object- Collection of values 
//              -Values are unique
let arr=[1,1,2,3,4,5,5,5,5,10,8]
let myset1=new Set(arr)
console.log(arr)
console.log(myset1)

let myset2=new Set()
myset2.add(4)
myset2.add(5)
myset2.add('pqr')//strigs kodukkalaam
myset2.add({'a':1,'b':2}) //objects kodukkalaam
myset2.add(4)

console.log(myset2)
let obj={'a':1,'b':2}
myset2.add(obj)
//object reference type endrathaala veere veere address lathaan irukkum soo atha eduthikkum
console.log(myset2)
console.log(myset2.size)
console.log(myset2.has(5))
//5 setla irunthuchinna true endu varum illanna false varum
console.log(myset2.delete(4))
//setla irunthu delete panna use pannirathu
//apd delete aakiddithu enda true endu varum
let arr2=Array.from(myset2)
//set ah array ah convert panniaachchu
console.log(arr2)


//(17)Map
//map kooda oru vakaila object thaan 
//Map objects are collections of key-value pairs.
//A key in the Map may only occur once 
//key or value can be object
let map1=new Map()
//map ah create panniyachchu
map1.set('a',1)
//map la key-value pairs ah add panniddam
map1.set('b',2)
map1.set('a',3)
//key value unikk endrathaala muthal irunth 'a' kkuthaan store aakum
console.log(map1)
console.log(map1.size)
console.log(map1.has('a'))

map1.delete('a')
//delete pannum
map1.set('d',2)
map1.set('e',3)

for(let i of map1)
{
    console.log(i)
}
//array maary pairs ah thatum
for(let[k,v] of map1)
{
    console.log(v)
}
//thanithani value ah kooda edukklaam

for(let k of map1.keys())
{
    console.log(k)
}
//key value ah maddum tharum

map1.forEach((v,k)=>{
    console.log('key',k,'value',v)
})
//forEach use pannam

//2d array to map
let kvArray=[['a',1],['b',3]]
let map2=new Map(kvArray)
console.log(map2)
console.log(...map2)
//2d array aakkalaam