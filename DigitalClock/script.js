let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date()
    let hr=dateTime.getHours()
    // let min=padZero(dateTime.getMinutes())
    let min=dateTime.getMinutes()
    // let sec=padZero(dateTime.getSeconds())
    let sec=dateTime.getSeconds()
    //current time ah Date class object ah vachchi edukkiran

    if(hr>12)
    {
        hr=hr-12
        ampm.innerHTML='PM'

    }
    //am pm kkaana code

    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('mins').innerHTML=padZero(min)
    // document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=padZero(sec)
    // document.getElementById('seconds').innerHTML=sec
    //html ah antha value ah store panniddan
    
}

function padZero(num)
{
    return num<10?"0"+num:num
    //single digits endaa munnukku oru zero ah add panna
}

setInterval(displayTime,500)
