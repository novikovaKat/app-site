var menu = document.getElementById("nav-menu");
var regmodal = document.getElementById("reg-modal");
var logmodal = document.getElementById("log-modal");
var logbutton = document.getElementById("log-button");
var regbutton = document.getElementById("reg-button");
var closeReg = document.getElementById("close-reg");
var closeLog = document.getElementById("close-log");

function toggleMenu() {    
    if (menu.className === "menu") {
      menu.classList.add("responsive");
    } else {
      menu.classList.remove("responsive");
    }
}

function closeNav(){
    menu.className = "menu";
}

logbutton.onclick = function(){
  logmodal.style.display = "flex";
}

regbutton.onclick = function(){
  regmodal.style.display = "flex";
}

window.onclick = function(e){
  if(e.target == logmodal || e.target == regmodal){
    e.target.style.display = 'none';
  }
}

closeLog.onclick = function(){
  logmodal.style.display = "none";
}

closeReg.onclick = function(){
  regmodal.style.display = "none";
}
