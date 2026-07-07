// ===============================
// QUESTIONS
// ===============================

const QUESTIONS = [

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
text:"هل المشاعر مجرد إشارات كهربائية يمكن إعادة برمجتها؟"
},

{
title:"IDENTITY CHECK",
text:"إذا نُقل وعيك بالكامل إلى آلة... هل ستظل أنت؟"
},

{
title:"COGNITIVE LIMIT",
text:"هل توافق على إزالة جميع حدود العقل البشري؟"
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

let questionIndex = 0;

const label = document.getElementById("label");
const question = document.getElementById("question");
const hint = document.getElementById("hint");

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

const q = QUESTIONS[questionIndex];

label.textContent = q.title;

typeText(question,q.text);

hint.textContent="RESPONSE REQUIRED";

}

window.addEventListener("load",()=>{

loadQuestion();

});
