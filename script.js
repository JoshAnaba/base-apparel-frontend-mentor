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


// window.addEventListener("resize", ()=>{
//     var image1 = document.getElementById("img").src ="./images/hero-desktop.jpg";
//     var image2 = document.getElementById("img").src ="./images/hero-mobile.jpg";
//     var x = window.matchMedia("(max-width: 600px)")
//     if(x.matches){
//          image1;
//     }
//     else {
//         image2
//     };
// });


