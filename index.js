// let mw write the javascript code to toggle the share  button upon click 
//1-  get the ids of the various elements 
// 2-add the togglr classlist onit 
let icon = document.getElementById("share");
let dialog = document.getElementById("dialog");

icon.addEventListener("click", function(){
    dialog.classList.toggle("active");
});