const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    //error vanthaa submit aaka koodathu endrathukkaaka
    }
})
//'submit' event nadanthichinna nadakkira maari

function validateInputs()
{
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()

    let success=true

    if(usernameVal=='')
    {   
        success=false
        setError(username,'Username is required')
    }
    else
    {
        setSuccess(username)
    }

    if(emailVal=='')
    {   
        success=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal))
    {
        success=false
        setError(email,'Email enter a valid email')
    }
    else
    {
        setSuccess(email)
    }

    if(passwordVal=='')
    {
        success=false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8)
    {
        success=false
        setError(password,'password must be atleast 8 characters long')
    }
    else
    {
        setSuccess(password)
    }

    if(cpasswordVal=='')
    {
        success=false
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordVal!=passwordVal)
    {
        success=false
        setError(cpassword,'Password does not match')
    }
    else
    {
        setSuccess(cpassword)
    }
    return success;
}

function setError(element,message)
{
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')
    //naama valamaya querySelectoe() document ooda thaan kodukkiram mela irukkira maariyum kodukkalaam 

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    //inputGroup endra element ku error class ah add panniddan
    inputGroup.classList.remove('success')
    //success class ah irunthichinna remove panniran
}

function setSuccess(element)
{
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')
    //naama valamaya querySelectoe() document ooda thaan kodukkiram mela irukkira maariyum kodukkalaam 

    errorElement.innerText='';
    //earkanave error message iruntha remove panni vidanum
    inputGroup.classList.add('success')
    //inputGroup endra element ku success class ah add panniddan
    inputGroup.classList.remove('error')
    //error class ah irunthichinna remove panniran
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };