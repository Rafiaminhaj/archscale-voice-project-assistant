import { VOICE_INTENT_KNOWLEDGE } from './data.js';

let recognition = null;
let isListening = false;
let synth = window.speechSynthesis;

export function initVoiceEngine() {
  setupSpeechRecognition();
  setupMicButton();
  setupPromptChips();
  setupTextInput();
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn('Web Speech API not supported in this browser. Falling back to typing input.');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    isListening = true;
    updateMicState(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const inputEl = document.getElementById('voice-text-input');
    if (inputEl) inputEl.value = transcript;
    processVoiceQuery(transcript);
  };

  recognition.onerror = (e) => {
    console.error('Speech error:', e);
    isListening = false;
    updateMicState(false);
  };

  recognition.onend = () => {
    isListening = false;
    updateMicState(false);
  };
}

function setupMicButton() {
  const micBtn = document.getElementById('btn-mic-trigger');
  if (!micBtn) return;

  micBtn.addEventListener('click', () => {
    if (!recognition) {
      alert('Speech Recognition is supported via Google Chrome or Edge. You can also type your voice query directly!');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  });
}

function updateMicState(listening) {
  const micBtn = document.getElementById('btn-mic-trigger');
  const waveform = document.getElementById('waveform-box');
  
  if (micBtn) {
    if (listening) {
      micBtn.classList.add('animate-mic-listening');
      micBtn.innerHTML = '🎙️';
      micBtn.title = 'Listening to your voice command...';
    } else {
      micBtn.classList.remove('animate-mic-listening');
      micBtn.innerHTML = '🎤';
      micBtn.title = 'Click to start voice command';
    }
  }

  if (waveform) {
    waveform.style.display = listening ? 'flex' : 'none';
  }
}

function setupPromptChips() {
  const chips = document.querySelectorAll('.prompt-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-query');
      const inputEl = document.getElementById('voice-text-input');
      if (inputEl) inputEl.value = text;
      processVoiceQuery(text);
    });
  });
}

function setupTextInput() {
  const inputEl = document.getElementById('voice-text-input');
  if (!inputEl) return;

  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      processVoiceQuery(inputEl.value);
    }
  });
}

export function processVoiceQuery(query) {
  const lower = query.toLowerCase().trim();
  let result = VOICE_INTENT_KNOWLEDGE.summary;

  if (lower.includes('marble') || lower.includes('supplier') || lower.includes('shade')) {
    result = VOICE_INTENT_KNOWLEDGE.marble;
  } else if (lower.includes('rev 05') || lower.includes('revision') || lower.includes('drawing')) {
    result = VOICE_INTENT_KNOWLEDGE.rev05;
  } else if (lower.includes('contractor') || lower.includes('site') || lower.includes('plumbing')) {
    result = VOICE_INTENT_KNOWLEDGE.contractor;
  }

  renderIntentResult(query, result);
  speakText(result.responseSpeech);
}

function renderIntentResult(query, data) {
  const container = document.getElementById('intent-output-container');
  if (!container) return;

  container.innerHTML = `
    <div class="intent-card fade-in">
      <div class="intent-header">
        <span>✨ Gemini AI Speech-to-Intent & Entity Extraction</span>
        <button id="btn-read-aloud" class="btn-tts">🔊 Read Aloud</button>
      </div>

      <div style="margin-bottom: 12px; font-size: 1.05rem;">
        <strong>Voice Query Received:</strong> "${query}"
      </div>

      <div class="intent-tags" style="margin-bottom: 16px;">
        <span class="tag-pill" style="background: rgba(0, 210, 255, 0.15); color: var(--accent-cyan);">Intent: ${data.intent}</span>
        <span class="tag-pill" style="background: rgba(147, 51, 234, 0.15); color: #c084fc;">Roles: ${data.role}</span>
        <span class="tag-pill" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">Entity: ${data.entity}</span>
      </div>

      <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-cyan);">
        <strong>⚡ Executed Intelligent Workflow Action:</strong>
        <p style="margin-top: 4px; color: var(--text-primary);">${data.action}</p>
      </div>
    </div>
  `;

  // Attach TTS button listener
  const readBtn = document.getElementById('btn-read-aloud');
  if (readBtn) {
    readBtn.addEventListener('click', () => speakText(data.responseSpeech));
  }
}

function speakText(text) {
  if (!synth) return;
  synth.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  synth.speak(utterance);
}
