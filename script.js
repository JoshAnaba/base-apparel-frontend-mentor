function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function validate(){

    const email = $("#email").val();
     if(document.emailForm.email.value == ''){
         alert('Please provide your email address!');
         document.emailForm.email.focus();
         return false;
     }
    
     else  if (!validateEmail(email)){
        alert(email + " is not valid :(");
        document.emailForm.email.focus();
        return false;
     }
     else {
        alert(email + " is valid :)");
        return true;
      }
}

$("#submit-btn").on("click", validate);