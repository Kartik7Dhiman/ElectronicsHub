var getname=document.getElementById('name');
var getemail=document.getElementById('email');
var getage=document.getElementById('age');
var getrole=document.getElementById('role');
var getcomment=document.getElementById('comment');
var getbtn=document.getElementById('submit');

function check(){
    if(getemail.value && getname.value && getage.value  && getcomment.value){
        alert("THANKS FOR YOUR FEEDBACK");
    }
 else{
    alert("PLEASE ENTER ALL DETAILS");
 }   
   
    }
    getbtn.addEventListener('click',check);