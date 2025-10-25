/* Simon Game - script.js
   No external assets. Uses Web Audio API for tones.
*/

(() => {
  // ---- Config ----
  const COLORS = ['green','red','yellow','blue'];
  const KEY_MAP = { 'g':'green','r':'red','y':'yellow','b':'blue' }; // keyboard shortcuts
  const BASE_INTERVAL = 800; // base playback speed (ms)
  const SPEEDUP_AFTER = 6;   // round after which playback gets faster
  const MIN_INTERVAL = 320;

  // Frequencies (pleasant tones)
  const FREQS = {
    green: 329.63,  // E4
    red:   261.63,  // C4
    yellow:392.00,  // G4
    blue:  523.25   // C5
  };

  // ---- DOM ----
  const pads = {
    green: document.querySelector('[data-color="green"]'),
    red:   document.querySelector('[data-color="red"]'),
    yellow:document.querySelector('[data-color="yellow"]'),
    blue:  document.querySelector('[data-color="blue"]'),
  };
  const startBtn = document.getElementById('startBtn');
  const strictBtn = document.getElementById('strictBtn');
  const resetBtn = document.getElementById('resetBtn');
  const scoreEl = document.getElementById('score');
  const messageEl = document.getElementById('message');

  // ---- Game State ----
  let sequence = [];
  let playerIndex = 0;
  let isPlayingBack = false;
  let strictMode = false;
  let audioCtx = null;
  let gainNode = null;
  let currentRound = 0;

  // ---- Utilities ----
  function ensureAudio(){
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.18;
      gainNode.connect(audioCtx.destination);
    }
  }

  function playTone(color, duration=350){
    ensureAudio();
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = FREQS[color] || 440;
    const g = audioCtx.createGain();
    g.gain.value = 0.0001;
    osc.connect(g);
    g.connect(gainNode);

    const now = audioCtx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
    osc.start(now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration/1000);
    osc.stop(now + duration/1000 + 0.02);
  }

  function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }

  function randomColor(){ return COLORS[Math.floor(Math.random()*COLORS.length)]; }

  function setMessage(text){
    messageEl.textContent = text;
  }

  function updateScore(){
    scoreEl.textContent = sequence.length > 0 ? sequence.length : 0;
  }

  // ---- Visual helpers ----
  function lightPad(color, ms=350){
    const el = pads[color];
    if (!el) return;
    el.classList.add('lit');
    playTone(color, ms);
    return setTimeout(() => el.classList.remove('lit'), ms);
  }

  // ---- Playback ----
  async function playbackSequence(){
    isPlayingBack = true;
    playerIndex = 0;
    setMessage('Watch the sequence');
    // adjust interval based on round length
    let interval = Math.max(BASE_INTERVAL - Math.floor(sequence.length / SPEEDUP_AFTER) * 90, MIN_INTERVAL);
    for (let i=0;i<sequence.length;i++){
      const color = sequence[i];
      lightPad(color, Math.floor(interval * 0.85));
      await sleep(interval);
    }
    isPlayingBack = false;
    setMessage('Your turn');
  }

  // ---- Game mechanics ----
  async function startRound(){
    // add new color and play back
    sequence.push(randomColor());
    currentRound++;
    updateScore();
    await sleep(250);
    playbackSequence();
  }

  function resetGame(){
    sequence = [];
    playerIndex = 0;
    isPlayingBack = false;
    currentRound = 0;
    updateScore();
    setMessage('Press Start');
  }

  function toggleStrict(){
    strictMode = !strictMode;
    strictBtn.setAttribute('aria-pressed', String(strictMode));
    strictBtn.textContent = `Strict: ${strictMode ? 'On' : 'Off'}`;
  }

  function handlePlayerInput(color){
    if (isPlayingBack) return;
    if (sequence.length === 0) return;

    // play sound & flash immediately
    lightPad(color, 220);

    // check
    if (color === sequence[playerIndex]){
      playerIndex++;
      if (playerIndex === sequence.length){
        // round won
        setMessage('Good! Next round...');
        // short delay then next round
        setTimeout(() => startRound(), 700);
      } else {
        // still more to press
        setMessage('Keep going');
      }
    } else {
      // wrong press
      playError();
      if (strictMode){
        setMessage('Wrong! Strict mode - restarting');
        setTimeout(() => {
          resetGame();
          setTimeout(() => startRound(), 500);
        }, 800);
      } else {
        setMessage('Wrong! Replaying sequence');
        // replay same sequence
        playerIndex = 0;
        setTimeout(() => playbackSequence(), 900);
      }
    }
  }

  function playError(){
    // small buzz using WebAudio
    ensureAudio();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'sawtooth';
    o.frequency.value = 120;
    o.connect(g);
    g.connect(gainNode);
    const now = audioCtx.currentTime;
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
    o.start(now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    o.stop(now + 0.2);
  }

  // ---- Event wiring ----
  Object.keys(pads).forEach(color => {
    const el = pads[color];
    el.addEventListener('mousedown', () => handlePlayerInput(color));
    el.addEventListener('touchstart', (e) => { e.preventDefault(); handlePlayerInput(color); }, {passive:false});
  });

  startBtn.addEventListener('click', async () => {
    // unlock audio on user gesture
    ensureAudio();
    if (sequence.length === 0){
      setMessage('Get ready...');
      await sleep(350);
      startRound();
    } else {
      // restart from current sequence head? we'll restart fresh
      resetGame();
      await sleep(200);
      startRound();
    }
  });

  strictBtn.addEventListener('click', () => toggleStrict());
  resetBtn.addEventListener('click', () => {
    resetGame();
    // stop audio context? keep it
  });

  // keyboard support
  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (KEY_MAP[k]) handlePlayerInput(KEY_MAP[k]);
    if (k === 's') startBtn.click();      // s = start
    if (k === 'x') resetBtn.click();      // x = reset
    if (k === 't') strictBtn.click();     // t = toggle strict
  });

  // show initial hint
  setMessage('Press Start');

  // expose for debugging (optional)
  window.__simon = {
    get sequence(){ return sequence.slice(); },
    reset: resetGame,
    start: () => startBtn.click(),
    toggleStrict
  };

})();
