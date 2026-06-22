import { useState, useEffect, useRef } from 'react';
import './App.css';

// Import Assets
import bankingCopilotPreview from './assets/banking_copilot_preview.png';
import jarvisPreview from './assets/jarvis_ai_assistant.png';
import stickynotesPreview from './assets/stickynotes.png';
import webrtcPreview from './assets/webrtc_preview.png';
import websocketsPreview from './assets/websockets_preview.png';
import smartStockerPreview from './assets/smart_stocker.png';
import customTimerPreview from './assets/custom_timer.png';
import pdfGeneratorPreview from './assets/pdf_generator.png';
import institutePreview from './assets/institute_preview.png';
import karthikProfile from './assets/karthik_profile.png';

const Icons = {
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  Email: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  ),
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
  ),
  GoogleDev: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
  ),
  Moon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
  ),
  ArrowUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5,12 12,5 19,12" /></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  ),
  Copy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" /></svg>
  ),
  Terminal: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
  ),
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
  ),
  Academic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  ),
  Gmail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
  ),
  HackerRank: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 4.36 4.13 2.45 7.59c-.37.67-.45 1.46-.22 2.17l.87 2.7c.15.46.5.82.96.97l2.7.87c.71.23 1.5.15 2.17-.22C10.25 13.29 11.12 13 12 13s1.75.29 3.07 1.08c.67.37 1.46.45 2.17.22l2.7-.87c.46-.15.82-.5.97-.96l.87-2.7c.23-.72.15-1.5-.22-2.18C19.64 4.13 15.87 2 12 2zm-1 15h-1v-4H9l2-3v4h1l-2 3zm4-3h-1v4h-1l2-3v-4h1l-2 3z" /></svg>
  ),
  Discord: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
  )
};

const mainProjects = [
  {
    id: 'banking-copilot',
    title: 'BFSI Banking AI Copilot',
    category: 'genai',
    image: bankingCopilotPreview,
    tech: ['Python', 'LangChain', 'CRAG', 'FAISS', 'Streamlit', 'HuggingFace', 'Multi-LLM (Groq | Gemini | Claude | OpenAI)'],
    description: 'Developed a domain-specific financial AI assistant that answers banking-related queries using a robust corrective retrieval-augmented generation (CRAG) pipeline with custom recursive text splitters.',
    demo: 'https://karthikp-mac-banking-ai-copilot.hf.space/',
    code: 'https://github.com/KarthikP-Mac/BFSI-Insurance-Ai-Agent'
  },
  {
    id: 'jarvis',
    title: 'Jarvis AI Assistant',
    category: 'genai',
    image: jarvisPreview,
    tech: ['React', 'FastAPI', 'Python', 'WebSockets', 'Groq', 'Kokoro-ONNX', 'ElevenLabs', 'Docker', 'HuggingFace'],
    description: 'Engineered a real-time, voice-activated assistant with a Cyberpunk React UI and a FastAPI WebSocket server for duplex audio streaming, integrating Whisper STT and local Kokoro-ONNX for fast TTS.',
    demo: 'https://karthikp-mac-jarvis-ai-assistant.hf.space/',
    code: 'https://github.com/KarthikP-Mac/Jarvis-AI-Assistant'
  },
  {
    id: 'stickynotes',
    title: 'Sticky-Notes Board',
    category: 'fullstack',
    image: stickynotesPreview,
    tech: ['React 19', 'PWA', 'Firebase Firestore', 'Offline Caching', 'Lucide React', 'Vercel'],
    description: 'Progressive Web App digital board with a Corkboard Canvas and Kanban Grid, custom drag-and-drop operations, secure tag category assignments, and multi-tab synchronization.',
    demo: 'https://stickynotes-pk-mac.vercel.app/',
    code: 'https://github.com/KarthikP-Mac/sticky-notes'
  },
  {
    id: 'webrtc',
    title: 'Web-RTC Video Calls',
    category: 'fullstack',
    image: webrtcPreview,
    tech: ['React', 'WebRTC APIs', 'Spring Boot', 'WebSocket', 'Render'],
    description: 'Zoom-like WebRTC video calling application supporting peer-to-peer connections, real-time screen-sharing, signaling handshakes, and intuitive media toggles.',
    demo: 'https://web-rtc-lq00.onrender.com/',
    code: 'https://github.com/KarthikP-Mac/Web-RTC'
  },
  {
    id: 'websockets',
    title: 'Web-Sockets Live Chats',
    category: 'fullstack',
    image: websocketsPreview,
    tech: ['Angular', 'Spring Boot', 'WebSocket STOMP', 'Docker', 'Render'],
    description: 'Robust real-time messaging service ensuring reliable end-to-end delivery of chat logs with active client connection tracking and STOMP message brokering.',
    demo: 'https://web-sockets-ju5x.onrender.com/',
    code: 'https://github.com/KarthikP-Mac/Web-Sockets'
  },
  {
    id: 'institute-portal',
    title: 'Institution Web Portal',
    category: 'fullstack',
    image: institutePreview,
    tech: ['React', 'Node.js', 'Express', 'Bootstrap', 'SMTP Server', 'Vercel', 'Render'],
    description: 'Contributed to full stack development of Adarsh Computers Portal. Manages courses, registrations, announcements, and conducts interactive student quizzes.',
    demo: 'https://adarsh-computers.vercel.app/',
    code: 'https://github.com/KarthikP-Mac'
  },
  {
    id: 'smart-stocker',
    title: 'Smart Stocker Desktop',
    category: 'desktop',
    image: smartStockerPreview,
    tech: ['Python', 'Tkinter', 'SQL File Ledger'],
    description: 'Developed a portable desktop utility software functioning as an accounting ledger for inventory tracking, sales bookkeeping, and financial analysis.',
    demo: '',
    code: 'https://github.com/KarthikP-Mac/Smart_Stocker'
  },
  {
    id: 'pdf-generator',
    title: 'Python PDF Utility',
    category: 'desktop',
    image: pdfGeneratorPreview,
    tech: ['Python', 'Tkinter', 'OS APIs', 'PDF Creator / Extractor'],
    description: 'Built a desktop utility for batch PDF creation, extracting text layouts, and scraping embedded images from selected file ranges.',
    demo: '',
    code: 'https://github.com/KarthikP-Mac/Python-Pdf'
  },
  {
    id: 'custom-timer',
    title: 'Auto Power Off Timer',
    category: 'desktop',
    image: customTimerPreview,
    tech: ['Python', 'Tkinter', 'Windows OS APIs'],
    description: 'Created a utility software that schedules PC power events (sleep, restart, shutdown) dynamically or based on custom timers.',
    demo: '',
    code: 'https://github.com/KarthikP-Mac/Auto_Power_Off_Timer'
  }
];

const miniProjects = [
  { title: 'First Web Site', tech: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap', desc: 'Designed and built the initial responsive web portal and landing pages for the computer institution.' },
  { title: 'Movie Seat Booking', tech: 'HTML5, CSS3, JavaScript', desc: 'Theater seat booking interface with ticket calculations and local storage state preservation.' },
  { title: 'DOM Array Dashboard', tech: 'HTML5, CSS3, JavaScript', desc: 'Dynamic dashboard displaying functional array methods (map, filter, sort, reduce) to fetch users and net wealth.' },
  { title: 'Exchange Rate Calculator', tech: 'HTML5, CSS3, JS, API Fetch', desc: 'Real-time currency exchange converter displaying values from live third-party rates.' },
  { title: 'Custom Video Player', tech: 'HTML5, CSS3, JavaScript', desc: 'Styled video layout demonstrating play/pause indicators, progress slider, and volume triggers.' },
  { title: 'Form Validator', tech: 'HTML5, CSS3, JavaScript', desc: 'Modern form registration client validator displaying instant success/error feedback.' },
  { title: 'Menu Slider & Modal', tech: 'HTML5, CSS3, JavaScript', desc: 'Smooth transition sidebar menu slider and transaction modal dialogs using CSS properties.' },
  { title: 'Calculator', tech: 'HTML5, CSS3, JavaScript', desc: 'A clean, standard web calculator with an elegant, responsive interface.' }
];

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedField, setCopiedField] = useState({ email: false, phone: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMiniProjects, setShowMiniProjects] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progBar = document.querySelector('.scroll-progress-bar');
      if (progBar) progBar.style.width = `${scrolled}%`;

      const upArrow = document.querySelector('.scroll-to-top');
      if (upArrow) {
        if (winScroll > 400) {
          upArrow.classList.add('show');
        } else {
          upArrow.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activeFilter, showMiniProjects]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField((prev) => ({ ...prev, [field]: true }));
      setTimeout(() => {
        setCopiedField((prev) => ({ ...prev, [field]: false }));
      }, 2000);
    });
  };

  const scrollIntoView = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredProjects = activeFilter === 'all'
    ? mainProjects
    : mainProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="app-container">
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar"></div>
      </div>

      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <header className="navbar">
        <div className="wrapper nav-container">
          <div className="logo" onClick={() => scrollIntoView('home')} style={{ cursor: 'pointer' }}>
            Karthik P. <span>FullStack / AI</span>
          </div>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <li><span className="nav-link" onClick={() => scrollIntoView('home')}>Home</span></li>
              <li><span className="nav-link" onClick={() => scrollIntoView('skills')}>Skills</span></li>
              <li><span className="nav-link" onClick={() => scrollIntoView('experience')}>Experience</span></li>
              <li><span className="nav-link" onClick={() => scrollIntoView('projects')}>Projects</span></li>
              <li><span className="nav-link" onClick={() => scrollIntoView('education')}>Education</span></li>
              <li><span className="nav-link" onClick={() => scrollIntoView('contact')}>Contact</span></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
            </button>
            <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero-sec">
        <div className="wrapper hero-grid">
          <div className="hero-content reveal fade-in">
            <span className="hero-tag">Welcome to my space</span>
            <h1 className="hero-title">Karthik Potti</h1>
            <p className="hero-subtitle">Full Stack & AI/Automation Engineer</p>
            <p className="hero-description">
              Dedicated Software Engineer with 4 years of experience at Tata Consultancy Services (TCS) in the BFSI sector.
              Specializing in building modern web applications (Angular, React, Spring Boot) and orchestrating production-grade GenAI pipelines
              (LangChain, RAG/CRAG, Multi-LLMs).
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollIntoView('projects')}>
                Explore Projects <Icons.ChevronRight />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollIntoView('contact')}>
                Get in Touch
              </button>
            </div>
          </div>

          <div className="hero-image-container reveal scale-up">
            <div className="avatar-frame">
              <img src={karthikProfile} alt="Karthik Potti Avatar" className="avatar-img" />
              <div className="floating-badge fb-1">💡 LangChain</div>
              <div className="floating-badge fb-2">⚛️ React</div>
              <div className="floating-badge fb-3">☕ Spring Boot</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="reveal fade-in">
        <div className="wrapper">
          <div className="section-header">
            <span className="section-subtitle">Core Capabilities</span>
            <h2 className="section-title">Technical Skillset</h2>
          </div>

          <div className="skills-grid">
            <div className="glass-card skills-category reveal slide-in-left">
              <h3><Icons.Brain /> AI & Automation</h3>
              <div className="skills-list">
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">LangGraph</span>
                <span className="skill-tag">AutoGen AI</span>
                <span className="skill-tag">RAG / CRAG</span>
                <span className="skill-tag">Azure OCR</span>
                <span className="skill-tag">Microsoft Logic Apps</span>
                <span className="skill-tag">Streamlit</span>
              </div>
            </div>

            <div className="glass-card skills-category reveal scale-up">
              <h3><Icons.Terminal /> Frontend & Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Flask</span>
              </div>
            </div>

            <div className="glass-card skills-category reveal slide-in-right">
              <h3><Icons.Database /> Databases & DevTools</h3>
              <div className="skills-list">
                <span className="skill-tag">Oracle SQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Maven</span>
                <span className="skill-tag">Linux / WinSCP</span>
              </div>
            </div>

            <div className="glass-card skills-category reveal scale-up">
              <h3><Icons.Cloud /> DevOps & Cloud</h3>
              <div className="skills-list">
                <span className="skill-tag">Azure DevOps</span>
                <span className="skill-tag">GitHub CI/CD</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Render</span>
                <span className="skill-tag">JWT Security</span>
              </div>
            </div>
            
            <div className="glass-card skills-category reveal slide-in-left">
              <h3><Icons.Terminal /> Desktop & GUI</h3>
              <div className="skills-list">
                <span className="skill-tag">Tkinter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="reveal fade-in">
        <div className="wrapper">
          <div className="section-header">
            <span className="section-subtitle">Professional Path</span>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal slide-in-left">
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <div>
                  <span className="timeline-role">IT Systems Engineer & AI Developer</span>
                  <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                  <span className="timeline-company">Tata Consultancy Services</span>
                </div>
                <span className="timeline-duration">Apr 2022 - Present</span>
              </div>
              <div className="glass-card timeline-card">
                <h4 style={{ marginBottom: '0.75rem', color: 'hsl(var(--primary))' }}>GenAI Project: Call Intelligence & Automation</h4>
                <ul className="timeline-details">
                  <li>Built advanced data processing pipelines using Python, LangChain, and RAG to analyze BFSI call reports and extract customer insights.</li>
                  <li>Automated compiled reporting and scheduled email notifications to stakeholders using AutoGen AI and Logic Apps, reducing manual effort significantly.</li>
                  <li>Designed and built a Python-based OCR automation engine allowing transaction processing from user PDF uploads.</li>
                  <li>Built GenAI backend services using Flask and frontend dashboards using React integrated with Power BI analytics.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal slide-in-right">
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <div>
                  <span className="timeline-role">Full Stack Developer</span>
                  <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                  <span className="timeline-company">Tata Consultancy Services</span>
                </div>
                <span className="timeline-duration">Apr 2022 - Present</span>
              </div>
              <div className="glass-card timeline-card">
                <h4 style={{ marginBottom: '0.75rem', color: 'hsl(var(--primary))' }}>Java Project: Latte Rewrite & ACH Integration</h4>
                <ul className="timeline-details">
                  <li>Developed modern, responsive frontend modules in Angular and implemented backend microservices in Spring Boot for ACH payment integrations.</li>
                  <li>Designed a custom multi-window desktop OS modal manager in Angular; orchestrates popups using relative dynamic z-indices.</li>
                  <li>Orchestrated critical vulnerability remediation across the API architecture, building custom Java-based patching libraries compiled into a centralized Maven JAR.</li>
                  <li>Managed Linux automation processes, shell scripts, and secured file structures utilizing WinSCP and log handlers.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal slide-in-left">
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <div>
                  <span className="timeline-role">Cross-Project Contributions</span>
                  <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>
                  <span className="timeline-company">TCS / Equitable Client</span>
                </div>
                <span className="timeline-duration">Ongoing</span>
              </div>
              <div className="glass-card timeline-card">
                <h4 style={{ marginBottom: '0.75rem', color: 'hsl(var(--primary))' }}>Security Compliance & Delivery Automation</h4>
                <ul className="timeline-details">
                  <li>Resolved 100+ application vulnerabilities flagged in Veracode security assessments, securing APIs and UIs.</li>
                  <li>Designed state authentication filters using JWT tokens and robust role-based authorization parameters.</li>
                  <li>Streamlined automated build/deployment tasks on GitHub Actions and Azure DevOps, reducing release cycles by 70%.</li>
                  <li>Configured centralized exception structures and logging streams using Azure Kubernetes log collectors.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="reveal fade-in">
        <div className="wrapper">
          <div className="section-header">
            <span className="section-subtitle">My Portfolio</span>
            <h2 className="section-title">Featured Creations</h2>
          </div>

          <div className="projects-filter">
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
            <button className={`filter-btn ${activeFilter === 'genai' ? 'active' : ''}`} onClick={() => setActiveFilter('genai')}>GenAI & RAG</button>
            <button className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setActiveFilter('fullstack')}>Full Stack</button>
            <button className={`filter-btn ${activeFilter === 'desktop' ? 'active' : ''}`} onClick={() => setActiveFilter('desktop')}>Desktop Utilities</button>
          </div>

          <div className="projects-grid reveal-stagger active">
            {filteredProjects.map((project) => (
              <div className="glass-card project-card reveal scale-up active" key={project.id}>
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, idx) => (
                      <span className="tech-tag" key={idx}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Icons.ExternalLink /> Live Demo
                      </a>
                    )}
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Icons.Code /> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }} className="reveal fade-in">
            <button className="btn btn-secondary" onClick={() => setShowMiniProjects(!showMiniProjects)}>
              {showMiniProjects ? 'Hide Mini Projects' : 'Show Mini Projects & Exercises'}
            </button>

            {showMiniProjects && (
              <div className="projects-grid" style={{ marginTop: '2.5rem', textAlign: 'left' }}>
                {miniProjects.map((mini, idx) => (
                  <div className="glass-card reveal fade-in active" key={idx} style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem' }}>{mini.title}</h4>
                      <span className="tech-tag" style={{ fontSize: '0.7rem' }}>{mini.tech}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>{mini.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="education" className="reveal fade-in">
        <div className="wrapper">
          <div className="section-header">
            <span className="section-subtitle">Academic Credentials</span>
            <h2 className="section-title">Education & Languages</h2>
          </div>

          <div className="education-grid">

            <div className="glass-card education-card reveal scale-up">
              <div className="edu-icon-wrapper"><Icons.Academic /></div>
              <h3 className="edu-degree">B.Tech in Computer Science & Engineering</h3>
              <p className="edu-school">NRI Institute of Technology</p>
              <div className="edu-meta">
                <span className="edu-year">Graduated: 2021</span>
                <span className="edu-grade">CGPA: 7.68 / 10</span>
              </div>
            </div>

            <div className="glass-card education-card reveal scale-up">
              <div className="edu-icon-wrapper"><Icons.Academic /></div>
              <h3 className="edu-degree">Diploma in Science & Technology</h3>
              <p className="edu-school">Amrita Sai Institution</p>
              <div className="edu-meta">
                <span className="edu-year">Graduated: 2018</span>
                <span className="edu-grade">Percentage: 75.2%</span>
              </div>
            </div>

            <div className="glass-card education-card reveal scale-up">
              <div className="edu-icon-wrapper"><Icons.Academic /></div>
              <h3 className="edu-degree">Secondary School Certificate</h3>
              <p className="edu-school">Ravindra Bharati Public School</p>
              <div className="edu-meta">
                <span className="edu-year">Graduated: 2015</span>
                <span className="edu-grade">Percentage: 82.0%</span>
              </div>
            </div>
          </div>

          <div className="languages-sec reveal fade-in">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Languages Spoken</h3>
            <div className="lang-grid">
              <div className="glass-card lang-card reveal fade-in">
                <div className="lang-icon">EN</div>
                <div>
                  <p className="lang-name">English</p>
                  <p className="lang-level">Professional Working Proficiency</p>
                </div>
              </div>

              <div className="glass-card lang-card reveal fade-in">
                <div className="lang-icon">TE</div>
                <div>
                  <p className="lang-name">Telugu</p>
                  <p className="lang-level">Native / Bilingual Proficiency</p>
                </div>
              </div>

              <div className="glass-card lang-card reveal fade-in">
                <div className="lang-icon">HI</div>
                <div>
                  <p className="lang-name">Hindi</p>
                  <p className="lang-level">Full Professional Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="reveal fade-in">
        <div className="wrapper contact-container">
          <div className="section-header">
            <span className="section-subtitle">Reach Out</span>
            <h2 className="section-title">Let's Connect</h2>
          </div>

          <div className="glass-card contact-card reveal scale-up">
            <h3>Get in touch</h3>
            <p className="contact-text">
              Have an interesting project proposal, feedback on my applications, or want to discuss full-stack and AI development opportunities? Feel free to ping me directly!
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-info">
                  <div className="contact-icon"><Icons.Email /></div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">karthikpotti842@gmail.com</div>
                  </div>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('karthikpotti842@gmail.com', 'email')}
                  aria-label="Copy Email"
                >
                  {copiedField.email ? <Icons.Check /> : <Icons.Copy />}
                  <span className={`copy-tooltip ${copiedField.email ? 'show' : ''}`}>Copied!</span>
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <div className="contact-icon"><Icons.Phone /></div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 9515759632</div>
                  </div>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('+91 9515759632', 'phone')}
                  aria-label="Copy Phone"
                >
                  {copiedField.phone ? <Icons.Check /> : <Icons.Copy />}
                  <span className={`copy-tooltip ${copiedField.phone ? 'show' : ''}`}>Copied!</span>
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <div className="contact-icon"><Icons.Location /></div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">Hyderabad, India</div>
                  </div>
                </div>
                <div style={{ width: '32px' }}></div> {/* Spacer */}
              </div>
            </div>

            <div className="social-grid">
              <a href="https://github.com/KarthikP-Mac" target="_blank" rel="me" className="social-link" aria-label="GitHub Profile" title='GitHub Profile'>
                <Icons.Github />
              </a>
              <a href="https://g.dev/karthikPMac" target="_blank" rel="me" className="social-link" aria-label="Google Developer Profile" title='Google Developer Profile'>
                <Icons.GoogleDev />
              </a>

              <a href="http://www.linkedin.com/in/karthik-potti842" target="_blank" rel="me" className="social-link" aria-label="LinkedIn" title='LinkedIn'>
                <Icons.LinkedIn />
              </a>
              <a href="https://twitter.com/KarthikP_Mac" target="_blank" rel="me" className="social-link" aria-label="Twitter" title='Twitter'>
                <Icons.Twitter />
              </a>
              <a href="https://instagram.com/pottikarthik" target="_blank" rel="me" className="social-link" aria-label="Instagram" title='Instagram'>
                <Icons.Instagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009020761119" target="_blank" rel="me" className="social-link" aria-label="Facebook" title='Facebook'>
                <Icons.Facebook />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=karthikpotti842@gmail.com&su=GitHub%20Profile%20Inquiry&body=Hi%20Karthik%2C%0A%0AI+came+across+your+GitHub+profile+and+would+love+to+connect+regarding+opportunities%2C+collaborations%2C+or+interesting+projects.%0A%0ALooking+forward+to+hearing+from+you." rel="me" className="social-link" target='_blank' aria-label="Gmail" title='Gmail'>
                <Icons.Gmail />
              </a>
              <a href="https://www.hackerrank.com/karthikpotti842" target="_blank" rel="me" className="social-link" aria-label="HackerRank" title='HackerRank'>
                <Icons.HackerRank />
              </a>
              <a href="https://discordapp.com/users/karthikp_mac" target="_blank" rel="me" className="social-link" aria-label="Discord" title='Discord'>
                <Icons.Discord />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrapper footer-text">
          <p>&copy; {new Date().getFullYear()} Karthik Potti. All rights reserved.</p>
          <p className="footer-tech">Designed & Built with React, CSS3, & Vite</p>
        </div>
      </footer>

      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <Icons.ArrowUp />
      </button>
    </div>
  );
}

export default App;
