// Screen 6 — After the Episode (Act Recap)

const R = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
  red: '#F43F5E',
};

function StarRow({ count, max = 3, size = 18 }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 10 10">
          <path d="M5 0.5l1.4 3 3.1.4-2.3 2.2.6 3.1L5 7.7 2.2 9.2l.6-3.1L.5 3.9l3.1-.4L5 .5z"
            fill={i < count ? R.goldBright : 'rgba(255,249,240,0.15)'}
            stroke={i < count ? R.black : 'transparent'}
            strokeWidth="0.6"
            style={{ filter: i < count ? `drop-shadow(0 0 6px ${R.goldBright})` : 'none' }}
          />
        </svg>
      ))}
    </div>
  );
}

function CompleteBanner() {
  return (
    <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '5px 14px',
        background: R.goldBright, color: R.black,
        borderRadius: 999,
        border: `1.5px solid ${R.black}`,
        boxShadow: `0 3px 0 ${R.black}, 0 6px 14px rgba(255,215,0,0.4)`,
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
        letterSpacing: '0.24em', textTransform: 'uppercase',
      }}>
        <span style={{ fontSize: 12 }}>🎬</span>
        ACT 4 · THAT'S A WRAP
      </div>
      <div style={{
        marginTop: 10,
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 34, color: R.cream,
        letterSpacing: -0.8, lineHeight: 1,
        textShadow: '0 2px 12px rgba(233,30,99,0.4)',
      }}>
        Girls Night
      </div>
      <div style={{
        marginTop: 4,
        fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
        color: 'rgba(255,249,240,0.55)',
      }}>
        Fair Housing · 16 Qs · watched in 23 min
      </div>
    </div>
  );
}

function ScoreRing({ score }) {
  const C = 2 * Math.PI * 52;
  const offset = C * (1 - score/100);
  return (
    <div style={{ position: 'relative', width: 140, height: 140, margin: '0 auto' }}>
      <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={R.hotPink}/>
            <stop offset="1" stopColor={R.goldBright}/>
          </linearGradient>
        </defs>
        <circle cx="70" cy="70" r="52" stroke="rgba(255,249,240,0.1)" strokeWidth="10" fill="none"/>
        <circle cx="70" cy="70" r="52" stroke="url(#ringGrad)" strokeWidth="10" fill="none"
          strokeLinecap="round" strokeDasharray={C} strokeDashoffset={offset}
          style={{ filter: `drop-shadow(0 0 10px ${R.goldBright})` }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 46, color: R.cream,
          lineHeight: 1, letterSpacing: -2,
          textShadow: `0 0 12px ${R.goldBright}`,
        }}>{score}</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.22em', color: R.goldBright, textTransform: 'uppercase',
          marginTop: 2,
        }}>% Passing</div>
      </div>
    </div>
  );
}

function ScorecardHero() {
  return (
    <div style={{
      margin: '18px 16px 0',
      borderRadius: 18,
      border: `2px solid ${R.black}`,
      boxShadow: `0 0 0 1px rgba(255,215,0,0.3) inset, 0 12px 32px rgba(0,0,0,0.5)`,
      position: 'relative', overflow: 'hidden',
      background: `
        radial-gradient(ellipse at 25% 50%, #5A1638 0%, ${R.plumDeeper} 70%, ${R.black} 100%)
      `,
      display: 'flex', alignItems: 'stretch',
      zIndex: 2,
    }}>
      {/* Left — Katie */}
      <div style={{
        width: 130, flexShrink: 0, position: 'relative', overflow: 'hidden',
      }}>
        <img src="assets/Katie_base.png" alt="Katie" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 15%',
        }}/>
        {/* Clapperboard stamp */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          padding: '3px 7px 3px 5px',
          background: R.goldBright,
          border: `1.5px solid ${R.black}`,
          borderRadius: 3,
          transform: 'rotate(-6deg)',
          boxShadow: `0 2px 0 ${R.black}`,
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          color: R.black, letterSpacing: '0.16em',
          display: 'flex', alignItems: 'center', gap: 3,
        }}>🎬 WRAP</div>
        {/* nametag */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '16px 10px 8px',
          background: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 80%)`,
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.16em', color: R.cream,
        }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 16, marginBottom: 2, letterSpacing: -0.2,
          }}>Katie</div>
          <div style={{ color: 'rgba(255,249,240,0.65)' }}>LEAD · ACT 4</div>
        </div>
      </div>

      {/* Right — score ring + stars */}
      <div style={{
        flex: 1, padding: '12px 12px 14px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.2em', color: R.goldBright, textTransform: 'uppercase',
          alignSelf: 'stretch', textAlign: 'center',
        }}>Episode Score</div>
        <ScoreRing score={78}/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <StarRow count={2}/>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
            color: 'rgba(255,249,240,0.6)', letterSpacing: '0.04em',
          }}>2 stars earned · <span style={{ color: R.hotPink, fontWeight: 700 }}>1 to gold</span></div>
        </div>
      </div>
    </div>
  );
}

function WinLossCard() {
  return (
    <div style={{
      margin: '14px 16px 0',
      display: 'flex', flexDirection: 'column', gap: 10,
      position: 'relative', zIndex: 2,
    }}>
      {/* Nailed */}
      <div style={{
        padding: '12px 14px',
        borderRadius: 14,
        background: `linear-gradient(90deg, rgba(74,222,128,0.14) 0%, rgba(74,222,128,0.04) 100%)`,
        border: `1px solid rgba(74,222,128,0.4)`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8,
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
          letterSpacing: '0.2em', color: R.green, textTransform: 'uppercase',
        }}>
          <span>✨ WHAT YOU NAILED</span>
        </div>
        {[
          'Protected classes — all 9 right',
          'Disparate treatment scenarios',
          'Advertising rules · §804(c)',
        ].map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0',
            borderTop: i > 0 ? '1px solid rgba(74,222,128,0.15)' : 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}><circle cx="7" cy="7" r="6.5" fill={R.green} stroke={R.black}/><path d="M4 7.2L6 9l4-4.5" stroke={R.black} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div style={{
              flex: 1, minWidth: 0,
              fontFamily: 'Inter, system-ui', fontSize: 12.5, fontWeight: 500,
              color: R.cream,
            }}>{t}</div>
          </div>
        ))}
      </div>

      {/* Stung */}
      <div style={{
        padding: '12px 14px',
        borderRadius: 14,
        background: `linear-gradient(90deg, rgba(244,63,94,0.14) 0%, rgba(244,63,94,0.04) 100%)`,
        border: `1px solid rgba(244,63,94,0.4)`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
            letterSpacing: '0.2em', color: R.red, textTransform: 'uppercase',
          }}>⚠ WHAT STUNG</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
            letterSpacing: '0.14em', color: R.goldBright, textTransform: 'uppercase',
            cursor: 'pointer', textDecoration: 'underline', textDecorationThickness: 1.5,
          }}>REVIEW ALL →</div>
        </div>
        {[
          { t: 'Steering language — 2 missed', sub: 'The "good for kids" trap' },
          { t: 'Familial status edge cases', sub: '55+ community exceptions' },
        ].map((x, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 0',
            borderTop: i > 0 ? '1px solid rgba(244,63,94,0.15)' : 'none',
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              background: R.red, border: `1px solid ${R.black}`, flexShrink: 0, marginTop: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, color: R.cream, fontWeight: 900,
            }}>!</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 12.5, fontWeight: 600,
                color: R.cream,
              }}>{x.t}</div>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
                color: 'rgba(255,249,240,0.55)', marginTop: 1,
              }}>{x.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightReel() {
  const scenes = [
    { q: 'Q7 — "Good for kids?"',    portrait: 'assets/Katie_base.png',   result: 'wrong' },
    { q: 'Q11 — 55+ community',      portrait: 'assets/Brittany_Hyped.png', result: 'wrong' },
    { q: 'Q14 — Church near listing', portrait: 'assets/Katie_base.png',   result: 'close' },
  ];
  return (
    <div style={{ marginTop: 18, position: 'relative', zIndex: 2 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: '0 18px 8px',
      }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 18, color: R.cream, letterSpacing: -0.2,
        }}>Highlight Reel</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.14em', color: R.goldBright, textTransform: 'uppercase',
        }}>3 scenes</div>
      </div>
      <div style={{
        display: 'flex', gap: 10, padding: '0 16px',
        overflowX: 'auto', scrollbarWidth: 'none',
      }}>
        {scenes.map((s, i) => (
          <div key={i} style={{
            flexShrink: 0, width: 128,
            borderRadius: 12, border: `2px solid ${R.black}`, overflow: 'hidden',
            boxShadow: '0 6px 14px rgba(0,0,0,0.4)', background: R.black,
          }}>
            <div style={{
              height: 110, position: 'relative', overflow: 'hidden',
              background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${R.plumDeeper} 80%, ${R.black} 100%)`,
            }}>
              <img src={s.portrait} alt="" style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 10%',
                filter: s.result === 'wrong' ? 'grayscale(0.3) saturate(0.9)' : 'none',
              }}/>
              {/* play overlay */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(10,10,10,0.7)', border: `1.5px solid ${R.cream}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(6px)',
              }}>
                <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 1v9l7-4.5L2 1z" fill={R.cream}/></svg>
              </div>
              {/* result badge */}
              <div style={{
                position: 'absolute', top: 6, right: 6,
                padding: '2px 6px', borderRadius: 4,
                background: s.result === 'wrong' ? R.red : R.goldBright,
                border: `1px solid ${R.black}`,
                fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
                color: s.result === 'wrong' ? R.cream : R.black,
                letterSpacing: '0.1em',
              }}>
                {s.result === 'wrong' ? 'JACKHOLE' : 'CLOSE'}
              </div>
            </div>
            <div style={{ padding: '8px 10px 10px' }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 600,
                color: R.cream, lineHeight: 1.25,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{s.q}</div>
            </div>
          </div>
        ))}
        <div style={{ width: 1, flexShrink: 0 }}/>
      </div>
    </div>
  );
}

function ShareBlock() {
  return (
    <div style={{
      margin: '20px 16px 0', position: 'relative', zIndex: 2,
      padding: '12px 14px',
      borderRadius: 12,
      background: `linear-gradient(90deg, rgba(255,215,0,0.1) 0%, rgba(233,30,99,0.12) 100%)`,
      border: `1px dashed rgba(255,215,0,0.5)`,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ fontSize: 22 }}>📲</span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.18em', color: R.goldBright, textTransform: 'uppercase',
        }}>Share the tea</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
          color: 'rgba(255,249,240,0.75)', marginTop: 1,
        }}>
          "I just passed Fair Housing at 78% 💅" · screenshot ready
        </div>
      </div>
      <button style={{
        padding: '7px 12px',
        background: R.cream, border: `1.5px solid ${R.black}`, borderRadius: 8,
        boxShadow: `0 2px 0 ${R.black}`,
        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
        color: R.black, letterSpacing: '0.12em',
        cursor: 'pointer',
      }}>SHARE</button>
    </div>
  );
}

function NextUpCard({ countdown }) {
  return (
    <div style={{
      margin: '20px 16px 0',
      borderRadius: 18, border: `2px solid ${R.black}`, overflow: 'hidden',
      boxShadow: `0 0 0 1.5px ${R.hotPink} inset, 0 14px 30px -6px rgba(233,30,99,0.55)`,
      background: R.black, position: 'relative', zIndex: 2,
    }}>
      <div style={{
        display: 'flex', alignItems: 'stretch',
        background: `linear-gradient(90deg, ${R.plumDeeper} 0%, #1A0A14 100%)`,
      }}>
        {/* Raquel */}
        <div style={{
          width: 112, flexShrink: 0, position: 'relative', overflow: 'hidden',
          background: `radial-gradient(ellipse at 50% 40%, #5A1638 0%, ${R.plumDeeper} 80%, ${R.black} 100%)`,
        }}>
          <img src="assets/Raquel_base.png" alt="Raquel" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 10%',
          }}/>
          {/* Act badge */}
          <div style={{
            position: 'absolute', top: 8, left: 8,
            width: 30, height: 30, borderRadius: '50%',
            background: R.goldBright, border: `1.5px solid ${R.black}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 14, color: R.black,
            boxShadow: `0 0 10px ${R.goldBright}`,
          }}>5</div>
        </div>

        {/* Info */}
        <div style={{
          flex: 1, padding: '12px 12px 12px 14px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
              letterSpacing: '0.22em', color: R.hotPink, textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: R.hotPink,
                boxShadow: `0 0 6px ${R.hotPink}`,
                animation: 'pulseDot 1.4s ease-in-out infinite',
              }}/>
              UP NEXT IN {countdown}s
            </div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 19, color: R.cream, marginTop: 3, letterSpacing: -0.3,
              lineHeight: 1.1,
            }}>The Affair</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
              color: 'rgba(255,249,240,0.6)', marginTop: 4,
            }}>
              Act 5 · Disclosure · <span style={{ color: R.goldBright, fontWeight: 700 }}>Raquel</span> · 20 Qs
            </div>
          </div>

          {/* Play row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 10,
          }}>
            <button style={{
              flex: 1,
              padding: '8px 12px',
              background: `linear-gradient(180deg, ${R.hotPink} 0%, ${R.hotPinkDeep} 100%)`,
              border: `1.5px solid ${R.black}`, borderRadius: 999,
              boxShadow: `0 2.5px 0 ${R.black}, 0 6px 14px -2px rgba(233,30,99,0.5)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 900,
              color: R.cream, letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer',
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1v8l7-4L2 1z" fill={R.cream} stroke={R.black} strokeWidth="0.8"/></svg>
              Roll it
            </button>
            <button style={{
              padding: '8px 10px',
              background: 'transparent',
              border: `1.5px solid rgba(255,249,240,0.3)`, borderRadius: 999,
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
              color: 'rgba(255,249,240,0.85)', letterSpacing: '0.08em',
              cursor: 'pointer',
            }}>PAUSE</button>
          </div>
        </div>
      </div>
      {/* Countdown bar */}
      <div style={{ height: 3, background: 'rgba(255,249,240,0.08)' }}>
        <div style={{
          width: `${(countdown/10)*100}%`, height: '100%',
          background: `linear-gradient(90deg, ${R.hotPink} 0%, ${R.goldBright} 100%)`,
          transition: 'width 1s linear',
          boxShadow: `0 0 8px ${R.goldBright}`,
        }}/>
      </div>
    </div>
  );
}

function RecapScreen({ tweaks }) {
  return (
    <div
      data-screen-label="06 After the Episode (Recap)"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 90% 35% at 50% 0%, rgba(233, 30, 99, 0.28) 0%, transparent 60%),
          radial-gradient(ellipse 60% 30% at 90% 50%, rgba(255, 215, 0, 0.12) 0%, transparent 60%),
          linear-gradient(180deg, ${R.plumDeep} 0%, ${R.plumDeeper} 40%, ${R.black} 100%)
        `,
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: 40 }}>
        <div style={{ height: 50 }}/>

        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
          <button style={ghostBtn()}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={R.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
            letterSpacing: '0.22em', color: 'rgba(255,224,236,0.5)',
            textTransform: 'uppercase', alignSelf: 'center',
          }}>Act Recap</div>
          <button style={ghostBtn()}>
            <svg width="12" height="12" viewBox="0 0 16 16"><path d="M3 6l5 5 5-5" stroke={R.cream} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <CompleteBanner/>
        <ScorecardHero/>
        <WinLossCard/>
        <HighlightReel/>
        <ShareBlock/>
        <NextUpCard countdown={tweaks.autoplayCountdown}/>

        <div style={{ height: 30 }}/>
      </div>

      <style>{`
        @keyframes pulseDot { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function ghostBtn(){
  return {
    width: 32, height: 32, borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,224,236,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  };
}

Object.assign(window, { RecapScreen });
