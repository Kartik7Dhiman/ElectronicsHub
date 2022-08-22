const buttons = document.getElementsByClassName('button');
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick=myFunction;
}

function myFunction() {
    alert("Item added to cart!!");
  }


  const imgs=[];
imgs[0]="b1.webp";
imgs[1]="b2.jpg";
imgs[2]="banner.jpg";
imgs[3]="b3.webp";
// imgs[3]="pics/friday.jpg";




var i=0;
const time=2000;
function chngimg(){
    document.querySelector('.imgs').src=imgs[i];
    // console.log("chaged");
    if(i<imgs.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout( "chngimg()", time);

}
window.onload=chngimg;