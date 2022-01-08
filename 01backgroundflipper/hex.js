const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.getElementById("btn").addEventListener("click", function(){
    let bgColor = "#";
    for(let i=0; i<6; i++){
    var randomIndex = Math.floor(Math.random()*hex.length);
    bgColor += hex[randomIndex];
    }
    document.body.style.backgroundColor = bgColor;

    //selecting the same element with different method
    document.querySelector(".color").innerHTML = bgColor;
})