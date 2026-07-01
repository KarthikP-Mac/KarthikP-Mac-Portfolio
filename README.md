# Karthik Potti | KarthikP-Mac | KarthikP | KarthikPotti842
**Full Stack Developer | AI Engineer | Systems Engineer**
*   **Phone:** <i class="fa-solid fa-phone"></i> +91 9515759632
*   **Email:** <i class="fa-solid fa-envelope"></i> [karthikpotti842@gmail.com](mailto:karthikpotti842@gmail.com)
*   **Location:** <i class="fa-solid fa-location-dot"></i> Hyderabad, India
*   **GitHub:** <i class="fa-brands fa-square-github"></i> [github.com/KarthikP-Mac](https://github.com/KarthikP-Mac)
*   **Google Developer Profile:** <i class="fa-brands fa-google"></i> [g.dev/karthikPMac](https://g.dev/karthikPMac)

---

## 💼 Professional Summary
Dedicated Full Stack Developer and AI/Automation Engineer with 4 years of experience at Tata Consultancy Services (TCS) in the BFSI sector. Proven expertise in developing web applications using Angular, React, and Java Spring Boot, automating complex business workflows with GenAI models (LangChain, AutoGen AI, RAG/CRAG), and implementing secure cloud based infrastructures. Highly skilled in centralizing APIs, addressing security vulnerabilities, and managing Linux-based automated batch jobs.

---

## 🛠️ Technical Skills

*   **Programming Languages:** Java, Python, JavaScript, TypeScript, C, HTML5, CSS3
*   **Frameworks & Libraries:** Spring Boot, React, Angular, Flask, Bootstrap, Materialize CSS, jQuery
*   **AI & Automation:** LangChain, LangGraph, AutoGen AI, RAG / CRAG, Azure OCR, Microsoft Logic Apps, Azure RAG Index
*   **Databases:** Oracle SQL, MySQL, MongoDB
*   **Tools & Platforms:** Git, GitHub (ci/cd, version control), Linux (WinSCP, automation), Maven, Postman, Azure DevOps (deployment, ci/cd), Vercel, Render

---

## 💼 Professional Experience

### **Tata Consultancy Services (TCS)**
**IT Systems Engineer (Client: Equitable Financial Life Insurance)**
*Apr 2022 – Present* | *Hyderabad, India*

#### **Project 1: GenAI Project: Upsell, Cross Sell & Operational Call Intelligence**
*Role: AI Developer & Automation Engineer*
*   Built and optimized advanced text/data processing pipelines using **Python**, **LangChain**, and **RAG** to analyze call data and extract client insights.
*   Automated report compilation and scheduled email distribution to stakeholders using **AutoGen AI** and **Microsoft Logic Apps**, reducing manual effort significantly.
*   Designed and implemented a **Python-based OCR automation service** allowing automated transaction processing from user PDF uploads.
*   Collaborated with cross-functional teams to integrate AI models into existing enterprise systems to improve client engagement.
*   Built the GenAI application using **Flask** (backend) and **React** (frontend), and integrated **Power BI** dashboards to visualise statistical workflow details and operational metrics.

#### **Project 2: Java Project: Latte Rewrite & ACH Integration**
*Role: Full Stack Developer*
*   Developed modern, highly responsive frontend layouts in **Angular** and implemented enterprise-level backend services using **Java Spring Boot** for ACH payment integrations (Bank of America).
*   Designed and implemented a custom multi-window modal manager in **Angular** mimicking desktop OS (Windows Explorer) behavior; dynamically orchestrates z-index depth to bring clicked/active popups to the foreground and keep inactive ones stacked in the background.
*   Orchestrated vulnerability remediations across critical financial APIs, centralizing security fixes into a single shared **Maven JAR** to achieve consistency and reduce duplicate efforts.
*   Built custom Java-based utilities to patch security findings, boosting turnaround time for vulnerability compliance.
*   Managed background automation batch processes in a **Linux** environment, utilising **WinSCP** for secure data transmittal and log analysis.

#### **Cross-Project Contributions**
*   Developed and maintained **Angular** and **React** components alongside RESTful APIs using **Spring Boot** and **Flask**, enabling seamless UI‑backend integration and enhancing user experience.
*   Resolved 100+ application vulnerabilities as part of Equitable's Vulnerability Remediation Team, improving overall system security and compliance (Veracode scan).
*   Designed secure APIs & UI using JWT‑based authentication and role‑based authorization, ensuring 100% compliance in internal security audits.
*   Streamlined CI/CD pipelines using Azure DevOps and GitHub, reducing manual deployment efforts by 70% and enabling faster releases.
*   Implemented centralized logging and exception handling with Azure Kubernetes loggers, improving error traceability.

---

## 💻 Projects & Portfolio

### **GenAI & RAG Applications**

#### **BFSI-Insurance-Ai-Agent (Banking AI Copilot) [Public]**
*Tech: Python, Streamlit, LangChain, CRAG, FAISS Vector DB, Hugging Face Embeddings, Groq (Active: Llama-4 Scout 17B | Fallbacks: Llama-3.3-70b · Llama-3.1-8b · Qwen-3), Gemini, OpenAI, Claude*
*   **Live Demo:** [karthikp-mac-banking-ai-copilot.hf.space](https://karthikp-mac-banking-ai-copilot.hf.space/)
*   An intelligent finance & banking AI assistant that answers domain-specific queries.
*   Leverages a robust **CRAG** pipeline with a custom recursive character splitter, **FAISS vector database**, and a **Multi-Model LLM Orchestration** architecture — configured with **Llama-4 Scout 17B** (meta-llama/llama-4-scout-17b-16e-instruct) as the active primary reasoning engine, with dynamic hot-swapping fallback routing across Llama-3.3-70b, Llama-3.1-8b, and Qwen-3 to manage token limits and optimize cost per query.

#### **Jarvis AI Assistant (Voice-Activated Assistant) [Public]**
*Tech: React, FastAPI, Python, WebSockets, Groq, ONNX Runtime (Kokoro-ONNX), ElevenLabs, Docker, Hugging Face Spaces*
*   **Live Demo:** [karthikp-mac-jarvis-ai-assistant.hf.space](https://karthikp-mac-jarvis-ai-assistant.hf.space/)
*   A real-time, **Multimodal Voice-to-Voice AI Assistant** featuring dynamic location/timezone-aware greeting generation, dual-engine Text-to-Speech (TTS) synthesis, and high-performance bidirectional WebSocket communication.
    *   *Frontend:* Built with React.js (Vite), Vanilla CSS (Cyberpunk/Sci-Fi UI theme with active/inactive neon state cues), Web Audio API (AudioContext, AnalyserNode, GainNode for real-time frequency waveforms and chime synthesis), and the Web Speech API (webkitSpeechRecognition) for local background wake-word triggers.
    *   *Backend:* FastAPI ASGI server utilizing bidirectional WebSockets for high-frequency duplex streaming of raw audio packets and system configs.
    *   *AI Models (STT & Multi-LLM):* Powered by Groq API — Whisper-large-v3-turbo for rapid Speech-to-Text and a **Multi-Model LLM Routing Layer** selecting between **Llama-4 Scout 17B** (active primary model · 500K TPD · best quality/throughput ratio), **Llama-3.3-70b-versatile** (high-quality reasoning · 100K TPD), and **Llama-3.1-8b-instant** (ultra-low latency · 500K TPD) for agent reasoning, timezone-aware localized queries, and function-calling routing.
    *   *Text-to-Speech (TTS):* Dual-engine pipeline: Cloud/Premium (ElevenLabs API for voice streaming) and Local/Free (kokoro-onnx==0.3.4 and ONNX Runtime for in-memory offline English voice synthesis), with browser-native speech synthesis as a fallback for multi-lingual accents (Hindi & Telugu).
    *   *Safety & Infrastructure:* Double-layered regex guardrail filter running on the FastAPI server to block explicit or unsafe URLs and queries before LLM invocation. Deployed as a monolithic container on Hugging Face Spaces via Docker.

### **Real-Time Web Applications**

#### **Web-RTC (Live Random Video Calls) [Public]**
*Tech: React, WebRTC APIs, Spring Boot, Java Virtual Threads (Project Loom), WebSocket (Signaling), Render*
*   **Live Demo:** [web-rtc-lq00.onrender.com](https://web-rtc-lq00.onrender.com/)
*   Developed a peer-to-peer video conferencing application supporting live video/audio streams, screen sharing, and adaptive signaling. Backend built with **Java Virtual Threads** (Project Loom) for high-concurrency, low-latency signaling coordination, deployed as a **monolithic Docker** container on Render.

#### **Web-Sockets (Live Chats) [Public]**
*Tech: Angular, Spring Boot, WebSocket (STOMP), Docker, Render*
*   **Live Demo:** [web-sockets-ju5x.onrender.com](https://web-sockets-ju5x.onrender.com/)
*   Built a real-time instant messaging service with persistent connection tracking and **STOMP**-based WebSocket messaging, deployed as a **monolithic Docker** container on Render — ensuring reliable end-to-end delivery of chat messages at scale.

#### **Sticky-Notes [Public]**
*Tech: React 19, PWA (Progressive Web App), Firebase Firestore, Firebase Auth (Google OAuth2), LocalStorage, CSS3, Lucide React, Vercel*
*   **Live Demo:** [stickynotes-pk-mac.vercel.app](https://stickynotes-pk-mac.vercel.app/)
*   Engineered a Progressive Web App (PWA) digital board featuring multi-modal layout views (Interactive Corkboard Canvas and Kanban Grid View) to organize and manage task notes.
*   Implemented custom drag-and-drop operations for priorities sorting, tag category assignments, and a trash bin deletion system with Firebase Auth Google OAuth2 sign-in.
*   Configured Firebase Firestore offline caching with a multi-tab synchronization manager to ensure data persistence and reliable real-time updates.

### **Institution Web Portals**

#### **Adarsh Computers Portal (React & ExpressNode) [Private]**
*Tech: React, Node.js, Express.js, Bootstrap, SMTP, Vercel, Render*
*   **Live Website:** [adarsh-computers.vercel.app](https://adarsh-computers.vercel.app/)
*   Contributed to the full stack development of an institute portal. Designed responsive interfaces in React (Frontend) and created robust services in Express/Node (Backend) to handle courses, student registrations, announcements, and online quizzes.

#### **First-Web-Site [Private]**
*Tech: HTML, CSS, JavaScript, jQuery, Bootstrap*
*   Designed and built the initial responsive web portal for the institution.

### **Python Tkinter Desktop & Portable Software**

#### **Smart_Stocker**
*Tech: Python, Tkinter, SQLite3, Excel (openpyxl), SMTP, Matplotlib, AI Bot, JSON*
*   Designed a standalone desktop ERP and ledger system using **Python (Tkinter)** and **SQLite3**, featuring local data caching, asynchronous background auto-saves, and Matplotlib-based analytics dashboards.
*   Implemented an automated stock advisory module providing real-time stock alert thresholds (yellow/red warnings) and predictive profit forecasting.
*   Integrated secure PDF document compilation for automated generation of invoices, purchase orders, and monthly ledger sheets.

#### **Python-Pdf**
*Tech: Python, Tkinter, PyPDF, Pillow, OS APIs, File Automation*
*   Engineered a desktop utility using **Python (Tkinter)** to batch convert entire folders of images into high-quality, compressed PDFs with a live progress renderer.
*   Supports custom page and image ordering with a **live sequence preview** (allowing interactive drag-and-drop or button-based reordering) before exporting the final PDF.
*   Implemented selective page extraction (e.g., picking 2 of 10 pages) and image-only extraction from existing PDF documents.

#### **Auto_Power_Off_Timer**
*Tech: Python, Tkinter, Windows OS APIs, JSON, Task Scheduling*
*   Developed a desktop power automation tool in **Python (Tkinter)** that schedules system events (shutdown, sleep, lock) via countdown timers and persistent daily schedules saved in JSON.
*   Implemented a system-overlay countdown notification in the final 5 minutes of a scheduled event, with password-protected controls to cancel timers, edit tasks, or exit.ased on custom timers.

### **Other Projects**

#### **Movie Seat Booking**
*Tech: HTML5, CSS3, JavaScript*
*   Interactive movie theater seat booking interface with real-time seat selection, ticket price calculations, and local storage state persistence.

#### **DOM Array Methods Dashboard**
*Tech: HTML5, CSS3, JavaScript*
*   Dynamic dashboard demonstrating functional programming array methods (`map`, `filter`, `sort`, `reduce`) to fetch random users and calculate total net wealth.

#### **Exchange Rate Calculator**
*Tech: HTML5, CSS3, JavaScript*
*   Real-time foreign exchange rate calculator that fetches live currencies from a third-party API and handles direct conversions.

#### **Custom Video Player**
*Tech: HTML5, CSS3, JavaScript*
*   Custom-styled HTML5 media player showcasing play/pause states, interactive progress slider, timestamp display, and volume control interface.

#### **Form Validator**
*Tech: HTML5, CSS3, JavaScript*
*   Modern client-side form registration validation utility with dynamic success/error styling and input validation checks.

#### **Menu Slider & Modal**
*Tech: HTML5, CSS3, JavaScript*
*   Smooth UI navigation layout showing a slide-out sidebar overlay and styled transaction modal dialogs using CSS transitions.

#### **Calculator**
*Tech: HTML5, CSS3, JavaScript*
*   Designed a responsive, standard web calculator with clean UI.

---

## 🎓 Education

*   **B.Tech. in Computer Science & Engineering** (2021)
    *   *NRI Institute of Technology* | CGPA: **7.68 / 10**
*   **Diploma in Science & Technology** (2018)
    *   *Amrita Sai Institution* | Percentage: **75.2%**
*   **Secondary School (SSC)** (2015)
    *   *Ravindra Bharati Public School* | Percentage: **82.0%**

---

## 🗣️ Languages
*   **English:** Professional Working Proficiency
*   **Telugu:** Native / Bilingual Proficiency
*   **Hindi:** Full Professional Proficiency
