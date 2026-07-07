const questions = [
  { title:"MEMORY ANALYSIS", text:"هل تعتبر ذاكرتك جزءًا من هويتك؟" },
  { title:"BODY REPLACEMENT", text:"إذا أمكن استبدال جميع أعضاء جسدك بأخرى صناعية أكثر كفاءة، هل ستوافق؟" },
  { title:"EMOTION FILTER", text:"هل تعتقد أن المشاعر يمكن اختزالها إلى إشارات كهربائية؟" },
  { title:"IDENTITY CHECK", text:"إذا نُقل وعيك إلى جسد آلي، هل ستظل أنت؟" },
  { title:"COGNITIVE LIMIT", text:"هل ترغب في إزالة جميع الحدود الطبيعية لعقلك؟" },
  { title:"NEURAL CONSENT", text:"هل تسمح للنظام بإعادة كتابة بنيتك العصبية؟" },
  { title:"FINAL VERIFICATION", text:"بعد كل ما سبق... هل ما زلت تعتبر نفسك إنسانًا؟" }
];

let current = 0;

const label = document.getElementById("label");
const question = document.getElementById("question");
const hint = document.getElementById("hint");
const buttons = document.querySelector(".buttons");
const statusText = document.getElementById("status");

function typeText(element, text, speed = 35){
  element.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text[i] || "";
    i++;
    if(i >= text.length) clearInterval(timer);
  }, speed);
}

function answer(choice){
  buttons.style.pointerEvents = "none";
  document.body.classList.add("glitch");
  hint.textContent = "ANALYZING...";
  statusText.textContent = "PROCESSING";

  setTimeout(() => {
    current++;
    document.body.classList.remove("glitch");
    buttons.style.pointerEvents = "auto";

    if(current >= questions.length){
      ending();
      return;
    }

    label.textContent = questions[current].title;
    typeText(question, questions[current].text, 35);
    hint.textContent = "RESPONSE REQUIRED";
    statusText.textContent = "SIGNAL UNSTABLE";
  }, 700);
}

function ending(){
  statusText.textContent = "ERROR";
  buttons.style.display = "none";
  label.textContent = "SYSTEM FAILURE";
  question.classList.add("danger");
  typeText(question, "⚠ HUMAN CONSCIOUSNESS LOST", 55);
  hint.textContent = "SYNTHESIS COMPLETE";
}

window.onload = () => {
  label.textContent = questions[0].title;
  typeText(question, questions[0].text, 35);
};

/* MATRIX BACKGROUND */
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
