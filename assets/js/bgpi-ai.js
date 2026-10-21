/* BGPI AI — floating bilingual chat widget */
(() => {
  const $ = (s, root=document) => root.querySelector(s);
  const language = () => document.documentElement.lang === "en" ? "en" : "bn";
  const copy = {
    bn: {
      hide:"Hide AI Icon", enable:"Enable AI Icon", title:"BGPI AI", subtitle:"আপনার ইনস্টিটিউট সহকারী",
      welcome:"আসসালামু আলাইকুম! আমি BGPI AI। প্রতিষ্ঠান, বিভাগ, শিক্ষক ও প্রকাশিত নোটিশ সম্পর্কে প্রশ্ন করুন।",
      placeholder:"আপনার প্রশ্ন লিখুন…", send:"পাঠান", close:"চ্যাট বন্ধ করুন", open:"BGPI AI খুলুন",
      hint:"বাংলা বা English-এ প্রশ্ন করুন", thinking:"উত্তর তৈরি করছি…",
      error:"দুঃখিত, এখন উত্তর দেওয়া যাচ্ছে না। একটু পরে আবার চেষ্টা করুন।",
      setup:"BGPI AI-এর উত্তর সেবা এখনো কনফিগার করা হয়নি। সাইট অ্যাডমিনকে AI API সেটআপ করতে হবে।",
      quick1:"কী কী টেকনোলজি আছে?", quick2:"শিক্ষক তালিকা কোথায়?", quick3:"যোগাযোগের তথ্য"
    },
    en: {
      hide:"Hide AI Icon", enable:"Enable AI Icon", title:"BGPI AI", subtitle:"Your institute assistant",
      welcome:"Hello! I'm BGPI AI. Ask me about the institute, departments, faculty, and published notices.",
      placeholder:"Type your question…", send:"Send", close:"Close chat", open:"Open BGPI AI",
      hint:"Ask in Bangla or English", thinking:"Preparing an answer…",
      error:"Sorry, I couldn't answer right now. Please try again shortly.",
      setup:"BGPI AI's answer service isn't configured yet. The site administrator needs to set up the AI API.",
      quick1:"Which technologies are offered?", quick2:"Where is the faculty list?", quick3:"Contact information"
    }
  };
  const saved = localStorage.getItem("bgpi-ai-icon-hidden") === "true";
  const state = {open:false, busy:false, history:[]};
  const logoSrc = "/assets/bgpi-ai-logo.svg";
  const mount = document.createElement("div");
  mount.id = "bgpi-ai-root";
  mount.innerHTML = `
    <div class="bgpi-ai-panel" id="bgpiAiPanel" role="dialog" aria-modal="false" aria-labelledby="bgpiAiTitle" hidden>
      <header class="bgpi-ai-head">
        <img class="bgpi-ai-logo" src="${logoSrc}" alt="BGPI AI logo">
        <div class="bgpi-ai-brand"><strong id="bgpiAiTitle">BGPI AI</strong><span id="bgpiAiSubtitle"></span></div>
        <button class="bgpi-ai-close" id="bgpiAiClose" type="button" aria-label="Close chat">×</button>
      </header>
      <div class="bgpi-ai-hint" id="bgpiAiHint"></div>
      <div class="bgpi-ai-messages" id="bgpiAiMessages" aria-live="polite"></div>
      <div class="bgpi-ai-quick" id="bgpiAiQuick"></div>
      <form class="bgpi-ai-form" id="bgpiAiForm"><label class="sr-only" for="bgpiAiInput">Your question</label><textarea id="bgpiAiInput" rows="1" maxlength="1200" required></textarea><button id="bgpiAiSend" type="submit" aria-label="Send message"><i data-lucide="send"></i></button></form>
      <div class="bgpi-ai-foot">BGPI AI <span>•</span> <span>Bangla &amp; English</span></div>
    </div>
    <button class="bgpi-ai-fab" id="bgpiAiFab" type="button" aria-label="Open BGPI AI"><img src="${logoSrc}" alt=""><span class="bgpi-ai-fab-label">BGPI AI</span></button>
  `;
  document.body.appendChild(mount);
  const topControls = document.querySelector(".top-controls");
  if (topControls && !$("#bgpiAiVisibility")) {
    const controls = document.createElement("div");
    controls.className = "bgpi-ai-visibility";
    controls.id = "bgpiAiVisibility";
    controls.innerHTML = '<button type="button" id="bgpiAiVisibilityButton"></button>';
    topControls.insertBefore(controls, topControls.firstChild);
  }
  const panel = $("#bgpiAiPanel"), fab = $("#bgpiAiFab"), visibilityButton = $("#bgpiAiVisibilityButton");
  const messages = $("#bgpiAiMessages"), input = $("#bgpiAiInput"), form = $("#bgpiAiForm");
  function renderLanguage() {
    const c=copy[language()];
    $("#bgpiAiTitle").textContent=c.title; $("#bgpiAiSubtitle").textContent=c.subtitle;
    $("#bgpiAiHint").textContent=c.hint; input.placeholder=c.placeholder;
    input.setAttribute("aria-label",c.placeholder); fab.setAttribute("aria-label",c.open);
    $("#bgpiAiClose").setAttribute("aria-label",c.close); $("#bgpiAiSend").setAttribute("aria-label",c.send);
    visibilityButton.textContent = localStorage.getItem("bgpi-ai-icon-hidden")==="true" ? c.enable : c.hide;
    $("#bgpiAiQuick").innerHTML = [c.quick1,c.quick2,c.quick3].map(q=>'<button type="button" class="bgpi-ai-chip">'+q+'</button>').join("");
    $("#bgpiAiQuick").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{input.value=b.textContent;sendMessage();}));
    if (!messages.children.length) addMessage(c.welcome,"assistant");
    if (window.lucide) window.lucide.createIcons();
  }
  function applyVisibility(hidden) {
    localStorage.setItem("bgpi-ai-icon-hidden",String(hidden));
    fab.hidden=hidden;
    visibilityButton.textContent=hidden?copy[language()].enable:copy[language()].hide;
    visibilityButton.setAttribute("aria-pressed",String(hidden));
    visibilityButton.setAttribute("aria-label",visibilityButton.textContent);
  }
  function addMessage(text, role, extraClass="") {
    const item=document.createElement("div");
    item.className="bgpi-ai-message "+(role==="user"?"user":"assistant")+" "+extraClass;
    item.textContent=text; messages.appendChild(item); messages.scrollTop=messages.scrollHeight; return item;
  }
  async function sendMessage() {
    if (state.busy) return;
    const question=input.value.trim(); if(!question) return;
    input.value=""; $("#bgpiAiQuick").hidden=true;
    addMessage(question,"user"); state.history.push({role:"user",content:question});
    state.busy=true; $("#bgpiAiSend").disabled=true;
    const loading=addMessage(copy[language()].thinking,"assistant","typing");
    try {
      const response=await fetch("/api/bgpi-ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:question,language:language(),history:state.history.slice(-8),page:location.pathname})});
      const data=await response.json().catch(()=>({}));
      loading.remove();
      if(response.status===503 && data.code==="AI_NOT_CONFIGURED") { addMessage(copy[language()].setup,"assistant","notice"); }
      else if(!response.ok || !data.answer) { addMessage(data.error || copy[language()].error,"assistant","notice"); }
      else { addMessage(data.answer,"assistant"); state.history.push({role:"assistant",content:data.answer}); }
    } catch(err) { loading.remove(); addMessage(copy[language()].error,"assistant","notice"); }
    finally {state.busy=false;$("#bgpiAiSend").disabled=false;input.focus();}
  }
  fab.addEventListener("click",()=>{state.open=true;panel.hidden=false;fab.classList.add("is-open");input.focus();});
  $("#bgpiAiClose").addEventListener("click",()=>{state.open=false;panel.hidden=true;fab.classList.remove("is-open");fab.focus();});
  visibilityButton.addEventListener("click",()=>applyVisibility(localStorage.getItem("bgpi-ai-icon-hidden")!=="true"));
  form.addEventListener("submit",e=>{e.preventDefault();sendMessage();});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage();}});
  document.addEventListener("click",e=>{if(state.open&&!mount.contains(e.target)){panel.hidden=true;state.open=false;fab.classList.remove("is-open");}});
  const observer=new MutationObserver(renderLanguage);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  applyVisibility(saved); renderLanguage();
})();