const btn=document.getElementById("btn")
const colortext=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


// btn.addEventListener('click',changeBg)
// function changeBg()
// {
//     let hexColor='#'
//     for(let i=1;i<=6;i++)
//     {
//         hexColor=hexColor+randHexValue()
//     }
//     wrap.style.backgroundColor=hexColor
//     //wrap id la irukkira element kku bg koduthachu
//     colortext.innerHTML=hexColor
//     //header la hexadecimal value ah kodukka
// }
//////OR IPDYUM KODUKKALAAM////////
btn.addEventListener('click',function ()
{
    let hexColor='#'
    for(let i=1;i<=6;i++)
    {
        hexColor=hexColor+randHexValue()
    }
    wrap.style.backgroundColor=hexColor
    //wrap id la irukkira element kku bg koduthachu
    colortext.innerHTML=hexColor
    //header la hexadecimal value ah kodukka
})

function randHexValue()
{
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}
//random ah array la irunthu value edukka