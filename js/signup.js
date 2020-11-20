let phn = document.getElementById("phn");
function phon(){
    let regexp = /^([0-9]{2,3})-([0-9]{2,3})-([0-9]{2,3})-([0-9]{2,3})$/
    if(regexp.test(email.value))
    {
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
        
}