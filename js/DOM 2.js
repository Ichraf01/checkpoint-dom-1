


document.addEventListener("DOMContentLoaded",function(){
    var changeColor = document.getElementById("color-box");
    var button = document.getElementById("change-color-btn");

    function getRandomColor(){
        var a = Math.floor(Math.random()*256)
        var b = Math.floor(Math.random()*256)
        var c = Math.floor(Math.random()*256)
    return  `rgb(${a},${b},${c})`
     
            }


button.addEventListener("click",function(){
    changeColor.style.backgroundColor=getRandomColor()
})



})


/*
changeColor.addEventListener("click", function(){
    getRandomColor();

 */
