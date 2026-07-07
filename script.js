const questions = [
{
title:"MEMORY ANALYSIS",
text:"هل تعتبر ذاكرتك جزءًا من هويتك؟"
},
{
title:"BODY REPLACEMENT",
text:"إذا أمكن استبدال جسدك بالكامل بآلة، هل ستوافق؟"
},
{
title:"EMOTION FILTER",
text:"هل المشاعر مجرد إشارات كهربائية يمكن استبدالها؟"
},
{
title:"COGNITIVE LIMIT",
text:"هل ترغب بإزالة جميع حدود عقلك البشري؟"
},
{
title:"NEURAL CONSENT",
text:"هل تسمح للنظام بإعادة كتابة وعيك؟"
},
{
title:"IDENTITY CHECK",
text:"إذا أصبحت نسخة رقمية منك... هل ما زلت أنت؟"
},
{
title:"FINAL VERIFICATION",
text:"بعد كل ما سبق... هل ما زلت تعتبر نفسك إنسانًا؟"
}
];

let current=0;

function answer(choice){

document.body.classList.add("glitch");

document.getElementById("hint").textContent="PROCESSING...";

setTimeout(()=>{

document.body.classList.remove("glitch");

current++;

if(current>=questions.length){

endSequence();

return;

}

document.getElementById("label").textContent=questions[current].title;

document.getElementById("question").textContent=questions[current].text;

document.getElementById("hint").textContent="RESPONSE REQUIRED";

},500);

}

function endSequence(){

document.getElementById("label").textContent="SYSTEM";

document.getElementById("question").textContent="⚠ HUMAN CONSCIOUSNESS LOST";

document.getElementById("question").classList.add("danger");

document.querySelector(".buttons").style.display="none";

document.getElementById("hint").textContent="SYNTHESIS COMPLETE";
}
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeMatrix(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener("resize", resizeMatrix);

const letters = "01 SYNTHESIS HUMAN MACHINE ERROR ";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix(){
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff66";
  ctx.font = fontSize + "px monospace";

  for(let i=0;i<drops.length;i++){
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
      drops[i]=0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix,45);
