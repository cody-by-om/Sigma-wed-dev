console.log("Hello World");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";
console.log(document.querySelectorAll(".box"));


console.log(document.querySelectorAll(".box").forEach(f =>{
    f.style.backgroundColor = "blue"
}))