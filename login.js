let username = document.getElementById("username");
let pass  = document.getElementById("pass");
function validation(){
    // if(username.value==""||pass.value==""){
    //     alert("fields cannot be empty");
    //     return false;
    
    if(username.value!="admin"||pass.value!="12345")
    {alert("username or password is invalid");
   return false;
}
else{
    return true;
}
}
