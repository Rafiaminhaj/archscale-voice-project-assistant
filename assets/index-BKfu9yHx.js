(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`architect`,role:`Architect`,icon:`🏛️`,description:`Coordinates design intent across clients & consultants`,friction:`Revisions, Approvals & Drawing version overload`,activeCount:4},{id:`interior`,role:`Interior Designer`,icon:`🎨`,description:`Material selections, finishes & sample approvals`,friction:`1,000+ material calls & shade discrepancies`,activeCount:12},{id:`owner`,role:`Project Owner`,icon:`💼`,description:`Financial backer & high-level decision maker`,friction:`Paying continuously, rarely seeing real-time progress`,activeCount:2},{id:`supplier`,role:`Material Supplier`,icon:`📦`,description:`Provides quotes, stock checks & site deliveries`,friction:`Re-quoting same items, interpreting vague specs`,activeCount:8},{id:`consultant`,role:`Consultant (MEP/Structural)`,icon:`📐`,description:`Structural & MEP technical calculations & markups`,friction:`Checking which drawing revision is live`,activeCount:3},{id:`contractor`,role:`Contractor`,icon:`👷`,description:`Turns drawings into built work on site`,friction:`Wrong revisions, rework & missing execution details`,activeCount:6},{id:`fabricator`,role:`Fabricator`,icon:`⚙️`,description:`Shop drawings & custom component manufacturing`,friction:`Late design changes forcing remaking of components`,activeCount:5},{id:`installer`,role:`Specialist Installer`,icon:`🔧`,description:`Final installation of specialized facades & fixtures`,friction:`Access clashes & being last in, blamed first`,activeCount:2}],t=[{id:`msg-1`,channel:`whatsapp`,sender:`Client (Mr. Malhotra)`,time:`10:14 AM`,text:`Use the previous Italian marble shade for the living room floor.`,status:`Action Extracted`,tag:`Material Change`},{id:`msg-2`,channel:`email`,sender:`Structural Consultant`,time:`09:45 AM`,text:`Please refer Rev 04 drawings for column reinforcement calculations.`,status:`Revision Stamped`,tag:`Drawing Rev 04`},{id:`msg-3`,channel:`site`,sender:`Contractor Dave`,time:`08:30 AM`,text:`Site team needs clarification on master bathroom plumbing tolerance.`,status:`Pending Answer`,tag:`Site Friction`},{id:`msg-4`,channel:`supplier`,sender:`Classic Marble Supplier`,time:`Yesterday`,text:`Shade 312 unavailable for 3 weeks. Suggesting Shade 315 as alternative.`,status:`Quote Discrepancy`,tag:`Stock Out`},{id:`msg-5`,channel:`drawings`,sender:`Lead Architect`,time:`Yesterday`,text:`REV 05 Architectural Drawings uploaded to cloud repository.`,status:`Live Version`,tag:`REV 05`}],n={marble:{intent:`Material Specification & Supplier Query`,role:`Interior Designer & Supplier`,entity:`Italian Marble Shade 312 vs 315`,action:`Client approved Shade 315 alternative. Supplier notified for stock dispatch.`,responseSpeech:`The client has approved Italian Marble Shade 315 as an alternative. Supplier has been notified for site dispatch.`},rev05:{intent:`Drawing Revision & Version Control`,role:`Architect & Contractor`,entity:`Drawing REV 05 Uploaded`,action:`Stamped REV 05 as active live version across all 8 stakeholder channels.`,responseSpeech:`Revision 05 is currently the live stamped drawing. All contractor markups have been synced.`},contractor:{intent:`Site Execution Clarification`,role:`Contractor & Structural Consultant`,entity:`Master Bathroom Plumbing Tolerance`,action:`Forwarded technical inquiry to Structural Consultant with Rev 04 reference.`,responseSpeech:`The plumbing tolerance query from Contractor Dave has been forwarded to the Structural Consultant.`},summary:{intent:`Project Communication Summarization`,role:`All 8 Project Stakeholders`,entity:`Project Alpha Milestone Status`,action:`Synthesized 6 unstructured channels into 3 key actionable decisions.`,responseSpeech:`Here is your project summary: Revision 05 drawings are live, Shade 315 marble is approved, and contractor site queries are being addressed.`}},r=null,i=!1,a=window.speechSynthesis;function o(){s(),c(),u(),d()}function s(){let e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.warn(`Web Speech API not supported in this browser. Falling back to typing input.`);return}r=new e,r.continuous=!1,r.interimResults=!1,r.lang=`en-US`,r.onstart=()=>{i=!0,l(!0)},r.onresult=e=>{let t=e.results[0][0].transcript,n=document.getElementById(`voice-text-input`);n&&(n.value=t),f(t)},r.onerror=e=>{console.error(`Speech error:`,e),i=!1,l(!1)},r.onend=()=>{i=!1,l(!1)}}function c(){let e=document.getElementById(`btn-mic-trigger`);e&&e.addEventListener(`click`,()=>{if(!r){alert(`Speech Recognition is supported via Google Chrome or Edge. You can also type your voice query directly!`);return}i?r.stop():r.start()})}function l(e){let t=document.getElementById(`btn-mic-trigger`),n=document.getElementById(`waveform-box`);t&&(e?(t.classList.add(`animate-mic-listening`),t.innerHTML=`🎙️`,t.title=`Listening to your voice command...`):(t.classList.remove(`animate-mic-listening`),t.innerHTML=`🎤`,t.title=`Click to start voice command`)),n&&(n.style.display=e?`flex`:`none`)}function u(){document.querySelectorAll(`.prompt-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-query`),n=document.getElementById(`voice-text-input`);n&&(n.value=t),f(t)})})}function d(){let e=document.getElementById(`voice-text-input`);e&&e.addEventListener(`keypress`,t=>{t.key===`Enter`&&f(e.value)})}function f(e){let t=e.toLowerCase().trim(),r=n.summary;t.includes(`marble`)||t.includes(`supplier`)||t.includes(`shade`)?r=n.marble:t.includes(`rev 05`)||t.includes(`revision`)||t.includes(`drawing`)?r=n.rev05:(t.includes(`contractor`)||t.includes(`site`)||t.includes(`plumbing`))&&(r=n.contractor),p(e,r),m(r.responseSpeech)}function p(e,t){let n=document.getElementById(`intent-output-container`);if(!n)return;n.innerHTML=`
    <div class="intent-card fade-in">
      <div class="intent-header">
        <span>✨ Gemini AI Speech-to-Intent & Entity Extraction</span>
        <button id="btn-read-aloud" class="btn-tts">🔊 Read Aloud</button>
      </div>

      <div style="margin-bottom: 12px; font-size: 1.05rem;">
        <strong>Voice Query Received:</strong> "${e}"
      </div>

      <div class="intent-tags" style="margin-bottom: 16px;">
        <span class="tag-pill" style="background: rgba(0, 210, 255, 0.15); color: var(--accent-cyan);">Intent: ${t.intent}</span>
        <span class="tag-pill" style="background: rgba(147, 51, 234, 0.15); color: #c084fc;">Roles: ${t.role}</span>
        <span class="tag-pill" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">Entity: ${t.entity}</span>
      </div>

      <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-cyan);">
        <strong>⚡ Executed Intelligent Workflow Action:</strong>
        <p style="margin-top: 4px; color: var(--text-primary);">${t.action}</p>
      </div>
    </div>
  `;let r=document.getElementById(`btn-read-aloud`);r&&r.addEventListener(`click`,()=>m(t.responseSpeech))}function m(e){if(!a)return;a.cancel();let t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=1,a.speak(t)}document.addEventListener(`DOMContentLoaded`,()=>{h(),g(),o(),_()});function h(){let t=document.getElementById(`stakeholders-grid`);t&&(t.innerHTML=e.map((e,t)=>`
    <div class="stakeholder-card ${t===0?`active`:``}" data-role-id="${e.id}">
      <div class="role-icon">${e.icon}</div>
      <div class="role-name">${e.role}</div>
      <div class="role-tagline">${e.description}</div>
      <div class="role-friction-box">
        <strong>Friction Solved:</strong> ${e.friction}
      </div>
    </div>
  `).join(``))}function g(){let e=document.getElementById(`inbound-feed-container`);e&&(e.innerHTML=t.map(e=>`
    <div class="stream-card fade-in">
      <div>
        <span class="stream-channel-badge badge-${e.channel}">${e.channel}</span>
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 0.85rem; color: var(--text-muted);">
          <strong>${e.sender}</strong>
          <span>${e.time}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">"${e.text}"</p>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 0.75rem; background: var(--bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--accent-cyan);">${e.status}</span>
          <button class="btn-tts feed-voice-trigger" data-text="${e.text}">🔊 Process Voice Intent</button>
        </div>
      </div>
    </div>
  `).join(``))}function _(){document.addEventListener(`click`,e=>{e.target.classList.contains(`feed-voice-trigger`)&&f(e.target.getAttribute(`data-text`))})}