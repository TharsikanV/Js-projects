//(22)API(appliction program intrface)
//ethaavathu randu program communicate pannikkanum enda kaddayam API theva
//OUR PROGRAM<------->API<------>OTHER PROGRAM
//github api list la nirya api collection vachirukkaanka


// //EXAMPLE 1
// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// //fetch oru promise ah return pannum
// //fetch antha link ulla irukkira data ah fetch panni tharum
// .then((res)=>res.json())
// //json ah kidachirum
// .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// .catch((err)=>console.log(err))
// //ella API kkum ipd irukkaaathu ".then((res)=>res.json())" ithu varaikkum irukkum ankaala naama console.log() la podu pathuthaan access pannikka mudijum

//EXAMPLE 2
// fetch('https://api-thirukkural.vercel.app/api?num=25')
// .then(res=>{
//     if(res.ok)
//     {
//         console.log('success')
//     }
//     else
//     {
//         console.log('failed')
//     }
//     //promise successfulla resolve aakiddaa endu cheak panniddu correct ah iruntha json ah maathalaam
//     return res.json()})
// .then(msg=>console.log(msg.line1,msg.line2,msg.line3))
// .catch(err=>console.log(err))

//inka jaaroo create panna datava naama get panni use pannikkiram
//naammalaa kooda datava API la create panni post panna mudiyum
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  // .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        useeId:22,
        id:456,
        title:'test',
        completed:false
    })
}
//ipdthaan fetch la 2nd argument ah koduthu API la post pannanum
)
      .then(response => response.json())
      .then(json => console.log(json))
//post maari put um use pannalaam
//delete um use pannalaam
