// The Player — Screen 3 of 12
// Mimics a streaming video player: top chrome, the "scene" stage, answer dialogue options, scrubber.

const PL = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  champagne: '#D4AF37',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
  red: '#F43F5E',
};

// ─────────────────────────────────────────────────────────────
// Top chrome — like a streaming player's header
// ─────────────────────────────────────────────────────────────
function PlayerChrome({ actNum, actTitle, episodeNum }) {
  return (
    <div style={{
      padding: '0 14px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', zIndex: 3,
    }}>
      <button style={{
        width: 34, height: 34, borderRadius: '50%',
        background: 'rgba(10,10,10,0.5)',
        border: '1px solid rgba(255,224,236,0.2)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2l8 8M10 2l-8 8" stroke={PL.cream} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.24em', color: PL.goldBright, textTransform: 'uppercase',
        }}>ACT {actNum} · EP {episodeNum}</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 800, fontSize: 14, color: PL.cream, marginTop: 1,
        }}>{actTitle}</div>
      </div>

      <button style={{
        width: 34, height: 34, borderRadius: '50%',
        background: 'rgba(10,10,10,0.5)',
        border: '1px solid rgba(255,224,236,0.2)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1a4 4 0 00-4 4v2.5c0 .8-.3 1.5-.8 2l-.2.2h10l-.2-.2c-.5-.5-.8-1.2-.8-2V5a4 4 0 00-4-4z" stroke={PL.cream} strokeWidth="1.4" fill="none"/>
          <path d="M5.5 11.5a1.5 1.5 0 003 0" stroke={PL.cream} strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        </svg>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// The Stage — character + speech bubble containing the question
// ─────────────────────────────────────────────────────────────
function Stage({ question, situation }) {
  return (
    <div style={{
      margin: '12px 14px 0',
      borderRadius: 18,
      border: `2px solid ${PL.black}`,
      boxShadow: `0 0 0 1px rgba(255,215,0,0.3) inset, 0 18px 40px -10px rgba(0,0,0,0.6)`,
      overflow: 'hidden',
      position: 'relative',
      height: 380,
      background: PL.black,
    }}>
      {/* SUR interior backdrop */}
      <img src="assets/Sur_interior.png" alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', filter: 'brightness(0.5) saturate(1.2)',
      }}/>
      {/* vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 80%, transparent 30%, rgba(10,10,10,0.85) 100%)`,
      }}/>

      {/* Episode eyebrow */}
      <div style={{
        position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
        padding: '4px 10px', borderRadius: 999,
        background: 'rgba(10,10,10,0.75)',
        border: `1px solid ${PL.goldBright}`,
        backdropFilter: 'blur(8px)',
        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
        letterSpacing: '0.18em', color: PL.goldBright, textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 6,
        whiteSpace: 'nowrap',
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: '50%', background: PL.red,
          boxShadow: `0 0 6px ${PL.red}`,
          animation: 'pulseDot 1.4s ease-in-out infinite',
        }}/>
        SCENE 3 · FAIR HOUSING
      </div>

      {/* Character — Katie, full right side */}
      <img src="assets/Katie_base.png" alt="Katie" style={{
        position: 'absolute',
        right: -28, bottom: -6,
        height: '95%', width: 'auto',
        objectFit: 'contain',
        filter: 'drop-shadow(-6px 10px 18px rgba(0,0,0,0.7))',
      }}/>

      {/* Nametag */}
      <div style={{
        position: 'absolute', right: 14, bottom: 14,
        padding: '4px 10px',
        background: PL.goldBright,
        borderRadius: 4,
        border: `1.5px solid ${PL.black}`,
        boxShadow: '0 2px 0 rgba(0,0,0,0.4)',
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
        color: PL.black, letterSpacing: '0.12em',
        transform: 'rotate(-2deg)',
      }}>
        KATIE
      </div>

      {/* Situation setup (smaller, italic, top-left) */}
      <div style={{
        position: 'absolute', top: 48, left: 14, right: 130,
        padding: '8px 12px',
        borderRadius: 10,
        background: 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,249,240,0.12)',
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontSize: 11, lineHeight: 1.4,
        color: 'rgba(255,249,240,0.85)',
      }}>
        {situation}
      </div>

      {/* Speech bubble containing the question */}
      <div style={{
        position: 'absolute',
        left: 14, right: 14, bottom: 54,
        padding: '14px 16px 16px',
        borderRadius: 16,
        background: PL.cream,
        border: `2px solid ${PL.black}`,
        boxShadow: `0 6px 0 ${PL.black}, 0 10px 20px rgba(0,0,0,0.5)`,
      }}>
        {/* bubble tail pointing right toward Katie */}
        <div style={{
          position: 'absolute',
          right: 40, top: -14,
          width: 0, height: 0,
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
          borderBottom: `14px solid ${PL.black}`,
        }}/>
        <div style={{
          position: 'absolute',
          right: 42, top: -11,
          width: 0, height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: `12px solid ${PL.cream}`,
        }}/>

        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.2em', color: PL.hotPinkDeep, textTransform: 'uppercase',
          marginBottom: 6,
        }}>Katie says…</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 700, fontSize: 15, lineHeight: 1.32, color: PL.black,
          letterSpacing: -0.2,
        }}>
          "{question}"
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Answer options — dialogue picker
// ─────────────────────────────────────────────────────────────
function AnswerOption({ letter, text, state, onClick }) {
  // state: 'idle' | 'selected' | 'correct' | 'wrong' | 'reveal-correct'
  let borderColor = 'rgba(255,249,240,0.18)';
  let bg = 'rgba(10,10,10,0.55)';
  let letterBG = 'rgba(255,215,0,0.15)';
  let letterFG = PL.goldBright;
  let textColor = PL.cream;
  let shadow = '0 2px 6px rgba(0,0,0,0.3)';
  let icon = null;

  if (state === 'selected') {
    borderColor = PL.goldBright;
    bg = 'rgba(255,215,0,0.12)';
    shadow = `0 0 0 1px ${PL.goldBright} inset, 0 4px 14px rgba(255,215,0,0.25)`;
  }
  if (state === 'correct') {
    borderColor = PL.green;
    bg = `linear-gradient(90deg, rgba(74,222,128,0.2) 0%, rgba(74,222,128,0.08) 100%)`;
    letterBG = PL.green;
    letterFG = PL.black;
    shadow = `0 0 0 1.5px ${PL.green} inset, 0 6px 18px rgba(74,222,128,0.3)`;
    icon = (
      <div style={{ display:'flex', alignItems:'center', gap:6, marginLeft:'auto' }}>
        <span style={{
          fontFamily:'Inter, system-ui', fontSize:8, fontWeight:900,
          letterSpacing:'0.18em', color:PL.green,
        }}>MAZEL</span>
        <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.5" fill={PL.green} stroke={PL.black}/><path d="M4 7.2L6 9l4-4.5" stroke={PL.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    );
  }
  if (state === 'wrong') {
    borderColor = PL.red;
    bg = `linear-gradient(90deg, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.08) 100%)`;
    letterBG = PL.red;
    letterFG = PL.cream;
    shadow = `0 0 0 1.5px ${PL.red} inset, 0 6px 18px rgba(244,63,94,0.3)`;
    icon = (
      <div style={{ display:'flex', alignItems:'center', gap:6, marginLeft:'auto' }}>
        <span style={{
          fontFamily:'Inter, system-ui', fontSize:8, fontWeight:900,
          letterSpacing:'0.18em', color:PL.red,
        }}>JACKHOLE</span>
        <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.5" fill={PL.red} stroke={PL.black}/><path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke={PL.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
      </div>
    );
  }
  if (state === 'reveal-correct') {
    borderColor = PL.green;
    bg = 'rgba(74,222,128,0.08)';
    letterBG = PL.green;
    letterFG = PL.black;
    shadow = `0 0 0 1px ${PL.green} inset`;
    icon = <span style={{ marginLeft:'auto', fontSize:9, fontWeight:900, color:PL.green, letterSpacing:'0.18em' }}>✓ ANSWER</span>;
  }

  return (
    <button onClick={onClick} style={{
      width: '100%',
      padding: '10px 12px',
      borderRadius: 12,
      border: `1.5px solid ${borderColor}`,
      background: bg,
      backdropFilter: 'blur(8px)',
      boxShadow: shadow,
      display: 'flex', alignItems: 'center', gap: 10,
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'all 0.2s ease',
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: 6, flexShrink: 0,
        background: letterBG,
        border: `1px solid ${PL.black}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 13, color: letterFG,
      }}>{letter}</div>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 12.5, fontWeight: 500,
        color: textColor, lineHeight: 1.3,
        flex: 1,
      }}>{text}</div>
      {icon}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Scrubber + play controls
// ─────────────────────────────────────────────────────────────
function Scrubber({ current, total, mins, minsLeft }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ padding: '14px 18px 0' }}>
      {/* scrubber bar */}
      <div style={{ position: 'relative', marginBottom: 6 }}>
        <div style={{
          height: 3, borderRadius: 2,
          background: 'rgba(255,249,240,0.12)', overflow: 'hidden',
        }}>
          <div style={{
            width: `${pct}%`, height: '100%',
            background: `linear-gradient(90deg, ${PL.hotPink} 0%, ${PL.goldBright} 100%)`,
            boxShadow: `0 0 8px ${PL.goldBright}`,
          }}/>
        </div>
        {/* scrubber handle */}
        <div style={{
          position: 'absolute', top: '50%',
          left: `${pct}%`, transform: 'translate(-50%, -50%)',
          width: 12, height: 12, borderRadius: '50%',
          background: PL.goldBright,
          border: `2px solid ${PL.black}`,
          boxShadow: `0 0 10px ${PL.goldBright}, 0 2px 4px rgba(0,0,0,0.4)`,
        }}/>
      </div>

      {/* scrubber labels */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
        color: 'rgba(255,249,240,0.55)', letterSpacing: '0.08em',
      }}>
        <span>Q {String(current).padStart(2,'0')} / {total}</span>
        <span>{mins} · {minsLeft} left</span>
      </div>

      {/* Transport controls */}
      <div style={{
        marginTop: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
      }}>
        <button style={iconBtn(40)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 2L4 7l7 5V2z" fill={PL.cream}/>
            <rect x="2" y="2" width="1.5" height="10" fill={PL.cream}/>
          </svg>
        </button>

        {/* Big primary — Submit / Next */}
        <button style={{
          width: 62, height: 62, borderRadius: '50%',
          background: `linear-gradient(180deg, ${PL.hotPink} 0%, ${PL.hotPinkDeep} 100%)`,
          border: `2px solid ${PL.black}`,
          boxShadow: `0 4px 0 ${PL.black}, 0 12px 28px -4px rgba(233,30,99,0.6), inset 0 1px 0 rgba(255,255,255,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 3v16l14-8L5 3z" fill={PL.cream} stroke={PL.black} strokeWidth="1" strokeLinejoin="round"/>
          </svg>
        </button>

        <button style={iconBtn(40)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 2l7 5-7 5V2z" fill={PL.cream}/>
            <rect x="10.5" y="2" width="1.5" height="10" fill={PL.cream}/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function iconBtn(size){
  return {
    width: size, height: size, borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,249,240,0.2)',
    backdropFilter: 'blur(10px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  };
}

// ─────────────────────────────────────────────────────────────
// Streak chip (floats top-right area, compact)
// ─────────────────────────────────────────────────────────────
function StreakChip({ streak, correctInRow }) {
  return (
    <div style={{
      margin: '10px 14px 0',
      padding: '6px 10px 6px 8px',
      borderRadius: 999,
      background: `linear-gradient(90deg, rgba(233,30,99,0.18) 0%, rgba(255,215,0,0.12) 100%)`,
      border: `1px solid ${PL.hotPinkDeep}`,
      display: 'inline-flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ fontSize: 13 }}>🔥</span>
      <div style={{
        fontFamily:'Inter, system-ui', fontSize: 10, fontWeight: 800,
        letterSpacing:'0.12em', color: PL.cream, textTransform: 'uppercase',
      }}>
        {streak}-day streak · <span style={{ color: PL.goldBright }}>{correctInRow} in a row</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Composition
// ─────────────────────────────────────────────────────────────
function PlayerScreen({ tweaks }) {
  // answer states for Q3 — FAIR HOUSING
  // correct answer: B (familial status is protected — can't ask about kids)
  const getState = (letter) => {
    if (tweaks.revealMode === 'idle') return 'idle';
    if (tweaks.revealMode === 'correct') {
      if (letter === 'B') return 'correct';
      return 'idle';
    }
    if (tweaks.revealMode === 'wrong') {
      if (letter === tweaks.wrongPick) return 'wrong';
      if (letter === 'B') return 'reveal-correct';
      return 'idle';
    }
    return 'idle';
  };

  return (
    <div
      data-screen-label="03 The Player"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 100% 40% at 50% 0%, rgba(233, 30, 99, 0.22) 0%, transparent 60%),
          linear-gradient(180deg, ${PL.plumDeep} 0%, ${PL.plumDeeper} 40%, ${PL.black} 100%)
        `,
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: 40 }}>
        <div style={{ height: 54 }}/>
        <PlayerChrome actNum={4} actTitle="Girls Night" episodeNum={1}/>
        <StreakChip streak={tweaks.streak} correctInRow={tweaks.correctInRow}/>

        <Stage
          situation="Katie is showing a buyer a listing in Buckhead. The buyer asks if the neighborhood is 'good for kids.'"
          question="What do you tell them, babe? And don't mess this up for me."
        />

        {/* Answers */}
        <div style={{ padding: '16px 14px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <AnswerOption
            letter="A"
            text="Yes, tons of families live here — great schools too."
            state={getState('A')}
          />
          <AnswerOption
            letter="B"
            text="I can share school ratings and demographics — let me pull those up."
            state={getState('B')}
          />
          <AnswerOption
            letter="C"
            text="Honestly, it depends what kind of family you are."
            state={getState('C')}
          />
          <AnswerOption
            letter="D"
            text="There are very few children — probably not ideal for you."
            state={getState('D')}
          />
        </div>

        <Scrubber current={3} total={16} mins="22 MIN" minsLeft="18 min"/>
      </div>

      <style>{`
        @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.85); } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { PlayerScreen });
