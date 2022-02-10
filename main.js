/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    randomNumDiv = document.getElementById("random_num");
    randomNumDiv.innerHTML = Math.floor(Math.random() * 17);
}

let colors = ["#2F6EEE", "#2FEE94"];
let counter = 1;

function button2Clicked() {
    myCircle = document.getElementById("circle_blue_green");
    myCircle.style.fill = colors[counter % 2];
    counter++;
}