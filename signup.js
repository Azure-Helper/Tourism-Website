let uname = document.getElementById('uname');
let email = document.getElementById('email');
let phone1 = document.getElementById('phone1');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');

function validate(){
    if(uname.value == ""){
        uname.style.border="2px solid red";
        document.getElementById("username1").innerHTML ="Username* Field Cannot Be Empty";
        return false; 
    }
    if((uname.value.length <= 2) || (uname.value.length > 20)) {
        uname.style.border="2px solid red"; 
        document.getElementById("username1").innerHTML ="Username* Length Must be between 2 and 20";
        return false; 
     }
     if(!isNaN(uname.value)){
         uname.style.border="2px solid red";
         document.getElementById('username1').innerHTML ="Username* Only Characters are allowed";
         return false;
    }

    if(email.value == ""){
        email.style.border="2px solid red";
        document.getElementById('email1').innerHTML ="Email* Field Cannot Be Empty";
        return false;
    }
    if(email.value.indexOf('@') <= 0 ){
        email.style.border="2px solid red";
        document.getElementById('email1').innerHTML ="Email* @ Invalid Position";
        return false ;
    }
    if((email.value.charAt(email.value.length-4)!='.') && (email.value.charAt(email.value.length-3)!='.')){
        email.style.border="2px solid red";
        document.getElementById('email1').innerHTML ="Email* . Invalid Position";
        return false;
    }

    if(phone1.value == ""){
        phone1.style.border="2px solid red";
        document.getElementById('phoneno').innerHTML ="Phone* Field Cannot Be Empty";
        return false;
    }
    if(isNaN(phone1.value)){
        phone1.style.border="2px solid red";
        document.getElementById('phoneno').innerHTML ="Phone* Only Digits are allowed";
        return false;
    }
    if(phone1.value.length!=10){
        phone1.style.border="2px solid red";
        document.getElementById('phoneno').innerHTML ="Phone* Length Must be 10 digits only";
        return false;
    }

    if(password1.value == ""){
        password1.style.border="2px solid red";
        document.getElementById('pass1').innerHTML ="Password* Field Cannot Be Empty";
        return false;
    }
    if((password1.value.length <= 5) || (password1.value.length > 20)) {
        password1.style.border="2px solid red";
        document.getElementById('pass1').innerHTML ="Password* Length Must be between 5 and 20";
        return false;	
    }

    if(password1.value!=password2.value){
        password2.style.border="2px solid red";
        document.getElementById('pass2').innerHTML ="Confirm Password* Does not match";
        return false;
    }
    if(password2.value == ""){
        password2.style.border="2px solid red";
        document.getElementById('pass2').innerHTML ="Confirm Password* Field Cannot Be Empty";
        return false;
    }

}