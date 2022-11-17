let userInput = document.querySelector("[name='username']");
let passwordInput = document.querySelector("[name='password']");

document.forms[0].onsubmit = function(event){

    let userValid=false;
    let passwordValid=false;

    if(userInput.value !==""){
        userValid=true;
        passwordValid=true;
    }

    if( passwordInput.value !=="" &&  passwordInput.value.length >8){
        passwordValid=true;
    }
    if(userValid === false && passwordValid === false ){
       event.preventDefult();  }
};
