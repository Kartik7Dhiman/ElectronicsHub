var getname=document.getElementById('name');
var getuser=document.getElementById('user');
var getemail=document.getElementById('email');
var getpass=document.getElementById('pass');
var getcpass=document.getElementById('cpass');
var getage=document.getElementById('age');
var getbtn=document.getElementById('btn');

function check(){
    if(getemail.value && getname.value && getage.value  && getuser.value && getpass.value && getcpass.value ){
        alert("Sign Up Succesfull");
    }
 else{
    alert("PLEASE ENTER ALL DETAILS");
 }   
   
    }
    getbtn.addEventListener('click',check);