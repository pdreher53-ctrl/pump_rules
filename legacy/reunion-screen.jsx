// Screen 7 — The Reunion (Finale Exam)

const RN = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  live: '#FF2A2A',
};

// Small headshot bubble — cast member on the couch
function CastHead({ src, name, confidence, pick, focus='center 10%', scale=1 }) {
  const size = 44 * scale;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        border: `1.5px solid ${RN.black}`,
        boxShadow: `0 0 0 1.5px ${RN.goldBright}, 0 3px 8px rgba(0,0,0,0.5)`,
        overflow: 'hidden',
        background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${RN.plumDeeper} 80%, ${RN.black} 100%)`,
        position: 'relative',
      }}>
        <img src={src} alt={name} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: focus,
        }}/>
        {/* pick badge */}
        <div style={{
          position: 'absolute', right: -2, bottom: -2,
          width: 18, height: 18, borderRadius: '50%',
          background: RN.cream, border: `1.5px solid ${RN.black}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 10, color: RN.black,
        }}>{pick}</div>
      </div>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
        letterSpacing: '0.12em', color: RN.cream, textTransform: 'uppercase',
      }}>{name}</div>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 700,
        color: RN.goldBright,
      }}>{confidence}%</div>
    </div>
  );
}

// Top bar — LIVE badge + timer + counter
function LiveChrome({ timer, qNum, qTotal }) {
  return (
    <div style={{
      padding: '10px 14px 8px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', zIndex: 5,
    }}>
      {/* Live */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '4px 10px 4px 7px',
        background: RN.live, border: `1.5px solid ${RN.black}`,
        borderRadius: 999,
        boxShadow: `0 2px 0 ${RN.black}, 0 0 12px rgba(255,42,42,0.6)`,
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%', background: RN.cream,
          animation: 'livePulse 1.1s ease-in-out infinite',
        }}/>
        <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.2em', color: RN.cream,
        }}>LIVE</span>
      </div>

      {/* Q counter */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
          letterSpacing: '0.22em', color: 'rgba(255,249,240,0.5)',
          textTransform: 'uppercase',
        }}>PART 1 · HOUR ONE</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 14, color: RN.cream, lineHeight: 1,
          marginTop: 1,
        }}>Q <span style={{ color: RN.goldBright }}>47</span> / {qTotal}</div>
      </div>

      {/* Timer */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '5px 10px',
        background: 'rgba(10,10,10,0.5)',
        border: `1px solid ${RN.goldBright}`,
        borderRadius: 8,
        boxShadow: `0 0 8px rgba(255,215,0,0.25)`,
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <circle cx="5" cy="5.5" r="4" stroke={RN.goldBright} strokeWidth="1" fill="none"/>
          <path d="M5 3.5v2l1.3 1.3" stroke={RN.goldBright} strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
        <span style={{
          fontFamily: '"SF Mono", ui-monospace, monospace', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.08em', color: RN.goldBright,
          fontVariantNumeric: 'tabular-nums',
        }}>{timer}</span>
      </div>
    </div>
  );
}

// Stage view — reunion set with cast heads arranged on couches
function StageView({ gaspMode }) {
  return (
    <div style={{
      margin: '0 14px',
      borderRadius: 16,
      border: `2px solid ${RN.black}`,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: `0 0 0 1.5px rgba(255,215,0,0.35) inset, 0 16px 40px rgba(0,0,0,0.55)`,
      height: 220,
    }}>
      {/* Stage backdrop */}
      <img src="assets/Reunion_Couch.png" alt="Reunion stage" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 20%',
        filter: gaspMode ? 'brightness(0.85)' : 'brightness(0.95) saturate(1.1)',
      }}/>

      {/* Andy — center stage, standing front */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 64, height: 64, borderRadius: '50%',
        border: `2px solid ${RN.black}`,
        boxShadow: `0 0 0 2px ${RN.hotPink}, 0 0 20px rgba(233,30,99,0.6), 0 6px 16px rgba(0,0,0,0.55)`,
        overflow: 'hidden', zIndex: 3,
        background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${RN.plumDeeper} 80%, ${RN.black} 100%)`,
      }}>
        <img src="assets/Andy_base.png" alt="Andy" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 10%',
        }}/>
        <div style={{
          position: 'absolute', left: '50%', bottom: -2, transform: 'translateX(-50%)',
          padding: '2px 6px',
          background: RN.goldBright, border: `1.5px solid ${RN.black}`,
          borderRadius: 4,
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.14em', color: RN.black,
          whiteSpace: 'nowrap',
        }}>HOST</div>
      </div>

      {/* Left couch — 3 cast */}
      <div style={{
        position: 'absolute', left: 16, top: '50%', transform: 'translateY(-35%)',
        display: 'flex', gap: 2, alignItems: 'flex-end',
      }}>
        <CastHead src="assets/Lisa_base.webp"     name="LISA"    pick="C" confidence={92} focus="center 20%" scale={0.95}/>
        <CastHead src="assets/Stassi_base.png"    name="STASSI"  pick="C" confidence={84} focus="center 10%" scale={0.9}/>
        <CastHead src="assets/Arinana_base.png"   name="ARIANA"  pick="B" confidence={58} focus="center 10%" scale={0.85}/>
      </div>

      {/* Right couch — 3 cast */}
      <div style={{
        position: 'absolute', right: 16, top: '50%', transform: 'translateY(-35%)',
        display: 'flex', gap: 2, alignItems: 'flex-end',
      }}>
        <CastHead src="assets/Katie_base.png"     name="KATIE"   pick="C" confidence={71} focus="center 10%" scale={0.85}/>
        <CastHead src="assets/Raquel_base.png"    name="RAQUEL"  pick="A" confidence={40} focus="center 10%" scale={0.9}/>
        <CastHead src="assets/Schwartz_base.png"  name="SCHWARTZ" pick="C" confidence={63} focus="center 10%" scale={0.95}/>
      </div>

      {/* Camera tally — bottom-right */}
      <div style={{
        position: 'absolute', right: 8, top: 8,
        padding: '3px 8px',
        background: 'rgba(10,10,10,0.7)',
        border: `1px solid rgba(255,215,0,0.5)`,
        borderRadius: 4,
        fontFamily: '"SF Mono", monospace', fontSize: 8, fontWeight: 700,
        letterSpacing: '0.14em', color: RN.goldBright,
        backdropFilter: 'blur(6px)',
      }}>CAM 3 · WIDE</div>

      {/* Sparkle particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[[18,30],[78,22],[35,68],[88,55],[12,82],[62,42]].map(([x,y],i)=>(
          <span key={i} style={{
            position: 'absolute', left: `${x}%`, top: `${y}%`,
            width: 2, height: 2, borderRadius: '50%',
            background: RN.goldBright,
            boxShadow: `0 0 4px ${RN.goldBright}`,
            animation: `twinkle ${1.8 + i*0.3}s ease-in-out ${i*0.2}s infinite`,
          }}/>
        ))}
      </div>
    </div>
  );
}

// The question card — floats under the stage, TV monitor treatment
function QuestionCard() {
  return (
    <div style={{
      margin: '14px 14px 0',
      borderRadius: 14,
      border: `2px solid ${RN.black}`,
      background: RN.cream,
      boxShadow: `0 0 0 3px ${RN.goldBright}, 0 10px 24px rgba(0,0,0,0.5)`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Monitor label strip */}
      <div style={{
        padding: '6px 12px',
        background: `linear-gradient(90deg, ${RN.plumDeeper} 0%, #1A0A14 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: `2px solid ${RN.black}`,
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.2em', color: RN.goldBright, textTransform: 'uppercase',
        }}>REUNION QUESTION · CONTRACTS</div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontFamily: '"SF Mono", monospace', fontSize: 8, fontWeight: 700,
          color: 'rgba(255,215,0,0.7)',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: RN.live }}/>
          REC
        </div>
      </div>

      {/* Question body */}
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 600, fontSize: 14, color: RN.black,
          lineHeight: 1.3, letterSpacing: -0.1,
        }}>
          Stassi lists her Buckhead condo on Monday. On Thursday, a buyer delivers a signed offer with earnest money. Stassi says <span style={{ fontWeight: 900, background: `linear-gradient(transparent 60%, ${RN.goldBright} 60%)`, padding: '0 2px' }}>"I need until Saturday to think"</span> and sends a counter on Friday. On Saturday morning, the buyer revokes.
        </div>

        <div style={{
          marginTop: 10, marginBottom: 8,
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', color: RN.hotPink,
        }}>Is Stassi's counter-offer binding?</div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { l: 'A', t: 'Yes — the buyer cannot revoke after a counter is issued.' },
            { l: 'B', t: 'Yes — but only if earnest money was non-refundable.' },
            { l: 'C', t: 'No — a counter-offer terminates the original offer, and the buyer may revoke the counter before acceptance.', correct: true },
            { l: 'D', t: 'No — because GA requires written acceptance within 48 hours.' },
          ].map(({l, t, correct}) => (
            <div key={l} style={{
              display: 'flex', alignItems: 'flex-start', gap: 9,
              padding: '8px 10px',
              borderRadius: 8,
              border: `1.5px solid ${correct ? RN.goldBright : 'rgba(10,10,10,0.12)'}`,
              background: correct ? 'rgba(255,215,0,0.08)' : 'transparent',
              cursor: 'pointer',
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%',
                background: correct ? RN.goldBright : 'transparent',
                border: `1.5px solid ${RN.black}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 11, color: RN.black,
              }}>{l}</div>
              <div style={{
                flex: 1, minWidth: 0,
                fontFamily: 'Inter, system-ui', fontSize: 11.5, fontWeight: 500,
                color: RN.black, lineHeight: 1.35,
                paddingTop: 2,
              }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Score bar — shows current score, pass line, part progress
function ScoreBar({ score, pass=75 }) {
  return (
    <div style={{ margin: '14px 14px 0', position: 'relative' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 6,
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.22em', color: 'rgba(255,249,240,0.65)',
          textTransform: 'uppercase',
        }}>LIVE SCORE</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.18em', color: RN.goldBright, textTransform: 'uppercase',
        }}>PASS: {pass}%</div>
      </div>
      <div style={{
        height: 10, borderRadius: 999,
        background: 'rgba(10,10,10,0.55)',
        border: `1px solid rgba(255,249,240,0.15)`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          width: `${score}%`, height: '100%', borderRadius: 999,
          background: `linear-gradient(90deg, ${RN.hotPink} 0%, ${RN.goldBright} 100%)`,
          boxShadow: `0 0 10px ${RN.goldBright}, inset 0 1px 0 rgba(255,255,255,0.3)`,
        }}/>
        {/* pass line */}
        <div style={{
          position: 'absolute', left: `${pass}%`, top: -4, bottom: -4,
          width: 2, background: RN.cream,
          boxShadow: `0 0 6px ${RN.cream}`,
        }}/>
        {/* score marker */}
        <div style={{
          position: 'absolute', left: `${score}%`, top: -3, transform: 'translateX(-50%)',
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 10, color: RN.goldBright,
          whiteSpace: 'nowrap',
          textShadow: `0 0 6px ${RN.black}`,
        }}>{score}%</div>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 4,
        fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 600,
        color: 'rgba(255,249,240,0.45)',
      }}>
        <span>0</span>
        <span style={{ color: RN.goldBright, fontWeight: 800 }}>↑ you're in</span>
        <span>100</span>
      </div>
    </div>
  );
}

// Bottom action strip — Lock it in / Pass (flag for review)
function ActionStrip() {
  return (
    <div style={{
      margin: '14px 14px 0',
      display: 'flex', gap: 8,
    }}>
      <button style={{
        padding: '11px 14px',
        background: 'transparent',
        border: `1.5px solid rgba(255,249,240,0.28)`,
        borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
        color: 'rgba(255,249,240,0.8)', letterSpacing: '0.14em',
        textTransform: 'uppercase', cursor: 'pointer',
      }}>⚑ Flag</button>
      <button style={{
        flex: 1,
        padding: '11px 14px',
        background: `linear-gradient(180deg, ${RN.hotPink} 0%, ${RN.hotPinkDeep} 100%)`,
        border: `1.5px solid ${RN.black}`, borderRadius: 999,
        boxShadow: `0 3px 0 ${RN.black}, 0 8px 18px -2px rgba(233,30,99,0.55)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 900,
        color: RN.cream, letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer',
      }}>
        🎤 Lock it in
      </button>
      <button style={{
        padding: '11px 14px',
        background: 'transparent',
        border: `1.5px solid rgba(255,249,240,0.28)`,
        borderRadius: 999,
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
        color: 'rgba(255,249,240,0.8)', letterSpacing: '0.14em',
        textTransform: 'uppercase', cursor: 'pointer',
      }}>Skip →</button>
    </div>
  );
}

function ReunionScreen({ tweaks }) {
  return (
    <div
      data-screen-label="07 The Reunion (Finale Exam)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 120% 40% at 50% 0%, rgba(233, 30, 99, 0.25) 0%, transparent 60%),
          radial-gradient(ellipse 80% 40% at 50% 100%, rgba(255, 215, 0, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, #1A0612 0%, ${RN.plumDeeper} 40%, ${RN.black} 100%)
        `,
      }}
    >
      <div style={{ paddingTop: 44, paddingBottom: 24 }}>
        {/* Title block */}
        <div style={{ textAlign: 'center', padding: '4px 16px 6px' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
            letterSpacing: '0.28em', color: 'rgba(255,249,240,0.5)',
            textTransform: 'uppercase',
          }}>Season Finale · Broadcast Live</div>
          <div style={{
            marginTop: 2,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 30, color: RN.cream,
            letterSpacing: -0.6, lineHeight: 1,
            textShadow: `0 0 18px rgba(255,215,0,0.35), 0 2px 10px rgba(233,30,99,0.3)`,
          }}>The Reunion</div>
        </div>

        <LiveChrome timer={tweaks.timer} qNum={47} qTotal={tweaks.qTotal}/>
        <StageView gaspMode={false}/>
        <QuestionCard/>
        <ScoreBar score={tweaks.score} pass={75}/>
        <ActionStrip/>

        {/* Andy's one-liner */}
        <div style={{
          margin: '14px 14px 0',
          padding: '9px 12px',
          borderRadius: 12,
          background: 'rgba(255,249,240,0.06)',
          border: `1px dashed rgba(255,215,0,0.3)`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${RN.plumDeeper} 80%, ${RN.black} 100%)`,
            border: `1.5px solid ${RN.hotPink}`, overflow: 'hidden', flexShrink: 0,
            position: 'relative',
          }}>
            <img src="assets/Andy_base.png" alt="Andy" style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 10%',
            }}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
              letterSpacing: '0.18em', color: RN.hotPink, textTransform: 'uppercase',
            }}>ANDY, HOSTING</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontSize: 13, fontWeight: 500, color: RN.cream, marginTop: 1,
              lineHeight: 1.3,
            }}>"Stassi sent a counter. Does that kill the original offer? Elizabeth, the floor is yours."</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes livePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes twinkle { 0%,100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 1; transform: scale(1.6); } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { ReunionScreen });
