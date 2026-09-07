# ArchScale Guild — Problem Statement AS-03: "What if you could talk to your project?"

**Project Name:** ArchScale Voice AI — Conversational Project Assistant  
**Applicant Name:** Rafia Minhaj  
**Email:** `rafiaminhaj423@gmail.com`  
**Institution:** Cambridge Institute of Technology, Ranchi  
**Track:** Full Stack Web Application Internship Hackathon  
**Target Problem:** AS-03 (Voice Speech-to-Intent & Entity Extraction across 8 Architecture & Construction Stakeholders)

---

## 📍 1. The Friction & Problem Statement

In the architecture, interior design, and construction ecosystem, a single project involves 8 different audiences (*Architects, Interior Designers, Project Owners, Material Suppliers, Consultants, Contractors, Fabricators, and Specialist Installers*).

Communication is severely fragmented across 6 unstructured channels (WhatsApp messages, Email revisions, Site notes, Supplier stock quotes, Client verbal requests, and REV drawings). Important information gets buried under communication overload.

**AS-03 Solution:** Instead of manual dashboard filtering, *ArchScale Voice AI* enables any stakeholder to speak or type natural language voice queries (e.g., *"What is the status of Italian Marble Shade 312?"* or *"Which drawing revision is live for the contractor?"*).

---

## 🛠️ 2. Core Features & Capabilities

1. **Speech-to-Text & Mic Console**: Real-time voice audio recording with interactive waveform visualizer.
2. **Gemini AI Speech-to-Intent & Entity Extraction**: Automatically extracts the *Intent* (e.g., Material Spec Query), *Target Stakeholder Roles*, *Entity Name*, and *Executed Action*.
3. **Text-to-Speech (TTS) Read Aloud**: Synthesizes and reads back actionable answers to site teams hands-free.
4. **8 Stakeholder Role Cards Grid**: Live card statuses mapping friction solved for Architects, Interior Designers, Suppliers, and Contractors.
5. **Inbound Unstructured Communication Stream**: Auto-parses WhatsApp, Email, Site Notes, and REV Drawing uploads into structured, clickable voice intent triggers.

---

## 🏗️ 3. Architecture & Tech Stack

- **Frontend:** HTML5, Modern Vanilla CSS3 Design Tokens, Javascript (ES6+ Modules), Vite.
- **Voice Recognition:** Web Speech API (`webkitSpeechRecognition` & `SpeechSynthesis`).
- **AI Engine:** Gemini 3.7 Flash Intent & Entity Extraction parser pipeline.
- **Design Aesthetic:** ArchScale Slate Blueprint Dark Theme with electric cyan glows and modern typography.

---

## 🚀 4. How AI Helped & Decisions Made

- **AI Assistance:** Used AI for rapid intent classification pipeline prototyping, voice waveform CSS animation design, and multi-channel message stream synthesis.
- **Design Decision:** Prioritized 1-click prompt triggers alongside mic input to ensure instant execution even in noisy construction site environments.

---

## 🔮 5. Future Evolution Roadmap

- **Phase 1 (Current):** Voice speech-to-intent parsing, entity extraction, and 8 stakeholder UI card synchronization.
- **Phase 2 (Next):** Direct Webhook integration with WhatsApp Business API and automated CAD/REVIT file version stamping via cloud serverless functions.
