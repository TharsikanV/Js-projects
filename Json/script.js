//(21)JavaScript Object Notation
let json1="Dava"
let json2=4
let json3=true
let json4=[4,5,6,7]
let json5={
    "stock":"TCS",
    "Price":3500
    //javascript objects maarithaan but "" ulla thaa first itam ah kodukkanum

}
let json6=`[
    {
        "Stock":"TCS",
        "Price":3500
    },
    {
        "Stock":"HUL",
        "Price":2500
    },
    {
        "Stock":"SBL",
        "Price":500
    }
]`
//ipd podthaala ulla irukkira array object ellaama string ah aakiddu
let parsed=JSON.parse(json6)
//string ah irukkira array of objects ah parsed la save panniddam
console.log(parsed[1].Price)
//ipd access pannikkalaam
console.log(JSON.stringify(parsed))
//ithu antha objects ah string ah convert pannitharum