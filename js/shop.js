var plusButton=Array.from(document.getElementsByClassName("add"))
console.log(plusButton)
for(let i=0;i<plusButton.length;i++){
  plusButton[i].addEventListener("click",function(){
    plusButton[i].nextElementSibling.innerHTML ++
    totalAmount()
  })
 
}

var minusButton=Array.from(document.getElementsByClassName("minus"))
for(let i=0;i<minusButton.length;i++){
   minusButton[i].addEventListener("click",function(){
     if(minusButton[i].previousElementSibling.innerHTML >0){
    minusButton[i].previousElementSibling.innerHTML --
       totalAmount()
     }
  })
  
}

var trash=Array.from(document.getElementsByClassName("fa-trash-alt"))
console.log(trash)
for(let i=0;i<trash.length;i++){
  trash[i].addEventListener("click",function(){
    trash[i].parentNode.remove()
    totalAmount()
  })
 
}

var fav = Array.from(document.getElementsByClassName ("fa-heart"));
for (let i=0; i<fav.length; i++) {
fav[i].addEventListener("click",function () {
if (fav[i].style.color==="grey") { 
fav[i].style.color="red"}
else {
fav[i].style.color="grey"
}
}
)
}
 
function totalAmount(qte, price) {
 var quantity=document.getElementsByClassName("qte") 
 var price=document.getElementsByClassName("price") 
var sum=0
  for(let i=0;i<price.length;i++){
 sum +=price[i].innerHTML*quantity[i].innerHTML
  }
    return document.getElementById("totalp").innerHTML=`Shopping Bag total : $ ${sum}`
}