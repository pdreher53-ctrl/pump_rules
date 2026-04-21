// Home / Now Showing — Pump Rules: Real Estate Reunion
// Screen 1 of 12. Designed at 375×812.

const PALETTE = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  champagne: '#D4AF37',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  roseSoft: '#FFE0EC',
};

// ─────────────────────────────────────────────────────────────
// Neon logo — script "Pump Rules" + blocky subtitle
// ─────────────────────────────────────────────────────────────
function NeonLogo() {
  return (
    <div style={{ textAlign: 'center', lineHeight: 1, position: 'relative' }}>
      <div style={{
        fontFamily: '"Bonheur Royale", "Playfair Display", cursive',
        fontSize: 54, fontWeight: 400, color: '#FFE6F0',
        letterSpacing: -1, transform: 'rotate(-3deg)',
        textShadow: `
          0 0 2px #fff,
          0 0 8px ${PALETTE.hotPink},
          0 0 16px ${PALETTE.hotPink},
          0 0 28px ${PALETTE.hotPinkDeep},
          0 0 42px ${PALETTE.hotPinkDeep}
        `,
        marginBottom: -4,
      }}>
        Pump Rules
      </div>
      <div style={{
        fontFamily: '"Inter", system-ui',
        fontSize: 10, fontWeight: 800,
        letterSpacing: '0.42em', color: PALETTE.goldBright,
        paddingLeft: '0.42em',
        textShadow: `0 0 6px rgba(255, 215, 0, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)`,
      }}>
        REAL ESTATE REUNION
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Top bar — greeting + search/profile
// ─────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 18px 0',
    }}>
      <div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.18em', color: 'rgba(255,224,236,0.55)',
          textTransform: 'uppercase',
        }}>
          Hey, Elizabeth
        </div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 600,
          color: PALETTE.cream, marginTop: 2,
        }}>
          Grab your wine. 🍷
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(255,224,236,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke={PALETTE.cream} strokeWidth="1.8"/>
            <path d="M11 11l3 3" stroke={PALETTE.cream} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero — Tonight's Episode, Lisa
// ─────────────────────────────────────────────────────────────
function HeroCard({ title, episode, duration }) {
  return (
    <div
      data-screen-label="home-hero"
      style={{
      margin: '18px 18px 0',
      borderRadius: 22,
      position: 'relative',
      overflow: 'hidden',
      border: `2px solid ${PALETTE.black}`,
      boxShadow: `
        0 0 0 1px rgba(255, 215, 0, 0.35) inset,
        0 18px 40px -10px rgba(233, 30, 99, 0.45),
        0 6px 18px rgba(0,0,0,0.4)
      `,
      aspectRatio: '1 / 1.18',
      background: `radial-gradient(ellipse at 62% 45%, #5A1638 0%, ${PALETTE.plumDeeper} 60%, ${PALETTE.black} 100%)`,
    }}>
      {/* Lisa portrait — full bleed right */}
      <img
        src="assets/Lisa_base.webp"
        alt="Lisa Vanderpump"
        style={{
          position: 'absolute',
          right: -30, bottom: 0,
          height: '108%',
          width: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(-8px 12px 20px rgba(0,0,0,0.55))',
        }}
      />

      {/* Left-side text column */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '58%', padding: '18px 0 18px 18px',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          {/* Now Playing pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 10px 5px 8px',
            background: PALETTE.goldBright,
            borderRadius: 999,
            border: `1.5px solid ${PALETTE.black}`,
            boxShadow: '0 2px 0 rgba(0,0,0,0.3)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#d60',
              boxShadow: '0 0 6px rgba(255,60,0,0.8)',
              animation: 'pulseDot 1.4s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
              color: PALETTE.black, letterSpacing: '0.12em',
            }}>TONIGHT'S EPISODE</span>
          </div>

          <div style={{ marginTop: 14 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.2em', color: PALETTE.goldBright,
              textTransform: 'uppercase',
            }}>
              {episode}
            </div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: 'italic', fontWeight: 900,
              fontSize: 30, lineHeight: 1.02, color: PALETTE.cream,
              marginTop: 6, letterSpacing: -0.5,
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}>
              {title}
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
            fontFamily: 'Inter, system-ui', fontSize: 11,
            color: 'rgba(255,249,240,0.75)',
          }}>
            <span style={{
              padding: '2px 6px', border: '1px solid rgba(255,249,240,0.4)',
              borderRadius: 3, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
            }}>TV-14</span>
            <span>•</span>
            <span>{duration}</span>
            <span>•</span>
            <span style={{ color: PALETTE.goldBright, fontWeight: 600 }}>Act 1</span>
          </div>

          {/* CTA */}
          <button
            onClick={() => window.navigate && window.navigate('player')}
            style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 18px 11px 14px',
            background: `linear-gradient(180deg, ${PALETTE.hotPink} 0%, ${PALETTE.hotPinkDeep} 100%)`,
            color: PALETTE.cream,
            border: `1.5px solid ${PALETTE.black}`,
            borderRadius: 999,
            fontFamily: 'Inter, system-ui', fontSize: 13, fontWeight: 800,
            letterSpacing: '0.04em',
            boxShadow: `
              0 3px 0 ${PALETTE.black},
              0 8px 22px -4px rgba(233, 30, 99, 0.7),
              inset 0 1px 0 rgba(255,255,255,0.3)
            `,
            cursor: 'pointer',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 1.5v11l9.5-5.5L3 1.5z" fill={PALETTE.cream} stroke={PALETTE.black} strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            ROLL THE TAPE
          </button>
        </div>
      </div>

      {/* Gold corner foil */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 60, height: 60,
        background: `linear-gradient(225deg, ${PALETTE.goldBright} 0%, transparent 55%)`,
        opacity: 0.35, pointerEvents: 'none',
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Section header
// ─────────────────────────────────────────────────────────────
function SectionHeader({ title, action }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '22px 18px 10px',
    }}>
      <div style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontStyle: 'italic', fontWeight: 900,
        fontSize: 20, color: PALETTE.cream,
        letterSpacing: -0.3,
      }}>
        {title}
      </div>
      {action && (
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 700,
          color: PALETTE.goldBright, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {action}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Continue-Watching card
// ─────────────────────────────────────────────────────────────
function ContinueCard({ actNum, title, character, portrait, progress, minsLeft }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 150,
      borderRadius: 14,
      border: `2px solid ${PALETTE.black}`,
      background: PALETTE.black,
      overflow: 'hidden',
      boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
    }}>
      {/* portrait panel */}
      <div style={{
        height: 170,
        position: 'relative', overflow: 'hidden',
        background: `radial-gradient(ellipse at 50% 50%, #6B1A3C 0%, ${PALETTE.plumDeeper} 70%, ${PALETTE.black} 100%)`,
      }}>
        <img src={portrait} alt={character} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 10%',
        }} />
        {/* act badge */}
        <div style={{
          position: 'absolute', top: 8, left: 8,
          width: 28, height: 28, borderRadius: '50%',
          background: PALETTE.black,
          border: `1.5px solid ${PALETTE.goldBright}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 13, color: PALETTE.goldBright,
        }}>{actNum}</div>
        {/* gradient foot for legibility */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '40%',
          background: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.85) 100%)`,
        }} />
        {/* mins left pill */}
        <div style={{
          position: 'absolute', right: 6, bottom: 38,
          padding: '3px 7px', borderRadius: 6,
          background: 'rgba(10,10,10,0.8)',
          border: '0.5px solid rgba(255,249,240,0.2)',
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
          color: PALETTE.cream, letterSpacing: '0.04em',
        }}>
          {minsLeft} LEFT
        </div>
      </div>

      {/* title + progress */}
      <div style={{ padding: '10px 10px 12px' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
          letterSpacing: '0.14em', color: PALETTE.goldBright,
          textTransform: 'uppercase',
        }}>
          Act {actNum}
        </div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 700, fontSize: 14, color: PALETTE.cream,
          marginTop: 2, lineHeight: 1.15, height: 32, overflow: 'hidden',
        }}>
          {title}
        </div>
        <div style={{
          marginTop: 10,
          height: 3, borderRadius: 2,
          background: 'rgba(255,249,240,0.14)', overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            background: `linear-gradient(90deg, ${PALETTE.champagne} 0%, ${PALETTE.goldBright} 100%)`,
            boxShadow: `0 0 8px ${PALETTE.goldBright}`,
          }} />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Locked reunion card — large, dramatic
// ─────────────────────────────────────────────────────────────
function ReunionCard() {
  return (
    <div style={{
      margin: '0 18px',
      borderRadius: 18,
      border: `2px solid ${PALETTE.black}`,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
      background: PALETTE.black,
    }}>
      <div style={{
        height: 120, position: 'relative', overflow: 'hidden',
      }}>
        <img src="assets/Reunion_Couch.png" alt="Reunion stage" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'brightness(0.55) saturate(1.1)',
        }} />
        {/* dark scrim + lock */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(74,14,46,0.4) 0%, rgba(10,10,10,0.7) 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* big lock icon */}
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(10,10,10,0.85)',
            border: `2px solid ${PALETTE.goldBright}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 20px rgba(255,215,0,0.4)`,
          }}>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <rect x="3" y="10" width="16" height="12" rx="2" stroke={PALETTE.goldBright} strokeWidth="2"/>
              <path d="M7 10V6.5a4 4 0 018 0V10" stroke={PALETTE.goldBright} strokeWidth="2" strokeLinecap="round"/>
              <circle cx="11" cy="15.5" r="1.5" fill={PALETTE.goldBright}/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.24em', color: PALETTE.hotPink,
          textTransform: 'uppercase',
        }}>
          Season Finale
        </div>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 24, color: PALETTE.cream,
          marginTop: 2, letterSpacing: -0.3,
        }}>
          The Reunion
        </div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 500,
          color: 'rgba(255,249,240,0.6)', marginTop: 4, lineHeight: 1.35,
        }}>
          152 questions. 4 hours. Unlocks after Act 9.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Dog-hosted bottom strip
// ─────────────────────────────────────────────────────────────
function HostStrip({ streak, mazel, jackhole }) {
  return (
    <div
      data-screen-label="home-host-strip"
      style={{
      margin: '22px 12px 0',
      padding: '12px 12px 14px',
      borderRadius: 20,
      background: `
        linear-gradient(180deg, rgba(74, 14, 46, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)
      `,
      border: `1.5px solid ${PALETTE.hotPinkDeep}`,
      boxShadow: `
        0 0 0 1px rgba(212, 175, 55, 0.25) inset,
        0 -4px 20px rgba(233, 30, 99, 0.25)
      `,
      position: 'relative',
    }}>
      {/* HOSTED BY eyebrow */}
      <div style={{
        position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
        background: PALETTE.black,
        padding: '2px 10px', borderRadius: 999,
        border: `1px solid ${PALETTE.goldBright}`,
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
        letterSpacing: '0.2em', color: PALETTE.goldBright,
      }}>
        HOSTED BY THE DOGS
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Dog 1 */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 54, height: 54, borderRadius: '50%',
            overflow: 'hidden',
            border: `2px solid ${PALETTE.goldBright}`,
            boxShadow: `0 0 12px rgba(255,215,0,0.45), 0 3px 8px rgba(0,0,0,0.5)`,
            background: PALETTE.plumDeeper,
          }}>
            <img src="assets/DOG1_base.png" alt="Dog 1" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%',
            }} />
          </div>
        </div>

        {/* Streak column */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
            letterSpacing: '0.22em', color: PALETTE.hotPink,
          }}>
            CURRENT STREAK
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            marginTop: 2,
          }}>
            <span style={{ fontSize: 22, lineHeight: 1 }}>🔥</span>
            <span style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 32, color: PALETTE.goldBright,
              textShadow: `0 0 14px rgba(255,215,0,0.7)`, lineHeight: 1,
            }}>{streak}</span>
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
            color: 'rgba(255,249,240,0.6)', marginTop: 2,
          }}>
            days studying
          </div>
        </div>

        {/* Dog 2 */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 54, height: 54, borderRadius: '50%',
            overflow: 'hidden',
            border: `2px solid ${PALETTE.goldBright}`,
            boxShadow: `0 0 12px rgba(255,215,0,0.45), 0 3px 8px rgba(0,0,0,0.5)`,
            background: PALETTE.plumDeeper,
          }}>
            <img src="assets/Dog2_base.png" alt="Dog 2" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
            }} />
          </div>
        </div>
      </div>

      {/* Mazel / Jackhole pills */}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <div style={{
          flex: 1,
          padding: '7px 10px',
          borderRadius: 10,
          background: `linear-gradient(180deg, rgba(255,215,0,0.16) 0%, rgba(212,175,55,0.08) 100%)`,
          border: `1px solid rgba(255,215,0,0.45)`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%', overflow: 'hidden',
            border: `1px solid ${PALETTE.goldBright}`, flexShrink: 0,
            background: PALETTE.black,
          }}>
            <img src="assets/ANDY_mazel.png" alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%',
            }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
              letterSpacing: '0.18em', color: PALETTE.goldBright,
            }}>MAZEL OF THE WEEK</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
              color: PALETTE.cream, marginTop: 1,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{mazel}</div>
          </div>
        </div>

        <div style={{
          flex: 1,
          padding: '7px 10px',
          borderRadius: 10,
          background: `linear-gradient(180deg, rgba(233,30,99,0.2) 0%, rgba(176,18,77,0.1) 100%)`,
          border: `1px solid rgba(233,30,99,0.5)`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%', overflow: 'hidden',
            border: `1px solid ${PALETTE.hotPink}`, flexShrink: 0,
            background: PALETTE.black,
          }}>
            <img src="assets/ANDY_jackhole.png" alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%',
            }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 800,
              letterSpacing: '0.18em', color: PALETTE.hotPink,
            }}>JACKHOLE THIS WEEK</div>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 600,
              color: PALETTE.cream, marginTop: 1,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{jackhole}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Full screen composition
// ─────────────────────────────────────────────────────────────
function HomeScreen({ tweaks }) {
  const continueRow = [
    { actNum: 1, title: 'Welcome to SUR', character: 'Lisa', portrait: 'assets/Lisa_base.webp', progress: 62, minsLeft: '8 MIN' },
    { actNum: 2, title: 'The Friend Group', character: 'Stassi', portrait: 'assets/Stassi_base.png', progress: 24, minsLeft: '14 MIN' },
    { actNum: 3, title: "It's Not About the Pasta", character: 'Ariana', portrait: 'assets/Arinana_base.png', progress: 8, minsLeft: '19 MIN' },
  ];

  return (
    <div
      data-screen-label="01 Home / Now Showing"
      style={{
        width: '100%', height: '100%',
        overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
        background: `
          radial-gradient(ellipse 80% 45% at 50% 0%, rgba(233, 30, 99, 0.28) 0%, transparent 65%),
          radial-gradient(ellipse 60% 35% at 90% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
          linear-gradient(180deg, ${PALETTE.plumDeep} 0%, ${PALETTE.plumDeeper} 45%, ${PALETTE.black} 100%)
        `,
      }}
    >
      {/* Star particle layer */}
      <StarField />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: 100 }}>
        {/* status bar spacer (47px) */}
        <div style={{ height: 47 }} />

        <TopBar />

        <div style={{ marginTop: 14 }}>
          <NeonLogo />
        </div>

        <HeroCard
          title={tweaks.episodeTitle}
          episode="Act 1 · Episode 1"
          duration="22 MIN"
        />

        <SectionHeader title="Continue Watching" action="See All" />
        <div style={{
          display: 'flex', gap: 12, padding: '0 18px',
          overflowX: 'auto', scrollbarWidth: 'none',
        }}>
          {continueRow.map(c => <ContinueCard key={c.actNum} {...c} />)}
          <div style={{ width: 1, flexShrink: 0 }} />
        </div>

        {tweaks.showReunion && (
          <>
            <SectionHeader title="The Reunion" />
            <ReunionCard />
          </>
        )}

        <HostStrip
          streak={tweaks.streak}
          mazel="Disclosure questions"
          jackhole="Closing cost math"
        />

        {/* home indicator spacer */}
        <div style={{ height: 30 }} />
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Deterministic starfield overlay
// ─────────────────────────────────────────────────────────────
function StarField() {
  const stars = React.useMemo(() => {
    const out = [];
    // pseudo-random but stable
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < 60; i++) {
      out.push({
        x: rand() * 100,
        y: rand() * 100,
        size: rand() * 1.6 + 0.6,
        opacity: rand() * 0.6 + 0.15,
        delay: rand() * 4,
        duration: rand() * 3 + 2,
        tint: rand() > 0.7 ? '#FFD700' : '#FFE0EC',
      });
    }
    return out;
  }, []);

  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
    }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: '50%',
          background: s.tint, opacity: s.opacity,
          boxShadow: `0 0 ${s.size * 2}px ${s.tint}`,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, { HomeScreen });
