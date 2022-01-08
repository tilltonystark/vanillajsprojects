const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
document.getElementById("btn").addEventListener("click", function(){
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementsByClassName("color")[0].innerHTML = randomColor;

});

