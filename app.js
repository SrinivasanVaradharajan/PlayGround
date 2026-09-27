/* NCERT Buddy — Classes 1-12 study/practice/revision/exam app. All data in-browser. */
"use strict";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const toast=m=>{const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(t._h);t._h=setTimeout(()=>t.style.display="none",2200);};
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- CURRICULUM: classes 1-12 subjects & chapter titles ---------- */
const SUBJECTS={
 1:["English (Marigold)","Hindi (Rimjhim)","Maths (Math Magic)"],2:["English (Marigold)","Hindi (Rimjhim)","Maths (Math Magic)"],
 3:["English (Marigold)","Hindi (Rimjhim)","Maths (Math Magic)","EVS (Looking Around)"],
 4:["English (Marigold)","Hindi (Rimjhim)","Maths (Math Magic)","EVS (Looking Around)"],
 5:["English (Marigold)","Hindi (Rimjhim)","Maths","EVS (Looking Around)"],
 6:["English (Honeysuckle)","Hindi (Vasant)","Sanskrit (Ruchira)","Maths","Science","Social Science"],
 7:["English (Honeycomb)","Hindi (Vasant)","Sanskrit (Ruchira)","Maths","Science","Social Science"],
 8:["Mathematics","English","Hindi","Sanskrit","Science","Social Science"],
 9:["Maths","Science","English (Beehive)","Hindi (Kshitij)","Social Science","Sanskrit"],
 10:["Maths","Science","English (First Flight)","Hindi (Kshitij)","Social Science","Sanskrit"],
 11:["Physics","Chemistry","Maths","Biology","English (Hornbill)","Hindi (Aaroh)","Accountancy","Business Studies","Economics","History","Geography","Political Science"],
 12:["Physics","Chemistry","Maths","Biology","English (Flamingo)","Hindi (Aaroh)","Accountancy","Business Studies","Economics","History","Geography","Political Science"]};
const CHAPTERS={
 "8|Mathematics":["1 Rational Numbers","2 Linear Equations in One Variable","3 Understanding Quadrilaterals","4 Data Handling","5 Squares and Square Roots","6 Cubes and Cube Roots","7 Comparing Quantities","8 Algebraic Expressions & Identities","9 Mensuration","10 Exponents & Powers","11 Direct & Inverse Proportions","12 Factorisation","13 Introduction to Graphs"],
 "8|Science":["1 Crop Production and Management","2 Microorganisms: Friend and Foe","3 Coal and Petroleum","4 Combustion and Flame","5 Conservation of Plants and Animals","6 Cell — Structure and Functions","7 Reaching the Age of Adolescence","8 Force and Pressure","9 Friction","10 Sound","11 Chemical Effects of Electric Current","12 Light","13 Our Universe (Extension)"],
 "8|English":["Honeydew: The Best Christmas Present in the World","Honeydew: The Tsunami","Honeydew: Glimpses of the Past","Honeydew: Bepin Choudhury's Lapse of Memory","Honeydew: The Summit Within","Honeydew: This is Jody's Fawn","Honeydew: A Visit to Cambridge","Honeydew: A Short Monsoon Diary","Poems: The Ant and the Cricket","Poems: Geography Lesson"],
 "8|Hindi":["Vasant: Dhwani","Vasant: Lakhnavi Andaaz","Vasant: Bus ki Yatra","Vasant: Deewanon ki Hasti","Vasant: Chitthiyon ki Anoothi Duniya","Vasant: Bhagwan ke Daakiye","Vasant: Kya Nirash Hua Jaaye","Bharat ki Khoj (supplementary)"],
 "8|Sanskrit":["Ruchira: Subhashitani","Ruchira: Bilasya Vani","Ruchira: Digital Bharatam","Ruchira: Savitri Bai Phule","Ruchira: Kritrim Upagraha","Ruchira: Saptabhaginya: Pradesh (NE states)","Ruchira: Neetishlokas"],
 "8|Social Science":["History: How, When and Where","History: From Trade to Territory","History: Ruling the Countryside","History: Tribals, Dikus and Vision","History: When People Rebel (1857)","History: Civilising the Native, Educating the Nation","Geography: Resources","Geography: Land, Soil, Water","Geography: Agriculture","Geography: Industries","Civics: The Indian Constitution","Civics: Understanding Secularism","Civics: Public Facilities","Civics: Judiciary"]};
function chaptersFor(g,s){
  const k=g+"|"+s;
  if(CHAPTERS[k])return CHAPTERS[k];
  const base={Maths:["1 Number System","2 Algebra Basics","3 Geometry","4 Mensuration","5 Data Handling"],Science:["1 Living World","2 Materials","3 Motion & Force","4 Energy","5 Our Environment"]}[s.split(" ")[0]]||null;
  if(base)return base;
  // generic 8-chapter scaffold
  return ["Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Chapter 6","Chapter 7","Chapter 8"].map((c,i)=>`${i+1} ${s} — Unit ${i+1}`);
}

/* ---------- DETAILED CONTENT (textbook-grounded demo notes for Class 8) ---------- */
const CONTENT={
 "8|Mathematics|1 Rational Numbers":{summary:"Rational numbers are numbers of the form p/q (q≠0). They close under +, −, × but not always ÷. Key properties: closure, commutativity, associativity, distributive law; role of 0 and 1; additive/multiplicative inverses; representation on number line; finding rationals between two rationals.",
  concepts:["Definition p/q, q≠0; integers & whole numbers are rationals","Closure & commutativity: + and × commutative; − and ÷ not","Associativity + distributivity: a×(b+c)=a×b+a×c","0 = additive identity; 1 = multiplicative identity","Inverses: additive inverse −a; reciprocal a→1/a (a≠0)","Number line representation; denseness: infinite rationals between any two"],
  defs:[["Rational number","p/q where p,q integers, q≠0"],["Additive inverse","Number added to give 0, e.g. 3/4 → −3/4"],["Multiplicative inverse (reciprocal)","Number multiplied to give 1, e.g. 2/7 → 7/2"]],
  examples:["Simplify 3/5 + (−2/3) = 9/15 − 10/15 = −1/15.","Verify distributive: 2/3×(3/4+1/2)=2/3×5/4=10/12=5/6."],
  facts:["Division by zero is not defined — q can never be 0.","Between any two rationals there are infinitely many rationals (e.g. mean method)."],
  questions:[{t:"mcq",q:"Which is a rational number?",opts:["√2","π","3/4","0/0"],a:2,ex:"3/4 is p/q form with q≠0.",d:"Easy"},{t:"tf",q:"Subtraction of rational numbers is commutative.",a:false,ex:"a−b ≠ b−a generally.",d:"Easy"},{t:"blank",q:"The additive identity for rational numbers is ___.",a:"0",ex:"a+0=a.",d:"Easy"},{t:"short",q:"Find the additive inverse of −5/8.",a:"5/8",keys:["5/8"],ex:"−5/8 + 5/8 = 0.",d:"Easy",marks:2},{t:"short",q:"Represent 7/4 on a number line. Describe steps.",a:"7/4 = 1.75 lies between 1 and 2; divide unit into 4 equal parts, mark 7th quarter from 0.",keys:["1.75","between 1 and 2","four","quarter"],ex:"Convert to decimal/quarters.",d:"Medium",marks:3},{t:"long",q:"Verify closure, commutativity and associativity of addition for 1/2, −1/3, 1/4.",a:"Sums stay rational; a+b=b+a; (a+b)+c=a+(b+c) — show with common denominator 12.",keys:["rational","commut","associat","12"],ex:"Compute stepwise.",d:"Hard",marks:5},{t:"assert",q:"Assertion (A): Every integer is a rational number. Reason (R): Integers can be written as p/1.",a:"Both true, R explains A",ex:"n = n/1.",d:"Medium"},{t:"match",pairs:[["0","additive identity"],["1","multiplicative identity"],["−a","additive inverse"],["1/a","reciprocal"]],ex:"Identity/inverse map.",d:"Medium"}]},
 "8|Science|1 Crop Production and Management":{summary:"Crops are plants grown on large scale. Kharif (rainy, e.g. paddy, maize) vs Rabi (winter, e.g. wheat, gram). Practices: preparation of soil (ploughing, levelling, manuring), sowing (seed selection, seed drill), manures vs fertilisers, irrigation (drip, sprinkler), weeding, harvesting, storage; animal husbandry basics.",
  concepts:["Kharif vs Rabi seasons with examples","Soil preparation: ploughing, levelling, manuring","Sowing: quality seeds, spacing, seed drill","Manure (organic, slow) vs fertiliser (chemical, fast, excess harms soil)","Irrigation methods: traditional vs drip/sprinkler","Weeding, harvesting, threshing, winnowing, storage (granaries, drying, neem)"],
  defs:[["Kharif crops","Sown in rainy season June–Sept, e.g. paddy, maize, soybean"],["Rabi crops","Sown in winter Oct–Mar, e.g. wheat, gram, mustard"],["Weeds","Unwanted plants competing for nutrients; removed by weeding/weedicides"],["Threshing","Separating grains from chaff/stalks"],["Fertiliser","Chemical nutrient salt, e.g. urea/NPK — use in right dose"]],
  examples:["Paddy is Kharif; wheat is Rabi.","Drip irrigation saves water in orchards."],
  facts:["Loose soil helps roots breathe; ploughing brings nutrients up.","Continuous fertiliser use reduces soil fertility — rotate with manure."],
  questions:[{t:"mcq",q:"Which is a Kharif crop?",opts:["Wheat","Gram","Paddy","Mustard"],a:2,ex:"Paddy sown in rains.",d:"Easy"},{t:"mcq-multi",q:"Select Rabi crops.",opts:["Paddy","Wheat","Gram","Maize"],a:[1,2],ex:"Wheat & gram are winter crops.",d:"Medium"},{t:"tf",q:"Manure enriches soil with humus and improves texture.",a:true,ex:"Organic matter benefit.",d:"Easy"},{t:"blank",q:"Separating grain from chaff is called ___.",a:"threshing",ex:"Threshing/winnowing.",d:"Easy"},{t:"short",q:"Distinguish manure and fertiliser (2 points).",a:"Manure: organic, bulky, slow-release, improves texture. Fertiliser: chemical salt, concentrated, fast, excess harms soil/water.",keys:["organic","chemical","slow","fast","texture","excess"],ex:"Compare source & effect.",d:"Medium",marks:3},{t:"case",q:"Case: A farmer's wheat yield falls after years of urea-only use. (a) Why? (b) Suggest two remedies.",a:"(a) Soil fertility/microbes depleted, imbalance. (b) Soil testing, balanced dose, add manure/compost, crop rotation/legumes.",keys:["fertility","soil test","manure","rotation","balanced"],ex:"Apply concept.",d:"Hard",marks:4},{t:"match",pairs:[["Drip","saves water, near roots"],["Sprinkler","spray, uneven land"],["Seed drill","uniform sowing depth"],["Winnowing","separate by wind"]],ex:"Practices map.",d:"Medium"}]},
 "8|Science|8 Force and Pressure":{summary:"Force is push/pull changing motion or shape. Contact (muscular, friction) vs non-contact (magnetic, electrostatic, gravitational). Pressure = force/area; liquids/gases exert pressure; atmospheric pressure acts all around.",
  concepts:["Force: magnitude + direction; can change speed, direction, shape","Contact vs non-contact forces","Pressure = F/A; smaller area → more pressure","Liquid pressure increases with depth; gases exert pressure","Atmospheric pressure; everyday examples (suction, syringes)"],
  defs:[["Force","Push or pull with magnitude and direction (unit newton)"],["Pressure","Force per unit area, P=F/A (pascal)"],["Atmospheric pressure","Weight of air column pressing on surfaces"]],
  examples:["Sharp knife cuts easily — same force, smaller area.","Nails on one side of a balloon vs a bed of nails."],
  facts:["Liquids exert equal pressure at same depth.","Aporter pressure decreases with altitude."],
  questions:[{t:"mcq",q:"SI unit of pressure?",opts:["Newton","Pascal","Joule","Watt"],a:1,ex:"P=F/A in pascals.",d:"Easy"},{t:"short",q:"Why does a sharp knife cut better? Use P=F/A.",a:"Same force over smaller area gives larger pressure.",keys:["area","pressure","smaller","larger"],ex:"Application.",d:"Medium",marks:2},{t:"num",q:"A 50 N force acts on 0.5 m². Find pressure.",a:"100 Pa",keys:["100"],ex:"50/0.5=100 Pa.",d:"Medium",marks:2},{t:"assert",q:"Assertion: Liquid pressure increases with depth. Reason: Weight of liquid above increases.",a:"Both true, R explains A",ex:"Hydrostatic.",d:"Medium"}]},
 "8|Mathematics|9 Mensuration":{summary:"Mensuration: area/volume of plane & solid shapes. Area of trapezium = ½×(sum of parallel sides)×height; rhombus = ½×d1×d2; cube/cuboid surface area & volume; cylinder CSA=2πrh, volume=πr²h.",
  concepts:["Trapezium & rhombus area formulas","Surface area vs volume","Cuboid: TSA=2(lb+bh+hl), V=lbh; Cube: 6a², a³","Cylinder: CSA 2πrh, TSA 2πr(h+r), V πr²h"],
  defs:[["Area","Surface covered (square units)"],["Volume","Space occupied (cubic units)"]],
  examples:["Trapezium a=6,b=10,h=4 → A=½×16×4=32 cm².","Cylinder r=7,h=10 → V=π×49×10≈1540 cm³."],
  facts:["Use consistent units; convert before computing."],
  questions:[{t:"mcq",q:"Area of trapezium with parallel sides 6,10 and height 4?",opts:["32","64","16","40"],a:0,ex:"½×16×4=32.",d:"Medium"},{t:"num",q:"Cube side 5 cm. Volume?",a:"125 cm³",keys:["125"],ex:"5³=125.",d:"Easy",marks:2},{t:"short",q:"Derive rhombus area = ½ d1 d2 in one line idea.",a:"Rhombus = 4 right triangles or two diagonals split; area sums to half product.",keys:["diagonal","half","product"],ex:"Diagram reasoning.",d:"Hard",marks:3}]}
};
function contentFor(g,s,ch){
  const key=`${g}|${s}|${ch.split(" ").slice(0,1).join("")} ${ch.split(" ").slice(1).join(" ")}`;
  const direct=CONTENT[`${g}|${s}|${ch}`];
  if(direct)return direct;
  // fallback: find by chapter number
  const num=parseInt(ch);
  for(const k of Object.keys(CONTENT)){if(k.startsWith(`${g}|${s}|${num} `)||k.startsWith(`${g}|${s}|${num}`))return CONTENT[k];}
  // generic scaffold (clearly labelled as outline from chapter title, needs textbook verify)
  const title=ch.replace(/^\d+\s*/,"");
  return {summary:`${ch} (${s}, Class ${g}): study the NCERT definitions, worked examples, tables/diagrams and end-exercise questions for “${title}”. Use your uploaded textbook PDF as source of truth; the points below are a study scaffold.`,
   concepts:[`Core definitions of “${title}”`,`Worked examples & tables from the textbook`,`End-exercise question types & key terms`,`Diagrams/maps/formulas to practise`],
   defs:[[title,"See textbook definition — write it in your own words and verify against the PDF."]],
   examples:[`Work through the textbook's solved examples for ${title}.`],
   facts:[`Make a one-page formula/fact sheet for ${title}.`,"I couldn't verify details beyond the chapter title without the uploaded textbook — check the PDF."],
   questions:[
    {t:"mcq",q:`Which best describes the focus of “${title}”?`,opts:["As defined in the NCERT chapter","An unrelated topic","A non-syllabus story","None of these"],a:0,ex:"Answerable from the chapter.",d:"Easy"},
    {t:"short",q:`Define the key term of “${title}” in 2–3 lines (verify from textbook).`,a:"Textbook definition in own words.",keys:[title.split(" ")[0].toLowerCase()],ex:"Credit any correct wording.",d:"Medium",marks:2},
    {t:"long",q:`Explain “${title}” with one example and one exam-style question.`,a:"Structured answer with example.",keys:["example"],ex:"Reward completeness.",d:"Hard",marks:5}]};
}

/* ---------- STUDENT STORE (context isolation per profile) ---------- */
const LS="ncertBuddy.v1";
let DB=JSON.parse(localStorage.getItem(LS)||"{}");
if(!DB.students)DB={students:{"Student 1":{mistakes:[],attempts:[],flash:{},uploads:{}}},current:"Student 1"};
const save=()=>localStorage.setItem(LS,JSON.stringify(DB));
const me=()=>DB.students[DB.current];

/* ---------- SELECTORS ---------- */
const gSel=$("#gradeSelect"),sSel=$("#subjectSelect"),cSel=$("#chapterSelect");
function initSelectors(){
  gSel.innerHTML=Object.keys(SUBJECTS).map(g=>`<option value="${g}">Class ${g}</option>`).join("");
  gSel.value="8";
  const fillSub=()=>{sSel.innerHTML=SUBJECTS[gSel.value].map(s=>`<option>${esc(s)}</option>`).join("");fillCh();};
  const fillCh=()=>{cSel.innerHTML=chaptersFor(gSel.value,sSel.value).map(c=>`<option>${esc(c)}</option>`).join("");updateScope();};
  gSel.onchange=fillSub;sSel.onchange=fillCh;cSel.onchange=updateScope;
  fillSub();
  const st=$("#studentSelect");st.innerHTML=Object.keys(DB.students).map(n=>`<option ${n===DB.current?"selected":""}>${esc(n)}</option>`).join("");
  st.onchange=()=>{DB.current=st.value;save();renderMistakes();toast("Switched to "+DB.current+" — only their data is used.");};
  $("#addStudentBtn").onclick=()=>{const n=prompt("Student name?","Student "+(Object.keys(DB.students).length+1));if(!n)return;DB.students[n]={mistakes:[],attempts:[],flash:{},uploads:{}};DB.current=n;save();location.reload();};
  $("#allChaptersBtn").onclick=()=>{[...cSel.options].forEach(o=>o.selected=true);updateScope();};
}
function scope(){const ch=[...cSel.selectedOptions].map(o=>o.value);return{grade:gSel.value,subject:sSel.value,chapters:ch.length?ch:chaptersFor(gSel.value,sSel.value).slice(0,1)};}
function updateScope(){const s=scope();$("#scopePill").textContent=`Class ${s.grade} • ${s.subject} • ${s.chapters.length} ch`;loadEvalQuestions();}

/* ---------- MODE NAV ---------- */
$$("#modeNav button").forEach(b=>b.onclick=()=>{$$("#modeNav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");$$(".panel").forEach(p=>p.classList.toggle("hidden",p.dataset.panel!==b.dataset.mode));});
$("#booksBtn").onclick=()=>{$$("#modeNav button").forEach(x=>x.classList.toggle("active",x.dataset.mode==="library"));$$(".panel").forEach(p=>p.classList.toggle("hidden",p.dataset.panel!=="library"));buildLibrary();};

/* ---------- STUDY / AUDIO / SLIDES / INFOGRAPHIC ---------- */
function scopeContent(){const s=scope();return s.chapters.map(ch=>({ch,c:contentFor(s.grade,s.subject,ch)}));}
$("#studyQuickBtn").onclick=()=>renderStudy(false);$("#studyDetailBtn").onclick=()=>renderStudy(true);
$("#studyPrintBtn").onclick=()=>window.print();
function renderStudy(detail){
  const s=scope(),items=scopeContent();
  $("#studyOut").innerHTML=items.map(({ch,c})=>`<article><h3>${esc(ch)} <small>(${esc(s.subject)}, Class ${s.grade})</small></h3>
   <p><b>Quick summary:</b> ${esc(c.summary)}</p>
   ${detail?`<div class="kc"><b>Key concepts</b><ul>${c.concepts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
   <p><b>Definitions</b></p><table><tr><th>Term</th><th>Meaning</th></tr>${c.defs.map(d=>`<tr><td>${esc(d[0])}</td><td>${esc(d[1])}</td></tr>`).join("")}</table>
   <p><b>Examples:</b></p><ul>${c.examples.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
   <p><b>Important facts:</b></p><ul>${c.facts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`: ""}
   <div class="check"><b>⚡ Quick check:</b> ${esc(c.questions[0]?.q||"Recite the summary in 30 seconds.")}</div></article><hr>`).join("");
}
$("#audioBuildBtn").onclick=()=>{const items=scopeContent(),s=scope();
  $("#audioOut").textContent=`INTRO: Hello! This is your NCERT Buddy audio overview for Class ${s.grade} ${s.subject}.\n\n`+items.map(({ch,c},i)=>`CHAPTER ${i+1}: ${ch}.\nOverview: ${c.summary}\nConcepts: ${c.concepts.join("; ")}.\nExample: ${c.examples[0]||""}.\nKey facts: ${c.facts.join("; ")}.\nExam recap: revise definitions ${c.defs.map(d=>d[0]).join(", ")} and practise the important questions.`).join("\n\n");};
$("#audioPlayBtn").onclick=()=>{const t=$("#audioOut").textContent;if(!("speechSynthesis"in window))return toast("Speech not supported here");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.rate=.95;speechSynthesis.speak(u);};
$("#audioStopBtn").onclick=()=>speechSynthesis&&speechSynthesis.cancel();
$("#slidesBuildBtn").onclick=()=>{const items=scopeContent();
  $("#slidesOut").innerHTML=items.map(({ch,c})=>`<div class="slide"><h3>${esc(ch)}</h3><b>Objectives:</b> ${esc(c.summary)}<br><b>Concepts:</b><ul>${c.concepts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><b>Example:</b> ${esc(c.examples[0]||"—")}<br><b>Key points:</b> ${esc(c.facts.join(" • "))}<br><b>Questions:</b> ${esc(c.questions.slice(0,2).map(q=>q.q).join(" | "))}</div>`).join("");};
$("#slidesPrintBtn").onclick=()=>window.print();
$("#infoBuildBtn").onclick=()=>{const items=scopeContent(),cls=["c1","c2","c3","c4","c5"];
  $("#infoOut").innerHTML=items.map(({ch,c},i)=>`<div class="info-tile ${cls[i%5]}"><h3>${esc(ch)}</h3><p>${esc(c.summary)}</p><ul>${c.concepts.slice(0,4).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><b>Facts:</b> ${esc(c.facts[0]||"")}</p></div>`).join("");};

/* ---------- FLASHCARDS ---------- */
let FC=[],FCi=0;
$("#fcBuildBtn").onclick=()=>{FC=[];scopeContent().forEach(({ch,c})=>{c.defs.forEach(d=>FC.push({f:`${ch} → ${d[0]}`,b:d[1]}));c.concepts.forEach(x=>FC.push({f:`${ch}: explain?`,b:x}));c.facts.forEach(x=>FC.push({f:`${ch}: true fact?`,b:x}));});
  FCi=0;$("#fcCount").textContent=FC.length+" cards";drawFC();};
$("#fcShuffleBtn").onclick=()=>{FC.sort(()=>Math.random()-.5);FCi=0;drawFC();};
function drawFC(){if(!FC.length)return;$("#fcFront").textContent=FC[FCi].f;$("#fcBack").textContent=FC[FCi].b;$("#fcCard").classList.remove("flip");}
$("#fcCard").onclick=()=>$("#fcCard").classList.toggle("flip");
$("#fcFlipBtn").onclick=()=>$("#fcCard").classList.toggle("flip");
$("#fcPrevBtn").onclick=()=>{FCi=(FCi-1+FC.length)%FC.length;drawFC();};
$("#fcNextBtn").onclick=()=>{FCi=(FCi+1)%FC.length;drawFC();};
$("#fcKnownBtn").onclick=()=>{if(FC.length){me().flash[FC[FCi].f]=1;save();toast("Marked known ✓");$("#fcNextBtn").click();}};
$("#fcUnknownBtn").onclick=()=>{if(FC.length){me().flash[FC[FCi].f]=0;save();toast("Queued for revision");}};

/* ---------- QUESTION BANK + QUIZ ---------- */
function bank(diff){
  const s=scope();let items=scopeContent(),qs=[];
  if(diff==="Previous Mistakes"&&me().mistakes.length){return me().mistakes.slice(0,10).map((m,i)=>({t:"short",q:`RETRY (same concept, new wording): ${m.topic} — ${m.question}`,a:m.correct,keys:String(m.correct).toLowerCase().split(/\W+/).slice(0,4),ex:m.explanation,d:"Medium",marks:2,ch:m.chapter}));}
  items.forEach(({ch,c})=>c.questions.forEach(q=>qs.push({...q,ch})));
  if(diff==="Weak Areas"){const weak=weakTopics();if(weak.length)qs=qs.filter(q=>weak.some(w=>q.q.includes(w)||(q.ch||"").includes(w)));}
  if(diff&&diff!=="Mixed"&&diff!=="Weak Areas"&&diff!=="Previous Mistakes"&&diff!=="Exam Level")qs=qs.filter(q=>q.d===diff);
  // pad with generic variants if few
  while(qs.length<3){qs.push({t:"short",q:"Summarise this chapter's most exam-important point.",a:"Any textbook-supported key point.",keys:["textbook"],ex:"Credit correct content.",d:"Medium",marks:2,ch:items[0].ch});break;}
  return qs;
}
function weakTopics(){const m=me().mistakes;const c={};m.forEach(x=>c[x.topic]=(c[x.topic]||0)+1);return Object.entries(c).filter(([,n])=>n>=1).map(([t])=>t).slice(0,5);}
let QUIZ=[];
$("#quizStartBtn").onclick=()=>{
  const n=+$("#quizCount").value||8,diff=$("#quizDiff").value;
  let qs=[...bank(diff)].sort(()=>Math.random()-.5).slice(0,n);
  QUIZ=qs.map((q,i)=>({...q,id:i,marks:q.marks||(q.t.startsWith("mcq")||q.t==="tf"||q.t==="blank"?1:q.t==="match"?4:3)}));
  renderQuiz($("#quizMode").value);$("#quizReport").innerHTML="";$("#quizSubmitRow").classList.remove("hidden");
};
$("#quizMistakesBtn").onclick=()=>{$("#quizDiff").value="Previous Mistakes";$("#quizStartBtn").click();};
function renderQuiz(mode){
  $("#quizOut").innerHTML=QUIZ.map((q,i)=>`<div class="q" id="qq${i}"><span class="marks">${q.marks} marks • ${esc(q.d||"Mixed")} • ${esc(q.ch||"")}</span><div class="qhead">Q${i+1}. [${q.t}] ${esc(q.q)}</div>${qInput(q,i,mode)}${mode==="practice"?`<div class="row"><button class="btn small" onclick="checkOne(${i})">Check</button></div><div class="fb" id="fb${i}"></div>`:""}</div>`).join("");
}
function qInput(q,i){
  if(q.t==="mcq")return q.opts.map((o,j)=>`<label><input type="radio" name="a${i}" value="${j}"> ${esc(o)}</label><br>`).join("");
  if(q.t==="mcq-multi")return q.opts.map((o,j)=>`<label><input type="checkbox" name="a${i}" value="${j}"> ${esc(o)}</label><br>`).join("");
  if(q.t==="tf")return `<label><input type="radio" name="a${i}" value="true"> True</label> <label><input type="radio" name="a${i}" value="false"> False</label>`;
  if(q.t==="blank"||q.t==="num"||q.t==="oneword")return `<input type="text" id="a${i}" placeholder="Your answer">`;
  if(q.t==="match")return q.pairs.map((p,j)=>`<div>${esc(p[0])} → <input type="text" id="a${i}_${j}" placeholder="match"> <small>(options: ${esc(q.pairs.map(x=>x[1]).sort(()=>Math.random()-.5).join(" / "))})</small></div>`).join("");
  return `<textarea id="a${i}" rows="3" placeholder="Type your answer (credit for correct meaning, not exact wording)"></textarea>`;
}
function readAns(q,i){
  if(q.t==="mcq"){const r=document.querySelector(`input[name=a${i}]:checked`);return r?+r.value:null;}
  if(q.t==="mcq-multi")return $$(`input[name=a${i}]:checked`).map(x=>+x.value);
  if(q.t==="tf"){const r=document.querySelector(`input[name=a${i}]:checked`);return r?r.value==="true":null;}
  if(q.t==="match")return q.pairs.map((_,j)=>(document.getElementById(`a${i}_${j}`)||{}).value||"");
  const el=document.getElementById(`a${i}`);return el?el.value:null;
}
function grade(q,ans){
  if(ans===null||ans===""||(Array.isArray(ans)&&!ans.length))return{score:0,ok:false,fb:"No answer given."};
  const norm=s=>String(s??"").trim().toLowerCase();
  if(q.t==="mcq")return ans===q.a?{score:q.marks,ok:true,fb:"Correct!"}:{score:0,ok:false,fb:`Expected: ${q.opts[q.a]}. ${q.ex||""}`};
  if(q.t==="mcq-multi"){const a=[...q.a].sort().join(),b=[...ans].sort().join();return a===b?{score:q.marks,ok:true,fb:"Correct!"}:{score:0,ok:false,fb:`Expected: ${q.a.map(i=>q.opts[i]).join(", ")}. ${q.ex||""}`}};
  if(q.t==="tf")return ans===q.a?{score:q.marks,ok:true,fb:"Correct!"}:{score:0,ok:false,fb:`Expected ${q.a?"True":"False"}. ${q.ex||""}`};
  if(q.t==="blank"||q.t==="num"||q.t==="oneword")return norm(ans).includes(norm(q.a))||norm(q.a).includes(norm(ans))?{score:q.marks,ok:true,fb:"Correct!"}:{score:0,ok:false,fb:`Expected: ${q.a}. ${q.ex||""}`};
  if(q.t==="match"){let ok=0;q.pairs.forEach((p,j)=>{if(norm(ans[j])===norm(p[1]))ok++;});const sc=Math.round(q.marks*ok/q.pairs.length);return{score:sc,ok:sc===q.marks,fb:`${ok}/${q.pairs.length} matched. ${q.pairs.map(p=>p[0]+"→"+p[1]).join("; ")}`}};
  if(q.t==="assert")return norm(ans).includes("both")||norm(ans).includes(String(q.a).slice(0,4).toLowerCase())?{score:q.marks,ok:true,fb:q.a}:{score:Math.round(q.marks/2),ok:false,fb:`Expected: ${q.a}. ${q.ex||""}`};
  // short/long/case: keyword rubric
  const keys=(q.keys||[]).map(norm),got=keys.filter(k=>k&&norm(ans).includes(k));
  const frac=keys.length?got.length/keys.length:(norm(ans).length>10?.6:0);
  const sc=Math.round(q.marks*frac);
  return{score:sc,ok:frac>=.75,fb:`Keywords ${got.length}/${keys.length} (${got.join(", ")||"none"}). Expected: ${q.a} ${q.ex||""}`};
}
window.checkOne=i=>{const q=QUIZ[i],r=grade(q,readAns(q,i));const box=$("#fb"+i);box.className="fb "+(r.ok?"good":"bad");box.innerHTML=`<b>${r.ok?"✓":"✗"} ${r.score}/${q.marks}</b> — ${esc(r.fb)}${q.ex?`<br><i>Explanation:</i> ${esc(q.ex)}`:""}`;recordAttempt(q,r);};
$("#quizSubmitBtn").onclick=()=>{
  let tot=0,max=0;const rows=QUIZ.map((q,i)=>{const r=grade(q,readAns(q,i));tot+=r.score;max+=q.marks;recordAttempt(q,r,i);
    const card=$("#qq"+i);if(card)card.classList.add(r.ok?"correct":"wrong");
    return{q,r,i};});
  const acc=max?Math.round(100*tot/max):0;
  $("#quizReport").innerHTML=`<div class="card"><h3>Quiz report — ${tot}/${max} (${acc}%)</h3>
   <table class="rep"><tr><th>Q</th><th>Your answer</th><th>Expected</th><th>Score</th><th>Explanation</th></tr>
   ${rows.map(({q,r,i})=>`<tr><td>Q${i+1} (${esc(q.ch||"")})</td><td>${esc(JSON.stringify(readAns(q,i)))}</td><td>${esc(Array.isArray(q.a)?JSON.stringify(q.a):(q.opts&&typeof q.a==="number"?q.opts[q.a]:q.a))}</td><td>${r.score}/${q.marks}</td><td>${esc(r.fb)}</td></tr>`).join("")}</table>
   <p><b>Strong:</b> ${esc(strongAreas())||"—"} • <b>Revise:</b> ${esc(weakTopics().join(", "))||"—"}</p>
   <p class="hint">Recommended: ${acc>=80?"increase difficulty / Mock Exam":acc>=50?"flashcards + retest weak areas":"review chapter → flashcards → practice → retest"}.</p></div>`;
  $("#quizReport").scrollIntoView({behavior:"smooth"});
};
function recordAttempt(q,r,idx){
  me().attempts.push({date:Date.now(),ch:q.ch||"",q:q.q,ok:r.ok,score:r.score,marks:q.marks});
  if(!r.ok&&me().mistakes.filter(m=>m.question===q.q).length===0&&me().mistakes.length<200)
    me().mistakes.push({subject:scope().subject,chapter:q.ch||"",topic:(q.ch||"").replace(/^\d+\s*/,""),question:q.q,studentAnswer:"see attempt",correct:String(Array.isArray(q.a)?JSON.stringify(q.a):q.a),explanation:q.ex||r.fb});
  save();
}
function strongAreas(){const a=me().attempts.slice(-20);const ok=a.filter(x=>x.ok).map(x=>x.ch);return[...new Set(ok)].slice(0,3).join(", ");}

/* ---------- PRACTICE (one at a time) ---------- */
$("#practiceNextBtn").onclick=()=>{
  const qs=bank("Mixed").sort(()=>Math.random()-.5);const q={...qs[0],marks:qs[0].marks||3};
  window._pq=q;
  $("#practiceOut").innerHTML=`<div class="q"><div class="qhead">${esc(q.q)}</div>${qInput(q,"p")}<div class="row"><button class="btn" id="pracCheck">Check answer</button></div><div class="fb" id="pracFb"></div></div>`;
  $("#pracCheck").onclick=()=>{const r=grade(q,readAns(q,"p"));const f=$("#pracFb");f.className="fb "+(r.ok?"good":"bad");
    f.innerHTML=`<b>${r.score}/${q.marks}</b> — ${esc(r.fb)}<br><b>Correct answer:</b> ${esc(String(q.a))}<br><b>💡 Memory tip:</b> ${esc(tip(q))}`;recordAttempt(q,r);};
};
const tip=q=>`Link “${(q.ch||"key idea").slice(0,40)}” to one example + one keyword; say it aloud twice.`;

/* ---------- EXAM GENERATOR ---------- */
let EXAM=[];
$("#examGenBtn").onclick=()=>{
  const marks=+$("#examMarks").value||50,type=$("#examType").value,diff=$("#examDiff").value;
  const pool=[...bank(diff==="Mixed"?"Mixed":diff)].sort(()=>Math.random()-.5);
  EXAM=[];let m=0;
  for(const q of pool){if(m>=marks)break;const mm=q.marks||3;EXAM.push({...q,marks:mm});m+=mm;}
  $("#examOut").innerHTML=`<div class="card"><h3>Model/Practice Exam — ${esc(type)} • Class ${scope().grade} ${esc(scope().subject)} • ${m} marks</h3>
   <p class="hint">Chapters: ${esc(scope().chapters.join("; "))}. This is a <b>Model/Practice Exam</b>, not an official board paper. Do NOT reveal answers before submission (exam mode).</p>
   ${EXAM.map((q,i)=>`<div class="q" id="eq${i}"><span class="marks">${q.marks} marks</span><div class="qhead">Q${i+1}. [${q.t}] ${esc(q.q)}</div>${qInput(q,"e"+i)}</div>`).join("")}</div>`;
  $("#examSubmitRow").classList.remove("hidden");$("#examReport").innerHTML="";
  startTimer(+$("#examTime").value||90);
};
function readExam(i){const q=EXAM[i];const id="e"+i;
  if(q.t==="mcq"){const r=document.querySelector(`input[name=a${id}]:checked`);return r?+r.value:null;}
  if(q.t==="mcq-multi")return $$ (`input[name=a${id}]:checked`).map(x=>+x.value);
  if(q.t==="tf"){const r=document.querySelector(`input[name=a${id}]:checked`);return r?r.value==="true":null;}
  if(q.t==="match")return q.pairs.map((_,j)=>(document.getElementById(`a${id}_${j}`)||{}).value||"");
  const el=document.getElementById("a"+id);return el?el.value:null;}
$("#examSubmitBtn").onclick=()=>{
  clearInterval(window._t);let tot=0,max=0;
  const rows=EXAM.map((q,i)=>{const r=grade(q,readExam(i));tot+=r.score;max+=q.marks;recordAttempt(q,r);
    return{q,r,i,ans:readExam(i)};});
  const pct=Math.round(100*tot/max);
  $("#examReport").innerHTML=`<div class="card"><h3>Estimated evaluation (practice rubric, not official): ${tot}/${max} (${pct}%)</h3>
   <table class="rep"><tr><th>Q</th><th>Marks</th><th>Your answer</th><th>Expected</th><th>Scored</th><th>Missing/incorrect</th></tr>
   ${rows.map(({q,r,i,ans})=>`<tr><td>Q${i+1}</td><td>${q.marks}</td><td>${esc(JSON.stringify(ans))}</td><td>${esc(String(Array.isArray(q.a)?JSON.stringify(q.a):q.a))}</td><td>${r.score}</td><td>${esc(r.fb)}</td></tr>`).join("")}</table>
   <p><b>Lost marks:</b> ${max-tot} • <b>Revise:</b> ${esc(weakTopics().join(", "))||"—"}</p>
   <p><b>Next:</b> mistake revision → retest → full mock.</p></div>`;
};
let _t=null;function startTimer(min){clearInterval(_t);const end=Date.now()+min*60000;
  _t=setInterval(()=>{const s=Math.max(0,Math.round((end-Date.now())/1000));$("#examTimer").textContent=`⏱ ${Math.floor(s/60)}:${String(s%60).padStart(2,"0")} left`;
    if(s<=0){clearInterval(_t);toast("Time up — submit now");}},1000);}
$("#examPrintBtn").onclick=()=>window.print();

/* ---------- EVALUATE (typed answers) ---------- */
let EVALQ=[];
function loadEvalQuestions(){ // light preload for current scope
  const items=scopeContent();EVALQ=[];items.forEach(({ch,c})=>c.questions.slice(0,6).forEach(q=>EVALQ.push({...q,ch,marks:q.marks||3})));
  if($("#evalOut"))renderEval();
}
$("#evalLoadBtn").onclick=loadEvalQuestions;
function renderEval(){
  $("#evalOut").innerHTML=EVALQ.map((q,i)=>`<div class="q"><span class="marks">${q.marks} marks</span><div class="qhead">Q${i+1}. ${esc(q.q)}</div><textarea id="ev${i}" rows="2" placeholder="Type / paste the student's answer to Q${i+1}"></textarea></div>`).join("");
}
$("#evalRunBtn").onclick=()=>{
  let tot=0,max=0;
  const rows=EVALQ.map((q,i)=>{const ans=(document.getElementById("ev"+i)||{}).value||"";const r=grade(q,ans||null);tot+=r.score;max+=q.marks;recordAttempt(q,r);
    return{q,r,i,ans};});
  $("#evalReport").innerHTML=`<div class="card"><h3>Evaluation (agent practice rubric): ${tot}/${max} (${max?Math.round(100*tot/max):0}%)</h3>
   <table class="rep"><tr><th>Q</th><th>Available</th><th>Student answer</th><th>Expected (textbook)</th><th>Awarded</th><th>Missing/incorrect</th></tr>
   ${rows.map(({q,r,i,ans})=>`<tr><td>Q${i+1}</td><td>${q.marks}</td><td>${esc(String(ans).slice(0,300))||"<i>unclear/blank — flagged, not guessed</i>"}</td><td>${esc(String(q.a))}</td><td>${r.score}</td><td>${esc(r.fb)}</td></tr>`).join("")}</table></div>`;
};
$("#evalFiles").onchange=e=>{const box=$("#evalPhotos");box.innerHTML="";[...e.target.files].forEach(f=>{const img=document.createElement("img");img.src=URL.createObjectURL(f);img.alt=f.name;box.appendChild(img);});toast("Photos attached — transcribe readable answers above; unclear ones will be flagged.");};

/* ---------- REVISION / MISTAKES / REPORT / PREP ---------- */
$("#revBuildBtn").onclick=()=>{
  const goal=$("#revGoal").value,days=+$("#revDays").value||7,weak=weakTopics();
  const s=scope();let plan=[];
  for(let d=1;d<=days;d++){
    const ch=s.chapters[(d-1)%s.chapters.length];
    plan.push({d,focus:goal==="mistakes"?"Mistake revision":goal==="weak"&&weak.length?`Weak area: ${weak[(d-1)%weak.length]}`:`${ch}`,tasks:["Review notes (20 min)","Flashcards (10 min)","Practice 5 Qs","Mini-quiz","Retest yesterday's errors"]});
  }
  $("#revOut").innerHTML=`<p><b>Prioritised:</b> repeated mistakes → low accuracy → incomplete → weak → unrevised.</p>`+plan.map(p=>`<div class="rev-day"><b>Day ${p.d} — ${esc(p.focus)}</b><ul>${p.tasks.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></div>`).join("");
};
$("#revPrintBtn").onclick=()=>window.print();
function renderMistakes(){
  const m=me().mistakes;
  $("#mistOut").innerHTML=m.length?m.map(x=>`<div class="mist"><b>${esc(x.chapter)}</b> • ${esc(x.topic)}<br>Q: ${esc(x.question)}<br><b>Correct:</b> ${esc(x.correct)}<br><i>${esc(x.explanation)}</i></div>`).join(""):`<p class="hint">No mistakes yet — great! Mistakes from quizzes/exams appear here, per student.</p>`;
}
$("#mistClearBtn").onclick=()=>{me().mistakes=[];save();renderMistakes();};
$("#reportBuildBtn").onclick=()=>{
  const a=me().attempts,tot=a.length,ok=a.filter(x=>x.ok).length;
  $("#reportOut").innerHTML=`<div class="card"><h3>${esc(DB.current)} — performance</h3>
   <p>Attempts: ${tot} • Accuracy: ${tot?Math.round(100*ok/tot):0}% • Mistakes tracked: ${me().mistakes.length}</p>
   <table class="rep"><tr><th>Chapter</th><th>Tried</th><th>Correct</th></tr>${Object.entries(a.reduce((m,x)=>{m[x.ch]=m[x.ch]||{t:0,o:0};m[x.ch].t++;if(x.ok)m[x.ch].o++;return m;},{})).map(([k,v])=>`<tr><td>${esc(k)}</td><td>${v.t}</td><td>${v.o}</td></tr>`).join("")||"<tr><td colspan=3>No data yet — take a quiz!</td></tr>"}</table>
   <p><b>Strong:</b> ${esc(strongAreas())||"—"} • <b>Needs revision:</b> ${esc(weakTopics().join(", "))||"—"}</p>
   <p><b>Recommended next:</b> ${weakTopics().length?"revise weak areas + retest":"attempt a Mock Exam"}.</p></div>`;
};
$("#reportResetBtn").onclick=()=>{DB.students[DB.current]={mistakes:[],attempts:[],flash:{},uploads:{}};save();$("#reportOut").innerHTML="";renderMistakes();toast("This student's data reset.");};
$("#prepBuildBtn").onclick=()=>{
  const days=+$("#prepDays").value||7,conf=$("#prepConf").value,s=scope(),weak=weakTopics();
  $("#prepOut").innerHTML=[`Scope locked: Class ${s.grade} • ${s.subject} • ${s.chapters.join("; ")}`,
   `Time: ${days} days • Confidence: ${conf}`,
   `Plan: Day 1–${Math.ceil(days/3)} chapter revision + flashcards → Day ${Math.ceil(days/3)+1}–${Math.ceil(2*days/3)} practice + quizzes on ${weak.join(", ")||"all chapters"} → last days: 2 mock exams + final formula/fact sheet.`,
   `Post-exam option: upload actual paper + answers in Evaluate Answers for estimated marks + gap analysis.`].map((t,i)=>`<div class="rev-day"><b>Step ${i+1}.</b> ${esc(t)}</div>`).join("");
};

/* ---------- LIBRARY: official index + PDF upload (in-browser text) ---------- */
function buildLibrary(){
  const s=scope();
  $("#ncertIndex").innerHTML=`<h3>Official NCERT textbooks (free PDFs)</h3>
   <p>Class ${s.grade} • ${esc(s.subject)} — get exact chapter PDFs here:<br>
   👉 <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener">ncert.nic.in/textbook.php → Class ${s.grade} → ${esc(s.subject)}</a><br>
   Also: <a href="https://ncert.nic.in/ebooks.php" target="_blank" rel="noopener">eBooks / Flipbooks / Epubs</a></p>
   <p class="hint">Chapters in this class: ${esc(chaptersFor(s.grade,s.subject).join(" • "))}</p>
   <div class="hint">${esc((me().uploads[s.grade+"|"+s.subject]||"No uploaded text for this subject yet." ).slice(0,600))}</div>`;
}
$("#pdfFiles").onchange=async e=>{
  const s=scope(),key=s.grade+"|"+s.subject;let txt="";
  for(const f of e.target.files){txt+=`\n\n===== ${f.name} =====\n`+await extractPdfText(f);}
  me().uploads[key]=(me().uploads[key]||"")+txt.slice(0,20000);save();
  $("#pdfOut").textContent=`Saved ${e.target.files.length} PDF(s) for ${DB.current} → Class ${s.grade} ${s.subject} (${txt.length} chars, first 600 shown below). Used as source of truth alongside chapter notes.`;
  buildLibrary();
};
async function extractPdfText(file){
  try{
    const buf=await file.arrayBuffer(),bytes=new Uint8Array(buf);
    // Minimal PDF text extraction: find ( … ) Tj strings — works for many NCERT text PDFs
    const raw=new TextDecoder("latin1").decode(bytes);let out=[];
    const re=/\((?:\\.|[^\\()])*\)\s*(Tj|TJ|')/g;let m;
    while((m=re.exec(raw))&&out.length<4000){out.push(m[0].slice(0,400).replace(/^\(/,"").replace(/\\n/g," ").replace(/\\\(/g,"(").replace(/\\\)/g,")"));}
    // Fallback: extract FlateDecode streams roughly? keep simple
    if(out.length<5)return "[Could not extract selectable text — this PDF may be scanned images. Please use typed notes or the official flipbook.]";
    return out.join(" ").replace(/\\u[0-9a-f]{4}/gi," ").slice(0,15000);
  }catch(err){return "[PDF read failed: "+err.message+"]";}
}
$("#pdfClearBtn").onclick=()=>{me().uploads={};save();$("#pdfOut").textContent="Uploads removed.";buildLibrary();};

/* ---------- INIT ---------- */
initSelectors();renderMistakes();loadEvalQuestions();
