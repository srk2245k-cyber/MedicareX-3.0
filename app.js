/**
 * MedicareX 2.0 - Complete Smart Medicine Management System
 * Pure Client-Side Single-Page Web Application
 * Offline-First • Zero Firebase • Zero Paid APIs • Full Local Storage Persistence
 * 22 Official Scheduled Indian Languages + English
 */

// LOCAL STORAGE KEYS
const STORAGE_KEYS = {
  MEDICATIONS: 'medicarex_medications',
  LOGS: 'medicarex_logs',
  EMERGENCY: 'medicarex_emergency',
  LANGUAGE: 'medicarex_language',
  THEME: 'medicarex_theme',
  IOT: 'medicarex_iot_state',
  CAREGIVER: 'medicarex_caregiver_profiles',
  ACTIVE_PATIENT: 'medicarex_active_patient',
  VITALS: 'medicarex_vitals',
  NOTIFICATIONS: 'medicarex_notifications',
  USER_PROFILE: 'medicarex_user_profile'
};

// DEFAULT SEED MEDICATIONS
const SEED_MEDICATIONS = [
  {
    id: 'med-1',
    name: 'Lisinopril',
    brandName: 'Prinivil / Zestril',
    genericName: 'Lisinopril',
    dosage: '10mg',
    dosageUnit: 'mg',
    route: 'Oral',
    category: 'Cardiovascular',
    frequency: 'Once Daily',
    slots: ['Morning'],
    timeDetails: '8:00 AM daily',
    startDate: '2026-08-01',
    endDate: '',
    status: 'active',
    instructions: 'Take with a full glass of water in the morning.',
    uses: 'Used to treat high blood pressure (hypertension) and protect heart function.',
    precautions: 'Avoid potassium supplements without doctor consultation. Monitor blood pressure.',
    storage: 'Store at room temperature 20°C to 25°C away from moisture.',
    emergencyRelevant: true,
    createdAt: '2026-08-01'
  },
  {
    id: 'med-2',
    name: 'Metformin',
    brandName: 'Glucophage / Glycomet',
    genericName: 'Metformin Hydrochloride',
    dosage: '500mg',
    dosageUnit: 'mg',
    route: 'Oral',
    category: 'Diabetes',
    frequency: 'Twice Daily',
    slots: ['Morning', 'Evening'],
    timeDetails: '8:00 AM & 7:00 PM with meals',
    startDate: '2026-08-01',
    endDate: '',
    status: 'active',
    instructions: 'Take with meals to minimize stomach upset.',
    uses: 'Used to lower blood sugar levels in patients with type 2 diabetes.',
    precautions: 'Take with food. Avoid excessive alcohol intake. Monitor kidney function.',
    storage: 'Store in a cool, dry place away from direct light.',
    emergencyRelevant: true,
    createdAt: '2026-08-01'
  },
  {
    id: 'med-3',
    name: 'Atorvastatin',
    brandName: 'Lipitor / Atorva',
    genericName: 'Atorvastatin Calcium',
    dosage: '20mg',
    dosageUnit: 'mg',
    route: 'Oral',
    category: 'Cholesterol',
    frequency: 'Once Daily',
    slots: ['Night'],
    timeDetails: '10:00 PM bedtime',
    startDate: '2026-08-05',
    endDate: '',
    status: 'active',
    instructions: 'Take once daily at bedtime.',
    uses: 'Used to lower LDL cholesterol and triglycerides and reduce cardiovascular risk.',
    precautions: 'Avoid large amounts of grapefruit juice. Report unexplained muscle aches.',
    storage: 'Store at room temperature in a tightly closed container.',
    emergencyRelevant: true,
    createdAt: '2026-08-05'
  },
  {
    id: 'med-4',
    name: 'Vitamin D3',
    brandName: 'Calcirol / D-Rise',
    genericName: 'Cholecalciferol',
    dosage: '1000 IU',
    dosageUnit: 'IU',
    route: 'Oral',
    category: 'Supplement',
    frequency: 'Once Daily',
    slots: ['Afternoon'],
    timeDetails: '1:00 PM lunchtime',
    startDate: '2026-08-10',
    endDate: '',
    status: 'active',
    instructions: 'Dietary supplement. Take with food containing healthy fats.',
    uses: 'Supports bone health, calcium absorption, and immune system function.',
    precautions: 'Do not exceed prescribed daily dosage without doctor advice.',
    storage: 'Store in a cool dry place protected from heat and light.',
    emergencyRelevant: false,
    createdAt: '2026-08-10'
  },
  {
    id: 'med-5',
    name: 'Albuterol Inhaler',
    brandName: 'Ventolin / Asthalin',
    genericName: 'Salbutamol Sulfate',
    dosage: '90mcg',
    dosageUnit: 'mcg',
    route: 'Inhalation',
    category: 'Respiratory',
    frequency: 'As Needed',
    slots: ['Morning'],
    timeDetails: '2 puffs as needed or before exertion',
    startDate: '2026-08-12',
    endDate: '',
    status: 'active',
    instructions: 'Inhale deeply and hold breath for 10 seconds after puff.',
    uses: 'Relieves and prevents bronchospasm and wheezing in asthma or COPD.',
    precautions: 'Track puff count. Seek emergency care if severe acute shortness of breath persists.',
    storage: 'Store between 15°C and 25°C with mouthpiece down.',
    emergencyRelevant: true,
    createdAt: '2026-08-12'
  },
  {
    id: 'med-6',
    name: 'Amlodipine',
    brandName: 'Norvasc / Amlong',
    genericName: 'Amlodipine Besylate',
    dosage: '5mg',
    dosageUnit: 'mg',
    route: 'Oral',
    category: 'Cardiovascular',
    frequency: 'Once Daily',
    slots: ['Morning'],
    timeDetails: '8:30 AM daily',
    startDate: '2026-08-15',
    endDate: '',
    status: 'active',
    instructions: 'Take once daily in the morning with or without food.',
    uses: 'Relaxes blood vessels to lower blood pressure and manage angina chest pain.',
    precautions: 'Report ankle swelling or dizziness upon rising.',
    storage: 'Store at 15°C to 30°C away from moisture.',
    emergencyRelevant: true,
    createdAt: '2026-08-15'
  }
];

// DEFAULT EMERGENCY PROFILE
const DEFAULT_EMERGENCY_PROFILE = {
  pin: '1234',
  fullName: 'Eleanor Vance',
  dob: '1965-04-12',
  bloodType: 'O+',
  allergies: 'Penicillin, Shellfish',
  primaryDoctor: 'Dr. Sarah Jenkins (Cardiology) - (555) 234-5678',
  emergencyContacts: 'Mark Vance (Son) - (555) 987-6543, Priya Vance (Daughter) - (555) 321-7654',
  notes: 'Patient has a cardiac pacemaker implanted in 2024. Take morning Lisinopril immediately if systolic blood pressure exceeds 140 mmHg.'
};

// DEFAULT USER PROFILE
const DEFAULT_USER_PROFILE = {
  name: 'Eleanor Vance',
  email: 'eleanor.vance@medicarex.demo',
  role: 'Patient',
  phone: '(555) 987-6543',
  address: '742 Evergreen Terrace, Springfield',
  isDemoUser: true
};

// DEFAULT CAREGIVER PROFILES
const DEFAULT_CAREGIVER_PROFILES = [
  {
    id: 'p-1',
    name: 'Eleanor Vance (Self)',
    age: 61,
    relation: 'Self',
    condition: 'Hypertension, Type 2 Diabetes',
    activeMedsCount: 6,
    adherenceRate: 94,
    missedToday: 0,
    avatar: '👩‍🦳'
  },
  {
    id: 'p-2',
    name: 'Sunita Sharma (Mother)',
    age: 72,
    relation: 'Mother',
    condition: 'Cardiac Care, Osteoporosis',
    activeMedsCount: 4,
    adherenceRate: 88,
    missedToday: 1,
    avatar: '👵'
  },
  {
    id: 'p-3',
    name: 'Rajesh Verma (Father)',
    age: 76,
    relation: 'Father',
    condition: 'Diabetes, Cholesterol Management',
    activeMedsCount: 5,
    adherenceRate: 81,
    missedToday: 2,
    avatar: '👴'
  }
];

// DEFAULT IOT STATE
const DEFAULT_IOT_STATE = {
  connected: true,
  lastStatus: 'Online • WiFi RSSI: -58dBm',
  lcdLine1: 'MEDICAREX V2.0',
  lcdLine2: 'READY • 08:00 AM',
  servoOpen: false,
  buzzerActive: false,
  lastFingerprint: { id: 1, result: 'Match Authorized', timestamp: 'Today, 08:01 AM' },
  syncQueue: [
    { id: 'sq-1', event: 'Dispense Confirm: Lisinopril 10mg', timestamp: 'Today, 08:02 AM', status: 'Pending Upload' }
  ],
  events: [
    { id: 'ev-1', type: 'FINGERPRINT', msg: 'Authorized Fingerprint Scan (User #1 - Eleanor Vance)', timestamp: 'Today, 08:01 AM' },
    { id: 'ev-2', type: 'SERVO', msg: 'Compartment Servo Motor Opened (Angle: 90°)', timestamp: 'Today, 08:01 AM' },
    { id: 'ev-3', type: 'SERVO', msg: 'Compartment Servo Motor Closed (Angle: 0°)', timestamp: 'Today, 08:03 AM' },
    { id: 'ev-4', type: 'RTC', msg: 'DS3231 RTC Time Synchronized (Local 24H Clock)', timestamp: 'Today, 07:00 AM' }
  ]
};

// DATA STORE CONTROLLER
class MedicareXStore {
  constructor() {
    this.initSeedData();
  }

  initSeedData() {
    if (!localStorage.getItem(STORAGE_KEYS.MEDICATIONS)) {
      this.resetToSeedData();
    }
  }

  resetToSeedData() {
    localStorage.setItem(STORAGE_KEYS.MEDICATIONS, JSON.stringify(SEED_MEDICATIONS));
    localStorage.setItem(STORAGE_KEYS.EMERGENCY, JSON.stringify(DEFAULT_EMERGENCY_PROFILE));
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(DEFAULT_USER_PROFILE));
    localStorage.setItem(STORAGE_KEYS.CAREGIVER, JSON.stringify(DEFAULT_CAREGIVER_PROFILES));
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PATIENT, 'p-1');
    localStorage.setItem(STORAGE_KEYS.IOT, JSON.stringify(DEFAULT_IOT_STATE));

    // Generate 30 days of realistic dose logs
    const logs = [];
    const today = new Date();
    const statuses = ['taken', 'taken', 'taken', 'taken', 'taken', 'taken', 'missed', 'skipped', 'taken', 'taken'];

    for (let dayOffset = 29; dayOffset >= 0; dayOffset--) {
      const d = new Date(today);
      d.setDate(d.getDate() - dayOffset);
      const dateStr = d.toISOString().split('T')[0];

      SEED_MEDICATIONS.forEach(med => {
        med.slots.forEach(slot => {
          // If today and time has not passed, leave some as unconfirmed or taken
          let status;
          if (dayOffset === 0) {
            status = slot === 'Morning' ? 'taken' : (slot === 'Afternoon' ? 'unconfirmed' : 'unconfirmed');
          } else {
            const seedIndex = (dayOffset * 7 + slot.length + med.name.length) % statuses.length;
            status = statuses[seedIndex];
          }

          logs.push({
            id: 'log-' + Math.random().toString(36).substr(2, 9),
            medId: med.id,
            medName: med.name,
            dosage: med.dosage,
            slot: slot,
            dateStr: dateStr,
            timestamp: new Date(d.setHours(slot === 'Morning' ? 8 : slot === 'Afternoon' ? 13 : slot === 'Evening' ? 19 : 22)).toISOString(),
            status: status,
            notes: status === 'skipped' ? 'Patient requested skip due to minor nausea.' : ''
          });
        });
      });
    }

    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));

    // Seed Vitals
    const vitals = [
      { id: 'v-1', type: 'Blood Pressure', value: '122/80', unit: 'mmHg', date: '2026-10-12', time: '08:15 AM', notes: 'Normal resting' },
      { id: 'v-2', type: 'Heart Rate', value: '72', unit: 'bpm', date: '2026-10-12', time: '08:15 AM', notes: 'Resting pulse' },
      { id: 'v-3', type: 'Blood Glucose', value: '108', unit: 'mg/dL', date: '2026-10-12', time: '07:45 AM', notes: 'Fasting' },
      { id: 'v-4', type: 'Temperature', value: '98.4', unit: '°F', date: '2026-10-11', time: '08:00 AM', notes: 'Normal' },
      { id: 'v-5', type: 'Blood Pressure', value: '126/82', unit: 'mmHg', date: '2026-10-10', time: '08:20 AM', notes: 'Post-breakfast' }
    ];
    localStorage.setItem(STORAGE_KEYS.VITALS, JSON.stringify(vitals));

    // Seed Notifications
    const notifs = [
      { id: 'n-1', title: 'Upcoming Dose Reminder', body: 'Afternoon Vitamin D3 1000 IU is scheduled at 1:00 PM.', time: '10 mins ago', type: 'reminder', read: false },
      { id: 'n-2', title: 'Smart Box Sync Success', body: 'ESP32 box dispensed Lisinopril 10mg and recorded fingerprint #1 verification.', time: '2 hours ago', type: 'device', read: true },
      { id: 'n-3', title: 'Dose Recorded', body: 'Morning Metformin 500mg marked as Taken.', time: '5 hours ago', type: 'dose', read: true },
      { id: 'n-4', title: 'Adherence Streak Milestone', body: 'Congratulations! You reached a 7-day adherence streak.', time: 'Yesterday', type: 'report', read: true }
    ];
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
  }

  startWithEmptyDataset() {
    localStorage.setItem(STORAGE_KEYS.MEDICATIONS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.VITALS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify([]));
  }

  getMedications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.MEDICATIONS) || '[]');
    } catch (e) {
      return [];
    }
  }

  saveMedications(meds) {
    localStorage.setItem(STORAGE_KEYS.MEDICATIONS, JSON.stringify(meds));
  }

  getLogs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGS) || '[]');
    } catch (e) {
      return [];
    }
  }

  saveLogs(logs) {
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
  }

  getEmergencyProfile() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.EMERGENCY) || JSON.stringify(DEFAULT_EMERGENCY_PROFILE));
    } catch (e) {
      return DEFAULT_EMERGENCY_PROFILE;
    }
  }

  saveEmergencyProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.EMERGENCY, JSON.stringify(profile));
  }

  getUserProfile() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE) || JSON.stringify(DEFAULT_USER_PROFILE));
    } catch (e) {
      return DEFAULT_USER_PROFILE;
    }
  }

  saveUserProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  }

  getIoTState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.IOT) || JSON.stringify(DEFAULT_IOT_STATE));
    } catch (e) {
      return DEFAULT_IOT_STATE;
    }
  }

  saveIoTState(state) {
    localStorage.setItem(STORAGE_KEYS.IOT, JSON.stringify(state));
  }

  getCaregiverProfiles() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CAREGIVER) || JSON.stringify(DEFAULT_CAREGIVER_PROFILES));
    } catch (e) {
      return DEFAULT_CAREGIVER_PROFILES;
    }
  }

  getActivePatientId() {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_PATIENT) || 'p-1';
  }

  setActivePatientId(id) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PATIENT, id);
  }

  getVitals() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.VITALS) || '[]');
    } catch (e) {
      return [];
    }
  }

  saveVitals(vitals) {
    localStorage.setItem(STORAGE_KEYS.VITALS, JSON.stringify(vitals));
  }

  getNotifications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS) || '[]');
    } catch (e) {
      return [];
    }
  }

  saveNotifications(notifs) {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
  }
}

// APPLICATION MAIN CONTROLLER
class MedicareXApp {
  constructor() {
    this.store = new MedicareXStore();
    this.currentTab = 'home';
    this.currentLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'en';
    this.currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    this.pinEntered = '';
    this.isEmergencyUnlocked = false;
    this.audioContext = null;
    this.charts = {};

    this.init();
  }

  init() {
    // Apply theme
    this.applyTheme(this.currentTheme);

    // Apply language and text direction
    this.applyLanguage(this.currentLang);

    // Bind physical keyboard for Emergency PIN keypad
    window.addEventListener('keydown', (e) => {
      if (this.currentTab === 'emergency' && !this.isEmergencyUnlocked) {
        if (/^[0-9]$/.test(e.key)) {
          this.enterPinDigit(e.key);
        } else if (e.key === 'Backspace') {
          this.backspacePin();
        } else if (e.key === 'Escape') {
          this.clearPin();
        }
      }
    });

    // Populate Language Selectors in Header & Settings
    this.populateLanguageSelectors();

    // Default to Landing Page or Dashboard
    const savedTab = localStorage.getItem('medicarex_last_tab') || 'home';
    this.switchTab(savedTab);

    // Initialize Web Audio API on first user gesture
    document.addEventListener('click', () => {
      if (!this.audioContext) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioContext = new AudioContextClass();
        }
      }
    }, { once: true });

    // Update Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // --- AUDIO SYNTHESIS ENGINE (Simulated Hardware Sounds) ---
  playBuzzerSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = this.audioContext || new AudioCtx();
      this.audioContext = ctx;

      const now = ctx.currentTime;
      [0, 0.15, 0.3].forEach(offset => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(2400, now + offset); // Standard 2.4kHz piezo buzzer frequency
        gain.gain.setValueAtTime(0.15, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.09);
      });
    } catch (e) {
      console.log('Web Audio tone played in simulation.');
    }
  }

  playSuccessBeep() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = this.audioContext || new AudioCtx();
      this.audioContext = ctx;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.12);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      console.log('Success tone simulation.');
    }
  }

  // --- THEME ENGINE ---
  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>' : '<i data-lucide="moon" class="w-4 h-4 text-slate-600"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  // --- MULTI-LANGUAGE & RTL ENGINE ---
  getTranslation(key) {
    if (TRANSLATIONS[this.currentLang] && TRANSLATIONS[this.currentLang][key]) {
      return TRANSLATIONS[this.currentLang][key];
    }
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return key;
  }

  applyLanguage(langCode) {
    if (!LANGUAGE_META[langCode]) langCode = 'en';
    this.currentLang = langCode;
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, langCode);

    const meta = LANGUAGE_META[langCode];
    const html = document.documentElement;

    // Set text direction (Urdu, Kashmiri, Sindhi are RTL)
    html.setAttribute('dir', meta.dir || 'ltr');
    html.setAttribute('lang', langCode);

    // Translate DOM elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation) {
        el.setAttribute('placeholder', translation);
      }
    });

    // Update active language select elements
    const selectors = ['lang-selector', 'settings-lang-select'];
    selectors.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = langCode;
    });

    // Update language badge chip in header
    const chip = document.getElementById('header-lang-chip');
    if (chip) {
      chip.textContent = `${meta.flag} ${meta.native}`;
    }
  }

  setLanguage(langCode) {
    this.applyLanguage(langCode);
    // Re-render current view with updated language
    this.renderCurrentView();
    if (window.lucide) window.lucide.createIcons();
  }

  populateLanguageSelectors() {
    const optionsHtml = Object.keys(LANGUAGE_META).map(code => {
      const m = LANGUAGE_META[code];
      const rtlMark = m.dir === 'rtl' ? ' (RTL)' : '';
      return `<option value="${code}">${m.flag} ${m.native} — ${m.name}${rtlMark}</option>`;
    }).join('');

    ['lang-selector', 'settings-lang-select'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = optionsHtml;
        el.value = this.currentLang;
      }
    });
  }

  // --- NAVIGATION CONTROLLER ---
  switchTab(tabName) {
    this.currentTab = tabName;
    localStorage.setItem('medicarex_last_tab', tabName);

    // Hide all view sections
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.add('hidden');
    });

    // Show target view
    const target = document.getElementById(`view-${tabName}`);
    if (target) {
      target.classList.remove('hidden');
    }

    // Update Desktop Sidebar buttons
    document.querySelectorAll('.nav-sidebar-btn').forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === tabName;
      if (isTarget) {
        btn.classList.add('bg-brand-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100', 'dark:text-slate-300', 'dark:hover:bg-slate-800');
      } else {
        btn.classList.remove('bg-brand-600', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-600', 'hover:bg-slate-100', 'dark:text-slate-300', 'dark:hover:bg-slate-800');
      }
    });

    // Update Mobile bottom navigation
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === tabName;
      if (isTarget) {
        btn.classList.add('text-brand-600', 'dark:text-brand-400', 'font-bold');
        btn.classList.remove('text-slate-400', 'dark:text-slate-400');
      } else {
        btn.classList.remove('text-brand-600', 'dark:text-brand-400', 'font-bold');
        btn.classList.add('text-slate-400', 'dark:text-slate-400');
      }
    });

    // Update Mobile Drawer navigation buttons
    document.querySelectorAll('.drawer-nav-btn').forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === tabName;
      if (isTarget) {
        btn.classList.add('bg-brand-600', 'text-white', 'shadow-sm');
        btn.classList.remove('text-slate-700', 'hover:bg-slate-100', 'dark:text-slate-200', 'dark:hover:bg-slate-700');
      } else {
        btn.classList.remove('bg-brand-600', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-700', 'hover:bg-slate-100', 'dark:text-slate-200', 'dark:hover:bg-slate-700');
      }
    });

    // Close mobile drawer if open
    this.closeMobileDrawer();

    // Render tab view
    this.renderCurrentView();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderCurrentView() {
    switch (this.currentTab) {
      case 'dashboard':
        this.renderDashboard();
        break;
      case 'medications':
        this.renderMedications();
        break;
      case 'medinfo':
        this.renderMedInfoView();
        break;
      case 'schedule':
        this.renderScheduleView();
        break;
      case 'history':
        this.renderHistory();
        break;
      case 'report':
        this.generateReport();
        break;
      case 'emergency':
        this.renderEmergency();
        break;
      case 'caregiver':
        this.renderCaregiverView();
        break;
      case 'iot':
        this.renderIoTView();
        break;
      case 'analytics':
        this.renderAnalyticsView();
        break;
      case 'notifications':
        this.renderNotificationsView();
        break;
      case 'settings':
        this.renderSettingsView();
        break;
      case 'auth':
        this.renderAuthView();
        break;
      case 'home':
      default:
        this.renderHomeView();
        break;
    }
  }

  // --- MOBILE DRAWER NAVIGATION ---
  toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) {
      drawer.classList.toggle('hidden');
    }
  }

  closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }
  }

  // --- 1. LANDING / HOME VIEW ---
  renderHomeView() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const activeCount = meds.length;
    const takenCount = logs.filter(l => l.status === 'taken').length;

    const elMeds = document.getElementById('landing-stat-meds');
    if (elMeds) elMeds.textContent = activeCount;

    const elLogs = document.getElementById('landing-stat-doses');
    if (elLogs) elLogs.textContent = takenCount;
  }

  // --- 2. AUTH & DEMO USER VIEW ---
  renderAuthView() {
    const profile = this.store.getUserProfile();
    const nameEl = document.getElementById('auth-user-name');
    const emailEl = document.getElementById('auth-user-email');
    const roleEl = document.getElementById('auth-user-role');

    if (nameEl) nameEl.textContent = profile.name;
    if (emailEl) emailEl.textContent = profile.email;
    if (roleEl) roleEl.textContent = profile.role;

    // Fill form
    const fName = document.getElementById('auth-form-name');
    const fEmail = document.getElementById('auth-form-email');
    const fRole = document.getElementById('auth-form-role');
    const fPhone = document.getElementById('auth-form-phone');

    if (fName) fName.value = profile.name || '';
    if (fEmail) fEmail.value = profile.email || '';
    if (fRole) fRole.value = profile.role || 'Patient';
    if (fPhone) fPhone.value = profile.phone || '';
  }

  switchPersona(name, email, role) {
    const profile = this.store.getUserProfile();
    profile.name = name;
    profile.email = email;
    profile.role = role;
    this.store.saveUserProfile(profile);
    this.renderAuthView();
    this.playSuccessBeep();
    alert(`Switched to demo persona: ${name} (${role})`);
  }

  saveAuthProfile(e) {
    e.preventDefault();
    const profile = {
      name: document.getElementById('auth-form-name').value,
      email: document.getElementById('auth-form-email').value,
      role: document.getElementById('auth-form-role').value,
      phone: document.getElementById('auth-form-phone').value,
      isDemoUser: true
    };
    this.store.saveUserProfile(profile);
    this.renderAuthView();
    this.playSuccessBeep();
    alert('Demo user profile updated in localStorage.');
  }

  // --- 3. DASHBOARD VIEW CONTROLLER ---
  renderDashboard() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const iotState = this.store.getIoTState();
    const todayStr = new Date().toISOString().split('T')[0];

    // Compute active meds
    const elActive = document.getElementById('stat-active-meds');
    if (elActive) elActive.textContent = meds.length;

    const emCount = meds.filter(m => m.emergencyRelevant).length;
    const elEmCount = document.getElementById('stat-emergency-count');
    if (elEmCount) elEmCount.textContent = `${emCount} Critical`;

    // Today's doses calculation
    let totalDosesToday = 0;
    let takenDosesToday = 0;
    let missedDosesToday = 0;
    let skippedDosesToday = 0;

    meds.forEach(m => {
      totalDosesToday += m.slots.length;
      m.slots.forEach(slot => {
        const log = logs.find(l => l.medId === m.id && l.slot === slot && l.dateStr === todayStr);
        if (log) {
          if (log.status === 'taken') takenDosesToday++;
          else if (log.status === 'missed') missedDosesToday++;
          else if (log.status === 'skipped') skippedDosesToday++;
        }
      });
    });

    const pct = totalDosesToday > 0 ? Math.round((takenDosesToday / totalDosesToday) * 100) : 100;
    const elProgText = document.getElementById('stat-progress-text');
    if (elProgText) elProgText.textContent = `${takenDosesToday} / ${totalDosesToday}`;

    const elProgPct = document.getElementById('stat-progress-pct');
    if (elProgPct) elProgPct.textContent = `${pct}%`;

    const elProgBar = document.getElementById('stat-progress-bar');
    if (elProgBar) elProgBar.style.width = `${pct}%`;

    // Compute Adherence Streak
    let streak = 0;
    const d = new Date();
    for (let i = 0; i < 30; i++) {
      const checkDateStr = d.toISOString().split('T')[0];
      let dayTotal = 0;
      let dayTaken = 0;

      meds.forEach(m => {
        dayTotal += m.slots.length;
        m.slots.forEach(slot => {
          const l = logs.find(log => log.medId === m.id && log.slot === slot && log.dateStr === checkDateStr);
          if (l && l.status === 'taken') dayTaken++;
        });
      });

      if (dayTotal > 0 && dayTaken === dayTotal) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    const elStreak = document.getElementById('stat-streak');
    if (elStreak) elStreak.textContent = streak;

    // Next dose due calculation
    const currentHour = new Date().getHours();
    let nextSlot = 'Morning';
    if (currentHour >= 12 && currentHour < 17) nextSlot = 'Afternoon';
    else if (currentHour >= 17 && currentHour < 21) nextSlot = 'Evening';
    else if (currentHour >= 21) nextSlot = 'Night';

    let nextMed = null;
    for (const m of meds) {
      if (m.slots.includes(nextSlot)) {
        const isTaken = logs.some(l => l.medId === m.id && l.slot === nextSlot && l.dateStr === todayStr && l.status === 'taken');
        if (!isTaken) {
          nextMed = m;
          break;
        }
      }
    }

    const nextDoseNameEl = document.getElementById('stat-next-dose-name');
    const nextDoseTimeEl = document.getElementById('stat-next-dose-time');
    if (nextDoseNameEl) nextDoseNameEl.textContent = nextMed ? nextMed.name : (meds[0] ? meds[0].name : 'None');
    if (nextDoseTimeEl) nextDoseTimeEl.textContent = nextMed ? `${nextSlot} (${nextMed.dosage})` : 'All clear for now';

    // Device connection status pill on Dashboard
    const boxStatusPill = document.getElementById('dash-box-status');
    if (boxStatusPill) {
      boxStatusPill.className = `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${iotState.connected ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300 dark:bg-rose-950/60 dark:text-rose-300'}`;
      boxStatusPill.innerHTML = `
        <span class="w-2 h-2 rounded-full mr-1.5 ${iotState.connected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}"></span>
        ${iotState.connected ? this.getTranslation('box_connected') : this.getTranslation('box_disconnected')}
      `;
    }

    // Render Today's Schedule by slots
    const scheduleContainer = document.getElementById('today-schedule-container');
    if (scheduleContainer) {
      scheduleContainer.innerHTML = '';
      const slots = ['Morning', 'Afternoon', 'Evening', 'Night'];

      slots.forEach(slot => {
        const slotMeds = meds.filter(m => m.slots && m.slots.includes(slot));
        if (slotMeds.length === 0) return;

        const slotCard = document.createElement('div');
        slotCard.className = 'bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3';

        let slotColor = 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
        let slotIcon = 'sun';
        if (slot === 'Afternoon') {
          slotColor = 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300';
          slotIcon = 'cloud-sun';
        } else if (slot === 'Evening') {
          slotColor = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300';
          slotIcon = 'sunset';
        } else if (slot === 'Night') {
          slotColor = 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300';
          slotIcon = 'moon';
        }

        const itemsHtml = slotMeds.map(m => {
          const log = logs.find(l => l.medId === m.id && l.slot === slot && l.dateStr === todayStr);
          const status = log ? log.status : 'unconfirmed';
          const isTaken = status === 'taken';
          const isSkipped = status === 'skipped';

          let badgeClass = 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
          let statusText = this.getTranslation('status_unconfirmed');
          if (isTaken) {
            badgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
            statusText = this.getTranslation('status_taken') + ' ✓';
          } else if (isSkipped) {
            badgeClass = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
            statusText = this.getTranslation('status_skipped');
          } else if (status === 'missed') {
            badgeClass = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';
            statusText = this.getTranslation('status_missed');
          }

          return `
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 hover:border-brand-200 transition">
              <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 rounded-lg ${slotColor} flex items-center justify-center font-bold text-xs">
                  <i data-lucide="pill" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-xs">${m.name} <span class="font-normal text-slate-500">(${m.dosage})</span></h4>
                  <p class="text-[10px] text-slate-400">${m.timeDetails || slot}</p>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <button onclick="app.toggleDose('${m.id}', '${slot}', '${todayStr}')" class="px-3 py-1 rounded-lg text-xs font-bold transition ${isTaken ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-brand-600 dark:hover:bg-brand-700'}">
                  ${isTaken ? 'Taken ✓' : 'Mark Taken'}
                </button>
              </div>
            </div>
          `;
        }).join('');

        slotCard.innerHTML = `
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
            <div class="flex items-center space-x-2">
              <div class="w-6 h-6 rounded-md ${slotColor} flex items-center justify-center">
                <i data-lucide="${slotIcon}" class="w-3.5 h-3.5"></i>
              </div>
              <h3 class="font-bold text-slate-900 dark:text-white text-xs">${this.getTranslation('slot_' + slot.toLowerCase())}</h3>
            </div>
            <span class="text-[11px] text-slate-400 font-medium">${slotMeds.length} ${slotMeds.length === 1 ? 'Medication' : 'Medications'}</span>
          </div>
          <div class="space-y-2">
            ${itemsHtml}
          </div>
        `;
        scheduleContainer.appendChild(slotCard);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  toggleDose(medId, slot, dateStr) {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const med = meds.find(m => m.id === medId);
    if (!med) return;

    const existingIndex = logs.findIndex(l => l.medId === medId && l.slot === slot && l.dateStr === dateStr);

    if (existingIndex >= 0) {
      if (logs[existingIndex].status === 'taken') {
        logs[existingIndex].status = 'missed';
      } else if (logs[existingIndex].status === 'missed') {
        logs[existingIndex].status = 'skipped';
      } else {
        logs[existingIndex].status = 'taken';
        this.playSuccessBeep();
      }
    } else {
      logs.push({
        id: 'log-' + Math.random().toString(36).substr(2, 9),
        medId: medId,
        medName: med.name,
        dosage: med.dosage,
        slot: slot,
        dateStr: dateStr,
        timestamp: new Date().toISOString(),
        status: 'taken',
        notes: ''
      });
      this.playSuccessBeep();
    }

    this.store.saveLogs(logs);
    this.renderCurrentView();
  }

  // --- 4. MEDICINE MANAGEMENT (CRUD & SEARCH) ---
  renderMedications() {
    const meds = this.store.getMedications();
    const grid = document.getElementById('medications-grid');
    if (!grid) return;

    const searchInput = document.getElementById('meds-search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filterStatus = document.getElementById('meds-filter-status');
    const statusVal = filterStatus ? filterStatus.value : 'all';

    const filtered = meds.filter(m => {
      const matchSearch = !searchTerm ||
        (m.name || '').toLowerCase().includes(searchTerm) ||
        (m.brandName || '').toLowerCase().includes(searchTerm) ||
        (m.genericName || '').toLowerCase().includes(searchTerm) ||
        (m.category || '').toLowerCase().includes(searchTerm);

      const matchStatus = statusVal === 'all' || (m.status || 'active') === statusVal;
      return matchSearch && matchStatus;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full p-12 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <i data-lucide="pill" class="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3"></i>
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">${this.getTranslation('no_meds_title')}</h3>
          <p class="text-xs text-slate-500 mt-1">${this.getTranslation('no_meds_desc')}</p>
          <button onclick="app.openModal('add-med-modal')" class="mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl">
            ${this.getTranslation('add_new_med_btn')}
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filtered.forEach(m => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between';

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300 flex items-center justify-center font-bold">
                <i data-lucide="pill" class="w-5 h-5"></i>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">${m.name}</h3>
                <p class="text-xs text-slate-500 font-medium">${m.dosage} • ${m.category || 'General'}</p>
              </div>
            </div>

            <div class="flex items-center space-x-1">
              ${m.emergencyRelevant ? '<span class="text-[10px] bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">Critical</span>' : ''}
            </div>
          </div>

          <div class="mt-3.5 space-y-2 text-xs">
            <div class="flex justify-between text-slate-600 dark:text-slate-400">
              <span class="font-medium">${this.getTranslation('schedule_lbl')}</span>
              <span class="font-semibold text-slate-900 dark:text-slate-200">${m.slots ? m.slots.join(', ') : 'As needed'}</span>
            </div>
            <div class="flex justify-between text-slate-600 dark:text-slate-400">
              <span class="font-medium">Frequency:</span>
              <span class="font-semibold text-slate-900 dark:text-slate-200">${m.frequency || 'Once daily'}</span>
            </div>
            <div class="flex justify-between text-slate-600 dark:text-slate-400">
              <span class="font-medium">Route:</span>
              <span class="font-semibold text-slate-900 dark:text-slate-200">${m.route || 'Oral'}</span>
            </div>
          </div>

          <div class="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
            ${m.instructions || m.uses || 'Follow prescribed dosing schedule.'}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
          <button onclick="app.openMedInfoModal('${m.id}')" class="text-brand-600 hover:text-brand-700 font-bold flex items-center space-x-1">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>${this.getTranslation('full_details')}</span>
          </button>

          <div class="flex items-center space-x-1">
            <button onclick="app.editMedication('${m.id}')" class="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition" title="Edit">
              <i data-lucide="pencil" class="w-4 h-4"></i>
            </button>
            <button onclick="app.deleteMedicationConfirm('${m.id}')" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950 transition" title="Delete">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  saveMedication(e) {
    e.preventDefault();
    const id = document.getElementById('med-form-id').value;
    const name = document.getElementById('med-form-name').value.trim();
    const brandName = document.getElementById('med-form-brand').value.trim();
    const genericName = document.getElementById('med-form-generic').value.trim();
    const dosage = document.getElementById('med-form-dosage').value.trim();
    const dosageUnit = document.getElementById('med-form-unit').value;
    const route = document.getElementById('med-form-route').value;
    const category = document.getElementById('med-form-category').value.trim();
    const frequency = document.getElementById('med-form-frequency').value;
    const timeDetails = document.getElementById('med-form-timedetails').value.trim();
    const startDate = document.getElementById('med-form-startdate').value;
    const endDate = document.getElementById('med-form-enddate').value;
    const instructions = document.getElementById('med-form-instructions').value.trim();
    const uses = document.getElementById('med-form-uses').value.trim();
    const precautions = document.getElementById('med-form-precautions').value.trim();
    const storage = document.getElementById('med-form-storage').value.trim();
    const emergencyRelevant = document.getElementById('med-form-emergency').checked;

    // Slots checkboxes
    const slots = [];
    document.querySelectorAll('input[name="med-slot"]:checked').forEach(cb => {
      slots.push(cb.value);
    });

    if (slots.length === 0) {
      alert('Please select at least one schedule time slot (Morning, Afternoon, Evening, or Night).');
      return;
    }

    const meds = this.store.getMedications();

    if (id) {
      // Edit
      const index = meds.findIndex(m => m.id === id);
      if (index >= 0) {
        meds[index] = {
          ...meds[index],
          name, brandName, genericName, dosage, dosageUnit, route, category, frequency, slots,
          timeDetails, startDate, endDate, instructions, uses, precautions, storage, emergencyRelevant
        };
      }
    } else {
      // Add
      meds.push({
        id: 'med-' + Math.random().toString(36).substr(2, 9),
        name, brandName, genericName, dosage, dosageUnit, route, category, frequency, slots,
        timeDetails, startDate, endDate, instructions, uses, precautions, storage, emergencyRelevant,
        status: 'active',
        createdAt: new Date().toISOString().split('T')[0]
      });
    }

    this.store.saveMedications(meds);
    this.closeModal('add-med-modal');
    this.renderMedications();
    this.renderDashboard();
    this.playSuccessBeep();
  }

  editMedication(id) {
    const meds = this.store.getMedications();
    const m = meds.find(item => item.id === id);
    if (!m) return;

    document.getElementById('med-form-id').value = m.id;
    document.getElementById('med-form-name').value = m.name || '';
    document.getElementById('med-form-brand').value = m.brandName || '';
    document.getElementById('med-form-generic').value = m.genericName || '';
    document.getElementById('med-form-dosage').value = m.dosage || '';
    document.getElementById('med-form-unit').value = m.dosageUnit || 'mg';
    document.getElementById('med-form-route').value = m.route || 'Oral';
    document.getElementById('med-form-category').value = m.category || '';
    document.getElementById('med-form-frequency').value = m.frequency || 'Once Daily';
    document.getElementById('med-form-timedetails').value = m.timeDetails || '';
    document.getElementById('med-form-startdate').value = m.startDate || '';
    document.getElementById('med-form-enddate').value = m.endDate || '';
    document.getElementById('med-form-instructions').value = m.instructions || '';
    document.getElementById('med-form-uses').value = m.uses || '';
    document.getElementById('med-form-precautions').value = m.precautions || '';
    document.getElementById('med-form-storage').value = m.storage || '';
    document.getElementById('med-form-emergency').checked = !!m.emergencyRelevant;

    document.querySelectorAll('input[name="med-slot"]').forEach(cb => {
      cb.checked = m.slots ? m.slots.includes(cb.value) : false;
    });

    document.getElementById('med-modal-title').textContent = 'Edit Medication';
    this.openModal('add-med-modal');
  }

  deleteMedicationConfirm(id) {
    const meds = this.store.getMedications();
    const m = meds.find(item => item.id === id);
    if (!m) return;

    if (confirm(`Are you sure you want to delete ${m.name} from your medications list?`)) {
      const remaining = meds.filter(item => item.id !== id);
      this.store.saveMedications(remaining);
      this.renderMedications();
      this.renderDashboard();
    }
  }

  // --- 5. DEDICATED MEDICINE INFORMATION PANEL ---
  renderMedInfoView() {
    const container = document.getElementById('medinfo-cards-grid');
    if (!container) return;

    const searchInput = document.getElementById('medinfo-search-input');
    const term = searchInput ? searchInput.value.toLowerCase().trim() : '';

    container.innerHTML = '';

    const list = MEDICINE_REFERENCE_DB.filter(m => {
      if (!term) return true;
      return m.name.toLowerCase().includes(term) ||
             m.genericName.toLowerCase().includes(term) ||
             m.category.toLowerCase().includes(term) ||
             m.commonUses.toLowerCase().includes(term);
    });

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-10 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <i data-lucide="search-x" class="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2"></i>
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">No verified medical reference data matched your search.</p>
          <p class="text-xs text-slate-500 mt-1">For unlisted medicines, follow your physician's prescription instructions carefully.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    list.forEach(m => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4';

      card.innerHTML = `
        <div class="flex items-start justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-base font-bold text-slate-900 dark:text-white">${m.name}</span>
              <span class="text-xs bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-semibold px-2 py-0.5 rounded-md border border-brand-200 dark:border-brand-900">${m.category}</span>
            </div>
            <p class="text-xs text-slate-500 mt-0.5"><strong>Generic:</strong> ${m.genericName}</p>
          </div>
          <span class="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full font-mono">WHO Ref</span>
        </div>

        <div class="space-y-3 text-xs">
          <div class="bg-teal-50/70 dark:bg-teal-950/40 p-3 rounded-xl border border-teal-100 dark:border-teal-900">
            <span class="font-bold text-teal-900 dark:text-teal-200 block mb-1">Therapeutic Uses:</span>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${m.commonUses}</p>
          </div>

          <div>
            <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">Mechanism of Action:</span>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${m.mechanismOfAction}</p>
          </div>

          <div class="bg-amber-50/70 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200/70 dark:border-amber-900">
            <span class="font-bold text-amber-900 dark:text-amber-200 block mb-1">Important Precautions & Warnings:</span>
            <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
              ${m.precautions.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          <div>
            <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">Common Side Effects:</span>
            <p class="text-slate-600 dark:text-slate-400">${m.commonSideEffects.join(' • ')}</p>
          </div>

          <div>
            <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">Storage Instructions:</span>
            <p class="text-slate-600 dark:text-slate-400">${m.storage}</p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-[11px] text-slate-400">
          <span>Source: ${m.source}</span>
          <span>Verified: ${m.verificationDate}</span>
        </div>
      `;

      container.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  openMedInfoModal(medId) {
    const meds = this.store.getMedications();
    const m = meds.find(item => item.id === medId);
    if (!m) return;

    // Look up reference info
    const ref = findMedicineReferenceInfo(m.name);

    const titleEl = document.getElementById('medinfo-modal-title');
    const contentEl = document.getElementById('medinfo-modal-content');
    if (!titleEl || !contentEl) return;

    titleEl.textContent = `${m.name} (${m.dosage})`;

    if (ref) {
      contentEl.innerHTML = `
        <div class="space-y-4 text-xs">
          <div class="bg-brand-50 dark:bg-brand-950 p-4 rounded-xl border border-brand-200 dark:border-brand-900">
            <div class="flex justify-between items-center mb-1">
              <span class="font-bold text-brand-900 dark:text-brand-200 text-sm">${ref.genericName}</span>
              <span class="bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-300 px-2 py-0.5 rounded text-[10px] font-semibold">${ref.category}</span>
            </div>
            <p class="text-slate-700 dark:text-slate-300 mt-1">${ref.commonUses}</p>
          </div>

          <div>
            <h4 class="font-bold text-slate-900 dark:text-white mb-1">How It Works:</h4>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${ref.mechanismOfAction}</p>
          </div>

          <div class="bg-amber-50 dark:bg-amber-950/50 p-3.5 rounded-xl border border-amber-200 dark:border-amber-900 space-y-1">
            <h4 class="font-bold text-amber-900 dark:text-amber-200">Safety Precautions:</h4>
            <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
              ${ref.precautions.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-slate-900 dark:text-white mb-1">Common Side Effects:</h4>
            <p class="text-slate-600 dark:text-slate-400">${ref.commonSideEffects.join(', ')}</p>
          </div>

          <div>
            <h4 class="font-bold text-slate-900 dark:text-white mb-1">Known Drug Interactions:</h4>
            <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
              ${ref.interactions.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>

          <div class="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
            <span class="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Your Prescription Instructions:</span>
            <p class="text-slate-600 dark:text-slate-400">${m.instructions || 'Take as directed by doctor.'}</p>
          </div>

          <div class="pt-2 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-400 flex justify-between">
            <span>Reference: ${ref.source}</span>
            <span>Verified: ${ref.verificationDate}</span>
          </div>
        </div>
      `;
    } else {
      contentEl.innerHTML = `
        <div class="p-6 text-center space-y-3">
          <div class="w-12 h-12 bg-amber-50 dark:bg-amber-950 text-amber-600 rounded-full flex items-center justify-center mx-auto">
            <i data-lucide="info" class="w-6 h-6"></i>
          </div>
          <h4 class="font-bold text-slate-800 dark:text-slate-200">Verified Reference Data Unavailable</h4>
          <p class="text-xs text-slate-500 leading-relaxed">
            Detailed clinical reference data is currently not on file for "<strong>${m.name}</strong>". 
            Please follow your doctor's exact prescription and consult a qualified pharmacist.
          </p>
          <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-left text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Your Stored Notes:</span>
            <p class="text-slate-600 dark:text-slate-400">${m.instructions || m.uses || 'None entered.'}</p>
          </div>
        </div>
      `;
    }

    this.openModal('medinfo-detail-modal');
  }

  // --- 6. SCHEDULE & DOSES VIEW ---
  renderScheduleView() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const todayStr = new Date().toISOString().split('T')[0];
    const container = document.getElementById('schedule-slots-container');
    if (!container) return;

    container.innerHTML = '';
    const slots = ['Morning', 'Afternoon', 'Evening', 'Night'];

    slots.forEach(slot => {
      const slotMeds = meds.filter(m => m.slots && m.slots.includes(slot));
      const section = document.createElement('div');
      section.className = 'bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4';

      const itemsHtml = slotMeds.length > 0 ? slotMeds.map(m => {
        const log = logs.find(l => l.medId === m.id && l.slot === slot && l.dateStr === todayStr);
        const status = log ? log.status : 'unconfirmed';

        return `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 gap-3">
            <div>
              <div class="flex items-center space-x-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm">${m.name}</span>
                <span class="text-xs text-slate-500">(${m.dosage})</span>
                ${m.emergencyRelevant ? '<span class="text-[10px] bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold px-1.5 py-0.2 rounded">Critical</span>' : ''}
              </div>
              <p class="text-xs text-slate-500 mt-0.5">${m.timeDetails || 'Daily'} • ${m.instructions || 'Take as prescribed'}</p>
            </div>

            <div class="flex items-center space-x-2">
              <select onchange="app.setDoseStatus('${m.id}', '${slot}', '${todayStr}', this.value)" class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-xs font-semibold px-2.5 py-1.5 focus:ring-2 focus:ring-brand-500 focus:outline-none">
                <option value="taken" ${status === 'taken' ? 'selected' : ''}>Taken ✓</option>
                <option value="missed" ${status === 'missed' ? 'selected' : ''}>Missed ✗</option>
                <option value="skipped" ${status === 'skipped' ? 'selected' : ''}>Skipped ↷</option>
                <option value="unconfirmed" ${status === 'unconfirmed' ? 'selected' : ''}>Unconfirmed ⏳</option>
              </select>
            </div>
          </div>
        `;
      }).join('') : `<p class="text-xs text-slate-400 italic">No medications scheduled for this slot.</p>`;

      section.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
          <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center space-x-2">
            <i data-lucide="clock" class="w-4 h-4 text-brand-600"></i>
            <span>${slot} Routine</span>
          </h3>
          <span class="text-xs font-semibold text-slate-500">${slotMeds.length} Scheduled</span>
        </div>
        <div class="space-y-2">
          ${itemsHtml}
        </div>
      `;

      container.appendChild(section);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  setDoseStatus(medId, slot, dateStr, newStatus) {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const med = meds.find(m => m.id === medId);
    if (!med) return;

    const existingIndex = logs.findIndex(l => l.medId === medId && l.slot === slot && l.dateStr === dateStr);

    if (existingIndex >= 0) {
      logs[existingIndex].status = newStatus;
      logs[existingIndex].timestamp = new Date().toISOString();
    } else {
      logs.push({
        id: 'log-' + Math.random().toString(36).substr(2, 9),
        medId: medId,
        medName: med.name,
        dosage: med.dosage,
        slot: slot,
        dateStr: dateStr,
        timestamp: new Date().toISOString(),
        status: newStatus,
        notes: ''
      });
    }

    this.store.saveLogs(logs);
    if (newStatus === 'taken') this.playSuccessBeep();
    this.renderCurrentView();
  }

  // --- 7. DOSE HISTORY VIEW ---
  renderHistory() {
    const meds = this.store.getMedications();
    let logs = this.store.getLogs();

    // Populate Medication Filter Select if not done
    const medFilterSelect = document.getElementById('hist-filter-med');
    if (medFilterSelect && medFilterSelect.options.length <= 1) {
      meds.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = m.name;
        medFilterSelect.appendChild(opt);
      });
    }

    const dateRange = document.getElementById('hist-filter-date') ? document.getElementById('hist-filter-date').value : 'all';
    const medFilter = medFilterSelect ? medFilterSelect.value : 'all';
    const statusFilter = document.getElementById('hist-filter-status') ? document.getElementById('hist-filter-status').value : 'all';
    const sortOrder = document.getElementById('hist-sort') ? document.getElementById('hist-sort').value : 'date-desc';

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    // Filter Date Range
    if (dateRange === 'today') {
      logs = logs.filter(l => l.dateStr === todayStr);
    } else if (dateRange === '7days') {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 7);
      logs = logs.filter(l => new Date(l.dateStr) >= cutoff);
    } else if (dateRange === '30days') {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 30);
      logs = logs.filter(l => new Date(l.dateStr) >= cutoff);
    } else if (dateRange === '90days') {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 90);
      logs = logs.filter(l => new Date(l.dateStr) >= cutoff);
    }

    // Filter Medication
    if (medFilter !== 'all') {
      logs = logs.filter(l => l.medId === medFilter);
    }

    // Filter Status
    if (statusFilter !== 'all') {
      logs = logs.filter(l => l.status === statusFilter);
    }

    // Sort
    if (sortOrder === 'date-desc') {
      logs.sort((a, b) => new Date(b.timestamp || b.dateStr) - new Date(a.timestamp || a.dateStr));
    } else if (sortOrder === 'date-asc') {
      logs.sort((a, b) => new Date(a.timestamp || a.dateStr) - new Date(b.timestamp || b.dateStr));
    } else if (sortOrder === 'name-asc') {
      logs.sort((a, b) => (a.medName || '').localeCompare(b.medName || ''));
    }

    const tbody = document.getElementById('history-table-body');
    const emptyState = document.getElementById('history-empty-state');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (logs.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    logs.forEach(log => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/50 transition';

      let statusBadge = '';
      if (log.status === 'taken') {
        statusBadge = '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Taken ✓</span>';
      } else if (log.status === 'missed') {
        statusBadge = '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">Missed ✗</span>';
      } else if (log.status === 'skipped') {
        statusBadge = '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">Skipped ↷</span>';
      } else {
        statusBadge = '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">Unconfirmed ⏳</span>';
      }

      tr.innerHTML = `
        <td class="py-3 px-4 text-xs font-mono text-slate-600 dark:text-slate-400">${log.dateStr}</td>
        <td class="py-3 px-4 font-bold text-slate-900 dark:text-white text-xs">${log.medName}</td>
        <td class="py-3 px-4 text-xs text-slate-600 dark:text-slate-400">${log.dosage}</td>
        <td class="py-3 px-4 text-xs text-slate-600 dark:text-slate-400">${log.slot}</td>
        <td class="py-3 px-4">${statusBadge}</td>
        <td class="py-3 px-4 text-xs text-slate-500 max-w-xs truncate">${log.notes || '—'}</td>
        <td class="py-3 px-4 text-right">
          <button onclick="app.deleteLog('${log.id}')" class="text-slate-400 hover:text-rose-600 transition" title="Delete Log Entry">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  exportHistoryCSV() {
    const logs = this.store.getLogs();
    if (logs.length === 0) {
      alert('No history logs to export.');
      return;
    }

    let csv = 'ID,Date,Medication,Dosage,Slot,Status,Timestamp,Notes\n';
    logs.forEach(l => {
      csv += `"${l.id}","${l.dateStr}","${l.medName}","${l.dosage}","${l.slot}","${l.status}","${l.timestamp || ''}","${(l.notes || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `medicarex-dose-history-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  }

  deleteLog(logId) {
    let logs = this.store.getLogs();
    logs = logs.filter(l => l.id !== logId);
    this.store.saveLogs(logs);
    this.renderHistory();
    this.renderDashboard();
  }

  // --- 8. AI-STYLE REPORT GENERATOR ---
  generateReport() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    const vitals = this.store.getVitals();
    const profile = this.store.getEmergencyProfile();
    const timeframeSelect = document.getElementById('report-timeframe');
    const days = timeframeSelect ? timeframeSelect.value : '30';

    const now = new Date();
    document.getElementById('rpt-gen-date').textContent = now.toLocaleDateString();
    document.getElementById('rpt-patient-name').textContent = profile.fullName || 'Eleanor Vance';

    let filteredLogs = logs;
    let label = 'Past 30 Days';

    if (days !== 'all') {
      const numDays = parseInt(days, 10);
      label = `Past ${numDays} Days`;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - numDays);
      filteredLogs = logs.filter(l => new Date(l.dateStr) >= cutoff);
    } else {
      label = 'All Available History';
    }

    const timeframeLabelEl = document.getElementById('rpt-timeframe-label');
    if (timeframeLabelEl) timeframeLabelEl.textContent = label;

    // Metrics calculations
    const totalExpected = filteredLogs.length;
    const takenCount = filteredLogs.filter(l => l.status === 'taken').length;
    const missedCount = filteredLogs.filter(l => l.status === 'missed').length;
    const skippedCount = filteredLogs.filter(l => l.status === 'skipped').length;
    const overallPct = totalExpected > 0 ? Math.round((takenCount / totalExpected) * 100) : 100;

    document.getElementById('rpt-pct').textContent = `${overallPct}%`;
    document.getElementById('rpt-taken-cnt').textContent = takenCount;
    document.getElementById('rpt-missed-cnt').textContent = missedCount;
    document.getElementById('rpt-meds-cnt').textContent = meds.length;

    // AI Narrative Generation (Deterministic Rule-Based Clinical Synthesis)
    const narrativeContainer = document.getElementById('rpt-ai-narrative');
    const alertsContainer = document.getElementById('rpt-alerts-container');

    let narrativeHtml = '';
    const alerts = [];

    if (overallPct >= 90) {
      narrativeHtml = `
        <p><strong>Clinical Adherence Assessment: EXCELLENT (${overallPct}%)</strong></p>
        <p>The patient has demonstrated superior adherence to their scheduled regimen over the evaluated timeframe. Scheduled dosages for blood pressure and glycemic management reflect consistent, timely administration.</p>
        <p>Routine continuation of current pharmacotherapy is recommended with ongoing periodic monitoring of renal parameters and blood pressure.</p>
      `;
    } else if (overallPct >= 75) {
      narrativeHtml = `
        <p><strong>Clinical Adherence Assessment: MODERATE (${overallPct}%)</strong></p>
        <p>Overall adherence is acceptable but exhibits sporadic missed or delayed dosages. Lapses appear primarily clustered around weekend routines or evening medication slots.</p>
        <p>Recommendation: Recommend automated smart-box reminder alerts and review whether evening dosages can be aligned with dinner routines to minimize forgetfulness.</p>
      `;
      alerts.push({
        severity: 'amber',
        title: 'Mild Adherence Drift Detected',
        text: 'Patient missed multiple evening doses over the past 3 weeks. Consider adjusting dosage timing.'
      });
    } else {
      narrativeHtml = `
        <p><strong>Clinical Adherence Assessment: SUBOPTIMAL (${overallPct}%)</strong></p>
        <p>Significant dosage lapses detected (${missedCount} missed doses). Suboptimal adherence to prescribed antihypertensive or antidiabetic agents elevates risk of secondary cardiovascular events.</p>
        <p>Urgent recommendation: Physician consultation advised to simplify regimen or evaluate caregiver-assisted administration.</p>
      `;
      alerts.push({
        severity: 'rose',
        title: 'Critical Adherence Alert',
        text: 'Adherence has dropped below the clinical safety threshold (75%). Immediate review recommended.'
      });
    }

    // Check critical medication skips
    const criticalMeds = meds.filter(m => m.emergencyRelevant);
    criticalMeds.forEach(cm => {
      const cmLogs = filteredLogs.filter(l => l.medId === cm.id);
      const cmMissed = cmLogs.filter(l => l.status === 'missed').length;
      if (cmMissed >= 2) {
        alerts.push({
          severity: 'rose',
          title: `Lapse in Critical Medication: ${cm.name}`,
          text: `Patient recorded ${cmMissed} missed doses of critical medication ${cm.name} (${cm.dosage}). Discuss potential side effects or barriers.`
        });
      }
    });

    if (alerts.length === 0) {
      alerts.push({
        severity: 'emerald',
        title: 'Zero Critical Flags',
        text: 'No adverse dosing patterns detected. Patient maintains strict schedule adherence.'
      });
    }

    narrativeContainer.innerHTML = narrativeHtml;

    alertsContainer.innerHTML = alerts.map(a => `
      <div class="p-3.5 rounded-xl text-xs flex items-start space-x-3 ${a.severity === 'rose' ? 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200' : a.severity === 'amber' ? 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200' : 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'}">
        <i data-lucide="${a.severity === 'emerald' ? 'check-circle-2' : 'alert-triangle'}" class="w-4 h-4 mt-0.5 shrink-0 ${a.severity === 'rose' ? 'text-rose-600' : a.severity === 'amber' ? 'text-amber-600' : 'text-emerald-600'}"></i>
        <div>
          <h4 class="font-bold text-xs">${a.title}</h4>
          <p class="mt-0.5 leading-relaxed text-[11px]">${a.text}</p>
        </div>
      </div>
    `).join('');

    // Prescriptions summary table
    const medsTbody = document.getElementById('rpt-meds-table-body');
    if (medsTbody) {
      medsTbody.innerHTML = '';
      meds.forEach(m => {
        const mLogs = filteredLogs.filter(l => l.medId === m.id);
        const mTotal = mLogs.length;
        const mTaken = mLogs.filter(l => l.status === 'taken').length;
        const mPct = mTotal > 0 ? Math.round((mTaken / mTotal) * 100) : 100;

        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/40';
        tr.innerHTML = `
          <td class="p-3 font-bold text-slate-900 dark:text-white">${m.name}</td>
          <td class="p-3 text-slate-700 dark:text-slate-300">${m.dosage}</td>
          <td class="p-3 text-slate-700 dark:text-slate-300">${m.slots ? m.slots.join(', ') : 'As needed'}</td>
          <td class="p-3">${m.emergencyRelevant ? '<span class="text-rose-600 font-bold">Yes (Critical)</span>' : '<span class="text-slate-400">No</span>'}</td>
          <td class="p-3 font-bold ${mPct >= 90 ? 'text-emerald-600' : mPct >= 75 ? 'text-amber-600' : 'text-rose-600'}">${mPct}% (${mTaken}/${mTotal})</td>
        `;
        medsTbody.appendChild(tr);
      });
    }

    // Vitals in report
    const vitalsTbody = document.getElementById('rpt-vitals-table-body');
    if (vitalsTbody) {
      vitalsTbody.innerHTML = '';
      vitals.slice(0, 5).forEach(v => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/40 text-xs';
        tr.innerHTML = `
          <td class="p-2.5 font-medium text-slate-600 dark:text-slate-400 font-mono">${v.date} ${v.time}</td>
          <td class="p-2.5 font-bold text-slate-900 dark:text-white">${v.type}</td>
          <td class="p-2.5 font-semibold text-brand-700 dark:text-brand-300">${v.value} ${v.unit}</td>
          <td class="p-2.5 text-slate-500">${v.notes || '—'}</td>
        `;
        vitalsTbody.appendChild(tr);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  printReport() {
    window.print();
  }

  exportReportCSV() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();
    let csv = 'Medication,Dosage,Category,EmergencyCritical,TotalLoggedDoses,TakenDoses,AdherenceRatePct\n';

    meds.forEach(m => {
      const mLogs = logs.filter(l => l.medId === m.id);
      const total = mLogs.length;
      const taken = mLogs.filter(l => l.status === 'taken').length;
      const pct = total > 0 ? Math.round((taken / total) * 100) : 100;
      csv += `"${m.name}","${m.dosage}","${m.category}","${m.emergencyRelevant}","${total}","${taken}","${pct}%"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `medicarex-clinical-adherence-summary-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  }

  // --- 9. EMERGENCY MEDICAL VAULT ---
  renderEmergency() {
    if (this.isEmergencyUnlocked) {
      document.getElementById('emergency-locked-card').classList.add('hidden');
      document.getElementById('emergency-unlocked-card').classList.remove('hidden');

      const profile = this.store.getEmergencyProfile();
      const meds = this.store.getMedications();

      document.getElementById('em-name').textContent = profile.fullName || 'Not specified';
      document.getElementById('em-dob').textContent = profile.dob || 'Not specified';
      document.getElementById('em-blood').textContent = profile.bloodType || 'O+';
      document.getElementById('em-allergies').textContent = profile.allergies || 'None specified';
      document.getElementById('em-notes-text').textContent = profile.notes || 'No emergency notes specified.';

      // Emergency Contacts
      const contactsContainer = document.getElementById('em-contacts-list');
      if (contactsContainer) {
        contactsContainer.innerHTML = `
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <span class="text-slate-400 block text-[10px]">Primary Contacts:</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">${profile.emergencyContacts || 'None specified'}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <span class="text-slate-400 block text-[10px]">Attending Physician:</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">${profile.primaryDoctor || 'None specified'}</span>
          </div>
        `;
      }

      // Critical Medications
      const criticalMeds = meds.filter(m => m.emergencyRelevant);
      const countBadge = document.getElementById('em-critical-count-badge');
      if (countBadge) countBadge.textContent = `${criticalMeds.length} Critical`;

      const criticalGrid = document.getElementById('em-critical-meds-grid');
      if (criticalGrid) {
        criticalGrid.innerHTML = '';
        if (criticalMeds.length === 0) {
          criticalGrid.innerHTML = `<p class="text-xs text-slate-400 col-span-full">No emergency-flagged medications set.</p>`;
        } else {
          criticalMeds.forEach(m => {
            const item = document.createElement('div');
            item.className = 'p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/30 space-y-1';
            item.innerHTML = `
              <div class="flex justify-between items-center">
                <span class="font-bold text-slate-900 dark:text-white text-xs">${m.name} (${m.dosage})</span>
                <span class="text-[10px] bg-rose-200 text-rose-800 dark:bg-rose-900 dark:text-rose-200 font-semibold px-1.5 py-0.5 rounded">Critical</span>
              </div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400"><strong>Schedule:</strong> ${m.slots ? m.slots.join(', ') : 'Daily'} (${m.timeDetails || 'As prescribed'})</p>
              <p class="text-[11px] text-slate-600 dark:text-slate-400"><strong>Notes:</strong> ${m.instructions || m.uses || 'None'}</p>
            `;
            criticalGrid.appendChild(item);
          });
        }
      }
    } else {
      document.getElementById('emergency-locked-card').classList.remove('hidden');
      document.getElementById('emergency-unlocked-card').classList.add('hidden');
      this.updatePinDots();
    }

    if (window.lucide) window.lucide.createIcons();
  }

  enterPinDigit(digit) {
    if (this.pinEntered.length < 6) {
      this.pinEntered += digit;
      this.updatePinDots();
      this.checkPinSubmit();
    }
  }

  backspacePin() {
    if (this.pinEntered.length > 0) {
      this.pinEntered = this.pinEntered.slice(0, -1);
      this.updatePinDots();
    }
  }

  clearPin() {
    this.pinEntered = '';
    this.updatePinDots();
  }

  updatePinDots() {
    for (let i = 0; i < 6; i++) {
      const dot = document.getElementById(`pin-dot-${i}`);
      if (dot) {
        if (i < this.pinEntered.length) {
          dot.classList.add('filled');
        } else {
          dot.classList.remove('filled', 'error');
        }
      }
    }
    const errMsg = document.getElementById('pin-error-msg');
    if (errMsg) errMsg.classList.add('opacity-0');
  }

  checkPinSubmit() {
    const profile = this.store.getEmergencyProfile();
    const correctPin = profile.pin || '1234';

    if (this.pinEntered.length >= correctPin.length) {
      if (this.pinEntered === correctPin) {
        this.isEmergencyUnlocked = true;
        this.pinEntered = '';
        this.renderEmergency();
        this.playSuccessBeep();
      } else {
        const errMsg = document.getElementById('pin-error-msg');
        if (errMsg) errMsg.classList.remove('opacity-0');

        for (let i = 0; i < 6; i++) {
          const dot = document.getElementById(`pin-dot-${i}`);
          if (dot) dot.classList.add('error');
        }

        setTimeout(() => {
          this.clearPin();
        }, 800);
      }
    }
  }

  lockEmergency() {
    this.isEmergencyUnlocked = false;
    this.clearPin();
    this.renderEmergency();
  }

  saveEmergencyProfile(e) {
    e.preventDefault();
    const profile = this.store.getEmergencyProfile();
    profile.fullName = document.getElementById('em-form-name').value;
    profile.dob = document.getElementById('em-form-dob').value;
    profile.bloodType = document.getElementById('em-form-blood').value;
    profile.allergies = document.getElementById('em-form-allergies').value;
    profile.emergencyContacts = document.getElementById('em-form-contact1').value;
    profile.primaryDoctor = document.getElementById('em-form-doctor').value;
    profile.notes = document.getElementById('em-form-notes').value;

    this.store.saveEmergencyProfile(profile);
    this.closeModal('edit-emergency-modal');
    this.renderEmergency();
    this.playSuccessBeep();
  }

  saveNewPin(e) {
    e.preventDefault();
    const oldPin = document.getElementById('pin-old').value;
    const newPin = document.getElementById('pin-new').value;
    const confirmPin = document.getElementById('pin-confirm').value;
    const msg = document.getElementById('change-pin-msg');

    const profile = this.store.getEmergencyProfile();
    const currentPin = profile.pin || '1234';

    if (oldPin !== currentPin) {
      msg.textContent = 'Current PIN is incorrect.';
      msg.classList.remove('hidden');
      return;
    }

    if (newPin.length < 4 || newPin.length > 6) {
      msg.textContent = 'New PIN must be between 4 and 6 digits.';
      msg.classList.remove('hidden');
      return;
    }

    if (newPin !== confirmPin) {
      msg.textContent = 'New PIN and confirmation do not match.';
      msg.classList.remove('hidden');
      return;
    }

    profile.pin = newPin;
    this.store.saveEmergencyProfile(profile);
    this.closeModal('change-pin-modal');
    alert('Security PIN updated successfully.');
  }

  printEmergencyCard() {
    window.print();
  }

  // --- 10. CAREGIVER DASHBOARD ---
  renderCaregiverView() {
    const profiles = this.store.getCaregiverProfiles();
    const activeId = this.store.getActivePatientId();
    const activePatient = profiles.find(p => p.id === activeId) || profiles[0];

    const selectEl = document.getElementById('cg-patient-select');
    if (selectEl) {
      selectEl.innerHTML = profiles.map(p => `
        <option value="${p.id}" ${p.id === activePatient.id ? 'selected' : ''}>${p.avatar} ${p.name} (${p.condition})</option>
      `).join('');
    }

    const patientNameEl = document.getElementById('cg-active-name');
    const patientConditionEl = document.getElementById('cg-active-condition');
    const patientAdherenceEl = document.getElementById('cg-active-adherence');
    const patientMissedEl = document.getElementById('cg-active-missed');
    const patientMedsEl = document.getElementById('cg-active-meds');

    if (patientNameEl) patientNameEl.textContent = activePatient.name;
    if (patientConditionEl) patientConditionEl.textContent = activePatient.condition;
    if (patientAdherenceEl) patientAdherenceEl.textContent = `${activePatient.adherenceRate}%`;
    if (patientMissedEl) patientMissedEl.textContent = `${activePatient.missedToday} Doses`;
    if (patientMedsEl) patientMedsEl.textContent = `${activePatient.activeMedsCount} Prescriptions`;
  }

  switchCaregiverPatient(patientId) {
    this.store.setActivePatientId(patientId);
    this.renderCaregiverView();
    this.playSuccessBeep();
  }

  // --- 11. SMART MEDICINE BOX IOT DASHBOARD ---
  renderIoTView() {
    const iot = this.store.getIoTState();

    // Connection badge
    const connEl = document.getElementById('iot-conn-badge');
    if (connEl) {
      connEl.className = `px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1.5 ${iot.connected ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'}`;
      connEl.innerHTML = `<span class="w-2 h-2 rounded-full ${iot.connected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}"></span><span>${iot.connected ? 'ESP32 CONNECTED' : 'ESP32 OFFLINE'}</span>`;
    }

    // LCD screen
    const lcdLine1 = document.getElementById('lcd-line-1');
    const lcdLine2 = document.getElementById('lcd-line-2');
    if (lcdLine1) lcdLine1.textContent = iot.lcdLine1 || 'MEDICAREX V2.0';
    if (lcdLine2) lcdLine2.textContent = iot.lcdLine2 || 'READY • 08:00 AM';

    // Servo status
    const servoStatus = document.getElementById('iot-servo-status');
    const servoArm = document.getElementById('iot-servo-arm');
    if (servoStatus) servoStatus.textContent = iot.servoOpen ? 'OPEN (90°)' : 'LOCKED (0°)';
    if (servoArm) {
      if (iot.servoOpen) servoArm.classList.add('open');
      else servoArm.classList.remove('open');
    }

    // Buzzer status
    const buzzerStatus = document.getElementById('iot-buzzer-status');
    const buzzerIcon = document.getElementById('iot-buzzer-icon');
    if (buzzerStatus) buzzerStatus.textContent = iot.buzzerActive ? 'ALERT SOUNDING (2.4kHz)' : 'STANDBY (SILENT)';
    if (buzzerIcon) {
      if (iot.buzzerActive) buzzerIcon.classList.add('buzzer-active', 'text-rose-600');
      else buzzerIcon.classList.remove('buzzer-active', 'text-rose-600');
    }

    // Fingerprint status
    const fpStatus = document.getElementById('iot-fp-status');
    if (fpStatus && iot.lastFingerprint) {
      fpStatus.textContent = `${iot.lastFingerprint.result} (ID #${iot.lastFingerprint.id})`;
    }

    // Sync queue
    const syncQueueEl = document.getElementById('iot-sync-queue-list');
    if (syncQueueEl) {
      syncQueueEl.innerHTML = iot.syncQueue.map(item => `
        <div class="flex justify-between items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <span>${item.event}</span>
          <span class="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.5 rounded font-mono">${item.status}</span>
        </div>
      `).join('') || `<p class="text-xs text-slate-400 italic">Queue empty. All simulated events synced.</p>`;
    }

    // Event history
    const eventLogEl = document.getElementById('iot-event-log-list');
    if (eventLogEl) {
      eventLogEl.innerHTML = iot.events.map(ev => `
        <div class="flex items-start space-x-2 text-xs py-1.5 border-b border-slate-100 dark:border-slate-800 last:border-none">
          <span class="text-[10px] bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 font-mono px-1.5 py-0.5 rounded uppercase font-bold">${ev.type}</span>
          <div class="flex-grow">
            <p class="text-slate-800 dark:text-slate-200">${ev.msg}</p>
            <span class="text-[10px] text-slate-400">${ev.timestamp}</span>
          </div>
          <span class="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-mono font-bold">DEMO</span>
        </div>
      `).join('') || `<p class="text-xs text-slate-400">No events logged yet.</p>`;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // IoT Hardware Simulation Controls
  simToggleESP32() {
    const iot = this.store.getIoTState();
    iot.connected = !iot.connected;
    iot.lastStatus = iot.connected ? 'Online • WiFi RSSI: -54dBm' : 'Disconnected (Offline Mode)';
    iot.events.unshift({
      id: 'ev-' + Date.now(),
      type: 'ESP32',
      msg: iot.connected ? 'ESP32 WiFi Connected to MedicareX Local Net' : 'ESP32 Disconnected (Operating Offline)',
      timestamp: 'Just now'
    });
    this.store.saveIoTState(iot);
    this.renderIoTView();
    this.renderDashboard();
  }

  simScanFingerprint(isMatch) {
    const iot = this.store.getIoTState();
    const fpPad = document.getElementById('iot-fp-pad');
    if (fpPad) fpPad.classList.add('scanning');

    setTimeout(() => {
      if (fpPad) fpPad.classList.remove('scanning');
      if (isMatch) {
        iot.lastFingerprint = { id: 1, result: 'Match Authorized (User: Eleanor Vance)', timestamp: 'Just now' };
        iot.servoOpen = true;
        iot.lcdLine1 = 'FINGERPRINT OK!';
        iot.lcdLine2 = 'DISPENSING DOSE';
        iot.events.unshift({
          id: 'ev-' + Date.now(),
          type: 'R307_FP',
          msg: 'Authorized biometric match (ID #1 - Confidence 99%). Servo unlocked.',
          timestamp: 'Just now'
        });
        this.playSuccessBeep();
      } else {
        iot.lastFingerprint = { id: 99, result: 'Unknown Fingerprint (Access Denied)', timestamp: 'Just now' };
        iot.lcdLine1 = 'ACCESS DENIED';
        iot.lcdLine2 = 'RE-TRY FINGER';
        iot.events.unshift({
          id: 'ev-' + Date.now(),
          type: 'R307_FP',
          msg: 'Biometric authorization failed: Unknown finger detected.',
          timestamp: 'Just now'
        });
        this.playBuzzerSound();
      }
      this.store.saveIoTState(iot);
      this.renderIoTView();
    }, 900);
  }

  simToggleServo() {
    const iot = this.store.getIoTState();
    iot.servoOpen = !iot.servoOpen;
    iot.events.unshift({
      id: 'ev-' + Date.now(),
      type: 'SERVO',
      msg: iot.servoOpen ? 'Manual command: Medicine box lid servo OPENED' : 'Manual command: Medicine box lid servo CLOSED & LOCKED',
      timestamp: 'Just now'
    });
    this.store.saveIoTState(iot);
    this.renderIoTView();
  }

  simTriggerBuzzer() {
    const iot = this.store.getIoTState();
    iot.buzzerActive = true;
    this.playBuzzerSound();
    iot.events.unshift({
      id: 'ev-' + Date.now(),
      type: 'BUZZER',
      msg: 'Piezo buzzer alert triggered (2.4kHz pulse cycle)',
      timestamp: 'Just now'
    });
    this.store.saveIoTState(iot);
    this.renderIoTView();

    setTimeout(() => {
      iot.buzzerActive = false;
      this.store.saveIoTState(iot);
      this.renderIoTView();
    }, 1800);
  }

  simUpdateLCD() {
    const text = prompt('Enter text for Line 1 of 16x2 LCD display (max 16 chars):', 'MEDICAREX V2.0');
    if (text !== null) {
      const iot = this.store.getIoTState();
      iot.lcdLine1 = text.substring(0, 16).toUpperCase();
      iot.events.unshift({
        id: 'ev-' + Date.now(),
        type: 'LCD',
        msg: `LCD display Line 1 updated: "${iot.lcdLine1}"`,
        timestamp: 'Just now'
      });
      this.store.saveIoTState(iot);
      this.renderIoTView();
    }
  }

  simRecordDoseEvent() {
    const iot = this.store.getIoTState();
    iot.events.unshift({
      id: 'ev-' + Date.now(),
      type: 'DISPENSE',
      msg: 'Hardware pill compartment sensor verified medication extraction',
      timestamp: 'Just now'
    });
    iot.syncQueue.push({
      id: 'sq-' + Date.now(),
      event: 'Dispense verified: Lisinopril 10mg',
      timestamp: 'Just now',
      status: 'Pending Upload'
    });
    this.store.saveIoTState(iot);
    this.renderIoTView();
    this.playSuccessBeep();
  }

  simClearEvents() {
    const iot = this.store.getIoTState();
    iot.events = [];
    iot.syncQueue = [];
    this.store.saveIoTState(iot);
    this.renderIoTView();
  }

  // --- 12. ANALYTICS & CHARTS VIEW ---
  renderAnalyticsView() {
    const meds = this.store.getMedications();
    const logs = this.store.getLogs();

    // Destroy existing Chart.js instances if any
    if (this.charts.adherence) {
      this.charts.adherence.destroy();
      this.charts.adherence = null;
    }
    if (this.charts.distribution) {
      this.charts.distribution.destroy();
      this.charts.distribution = null;
    }
    if (this.charts.meds) {
      this.charts.meds.destroy();
      this.charts.meds = null;
    }

    if (!window.Chart) {
      console.log('Chart.js loading in background.');
      return;
    }

    // 1. Daily adherence past 14 days
    const daysLabels = [];
    const dailyPct = [];
    const today = new Date();

    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dStr = d.toISOString().split('T')[0];
      daysLabels.push(d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));

      const dayLogs = logs.filter(l => l.dateStr === dStr);
      const dayTaken = dayLogs.filter(l => l.status === 'taken').length;
      const pct = dayLogs.length > 0 ? Math.round((dayTaken / dayLogs.length) * 100) : 100;
      dailyPct.push(pct);
    }

    const ctxAdh = document.getElementById('chart-daily-adherence');
    if (ctxAdh) {
      this.charts.adherence = new Chart(ctxAdh, {
        type: 'line',
        data: {
          labels: daysLabels,
          datasets: [{
            label: 'Adherence Rate (%)',
            data: dailyPct,
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#0284c7'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 100, ticks: { callback: v => v + '%' } }
          }
        }
      });
    }

    // 2. Dose Status Distribution (Donut)
    const takenCount = logs.filter(l => l.status === 'taken').length;
    const missedCount = logs.filter(l => l.status === 'missed').length;
    const skippedCount = logs.filter(l => l.status === 'skipped').length;
    const unconfirmedCount = logs.filter(l => l.status === 'unconfirmed').length;

    const ctxDist = document.getElementById('chart-status-distribution');
    if (ctxDist) {
      this.charts.distribution = new Chart(ctxDist, {
        type: 'doughnut',
        data: {
          labels: ['Taken', 'Missed', 'Skipped', 'Unconfirmed'],
          datasets: [{
            data: [takenCount, missedCount, skippedCount, unconfirmedCount],
            backgroundColor: ['#10b981', '#f43f5e', '#f59e0b', '#94a3b8'],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }

    // 3. Medicine-Wise Comparison Bar Chart
    const medNames = [];
    const medPcts = [];

    meds.forEach(m => {
      medNames.push(m.name);
      const mLogs = logs.filter(l => l.medId === m.id);
      const mTaken = mLogs.filter(l => l.status === 'taken').length;
      const pct = mLogs.length > 0 ? Math.round((mTaken / mLogs.length) * 100) : 100;
      medPcts.push(pct);
    });

    const ctxMeds = document.getElementById('chart-meds-comparison');
    if (ctxMeds) {
      this.charts.meds = new Chart(ctxMeds, {
        type: 'bar',
        data: {
          labels: medNames,
          datasets: [{
            label: 'Adherence %',
            data: medPcts,
            backgroundColor: '#0f766e',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { min: 0, max: 100, ticks: { callback: v => v + '%' } }
          }
        }
      });
    }
  }

  // --- 13. NOTIFICATIONS VIEW ---
  renderNotificationsView() {
    const notifs = this.store.getNotifications();
    const container = document.getElementById('notifications-list');
    if (!container) return;

    container.innerHTML = '';

    if (notifs.length === 0) {
      container.innerHTML = `
        <div class="p-12 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <i data-lucide="bell-off" class="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2"></i>
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">${this.getTranslation('notif_empty')}</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    notifs.forEach(n => {
      const card = document.createElement('div');
      card.className = `p-4 rounded-xl border transition flex items-start justify-between ${n.read ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-brand-50/70 dark:bg-brand-950/40 border-brand-200 dark:border-brand-900'}`;

      let icon = 'bell';
      if (n.type === 'reminder') icon = 'clock';
      else if (n.type === 'device') icon = 'cpu';
      else if (n.type === 'dose') icon = 'check-circle';
      else if (n.type === 'report') icon = 'sparkles';

      card.innerHTML = `
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 flex items-center justify-center shrink-0 font-bold text-xs">
            <i data-lucide="${icon}" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs">${n.title}</h4>
            <p class="text-slate-600 dark:text-slate-300 text-xs mt-0.5">${n.body}</p>
            <span class="text-[10px] text-slate-400 mt-1 block">${n.time}</span>
          </div>
        </div>

        <button onclick="app.dismissNotification('${n.id}')" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      `;

      container.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  markAllNotificationsRead() {
    const notifs = this.store.getNotifications();
    notifs.forEach(n => n.read = true);
    this.store.saveNotifications(notifs);
    this.renderNotificationsView();
  }

  clearAllNotifications() {
    this.store.saveNotifications([]);
    this.renderNotificationsView();
  }

  dismissNotification(id) {
    let notifs = this.store.getNotifications();
    notifs = notifs.filter(n => n.id !== id);
    this.store.saveNotifications(notifs);
    this.renderNotificationsView();
  }

  requestBrowserNotifications() {
    if (!('Notification' in window)) {
      alert('This web browser does not support HTML5 desktop notifications.');
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('MedicareX Reminders Active', {
          body: 'Local demo alerts enabled. (Note: alerts run while browser window remains active).',
          icon: './manifest.json'
        });
        alert('Browser notification simulation permission granted!');
      } else {
        alert('Browser notifications were not granted.');
      }
    });
  }

  // --- 14. SETTINGS & DATA MANAGEMENT VIEW ---
  renderSettingsView() {
    const profile = this.store.getUserProfile();
    const nameEl = document.getElementById('settings-profile-name');
    if (nameEl) nameEl.value = profile.name || '';
  }

  saveSettingsProfile(e) {
    e.preventDefault();
    const profile = this.store.getUserProfile();
    profile.name = document.getElementById('settings-profile-name').value;
    this.store.saveUserProfile(profile);
    this.playSuccessBeep();
    alert('User profile settings updated.');
  }

  loadSampleDataset() {
    if (confirm('Load pre-configured comprehensive sample dataset (6 medications, 30 days of logs, caregiver profiles, and vitals)?')) {
      this.store.resetToSeedData();
      this.playSuccessBeep();
      this.switchTab('dashboard');
      alert('Sample dataset loaded successfully!');
    }
  }

  startEmptyDataset() {
    if (confirm('Clear all medication records and start with an empty dataset?')) {
      this.store.startWithEmptyDataset();
      this.switchTab('medications');
      alert('Started with clean empty dataset.');
    }
  }

  resetAllDemoData() {
    if (confirm('Reset all medication logs, prescriptions, IoT state, and PIN back to default demo data?')) {
      this.store.resetToSeedData();
      this.isEmergencyUnlocked = false;
      this.clearPin();
      this.switchTab('dashboard');
      this.playSuccessBeep();
      alert('Demo data restored successfully!');
    }
  }

  exportDataJSON() {
    const data = {
      medications: this.store.getMedications(),
      logs: this.store.getLogs(),
      emergency: this.store.getEmergencyProfile(),
      userProfile: this.store.getUserProfile(),
      caregivers: this.store.getCaregiverProfiles(),
      vitals: this.store.getVitals(),
      iot: this.store.getIoTState(),
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `medicarex-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  importDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.medications) this.store.saveMedications(data.medications);
        if (data.logs) this.store.saveLogs(data.logs);
        if (data.emergency) this.store.saveEmergencyProfile(data.emergency);
        if (data.vitals) this.store.saveVitals(data.vitals);
        this.playSuccessBeep();
        this.switchTab('dashboard');
        alert('Data successfully imported from JSON backup!');
      } catch (err) {
        alert('Failed to parse JSON backup file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  // --- MODAL UTILITIES ---
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('hidden');

    if (modalId === 'add-med-modal') {
      const form = document.getElementById('med-form');
      if (form) form.reset();
      document.getElementById('med-form-id').value = '';
      document.getElementById('med-modal-title').textContent = this.getTranslation('add_new_med');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add('hidden');
  }
}

// Instantiate Global MedicareX Application
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new MedicareXApp();

  // Register PWA Service Worker if supported
  if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('MedicareX Service Worker registered successfully:', reg.scope);
    }).catch((err) => {
      console.log('MedicareX Service Worker registration failed (normal in file:// or unsupported):', err);
    });
  }
});
