//CREATE OBJECT
let item={
    name:'phone',
    price:25000,
    quantity:1,
    categories:['electronics','phones'],
    //ipd array ah kooda object ulla podalaam
    dimensions:{
        length:7,
        breadth:3.5,
        height:.5
    }
    //item endra object ull dimensions endra ennoru object ah create pannalaam
}
//item endra object um athooda properties ayum create pannidam
console.log(item)
console.log(item.categories[0])
console.log(item.dimensions.length)
/////another way to CREATE OBJECT////
let item2=new Object();
item2.name='charger'
item2.price=200
item2.quantity=1
console.log(item2)
///ACCESSING oBJECT
//DOT NOTATION
console.log(item.price)
//item object la irukkira price ah access pannidam
item.price=26000
//ipd properties da values ah change um pannalaam
console.log(item.price)
///ADDING NEW PROPERTY///
item.returnable=true
//new property add aakiddu
console.log(item)
///SQUARE BRACKET NOTATION///
console.log(item['price'])
item['returbale']=false
//property add aakithu
let key='price'
item[key]=27500
item.key=28000
//ithu work aakathu
console.log(item)

//////ADD METHODS IN OBJECT////
let item1={
    name:'phone',
    price:25000,
    quantity:1,
    buy:function()
    {
        console.log('item added to cart')
    },
    //another popular way to add METHOD
    addToList()
    {
        console.log("item added to list")
    }
}
////ACCESSING METHODS
item1.buy()
item1.addToList()

///////LOOPS/////////