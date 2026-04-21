// Screen 9 — After Show (Lisa DM / Coaching Chat)

const AS = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  champagne: '#D4AF37',
  goldDeep: '#A8820E',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  lisaBubble: '#FFFFFF',
  userBubble: '#E91E63',
};

function LisaHeader() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      padding: '48px 14px 10px',
      background: `linear-gradient(180deg, rgba(26,6,18,0.98) 0%, rgba(42,5,25,0.92) 100%)`,
      backdropFilter: 'blur(14px)',
      borderBottom: `1px solid rgba(255,215,0,0.25)`,
    }}>
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,249,240,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M7 1L1 7l6 6" stroke={AS.cream} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Lisa avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 1 }}>
          <div style={{
            position: 'relative',
            width: 40, height: 40, borderRadius: '50%',
            border: `2px solid ${AS.black}`,
            boxShadow: `0 0 0 2px ${AS.hotPink}, 0 0 12px rgba(233,30,99,0.5)`,
            overflow: 'hidden',
            background: `radial-gradient(ellipse at 50% 40%, #6B1A3C 0%, ${AS.plumDeeper} 80%, ${AS.black} 100%)`,
          }}>
            <img src="assets/Lisa_base.webp" alt="Lisa" style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 20%',
            }}/>
            {/* online dot */}
            <div style={{
              position: 'absolute', right: -1, bottom: -1,
              width: 11, height: 11, borderRadius: '50%',
              background: AS.goldBright, border: `2px solid ${AS.plumDeeper}`,
              boxShadow: `0 0 6px ${AS.goldBright}`,
            }}/>
          </div>
          <div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 800,
              letterSpacing: '0.26em', color: AS.goldBright, textTransform: 'uppercase',
            }}>AFTER SHOW</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 17, color: AS.cream, lineHeight: 1.1,
              letterSpacing: -0.2,
            }}>Lisa Vanderpump</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
              color: 'rgba(255,249,240,0.55)',
              display: 'flex', alignItems: 'center', gap: 4, marginTop: 1,
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%', background: AS.goldBright,
                animation: 'typePulse 1.2s ease-in-out infinite',
              }}/>
              the boss is in
            </div>
          </div>
        </div>

        {/* Video/Info icons */}
        <button style={iconBtn()}>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 4h7v6H2zM9 6l3-2v6l-3-2z" stroke={AS.cream} strokeWidth="1.4" fill="none" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

function iconBtn() {
  return {
    width: 30, height: 30, borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,249,240,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
  };
}

function DayDivider({ text }) {
  return (
    <div style={{
      textAlign: 'center', margin: '8px 0 12px',
      fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
      letterSpacing: '0.22em', color: 'rgba(255,249,240,0.45)',
      textTransform: 'uppercase',
    }}>
      <span style={{ padding: '0 10px', background: 'rgba(10,10,10,0.5)', borderRadius: 6 }}>{text}</span>
    </div>
  );
}

function LisaBubble({ children, showTail = false, time }) {
  return (
    <div style={{ display: 'flex', marginBottom: 3, alignItems: 'flex-end', gap: 6 }}>
      {showTail ? (
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          border: `1.5px solid ${AS.hotPink}`, overflow: 'hidden', flexShrink: 0,
          background: AS.plumDeeper, marginBottom: 3,
        }}>
          <img src="assets/Lisa_base.webp" alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
          }}/>
        </div>
      ) : <div style={{ width: 26, flexShrink: 0 }}/>}
      <div style={{
        maxWidth: '76%',
        padding: '9px 13px',
        background: AS.lisaBubble,
        borderRadius: `16px 16px 16px ${showTail ? 4 : 16}px`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        border: `1px solid rgba(255,215,0,0.15)`,
        fontFamily: 'Inter, system-ui', fontSize: 13.5, fontWeight: 500,
        color: AS.black, lineHeight: 1.35, letterSpacing: -0.1,
      }}>{children}</div>
      {time && <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 600,
        color: 'rgba(255,249,240,0.35)', marginBottom: 4,
      }}>{time}</div>}
    </div>
  );
}

function UserBubble({ children, time }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 3, alignItems: 'flex-end', gap: 6 }}>
      {time && <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8.5, fontWeight: 600,
        color: 'rgba(255,249,240,0.35)', marginBottom: 4,
      }}>{time}</div>}
      <div style={{
        maxWidth: '76%',
        padding: '9px 13px',
        background: `linear-gradient(180deg, ${AS.hotPink} 0%, ${AS.hotPinkDeep} 100%)`,
        borderRadius: '16px 16px 4px 16px',
        boxShadow: '0 2px 8px rgba(233,30,99,0.35)',
        fontFamily: 'Inter, system-ui', fontSize: 13.5, fontWeight: 500,
        color: AS.cream, lineHeight: 1.35, letterSpacing: -0.1,
      }}>{children}</div>
    </div>
  );
}

function VoiceMemoCard() {
  return (
    <div style={{
      maxWidth: '82%', marginLeft: 32, marginBottom: 8,
      padding: '10px 12px',
      borderRadius: '16px 16px 16px 4px',
      background: AS.cream, border: `1.5px solid ${AS.goldBright}`,
      boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <button style={{
        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(180deg, ${AS.hotPink} 0%, ${AS.hotPinkDeep} 100%)`,
        border: `1.5px solid ${AS.black}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 2px 0 ${AS.black}`,
        cursor: 'pointer',
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1v8l7-4L2 1z" fill={AS.cream}/></svg>
      </button>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
          letterSpacing: '0.18em', color: AS.hotPinkDeep, textTransform: 'uppercase',
        }}>VOICE MEMO · LISA</div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontSize: 12.5, fontWeight: 600, color: AS.black, marginTop: 1,
        }}>"Listen, about steering…"</div>
        {/* waveform */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 4, height: 14 }}>
          {[3,7,11,5,9,13,6,10,8,12,5,9,7,11,4,8,10,6].map((h,i)=>(
            <span key={i} style={{
              width: 2, height: h, borderRadius: 1,
              background: i < 6 ? AS.hotPink : 'rgba(10,10,10,0.2)',
            }}/>
          ))}
          <span style={{
            marginLeft: 'auto',
            fontFamily: '"SF Mono", monospace', fontSize: 9, fontWeight: 700,
            color: 'rgba(10,10,10,0.5)',
          }}>0:47</span>
        </div>
      </div>
    </div>
  );
}

function FlashcardAttach() {
  return (
    <div style={{
      maxWidth: '82%', marginLeft: 32, marginBottom: 8,
      borderRadius: '16px 16px 16px 4px',
      overflow: 'hidden',
      border: `2px solid ${AS.black}`,
      boxShadow: `0 0 0 1.5px ${AS.goldBright}, 0 4px 14px rgba(0,0,0,0.4)`,
    }}>
      {/* label strip */}
      <div style={{
        padding: '5px 10px',
        background: `linear-gradient(90deg, ${AS.plumDeeper} 0%, #1A0A14 100%)`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 900,
          letterSpacing: '0.2em', color: AS.goldBright, textTransform: 'uppercase',
        }}>FAIR HOUSING · §3604(c)</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 7.5, fontWeight: 700,
          color: 'rgba(255,215,0,0.6)',
        }}>FLASHCARD</div>
      </div>
      {/* body */}
      <div style={{
        padding: '10px 12px 11px',
        background: AS.cream,
      }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontSize: 14, fontWeight: 700, color: AS.black, lineHeight: 1.3,
        }}>Steering</div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11.5, fontWeight: 500,
          color: 'rgba(10,10,10,0.75)', marginTop: 3, lineHeight: 1.35,
        }}>Directing buyers toward (or away from) neighborhoods based on a <b>protected class</b>. Even with good intentions. Even if they asked.</div>
        <div style={{
          marginTop: 8, paddingTop: 8, borderTop: '1px dashed rgba(10,10,10,0.15)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
            color: AS.hotPinkDeep, letterSpacing: '0.1em',
          }}>TAP TO REVIEW →</div>
          <div style={{ display: 'flex', gap: 3 }}>
            {[1,2,3].map(i=><span key={i} style={{
              width: 5, height: 5, borderRadius: '50%',
              background: i === 2 ? AS.hotPink : 'rgba(10,10,10,0.2)',
            }}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickQuizCard() {
  return (
    <div style={{
      maxWidth: '82%', marginLeft: 32, marginBottom: 8,
      borderRadius: '16px 16px 16px 4px',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${AS.hotPinkDeep} 0%, ${AS.plumDeep} 100%)`,
      border: `2px solid ${AS.black}`,
      boxShadow: `0 0 0 1.5px ${AS.hotPink}, 0 6px 18px rgba(233,30,99,0.4)`,
      padding: '12px 14px',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
        letterSpacing: '0.22em', color: AS.goldBright, textTransform: 'uppercase',
      }}>MENDING SCENE · 3 Qs</div>
      <div style={{
        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
        fontWeight: 900, fontSize: 18, color: AS.cream, marginTop: 2, lineHeight: 1.1,
      }}>Let me fix you.</div>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
        color: 'rgba(255,249,240,0.75)', marginTop: 4,
      }}>3 quick questions · 90 seconds · no Jackhole risk.</div>
      <button style={{
        marginTop: 10, padding: '8px 14px',
        background: AS.goldBright, border: `1.5px solid ${AS.black}`, borderRadius: 999,
        boxShadow: `0 2.5px 0 ${AS.black}`,
        fontFamily: 'Inter, system-ui', fontSize: 10.5, fontWeight: 900,
        color: AS.black, letterSpacing: '0.16em', textTransform: 'uppercase',
        cursor: 'pointer',
      }}>Start the mending</button>
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 8 }}>
      <div style={{
        width: 26, height: 26, borderRadius: '50%',
        border: `1.5px solid ${AS.hotPink}`, overflow: 'hidden', flexShrink: 0,
        background: AS.plumDeeper,
      }}>
        <img src="assets/Lisa_base.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}/>
      </div>
      <div style={{
        padding: '10px 14px',
        background: AS.lisaBubble,
        borderRadius: '16px 16px 16px 4px',
        display: 'flex', gap: 4,
      }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'rgba(10,10,10,0.4)',
            animation: `typeBounce 1.2s ease-in-out ${i*0.15}s infinite`,
          }}/>
        ))}
      </div>
    </div>
  );
}

function SuggestedReplies() {
  const chips = [
    'Run me through it',
    'Give me the mending quiz',
    'I need a minute, Lisa',
  ];
  return (
    <div style={{
      padding: '10px 14px 8px',
      display: 'flex', gap: 6, overflowX: 'auto', scrollbarWidth: 'none',
      borderTop: '1px solid rgba(255,215,0,0.15)',
    }}>
      {chips.map((c, i) => (
        <button key={i} style={{
          padding: '7px 12px', borderRadius: 999, flexShrink: 0,
          background: i === 1 ? `linear-gradient(180deg, ${AS.goldBright} 0%, ${AS.goldDeep} 100%)` : 'rgba(255,249,240,0.06)',
          border: `1.5px solid ${i === 1 ? AS.black : 'rgba(255,215,0,0.4)'}`,
          boxShadow: i === 1 ? `0 2px 0 ${AS.black}` : 'none',
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 700,
          color: i === 1 ? AS.black : AS.cream, letterSpacing: '0.02em',
          cursor: 'pointer', whiteSpace: 'nowrap',
        }}>{c}</button>
      ))}
    </div>
  );
}

function InputBar() {
  return (
    <div style={{
      padding: '8px 12px 14px',
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'rgba(26,6,18,0.85)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,215,0,0.2)',
    }}>
      <button style={{
        width: 34, height: 34, borderRadius: '50%',
        background: 'rgba(255,249,240,0.08)',
        border: '1px solid rgba(255,215,0,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 2v10M2 7h10" stroke={AS.goldBright} strokeWidth="1.8" strokeLinecap="round"/></svg>
      </button>
      <div style={{
        flex: 1, height: 34,
        borderRadius: 999,
        background: 'rgba(255,249,240,0.08)',
        border: '1px solid rgba(255,249,240,0.15)',
        padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'Inter, system-ui', fontSize: 12.5, fontWeight: 500,
          color: 'rgba(255,249,240,0.45)', fontStyle: 'italic',
        }}>Text Lisa…</span>
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1a2 2 0 0 0-2 2v4a2 2 0 0 0 4 0V3a2 2 0 0 0-2-2zM3 7a4 4 0 0 0 8 0M7 11v2" stroke="rgba(255,249,240,0.45)" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
      </div>
      <button style={{
        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(180deg, ${AS.hotPink} 0%, ${AS.hotPinkDeep} 100%)`,
        border: `1.5px solid ${AS.black}`,
        boxShadow: `0 2px 0 ${AS.black}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 7l12-5-4 5 4 5z" fill={AS.cream}/></svg>
      </button>
    </div>
  );
}

function AfterShowScreen({ tweaks }) {
  return (
    <div
      data-screen-label="09 After Show (Lisa DM)"
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 40% at 50% 0%, rgba(233, 30, 99, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255, 215, 0, 0.08) 0%, transparent 60%),
          linear-gradient(180deg, #1A0612 0%, ${AS.plumDeeper} 60%, ${AS.black} 100%)
        `,
      }}
    >
      <LisaHeader />

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 12px 0' }}>
        <DayDivider text="Tonight · after Act 4"/>

        <LisaBubble showTail time="11:47">Darling. We need to talk about what happened tonight.</LisaBubble>
        <LisaBubble>You called a 55+ community <i>"family-friendly."</i></LisaBubble>
        <LisaBubble>That's steering, love. Even when it's kind. Especially when it's kind.</LisaBubble>

        <VoiceMemoCard/>
        <FlashcardAttach/>

        <UserBubble time="11:49">lisa i was just trying to be nice 😩</UserBubble>
        <UserBubble>i'm spiraling</UserBubble>

        <LisaBubble showTail>Nice gets you sued, darling. I'll fix you.</LisaBubble>
        <LisaBubble>Pour a glass of rosé. Sit up straight.</LisaBubble>

        <QuickQuizCard/>

        <TypingDots/>
        <div style={{ height: 10 }}/>
      </div>

      <SuggestedReplies/>
      <InputBar/>

      <style>{`
        @keyframes typePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes typeBounce {
          0%,60%,100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

Object.assign(window, { AfterShowScreen });
