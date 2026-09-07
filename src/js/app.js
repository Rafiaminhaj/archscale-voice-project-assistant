import '../css/variables.css';
import '../css/base.css';
import '../css/animations.css';
import '../css/components.css';

import { STAKEHOLDERS, INBOUND_FEED } from './data.js';
import { initVoiceEngine, processVoiceQuery } from './voiceEngine.js';

document.addEventListener('DOMContentLoaded', () => {
  renderStakeholders();
  renderInboundFeed();
  initVoiceEngine();
  initTTSForFeed();
});

function renderStakeholders() {
  const container = document.getElementById('stakeholders-grid');
  if (!container) return;

  container.innerHTML = STAKEHOLDERS.map((s, index) => `
    <div class="stakeholder-card ${index === 0 ? 'active' : ''}" data-role-id="${s.id}">
      <div class="role-icon">${s.icon}</div>
      <div class="role-name">${s.role}</div>
      <div class="role-tagline">${s.description}</div>
      <div class="role-friction-box">
        <strong>Friction Solved:</strong> ${s.friction}
      </div>
    </div>
  `).join('');
}

function renderInboundFeed() {
  const container = document.getElementById('inbound-feed-container');
  if (!container) return;

  container.innerHTML = INBOUND_FEED.map(msg => `
    <div class="stream-card fade-in">
      <div>
        <span class="stream-channel-badge badge-${msg.channel}">${msg.channel}</span>
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 0.85rem; color: var(--text-muted);">
          <strong>${msg.sender}</strong>
          <span>${msg.time}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">"${msg.text}"</p>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 0.75rem; background: var(--bg-tertiary); padding: 2px 8px; border-radius: 4px; color: var(--accent-cyan);">${msg.status}</span>
          <button class="btn-tts feed-voice-trigger" data-text="${msg.text}">🔊 Process Voice Intent</button>
        </div>
      </div>
    </div>
  `).join('');
}

function initTTSForFeed() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('feed-voice-trigger')) {
      const text = e.target.getAttribute('data-text');
      processVoiceQuery(text);
    }
  });
}
