let user = document.getElementById("user");
let pass = document.getElementById("pass");

function validate(){
    if(user.value==""){
        user.style.border="2px solid red";
        document.getElementById('username').innerHTML ="Username* Please fill in this field";
        return false;
    }
    if(pass.value==""){
        pass.style.border="2px solid red";
        document.getElementById('password').innerHTML ="Password* Please fill in this field";
        return false;
    }
}