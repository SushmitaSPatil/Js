// function doSomething(){
//     alert("Radhe Radhe ")

// let button=document.getElementById('btn')

// button.onclick=() => {
//     alert("Krishnam Vande Jadagaguru")
// }
// let button=document.getElementById('btn')

// button.onclick=() => {
//     alert("Krishnam Vande Jadagaguru")
// }
// button.onclick=() => {
//     console.log("button clicked")
// }

let button=document.getElementById('btn')

function one(){
    alert("Radha Krishna")
}
function two(){
    console.log("button clicked")
}
button.addEventListener('click',one);
button.addEventListener('click',two);