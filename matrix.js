const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let w,h;
let fontSize=18;
let columns;
let drops=[];

function resize(){

w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;

columns=Math.floor(w/fontSize);

drops=[];

for(let i=0;i<columns;i++){

drops[i]=Math.random()*h/fontSize;

}

}

resize();

window.addEventListener("resize",resize);

const chars="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function draw(){

ctx.fillStyle="rgba(0,0,0,.07)";
ctx.fillRect(0,0,w,h);

ctx.fillStyle="#00ff66";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

let text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

drops[i]++;

if(drops[i]*fontSize>h && Math.random()>.985){

drops[i]=0;

}

}

requestAnimationFrame(draw);

}

draw();
