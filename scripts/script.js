// JavaScript Document
console.log("hi");
var menubutton = document.querySelector("button")
var menuoptions = document.querySelector("#menuoptions")
menubutton.addEventListener('click', mendropdown)
function mendropdown(){
    console.log("geklikt");
    menuoptions.classList.toggle('hidden')
}