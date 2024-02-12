const button=document.querySelector('button')
let resultdiv=document.createElement('div')
   //element div ah create pannirkkam
   resultdiv.id='result'
   //div kku id koduthaachu
   document.getElementById('wrapper').appendChild(resultdiv)
   //wrapper ooda child ah ithu poi append aakidum

////event listener
button.addEventListener('click',displayStats)
//element.addEventListener('event',function)
function displayStats()
{
    const input=document.getElementById("input")
    //input edukkiram
   const city=input.options[input.selectedIndex].value
   let population=0,literacyRate=0,language=''
   //////Switch////////
    switch(city)
    {
        case 'Bengaluru':
            population= 8443675
            literacyRate= 88.71
            language= 'kanada'
            break
        case 'Chennai':
            population= 4677787
            literacyRate= 98.71
            language= 'Tamil'
            break
        case 'Mumbai':
            population= 84893675
            literacyRate= 88.71
            language= 'Marathi'
            break
        case 'Delhi':
            population= 883675
            literacyRate= 65.71
            language= 'Hindi'
            break
    }
   let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`
   console.log(text)
   //`` ithu important

   document.getElementById('result').innerHTML=text
}