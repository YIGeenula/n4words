/* =========================================================
   DICTATION PRACTICE ENGINE (dictation.js)
   Standalone Physical Book Dictation & Handwriting Practice
========================================================= */

(function () {
  'use strict';

  // --- Speech Engine ---
  function speakJP(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[・\s\(\)（）-]/g, '');
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'ja-JP';
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
  }

  // --- Kana to Romaji minimal helper ---
  const KATA_OFFSET = 0x60;
  function kataToHira(str) {
    let out = "";
    for (const ch of str) {
      const code = ch.codePointAt(0);
      if (code >= 0x30A1 && code <= 0x30F6) {
        out += String.fromCodePoint(code - KATA_OFFSET);
      } else {
        out += ch;
      }
    }
    return out;
  }

  const ROW_ORDER = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];
  const ROW_MAP = {
    "あ": "あ", "い": "あ", "う": "あ", "え": "あ", "お": "あ",
    "か": "か", "き": "か", "く": "か", "け": "か", "こ": "か",
    "が": "か", "ぎ": "か", "ぐ": "か", "げ": "か", "ご": "か",
    "さ": "さ", "し": "さ", "す": "さ", "せ": "さ", "そ": "さ",
    "ざ": "さ", "じ": "さ", "ず": "さ", "ぜ": "さ", "ぞ": "さ",
    "た": "た", "ち": "た", "つ": "た", "て": "た", "と": "た",
    "だ": "た", "ぢ": "た", "づ": "た", "де": "た", "ど": "た",
    "な": "な", "に": "な", "ぬ": "な", "ね": "な", "の": "な",
    "は": "は", "ひ": "は", "ふ": "は", "へ": "は", "ほ": "は",
    "ば": "は", "び": "は", "ぶ": "は", "べ": "は", "ぼ": "は",
    "ぱ": "は", "ぴ": "は", "ぷ": "は", "ぺ": "は", "ぽ": "は",
    "ま": "ま", "み": "ま", "む": "ま", "め": "ま", "も": "ま",
    "や": "や", "ゆ": "や", "よ": "や",
    "ら": "ら", "り": "ら", "る": "ら", "れ": "ら", "ろ": "ら",
    "わ": "わ", "を": "わ", "ん": "わ"
  };

  function getRowCategory(kana) {
    if (!kana) return "あ";
    const hira = kataToHira(kana);
    const firstChar = Array.from(hira)[0];
    return ROW_MAP[firstChar] || "あ";
  }

  // --- Prepare Normalized Items List ---
  const ALL_ITEMS = [];

  if (typeof VOCAB_RAW !== 'undefined') {
    VOCAB_RAW.forEach((item, idx) => {
      ALL_ITEMS.push({
        id: 'vocab_' + idx,
        type: 'vocab',
        kanji: item[0] || '',
        kana: item[1] || '',
        en: item[2] || '',
        si: item[3] || '',
        cat: getRowCategory(item[1])
      });
    });
  }

  if (typeof VERBS_RAW !== 'undefined') {
    VERBS_RAW.forEach((item, idx) => {
      ALL_ITEMS.push({
        id: 'verb_' + idx,
        type: 'verbs',
        kanji: item[0] || '',
        kana: item[1] || '',
        en: item[2] || '',
        si: item[3] || '',
        cat: getRowCategory(item[1])
      });
    });
  }

  // --- State ---
  const state = {
    selectedType: 'all',          // 'all', 'vocab', 'verbs'
    promptMode: 'mixed',          // 'mixed', 'meanings-first', 'japanese-first'
    autoAudio: true,
    timerSeconds: 0,
    shuffle: true,
    selectedIds: new Set(),
    searchQuery: '',
    selectedLetter: 'all',

    // Session State
    sessionQueue: [],
    currentIndex: 0,
    isRevealed: false,
    correctCount: 0,
    repeatList: [],
    timerInterval: null,
    timerRemaining: 0
  };

  // --- DOM Elements ---
  const selectionView = document.getElementById('selectionView');
  const stageView = document.getElementById('stageView');
  const summaryView = document.getElementById('summaryView');

  const typeGroup = document.getElementById('typeGroup');
  const modeGroup = document.getElementById('modeGroup');
  const autoAudioCheckbox = document.getElementById('autoAudioCheckbox');
  const timerSelect = document.getElementById('timerSelect');
  const shuffleCheckbox = document.getElementById('shuffleCheckbox');

  const totalAvailableCount = document.getElementById('totalAvailableCount');
  const selectedCountDisplay = document.getElementById('selectedCountDisplay');
  const startCountBadge = document.getElementById('startCountBadge');
  const startPracticeBtn = document.getElementById('startPracticeBtn');

  const filterInput = document.getElementById('filterInput');
  const clearFilterBtn = document.getElementById('clearFilterBtn');
  const letterPills = document.getElementById('letterPills');
  const masterCheckbox = document.getElementById('masterCheckbox');
  const wordPickerBody = document.getElementById('wordPickerBody');

  const selectAllBtn = document.getElementById('selectAllBtn');
  const deselectAllBtn = document.getElementById('deselectAllBtn');
  const selectRandom20Btn = document.getElementById('selectRandom20Btn');
  const selectRandom50Btn = document.getElementById('selectRandom50Btn');

  // Stage DOM Elements
  const exitStageBtn = document.getElementById('exitStageBtn');
  const currentIdxDisplay = document.getElementById('currentIdxDisplay');
  const totalIdxDisplay = document.getElementById('totalIdxDisplay');
  const progressPercentDisplay = document.getElementById('progressPercentDisplay');
  const progressBarFill = document.getElementById('progressBarFill');
  const correctCountDisplay = document.getElementById('correctCountDisplay');
  const repeatCountDisplay = document.getElementById('repeatCountDisplay');

  const cardTypeTag = document.getElementById('cardTypeTag');
  const cardPromptTypeBadge = document.getElementById('cardPromptTypeBadge');
  const cardTimerIndicator = document.getElementById('cardTimerIndicator');
  const timerCountdown = document.getElementById('timerCountdown');
  const notebookInstruction = document.getElementById('notebookInstruction');

  const promptMainText = document.getElementById('promptMainText');
  const promptSubText = document.getElementById('promptSubText');
  const promptAudioBtn = document.getElementById('promptAudioBtn');

  const answerBox = document.getElementById('answerBox');
  const revealBtn = document.getElementById('revealBtn');
  const ansKanji = document.getElementById('ansKanji');
  const ansKana = document.getElementById('ansKana');
  const ansRomaji = document.getElementById('ansRomaji');
  const ansEn = document.getElementById('ansEn');
  const ansSi = document.getElementById('ansSi');

  const controlsPreReveal = document.getElementById('controlsPreReveal');
  const controlsPostReveal = document.getElementById('controlsPostReveal');
  const bigRevealBtn = document.getElementById('bigRevealBtn');
  const markRepeatBtn = document.getElementById('markRepeatBtn');
  const markKnownBtn = document.getElementById('markKnownBtn');

  // Summary DOM Elements
  const sumTotalCount = document.getElementById('sumTotalCount');
  const sumCorrectCount = document.getElementById('sumCorrectCount');
  const sumRepeatCount = document.getElementById('sumRepeatCount');
  const repeatSessionBtn = document.getElementById('repeatSessionBtn');
  const practiceRepeatsOnlyBtn = document.getElementById('practiceRepeatsOnlyBtn');
  const chooseNewWordsBtn = document.getElementById('chooseNewWordsBtn');

  // Theme Toggle
  const dictationThemeToggle = document.getElementById('dictationThemeToggle');
  const themeIconSun = document.querySelector('.theme-icon-sun');
  const themeIconMoon = document.querySelector('.theme-icon-moon');

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    if (themeIconSun && themeIconMoon) {
      if (t === 'dark') {
        themeIconSun.classList.remove('hidden');
        themeIconMoon.classList.add('hidden');
      } else {
        themeIconSun.classList.add('hidden');
        themeIconMoon.classList.remove('hidden');
      }
    }
  }

  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (dictationThemeToggle) {
    dictationThemeToggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  // --- Filtering & Selection Table ---
  function getFilteredItems() {
    return ALL_ITEMS.filter(item => {
      // Type match
      if (state.selectedType !== 'all' && item.type !== state.selectedType) return false;
      // Letter row match
      if (state.selectedLetter !== 'all' && item.cat !== state.selectedLetter) return false;
      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const full = (item.kanji + item.kana + item.en + item.si).toLowerCase();
        if (!full.includes(q)) return false;
      }
      return true;
    });
  }

  function updateCounters() {
    const count = state.selectedIds.size;
    selectedCountDisplay.textContent = count;
    startCountBadge.textContent = count;
    startPracticeBtn.disabled = (count === 0);

    const filtered = getFilteredItems();
    totalAvailableCount.textContent = filtered.length;

    // Update master checkbox state
    if (filtered.length === 0) {
      masterCheckbox.checked = false;
      masterCheckbox.indeterminate = false;
    } else {
      const allSelected = filtered.every(item => state.selectedIds.has(item.id));
      const someSelected = filtered.some(item => state.selectedIds.has(item.id));
      masterCheckbox.checked = allSelected;
      masterCheckbox.indeterminate = (!allSelected && someSelected);
    }
  }

  function renderTable() {
    const items = getFilteredItems();
    wordPickerBody.innerHTML = '';

    if (items.length === 0) {
      wordPickerBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--ink-soft); font-style: italic;">
            No words found matching current filters.
          </td>
        </tr>
      `;
      updateCounters();
      return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
      const tr = document.createElement('tr');
      const isChecked = state.selectedIds.has(item.id);
      if (isChecked) tr.classList.add('selected');

      tr.innerHTML = `
        <td style="text-align: center;">
          <input type="checkbox" class="word-check" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
        </td>
        <td><span class="type-tag ${item.type}">${item.type === 'vocab' ? 'Vocab' : 'Verb'}</span></td>
        <td class="td-kanji">${item.kanji || '—'}</td>
        <td class="td-kana">${item.kana}</td>
        <td>${item.en}</td>
        <td class="td-si" lang="si">${item.si}</td>
        <td style="text-align: center;">
          <button class="audio-sm-btn" data-speak="${item.kanji || item.kana}" title="Pronounce">🔊</button>
        </td>
      `;

      tr.addEventListener('click', (e) => {
        if (e.target.closest('.audio-sm-btn')) return;
        const cb = tr.querySelector('.word-check');
        if (e.target !== cb) {
          cb.checked = !cb.checked;
        }
        if (cb.checked) {
          state.selectedIds.add(item.id);
          tr.classList.add('selected');
        } else {
          state.selectedIds.delete(item.id);
          tr.classList.remove('selected');
        }
        updateCounters();
      });

      fragment.appendChild(tr);
    });

    wordPickerBody.appendChild(fragment);
    updateCounters();
  }

  function renderLetterPills() {
    letterPills.innerHTML = '';

    const allPill = document.createElement('button');
    allPill.className = `letter-pill ${state.selectedLetter === 'all' ? 'active' : ''}`;
    allPill.textContent = 'All Letters';
    allPill.addEventListener('click', () => {
      state.selectedLetter = 'all';
      renderLetterPills();
      renderTable();
    });
    letterPills.appendChild(allPill);

    ROW_ORDER.forEach(row => {
      const pill = document.createElement('button');
      pill.className = `letter-pill ${state.selectedLetter === row ? 'active' : ''}`;
      pill.textContent = `${row} 行`;
      pill.addEventListener('click', () => {
        state.selectedLetter = row;
        renderLetterPills();
        renderTable();
      });
      letterPills.appendChild(pill);
    });
  }

  // --- Selection Listeners ---
  typeGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    typeGroup.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedType = btn.dataset.type;
    renderTable();
  });

  modeGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    modeGroup.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.promptMode = btn.dataset.mode;
  });

  autoAudioCheckbox.addEventListener('change', () => {
    state.autoAudio = autoAudioCheckbox.checked;
  });

  timerSelect.addEventListener('change', () => {
    state.timerSeconds = parseInt(timerSelect.value, 10);
  });

  shuffleCheckbox.addEventListener('change', () => {
    state.shuffle = shuffleCheckbox.checked;
  });

  filterInput.addEventListener('input', () => {
    state.searchQuery = filterInput.value.trim();
    clearFilterBtn.classList.toggle('hidden', state.searchQuery === '');
    renderTable();
  });

  clearFilterBtn.addEventListener('click', () => {
    filterInput.value = '';
    state.searchQuery = '';
    clearFilterBtn.classList.add('hidden');
    renderTable();
  });

  masterCheckbox.addEventListener('change', () => {
    const items = getFilteredItems();
    if (masterCheckbox.checked) {
      items.forEach(i => state.selectedIds.add(i.id));
    } else {
      items.forEach(i => state.selectedIds.delete(i.id));
    }
    renderTable();
  });

  selectAllBtn.addEventListener('click', () => {
    getFilteredItems().forEach(i => state.selectedIds.add(i.id));
    renderTable();
  });

  deselectAllBtn.addEventListener('click', () => {
    state.selectedIds.clear();
    renderTable();
  });

  function pickRandom(count) {
    state.selectedIds.clear();
    const items = [...getFilteredItems()];
    // Fisher-Yates shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.slice(0, count).forEach(i => state.selectedIds.add(i.id));
    renderTable();
  }

  selectRandom20Btn.addEventListener('click', () => pickRandom(20));
  selectRandom50Btn.addEventListener('click', () => pickRandom(50));

  // Audio click delegation on table
  wordPickerBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.audio-sm-btn');
    if (btn) {
      e.stopPropagation();
      speakJP(btn.dataset.speak);
    }
  });


  // =========================================================
  // STAGE ENGINE (DICTATION PRACTICE FLOW)
  // =========================================================
  function startPractice(customList = null) {
    clearInterval(state.timerInterval);

    let itemsToPractice = [];
    if (customList) {
      itemsToPractice = customList;
    } else {
      itemsToPractice = ALL_ITEMS.filter(i => state.selectedIds.has(i.id));
    }

    if (itemsToPractice.length === 0) return;

    if (state.shuffle) {
      for (let i = itemsToPractice.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemsToPractice[i], itemsToPractice[j]] = [itemsToPractice[j], itemsToPractice[i]];
      }
    }

    // Assign per-card prompt direction
    state.sessionQueue = itemsToPractice.map(item => {
      let isMeaningFirst = true;
      if (state.promptMode === 'mixed') {
        isMeaningFirst = Math.random() < 0.5;
      } else if (state.promptMode === 'meanings-first') {
        isMeaningFirst = true;
      } else if (state.promptMode === 'japanese-first') {
        isMeaningFirst = false;
      }
      return {
        item: item,
        isMeaningFirst: isMeaningFirst
      };
    });

    state.currentIndex = 0;
    state.correctCount = 0;
    state.repeatList = [];

    selectionView.classList.add('hidden');
    summaryView.classList.add('hidden');
    stageView.classList.remove('hidden');

    loadCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function loadCard() {
    clearInterval(state.timerInterval);
    state.isRevealed = false;

    if (state.currentIndex >= state.sessionQueue.length) {
      showSummary();
      return;
    }

    const currentEntry = state.sessionQueue[state.currentIndex];
    const item = currentEntry.item;
    const isMeaningFirst = currentEntry.isMeaningFirst;

    // Update Progress
    const total = state.sessionQueue.length;
    currentIdxDisplay.textContent = state.currentIndex + 1;
    totalIdxDisplay.textContent = total;
    const percent = Math.round(((state.currentIndex) / total) * 100);
    progressPercentDisplay.textContent = percent + '%';
    progressBarFill.style.width = percent + '%';

    correctCountDisplay.textContent = state.correctCount;
    repeatCountDisplay.textContent = state.repeatList.length;

    // Card Meta
    cardTypeTag.textContent = (item.type === 'vocab') ? 'VOCABULARY (語彙)' : 'VERB (動詞)';
    cardPromptTypeBadge.textContent = isMeaningFirst ? 'PROMPT: MEANING ➔ WRITE JAPANESE' : 'PROMPT: JAPANESE ➔ WRITE MEANING';

    // Notebook Instruction
    if (isMeaningFirst) {
      notebookInstruction.innerHTML = '<strong>Physical Book:</strong> Look at the English / Sinhala below, and write the <strong>Kanji & Hiragana</strong> in your notebook!';
    } else {
      notebookInstruction.innerHTML = '<strong>Physical Book:</strong> Look at the Japanese below, and write the <strong>Meaning & Reading</strong> in your notebook!';
    }

    // Setup Prompts & Answers based on mode
    if (isMeaningFirst) {
      // Prompt shows meaning
      promptMainText.textContent = item.en;
      promptSubText.textContent = item.si;
      promptAudioBtn.classList.add('hidden'); // Do not spoil pronunciation before answer
    } else {
      // Prompt shows Japanese
      promptMainText.textContent = item.kanji || item.kana;
      promptSubText.textContent = item.kanji ? item.kana : '';
      promptAudioBtn.classList.remove('hidden');
      promptAudioBtn.onclick = () => speakJP(item.kanji || item.kana);
      if (state.autoAudio) {
        speakJP(item.kanji || item.kana);
      }
    }

    // Populate Answer Section
    ansKanji.textContent = item.kanji || '—';
    ansKana.textContent = item.kana;
    ansRomaji.textContent = '';
    ansEn.textContent = item.en;
    ansSi.textContent = item.si;

    // Reset Box States
    answerBox.classList.add('blurred');
    controlsPreReveal.classList.remove('hidden');
    controlsPostReveal.classList.add('hidden');

    // Timer handling
    if (state.timerSeconds > 0) {
      cardTimerIndicator.classList.remove('hidden');
      state.timerRemaining = state.timerSeconds;
      timerCountdown.textContent = `${state.timerRemaining}s`;

      state.timerInterval = setInterval(() => {
        state.timerRemaining--;
        timerCountdown.textContent = `${state.timerRemaining}s`;
        if (state.timerRemaining <= 0) {
          clearInterval(state.timerInterval);
          if (!state.isRevealed) {
            revealAnswer();
          }
        }
      }, 1000);
    } else {
      cardTimerIndicator.classList.add('hidden');
    }
  }

  function revealAnswer() {
    if (state.isRevealed) return;
    state.isRevealed = true;
    clearInterval(state.timerInterval);

    answerBox.classList.remove('blurred');
    controlsPreReveal.classList.add('hidden');
    controlsPostReveal.classList.remove('hidden');

    const currentEntry = state.sessionQueue[state.currentIndex];
    const item = currentEntry.item;

    // If meaning was prompted first, speak Japanese now upon revealing answer
    if (currentEntry.isMeaningFirst && state.autoAudio) {
      speakJP(item.kanji || item.kana);
    }

    // If timer is on, start countdown for advancing to next word
    if (state.timerSeconds > 0) {
      state.timerRemaining = Math.max(3, Math.round(state.timerSeconds * 0.7));
      timerCountdown.textContent = `${state.timerRemaining}s`;
      state.timerInterval = setInterval(() => {
        state.timerRemaining--;
        timerCountdown.textContent = `${state.timerRemaining}s`;
        if (state.timerRemaining <= 0) {
          clearInterval(state.timerInterval);
          advanceNext(true);
        }
      }, 1000);
    }
  }

  function advanceNext(isKnown) {
    clearInterval(state.timerInterval);
    const currentEntry = state.sessionQueue[state.currentIndex];

    if (isKnown) {
      state.correctCount++;
    } else {
      state.repeatList.push(currentEntry.item);
    }

    state.currentIndex++;
    loadCard();
  }

  // Stage Action Listeners
  revealBtn.addEventListener('click', revealAnswer);
  bigRevealBtn.addEventListener('click', revealAnswer);

  markKnownBtn.addEventListener('click', () => advanceNext(true));
  markRepeatBtn.addEventListener('click', () => advanceNext(false));

  exitStageBtn.addEventListener('click', () => {
    clearInterval(state.timerInterval);
    stageView.classList.add('hidden');
    summaryView.classList.add('hidden');
    selectionView.classList.remove('hidden');
    renderTable();
  });

  // Keyboard Shortcuts Handler
  window.addEventListener('keydown', (e) => {
    if (stageView.classList.contains('hidden')) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (!state.isRevealed) {
        revealAnswer();
      } else {
        advanceNext(true);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (!state.isRevealed) {
        revealAnswer();
      } else {
        advanceNext(true);
      }
    } else if (e.key === '1') {
      if (state.isRevealed) {
        advanceNext(false);
      }
    } else if (e.key === '2') {
      if (state.isRevealed) {
        advanceNext(true);
      }
    } else if (e.key === 'r' || e.key === 'R') {
      const currentEntry = state.sessionQueue[state.currentIndex];
      if (currentEntry) {
        speakJP(currentEntry.item.kanji || currentEntry.item.kana);
      }
    } else if (e.key === 'Escape') {
      exitStageBtn.click();
    }
  });


  // =========================================================
  // SUMMARY VIEW ENGINE
  // =========================================================
  function showSummary() {
    clearInterval(state.timerInterval);
    stageView.classList.add('hidden');
    summaryView.classList.remove('hidden');

    const total = state.sessionQueue.length;
    sumTotalCount.textContent = total;
    sumCorrectCount.textContent = state.correctCount;
    sumRepeatCount.textContent = state.repeatList.length;

    if (state.repeatList.length > 0) {
      practiceRepeatsOnlyBtn.classList.remove('hidden');
      practiceRepeatsOnlyBtn.textContent = `↻ Practice Missed Words (${state.repeatList.length})`;
    } else {
      practiceRepeatsOnlyBtn.classList.add('hidden');
    }

    progressBarFill.style.width = '100%';
    progressPercentDisplay.textContent = '100%';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  repeatSessionBtn.addEventListener('click', () => {
    startPractice();
  });

  practiceRepeatsOnlyBtn.addEventListener('click', () => {
    if (state.repeatList.length > 0) {
      startPractice([...state.repeatList]);
    }
  });

  chooseNewWordsBtn.addEventListener('click', () => {
    summaryView.classList.add('hidden');
    selectionView.classList.remove('hidden');
    renderTable();
  });

  startPracticeBtn.addEventListener('click', () => {
    startPractice();
  });


  // --- Initial Mount ---
  renderLetterPills();
  renderTable();

})();
