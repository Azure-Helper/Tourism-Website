function validation(){

    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;



    if(user == ""){
        document.getElementById('username').innerHTML =" ** Please fill the username field";
        return false;
    }
    if(password == ""){
        document.getElementById('passwordd').innerHTML =" ** Please Enter Password";
        return false;
    }

}