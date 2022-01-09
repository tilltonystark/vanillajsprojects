
// Method 1 (Mine)

var timer = document.getElementById("value");
var count=0;

// We are selecting the increase button and adding event listener
document.querySelector(".increase").addEventListener("click", function(){
    timer.textContent = ++count;
    if(count>0){
        timer.style.color = "hsl(125, 67%, 44%)";
    }

})

// for Reset Button
document.querySelector(".reset").addEventListener("click", function(){
    count = 0;
    timer.textContent = count;
    timer.style.color = "hsl(205, 86%, 17%)";
})

//For Decrease button
document.querySelector(".decrease").addEventListener("click", function(){
    timer.textContent = --count;
    if(count<0){
        timer.style.color = "hsl(360, 67%, 44%)";
    }

})



// // Method 2 (Tutorial) - There's some error, will fix this.

// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function (event) {
//         const styles = event.currentTarget.classList;
        
//         if(styles.contains("increase")){
//             count++;
//         } else if(styles.contains("decrease")){
//             count--;
//         }else {
//             count = 0;
//         }

//         if(count>0){
//             value.style.color = "green"; 
//         }
//         if(count<0){
//             value.style.color = "red";
//         }
//         if(count === 0){
//             value.style.color = "#222"
//         }
//     })
// })