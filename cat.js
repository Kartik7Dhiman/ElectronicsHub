const buttons = document.getElementsByClassName('button');
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick=myFunction;
}

function myFunction() {
    alert("Item added to cart!!");
  }
