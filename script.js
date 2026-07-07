// ===============================
// SYNTHESIS PROTOCOL
// PART 1
// ===============================

const questions = [

{
title:"MEMORY ANALYSIS",
text:"هل تعتبر ذاكرتك جزءًا من هويتك؟"
},

{
title:"BODY REPLACEMENT",
text:"إذا أمكن استبدال جميع أعضاء جسدك بأخرى صناعية أكثر كفاءة، هل ستوافق؟"
},

{
title:"EMOTION FILTER",
text:"هل تعتقد أن المشاعر ليست سوى إشارات كهربائية؟"
},

{
title:"IDENTITY CHECK",
text:"إذا تم نقل وعيك إلى جسد آلي بالكامل، هل ستظل أنت؟"
},

{
title:"COGNITIVE LIMIT",
text:"هل توافق على إزالة جميع الحدود الطبيعية لعقلك؟"
},

{
title:"NEURAL CONSENT",
text:"هل تسمح للنظام بإعادة كتابة بنيتك العصبية؟"
},

{
title:"FINAL VERIFICATION",
text:"بعد كل ما سبق... هل ما زلت تعتبر نفسك إنسانًا؟"
}

];

let current = 0;

const label = document.getElementById("label");
const question = document.getElementById("question");
const hint = document.getElementById("hint");
const buttons = document.querySelector(".buttons");
const statusText = document.getElementById("status");

function typeText(element,text,speed=28){

element.textContent="";

let i=0;

const timer=setInterval(()=>{

element.textContent+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},speed);

}

function loadQuestion(){

label.textContent=questions[current].title;

typeText(question,questions[current].text);

hint.textContent="RESPONSE REQUIRED";

statusText.textContent="SIGNAL UNSTABLE";

}

window.onload=()=>{

loadQuestion();

};

function answer(choice){

buttons.style.pointerEvents="none";

document.body.classList.add("glitch");

hint.textContent="PROCESSING...";

statusText.textContent="ANALYZING";

setTimeout(()=>{

document.body.classList.remove("glitch");

current++;

if(current>=questions.length){

startEnding();

return;

}

buttons.style.pointerEvents="auto";

loadQuestion();

},700);

}

function startEnding(){

buttons.style.display="none";

statusText.textContent="SYSTEM FAILURE";

const sequence=[

"Reading consciousness...",

"Scanning neural activity...",

"Removing biological limitations...",

"Uploading synthetic identity...",

""

];

let step=0;

function next(){

if(step<sequence.length){

typeText(question,sequence[step],20);

step++;

setTimeout(next,1200);

}else{

showFailure();

}

}

next();

}

function showFailure(){

label.textContent="ERROR";

question.classList.add("danger");

question.innerHTML=`

<div class="final-party">

⚠ HUMAN CONSCIOUSNESS LOST

<br><br>

WELCOME VERSION 2.0

</div>

`;

hint.textContent="SYNTHESIS COMPLETE";

statusText.textContent="OFFLINE";

}

// ===== MATRIX =====

const canvas=document.getElementById("matrix");

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

columns=Math.floor(canvas.width/fontSize);

drops=new Array(columns).fill(1);

}

const fontSize=16;

let columns=0;

let drops=[];

resize();

window.addEventListener("resize",resize);

const chars="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function matrix(){

ctx.fillStyle="rgba(0,0,0,.08)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff66";

ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const char=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(char,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height&&Math.random()>.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(matrix,35);
