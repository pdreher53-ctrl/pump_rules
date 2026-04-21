import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { EPISODES, indexForPath } from '../lib/episodes';
import { useStore } from '../store/useStore';

const pad = (n: number) => String(n).padStart(2, '0');

export default function Shell() {
  const location = useLocation();
  const navigate = useNavigate();
  const seenScreens = useStore(s => s.seenScreens);
  const markScreenSeen = useStore(s => s.markScreenSeen);
  const resetAll = useStore(s => s.resetAll);

  const current = indexForPath(location.pathname);
  const ep = EPISODES[current];
  const next = EPISODES[current + 1];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    markScreenSeen(location.pathname);
  }, [location.pathname, markScreenSeen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (menuOpen) {
        if (e.key === 'Escape') setMenuOpen(false);
        return;
      }
      if (e.key === 'ArrowRight' && next) navigate(next.path);
      if (e.key === 'ArrowLeft' && current > 0) navigate(EPISODES[current - 1].path);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, next, navigate, menuOpen]);

  const goNext = () => {
    if (next) navigate(next.path);
    else navigate(EPISODES[0].path);
  };

  const goPrev = () => current > 0 && navigate(EPISODES[current - 1].path);
  const goFwd = () => next && navigate(next.path);

  return (
    <>
      {/* TOP BAR */}
      <div style={{
        flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px', paddingTop: 'max(10px, env(safe-area-inset-top))',
        background: 'rgba(10, 5, 10, 0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
        position: 'relative', zIndex: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 900,
            fontSize: 18, color: 'var(--hot-pink)', letterSpacing: '-0.3px',
            textShadow: '0 0 10px rgba(233, 30, 99, 0.45)', lineHeight: 1,
          }}>Pump Rules</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>· Real Estate Reunion</div>
        </div>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.22em', color: 'rgba(255, 249, 240, 0.55)',
          padding: '5px 9px', border: '1px solid rgba(255, 249, 240, 0.15)',
          borderRadius: 999, whiteSpace: 'nowrap',
        }}>EP {pad(current + 1)} / {pad(EPISODES.length)}</div>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Episode menu"
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M1 3h12M1 7h12M1 11h12" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* PROGRESS STRIP */}
      <div style={{
        flexShrink: 0, display: 'flex', gap: 3,
        padding: '6px 14px 0', background: 'rgba(10, 5, 10, 0.92)',
      }}>
        {EPISODES.map((e, i) => {
          const isCurrent = i === current;
          const isDone = !isCurrent && (seenScreens.includes(e.path) || i < current);
          return (
            <div key={e.path} style={{
              flex: 1, height: 3, borderRadius: 2,
              background: isCurrent ? 'var(--hot-pink)'
                : isDone ? 'var(--gold)'
                : 'rgba(255, 249, 240, 0.1)',
              boxShadow: isCurrent ? '0 0 6px var(--hot-pink)'
                : isDone ? '0 0 4px var(--gold)' : 'none',
              transition: 'background 0.2s',
            }}/>
          );
        })}
      </div>

      {/* STAGE */}
      <div style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        minHeight: 0, display: 'flex', alignItems: 'stretch', justifyContent: 'center',
        background: 'var(--plum-deep)',
      }}>
        <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div style={{
        flexShrink: 0, display: 'flex', alignItems: 'stretch', gap: 8,
        padding: '10px 14px', paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        background: 'rgba(10, 5, 10, 0.92)', backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255, 215, 0, 0.15)',
        position: 'relative', zIndex: 20,
      }}>
        <button onClick={goPrev} disabled={current === 0} aria-label="Previous episode" style={navArrowStyle}>
          <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={goNext} style={{
          flex: 1, padding: '12px 16px', borderRadius: 12,
          background: next?.finale
            ? 'linear-gradient(180deg, var(--gold) 0%, var(--gold-deep) 100%)'
            : 'linear-gradient(180deg, var(--hot-pink) 0%, var(--pink-deep) 100%)',
          border: '1.5px solid var(--black)',
          boxShadow: next?.finale
            ? '0 3px 0 var(--black), 0 0 18px rgba(255, 215, 0, 0.45)'
            : '0 3px 0 var(--black), 0 0 18px rgba(233, 30, 99, 0.45)',
          color: next?.finale ? 'var(--black)' : 'var(--cream)',
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 15, letterSpacing: '-0.2px',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 8, transition: 'transform 0.08s',
        }}>
          <span>{next ? next.cta : 'Start again'}</span>
          <span style={{
            fontFamily: 'Inter, system-ui', fontStyle: 'normal', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.22em',
            color: next?.finale ? 'var(--pink-deep)' : 'var(--gold)',
            padding: '3px 6px',
            background: next?.finale ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.4)',
            borderRadius: 3,
          }}>{next ? `EP ${pad(current + 2)}` : '↻'}</span>
        </button>
        <button onClick={goFwd} disabled={!next} aria-label="Skip forward" style={navArrowStyle}>
          <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(5, 3, 8, 0.88)', backdropFilter: 'blur(16px)',
            zIndex: 100, overflowY: 'auto',
          }}
        >
          <div style={{ padding: '20px 16px 32px', paddingTop: 'max(20px, env(safe-area-inset-top))' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
              <div>
                <div style={{
                  fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
                  letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase',
                  marginBottom: 2,
                }}>Season 1 · 13 Episodes</div>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 900, fontSize: 28, color: 'var(--cream)', lineHeight: 1,
                  letterSpacing: '-0.6px', textShadow: '0 0 16px rgba(233, 30, 99, 0.5)',
                }}>The Episode Guide</div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 249, 240, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--cream)', flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {EPISODES.map((e, i) => {
                const isCurrent = i === current;
                const isDone = !isCurrent && seenScreens.includes(e.path);
                return (
                  <button
                    key={e.path}
                    onClick={() => { navigate(e.path); setMenuOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 14px', borderRadius: 12,
                      background: isCurrent ? 'rgba(233, 30, 99, 0.15)' : 'rgba(255, 249, 240, 0.04)',
                      border: isCurrent ? '1px solid var(--hot-pink)' : '1px solid rgba(255, 249, 240, 0.08)',
                      boxShadow: isCurrent ? '0 0 16px rgba(233, 30, 99, 0.25)' : 'none',
                      opacity: isDone ? 0.72 : 1,
                      cursor: 'pointer', textAlign: 'left',
                      color: 'var(--cream)', fontFamily: 'inherit', width: '100%',
                    }}
                  >
                    <div style={{ width: 32, flexShrink: 0, textAlign: 'center' }}>
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                        letterSpacing: '0.18em', color: 'rgba(255, 249, 240, 0.45)',
                      }}>EP</div>
                      <div style={{
                        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                        fontWeight: 900, fontSize: 18, lineHeight: 1,
                        color: isCurrent ? 'var(--hot-pink)' : isDone ? 'var(--gold)' : 'var(--cream)',
                        textShadow: isCurrent ? '0 0 8px var(--hot-pink)' : 'none',
                      }}>{pad(i + 1)}</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                        fontWeight: 900, fontSize: 15, color: 'var(--cream)', lineHeight: 1.15,
                      }}>{e.title}</div>
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
                        color: 'rgba(255, 249, 240, 0.5)', marginTop: 2,
                      }}>{e.sub}</div>
                    </div>
                    {isCurrent && (
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                        letterSpacing: '0.22em', color: 'var(--cream)',
                        background: 'var(--hot-pink)', padding: '3px 6px', borderRadius: 3,
                        textTransform: 'uppercase', flexShrink: 0,
                      }}>Now</div>
                    )}
                    {isDone && (
                      <div style={{
                        fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                        letterSpacing: '0.22em', color: 'var(--cream)',
                        background: '#A8820E', padding: '3px 6px', borderRadius: 3,
                        textTransform: 'uppercase', flexShrink: 0,
                      }}>Seen</div>
                    )}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => { resetAll(); setMenuOpen(false); navigate('/casting-call'); }}
              style={{
                marginTop: 16, padding: 10, width: '100%',
                background: 'transparent',
                border: '1px dashed rgba(255, 215, 0, 0.35)',
                borderRadius: 10, color: 'var(--gold)',
                fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
                letterSpacing: '0.2em', cursor: 'pointer', textTransform: 'uppercase',
              }}
            >Start over from Ep 01</button>
          </div>
        </div>
      )}
    </>
  );
}

const navArrowStyle: React.CSSProperties = {
  width: 52, borderRadius: 12,
  background: 'rgba(255, 249, 240, 0.06)',
  border: '1px solid rgba(255, 249, 240, 0.15)',
  color: 'var(--cream)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', flexShrink: 0,
};
