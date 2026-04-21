import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getQuestionById, questionsForAct } from '../data/questions';

const R = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  green: '#4ADE80',
  red: '#F43F5E',
};

export default function Recap() {
  const navigate = useNavigate();
  const answers = useStore(s => s.answers);
  const currentAct = useStore(s => s.currentAct);
  const bravoPoints = useStore(s => s.bravoPoints);
  const bestStreak = useStore(s => s.bestStreak);
  const streak = useStore(s => s.streak);
  const endSession = useStore(s => s.endSession);
  const sessionTarget = useStore(s => s.sessionTarget);

  const recent = answers.slice(-sessionTarget);
  const correctCount = recent.filter(a => a.correct).length;
  const scorePct = recent.length ? Math.round((correctCount / recent.length) * 100) : 0;

  const actQs = questionsForAct(currentAct);
  const answeredInAct = answers.filter(a => actQs.some(q => q.id === a.questionId));
  const actPct = actQs.length ? Math.round((answeredInAct.length / actQs.length) * 100) : 0;

  const continueNext = () => { endSession(); navigate('/play'); };
  const seeDomain = () => { endSession(); navigate('/reunion'); };

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 50% at 50% 15%, rgba(233, 30, 99, 0.22) 0%, transparent 55%),
        linear-gradient(180deg, ${R.plumDeep} 0%, ${R.plumDeeper} 45%, ${R.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      <div style={{ paddingTop: 20, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
          letterSpacing: '0.3em', color: R.goldBright, textTransform: 'uppercase',
        }}>That's a wrap on scene</div>
        <div style={{
          marginTop: 4,
          fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
          fontWeight: 900, fontSize: 42, color: R.cream, lineHeight: 1,
          letterSpacing: -1,
          textShadow: `0 0 24px rgba(233,30,99,0.5)`,
        }}>Act {currentAct} · Recap</div>
      </div>

      {/* Score tile */}
      <div style={{ margin: '20px 18px 0' }}>
        <div style={{
          padding: '18px 18px 16px', borderRadius: 18,
          background: `linear-gradient(180deg, rgba(255,215,0,0.12) 0%, rgba(74,14,46,0.6) 100%)`,
          border: `1.5px solid ${R.goldBright}`,
          boxShadow: '0 0 32px rgba(255,215,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            width: 92, height: 92, borderRadius: '50%',
            background: `conic-gradient(${R.goldBright} ${scorePct * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
            padding: 3,
            boxShadow: `0 0 0 1.5px ${R.black}, 0 0 20px rgba(255,215,0,0.5)`,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              background: R.plumDeeper,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 900, fontSize: 28, color: R.goldBright, lineHeight: 1,
              }}>{scorePct}%</div>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 7, fontWeight: 900,
                letterSpacing: '0.2em', color: 'rgba(255,249,240,0.6)', marginTop: 2,
              }}>SCENE SCORE</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 800, fontSize: 18, color: R.cream, lineHeight: 1.1,
            }}>{correctCount} of {recent.length} nailed.</div>
            <div style={{
              marginTop: 4,
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
              color: 'rgba(255,249,240,0.7)', lineHeight: 1.4,
            }}>
              Streak now at <span style={{ color: R.goldBright, fontWeight: 800 }}>{streak}</span> · Best {bestStreak} · <span style={{ color: R.hotPink, fontWeight: 800 }}>{bravoPoints} Bravo pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scene-by-scene breakdown */}
      <div style={{ margin: '18px 18px 0' }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
          letterSpacing: '0.24em', color: 'rgba(255,249,240,0.55)', textTransform: 'uppercase',
          marginBottom: 8,
        }}>Scene by scene</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {recent.length === 0 && (
            <div style={{
              padding: 14, borderRadius: 10,
              border: '1px dashed rgba(255,249,240,0.2)',
              color: 'rgba(255,249,240,0.6)',
              fontFamily: 'Inter, system-ui', fontSize: 12, textAlign: 'center',
            }}>No scenes yet. Head to the player and start tonight's episode.</div>
          )}
          {recent.map((a, i) => {
            const q = getQuestionById(a.questionId);
            if (!q) return null;
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 10,
                background: 'rgba(10,10,10,0.5)',
                border: `1px solid ${a.correct ? 'rgba(74,222,128,0.4)' : 'rgba(244,63,94,0.4)'}`,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: a.correct ? R.green : R.red,
                  color: a.correct ? R.black : R.cream,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic', fontSize: 14,
                }}>{a.correct ? '✓' : '✕'}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
                    letterSpacing: '0.2em', color: R.goldBright, textTransform: 'uppercase',
                  }}>{q.domain}</div>
                  <div style={{
                    fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                    fontSize: 12, fontWeight: 600, color: R.cream, lineHeight: 1.3,
                    overflow: 'hidden', textOverflow: 'ellipsis',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  }}>{q.stem}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Act progress */}
      <div style={{ margin: '18px 18px 0' }}>
        <div style={{
          padding: '12px 14px', borderRadius: 12,
          background: 'rgba(255,249,240,0.04)',
          border: `1px solid rgba(255,249,240,0.1)`,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            marginBottom: 8,
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
              letterSpacing: '0.2em', color: R.cream, textTransform: 'uppercase',
            }}>Act {currentAct} progress</div>
            <div style={{
              fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
              fontWeight: 900, fontSize: 18, color: R.goldBright,
            }}>{actPct}%</div>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,249,240,0.1)', overflow: 'hidden' }}>
            <div style={{
              width: `${actPct}%`, height: '100%',
              background: `linear-gradient(90deg, ${R.hotPink} 0%, ${R.goldBright} 100%)`,
              boxShadow: `0 0 6px ${R.goldBright}`,
            }}/>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ margin: '18px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button onClick={continueNext} style={{
          width: '100%', padding: '14px 18px', borderRadius: 14,
          background: `linear-gradient(180deg, ${R.hotPink} 0%, ${R.hotPinkDeep} 100%)`,
          border: `2px solid ${R.black}`,
          boxShadow: `0 4px 0 ${R.black}, 0 12px 28px -4px rgba(233, 30, 99, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          cursor: 'pointer',
        }}>
          <span style={{
            fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 900,
            color: R.cream, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>Shoot the next scene</span>
        </button>
        <button onClick={seeDomain} style={{
          width: '100%', padding: '12px 18px', borderRadius: 12,
          background: 'rgba(255,255,255,0.06)',
          border: `1.5px solid rgba(255,249,240,0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: 'pointer', color: R.cream,
        }}>
          <span style={{
            fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>See the Reunion scorecard</span>
        </button>
      </div>
    </div>
  );
}
