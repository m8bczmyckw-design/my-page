// ===============================
// EFFECTS
// ===============================

function glitch(ms = 500){

document.body.classList.add("glitch");

setTimeout(()=>{

document.body.classList.remove("glitch");

},ms);

}

function flash(color="#00ff66"){

const flash=document.createElement("div");

flash.style.position="fixed";
flash.style.inset="0";
flash.style.background=color;
flash.style.opacity=".18";
flash.style.pointerEvents="none";
flash.style.zIndex="9999";

document.body.appendChild(flash);

setTimeout(()=>{

flash.remove();

},120);

}

function scan(text){

const hint=document.getElementById("hint");

hint.textContent=text;

}

function processing(){

const status=document.getElementById("status");

const list=[

"ANALYZING",

"READING",

"PROCESSING",

"SYNCHRONIZING"

];

let i=0;

const timer=setInterval(()=>{

status.textContent=list[i];

i++;

if(i>=list.length){

clearInterval(timer);

status.textContent="SIGNAL UNSTABLE";

}

},180);

}

function transition(){

glitch();

flash();

processing();

scan("SCANNING NEURAL DATA...");

}
