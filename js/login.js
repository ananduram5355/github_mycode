let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd =document.getElementById("password");
function validate()
{
   let regexp = /^([A-za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
     if(regexp.test(email.value))
     {
         error.innerHTML="valid";
         error.style.color="green";
         return true;
     }
     else if(pwd.value.length<=8)
     {
        error.innerHTML="Password too short";
        error.style.color="red";
        return false;

     }
       
     else
     {
            error.innerHTML="invalid";
            error.style.color="red";
            return false;
      }
        
     
}

//  function pwsd(){
//     let regexp = /^([A-za-z0-9\.-]+)([A-Z]{1,2})([a-z]{1,2})$/
//     if(pwd.value.length<=8){
//         return false;
//     }
//     else if(regexp.test(email.value))
//     {
//         error.innerHTML="valid";
//         error.style.color="green";
//         return true;
//     }
//     else
//     {
//         error.innerHTML="invalid";
//         error.style.color="red";
//         return false;
//     }

//  }