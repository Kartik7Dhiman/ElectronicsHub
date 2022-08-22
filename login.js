var getemail=document.getElementById('email');
var getpass=document.getElementById('pass');
var getbtn=document.getElementById('btn');


function check(){
if(getemail.value==""){
    alert("Please Fill Data");
}
else if(getpass.value==""){
    alert("Please Fill Data");
}
else{
    alert("Login Successfull");
}
}
getbtn.addEventListener('click',check);