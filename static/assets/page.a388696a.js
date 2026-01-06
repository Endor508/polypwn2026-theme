var l=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{C as d,m as c}from"./index.c7cbc24b.js";var u=l((y,s)=>{(function(){const a={init:function(){this.initAudioSystem(),this.initVisualEffects(),this.initInteractionEffects(),this.initSystemMonitor()},initAudioSystem:function(){const t=window.AudioContext||window.webkitAudioContext;if(t)try{const e=new t,n=e.createOscillator(),o=e.createGain();n.type="sine",n.frequency.setValueAtTime(60,e.currentTime),o.gain.setValueAtTime(.005,e.currentTime),n.connect(o),o.connect(e.destination),a.audioContext=e}catch{console.log("Audio context not available")}},initVisualEffects:function(){if(setInterval(()=>{Math.random()>.98&&(document.body.style.opacity="0.95",setTimeout(()=>{document.body.style.opacity="1"},50))},3e3),console.log){const t=["%c[LABORATORY SYSTEM] %cInitializing secure connection...","%c[LABORATORY SYSTEM] %cAuthentication verified","%c[LABORATORY SYSTEM] %cAccessing experiment database...","%c[LABORATORY SYSTEM] %cSYSTEM READY"],e="color: #7549db; font-weight: bold;",n="color: #b8e6e0;";t.forEach((o,i)=>{setTimeout(()=>{console.log(o,e,n)},i*500)})}},initInteractionEffects:function(){if(document.addEventListener("click",function(t){if(t.target.matches("button, .btn, a.btn")){const e=document.createElement("span"),n=t.target.getBoundingClientRect(),o=Math.max(n.width,n.height),i=t.clientX-n.left-o/2,r=t.clientY-n.top-o/2;e.style.cssText=`
            position: absolute;
            width: ${o}px;
            height: ${o}px;
            border-radius: 50%;
            background: rgba(117,73,219, 0.4);
            left: ${i}px;
            top: ${r}px;
            pointer-events: none;
            animation: ripple-effect 0.6s ease-out;
            z-index: 1000;
          `,t.target.style.position!=="absolute"&&t.target.style.position!=="relative"&&(t.target.style.position="relative"),t.target.style.overflow="hidden",t.target.appendChild(e),setTimeout(()=>{e.remove()},600)}}),!document.getElementById("lab-ripple-animation")){const t=document.createElement("style");t.id="lab-ripple-animation",t.textContent=`
          @keyframes ripple-effect {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `,document.head.appendChild(t)}document.addEventListener("focus",function(t){t.target.matches("input, textarea, select")&&(t.target.style.transition="all 0.3s ease",t.target.style.boxShadow="0 0 20px rgba(117,73,219, 0.5)")},!0),document.addEventListener("blur",function(t){t.target.matches("input, textarea, select")&&(t.target.style.boxShadow="")},!0)},initSystemMonitor:function(){setInterval(()=>{document.querySelectorAll(".lab-indicator.active").forEach(n=>{n.setAttribute("data-status","active")})},1e3),window.addEventListener("load",()=>{setTimeout(()=>{document.querySelectorAll(".alert, .notification").forEach(n=>{n.classList.contains("lab-styled")||(n.classList.add("lab-styled"),n.style.borderLeft="4px solid #7549db",n.style.background="rgba(84, 36, 117, 0.7)")})},500)})},enhanceModals:function(){if(new MutationObserver(e=>{e.forEach(n=>{n.addedNodes.forEach(o=>{if(o.classList&&o.classList.contains("modal")){const i=o.querySelector(".modal-content");i&&!i.classList.contains("lab-enhanced")&&(i.classList.add("lab-enhanced"),i.style.animation="lab-modal-appear 0.3s ease-out")}})})}).observe(document.body,{childList:!0,subtree:!0}),!document.getElementById("lab-modal-animation")){const e=document.createElement("style");e.id="lab-modal-animation",e.textContent=`
          @keyframes lab-modal-appear {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `,document.head.appendChild(e)}},typeWriter:function(t,e,n=50){let o=0;t.textContent="";const i=()=>{o<e.length&&(t.textContent+=e.charAt(o),o++,setTimeout(i,n))};i()},initEasterEggs:function(){const t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let e=0;document.addEventListener("keydown",n=>{n.key===t[e]?(e++,e===t.length&&(this.activateEasterEgg(),e=0)):e=0})},activateEasterEgg:function(){console.log("%cLABORATORY OVERRIDE ACTIVATED","color: #916DE2; font-size: 20px; font-weight: bold;"),console.log("%cWelcome, Administrator. Full system access granted.","color: #7549db; font-size: 14px;"),document.body.style.animation="lab-override 2s ease-in-out";const t=document.createElement("style");t.textContent=`
        @keyframes lab-override {
          0%, 100% { filter: none; }
          25% { filter: hue-rotate(90deg) brightness(1.2); }
          50% { filter: hue-rotate(180deg) brightness(1.3); }
          75% { filter: hue-rotate(270deg) brightness(1.2); }
        }
      `,document.head.appendChild(t),setTimeout(()=>{document.body.style.animation=""},2e3)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>a.init()):a.init(),a.enhanceModals(),a.initEasterEggs(),window.Laboratory=a})();typeof s<"u"&&s.exports&&(s.exports=Laboratory);window.CTFd=d;window.Alpine=c;c.start()});export default u();
