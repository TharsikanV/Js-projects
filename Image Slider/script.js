const container=document.querySelector('.container')
const btns=document.querySelectorAll('.btn')
//ellathayum vaankirathukkaaka thaan All
const imgList = ["1","2","3","4"]

let index=0//array index
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        if(button.classList.contains('btn-left'))
        {
            index--
            if(index<0)
            {
                index=imgList.length-1
            }
            container.style.background=`url("images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else
        {
            index++
            if(index===imgList.length)
            {
                index=0
            }
            container.style.background=`url("images/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})