function validate(){
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var phone1 = document.getElementById('phone1').value;
    if(uname == ""){
        document.getElementById("usernamee").innerHTML ="Username Field Cannot Be Empty";
        return false; 
    }
    if((uname.length <= 2) || (uname.length > 20)) { 
        document.getElementById("usernamee").innerHTML ="Username Length Must be between 2 and 20";
         return false; 
     }
     if(!isNaN(uname)){
        document.getElementById('usernamee').innerHTML =" ** only characters are allowed";
        return false;
    }




    if(email == ""){
        document.getElementById('emaill').innerHTML =" ** Please fill the email id` field";
        return false;
    }
    if(email.indexOf('@') <= 0 ){
        document.getElementById('emaill').innerHTML =" ** @ Invalid Position";
        return false ;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emaill').innerHTML =" ** . Invalid Position";
        return false;
    }





    if(password1 == ""){
        document.getElementById('pass').innerHTML =" ** Please fill the password field";
        return false;
    }
    if((password1.length <= 5) || (password1.length > 20)) {
        document.getElementById('pass').innerHTML =" ** Passwords lenght must be between  5 and 20";
        return false;	
    }


    if(password1!=password2){
        document.getElementById('pass1').innerHTML =" ** Password does not match the confirm password";
        return false;
    }



    if(password2 == ""){
        document.getElementById('pass1').innerHTML =" ** Please fill the confirmpassword field";
        return false;
    }


    if(phone1 == ""){
        document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
        return false;
    }
    if(isNaN(phone1)){
        document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
        return false;
    }
    if(phone1.length!=10){
        document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
        return false;
    }




}
