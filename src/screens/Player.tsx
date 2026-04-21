import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { nextUnseenQuestion, questionsForAct } from '../data/questions';
import type { ChoiceId, Question } from '../types';

const PL = {
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

const ACT_TITLES: Record<number, string> = {
  1: 'License & Agency',
  2: 'Fair Play',
  3: 'Disclosure Drama',
  4: 'Girls Night',
  5: 'Money Talks',
  6: 'Property Lines',
  7: 'GA on Trial',
  8: 'Reunion Prep',
  9: 'Finale Eve',
};

type RevealState = 'idle' | 'selected' | 'correct' | 'wrong' | 'reveal-correct';

export default function Player() {
  const navigate = useNavigate();
  const currentAct = useStore(s => s.currentAct);
  const streak = useStore(s => s.streak);
  const sessionAnswered = useStore(s => s.sessionAnswered);
  const sessionTarget = useStore(s => s.sessionTarget);
  const answers = useStore(s => s.answers);
  const recordAnswer = useStore(s => s.recordAnswer);
  const startSession = useStore(s => s.startSession);

  const answeredIds = useMemo(() => new Set(answers.map(a => a.questionId)), [answers]);
  const actQuestions = questionsForAct(currentAct);
  const question: Question | null = nextUnseenQuestion(currentAct, answeredIds)
    ?? actQuestions[0]
    ?? null;

  const [picked, setPicked] = useState<ChoiceId | null>(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (sessionAnswered === 0) startSession(5);
  }, [sessionAnswered, startSession]);

  // reset picked when question changes
  useEffect(() => { setPicked(null); setLocked(false); }, [question?.id]);

  if (!question) {
    return (
      <div style={{ padding: 40, color: PL.cream, fontFamily: 'Inter, system-ui' }}>
        No questions in this act yet. Hit reset and start over.
      </div>
    );
  }

  const correctId = question.correctId;
  const stateOf = (id: ChoiceId): RevealState => {
    if (!locked) return picked === id ? 'selected' : 'idle';
    if (id === picked && id === correctId) return 'correct';
    if (id === picked && id !== correctId) return 'wrong';
    if (id === correctId) return 'reveal-correct';
    return 'idle';
  };

  const submit = () => {
    if (!picked || locked) return;
    setLocked(true);
    const result = recordAnswer(question, picked);
    setTimeout(() => {
      if (result.brokeStreak) navigate('/streak-break');
      else if (result.tripleStreak) navigate('/rawt-in-hail');
      else if (result.correct) navigate('/mazel');
      else navigate('/jackhole');
    }, 600);
  };

  const positionInAct = answeredIds.size + 1;
  const total = actQuestions.length;
  const pct = (positionInAct / Math.max(total, 1)) * 100;

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      position: 'relative',
      background: `
        radial-gradient(ellipse 100% 40% at 50% 0%, rgba(233, 30, 99, 0.22) 0%, transparent 60%),
        linear-gradient(180deg, ${PL.plumDeep} 0%, ${PL.plumDeeper} 40%, ${PL.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      {/* Top chrome */}
      <div style={{ height: 14 }}/>
      <div style={{
        padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => navigate('/home')} style={iconBtn(34)} aria-label="Back to home">
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke={PL.cream} strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
            letterSpacing: '0.24em', color: PL.goldBright, textTransform: 'uppercase',
          }}>ACT {currentAct} · Q {positionInAct}/{total}</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 800, fontSize: 14, color: PL.cream, marginTop: 1,
          }}>{ACT_TITLES[currentAct] ?? 'Tonight\u2019s Scene'}</div>
        </div>
        <div style={iconBtn(34)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1a4 4 0 00-4 4v2.5c0 .8-.3 1.5-.8 2l-.2.2h10l-.2-.2c-.5-.5-.8-1.2-.8-2V5a4 4 0 00-4-4z" stroke={PL.cream} strokeWidth="1.4" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Streak chip */}
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
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.12em', color: PL.cream, textTransform: 'uppercase',
        }}>
          {streak} in a row · <span style={{ color: PL.goldBright }}>{sessionAnswered}/{sessionTarget} this scene</span>
        </div>
      </div>

      {/* Stage */}
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
        <img src="/assets/Sur_interior.png" alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'brightness(0.5) saturate(1.2)',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 80%, transparent 30%, rgba(10,10,10,0.85) 100%)`,
        }}/>

        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(10,10,10,0.75)',
          border: `1px solid ${PL.goldBright}`,
          backdropFilter: 'blur(8px)',
          fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 800,
          letterSpacing: '0.18em', color: PL.goldBright, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%', background: PL.red,
            boxShadow: `0 0 6px ${PL.red}`, animation: 'pulseDot 1.4s ease-in-out infinite',
          }}/>
          SCENE · {question.domain.toUpperCase()}
        </div>

        <img src="/assets/Katie_base.png" alt="Katie" style={{
          position: 'absolute', right: -28, bottom: -6,
          height: '95%', width: 'auto', objectFit: 'contain',
          filter: 'drop-shadow(-6px 10px 18px rgba(0,0,0,0.7))',
        }}/>

        <div style={{
          position: 'absolute', right: 14, bottom: 14,
          padding: '4px 10px',
          background: PL.goldBright, borderRadius: 4,
          border: `1.5px solid ${PL.black}`,
          boxShadow: '0 2px 0 rgba(0,0,0,0.4)',
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 900,
          color: PL.black, letterSpacing: '0.12em',
          transform: 'rotate(-2deg)',
        }}>KATIE</div>

        <div style={{
          position: 'absolute', left: 14, right: 14, bottom: 24,
          padding: '14px 16px 16px',
          borderRadius: 16,
          background: PL.cream,
          border: `2px solid ${PL.black}`,
          boxShadow: `0 6px 0 ${PL.black}, 0 10px 20px rgba(0,0,0,0.5)`,
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
            letterSpacing: '0.2em', color: PL.hotPinkDeep, textTransform: 'uppercase',
            marginBottom: 6,
          }}>The Scene</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 700, fontSize: 14, lineHeight: 1.32, color: PL.black,
            letterSpacing: -0.2,
          }}>"{question.stem}"</div>
        </div>
      </div>

      {/* Answers */}
      <div style={{ padding: '16px 14px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {question.choices.map(c => (
          <AnswerOption
            key={c.id}
            letter={c.id}
            text={c.text}
            state={stateOf(c.id)}
            disabled={locked}
            onClick={() => !locked && setPicked(c.id)}
          />
        ))}
      </div>

      {/* Scrubber + submit */}
      <div style={{ padding: '14px 18px 0' }}>
        <div style={{ position: 'relative', marginBottom: 6 }}>
          <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,249,240,0.12)', overflow: 'hidden' }}>
            <div style={{
              width: `${pct}%`, height: '100%',
              background: `linear-gradient(90deg, ${PL.hotPink} 0%, ${PL.goldBright} 100%)`,
              boxShadow: `0 0 8px ${PL.goldBright}`,
            }}/>
          </div>
          <div style={{
            position: 'absolute', top: '50%',
            left: `${pct}%`, transform: 'translate(-50%, -50%)',
            width: 12, height: 12, borderRadius: '50%',
            background: PL.goldBright, border: `2px solid ${PL.black}`,
            boxShadow: `0 0 10px ${PL.goldBright}, 0 2px 4px rgba(0,0,0,0.4)`,
          }}/>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 700,
          color: 'rgba(255,249,240,0.55)', letterSpacing: '0.08em',
        }}>
          <span>Q {String(positionInAct).padStart(2, '0')} / {total}</span>
          <span>SCENE {sessionAnswered + 1}/{sessionTarget}</span>
        </div>

        <div style={{
          marginTop: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
        }}>
          <button onClick={submit} disabled={!picked || locked} style={{
            width: 'auto', padding: '14px 28px', minHeight: 62, borderRadius: 32,
            background: picked && !locked
              ? `linear-gradient(180deg, ${PL.hotPink} 0%, ${PL.hotPinkDeep} 100%)`
              : 'rgba(255,255,255,0.08)',
            border: `2px solid ${PL.black}`,
            boxShadow: picked && !locked
              ? `0 4px 0 ${PL.black}, 0 12px 28px -4px rgba(233,30,99,0.6), inset 0 1px 0 rgba(255,255,255,0.3)`
              : '0 2px 0 rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: picked && !locked ? 'pointer' : 'default',
            opacity: !picked && !locked ? 0.55 : 1,
          }}>
            <span style={{
              fontFamily: 'Inter, system-ui', fontSize: 13, fontWeight: 900,
              color: PL.cream, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>{locked ? 'Cut!' : picked ? 'Lock it in' : 'Pick a line'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AnswerOption({
  letter, text, state, disabled, onClick,
}: {
  letter: ChoiceId;
  text: string;
  state: RevealState;
  disabled: boolean;
  onClick: () => void;
}) {
  let borderColor = 'rgba(255,249,240,0.18)';
  let bg: string = 'rgba(10,10,10,0.55)';
  let letterBG = 'rgba(255,215,0,0.15)';
  let letterFG = PL.goldBright;
  let shadow = '0 2px 6px rgba(0,0,0,0.3)';
  let icon: React.ReactNode = null;

  if (state === 'selected') {
    borderColor = PL.goldBright;
    bg = 'rgba(255,215,0,0.12)';
    shadow = `0 0 0 1px ${PL.goldBright} inset, 0 4px 14px rgba(255,215,0,0.25)`;
  }
  if (state === 'correct') {
    borderColor = PL.green;
    bg = `linear-gradient(90deg, rgba(74,222,128,0.2) 0%, rgba(74,222,128,0.08) 100%)`;
    letterBG = PL.green; letterFG = PL.black;
    shadow = `0 0 0 1.5px ${PL.green} inset, 0 6px 18px rgba(74,222,128,0.3)`;
    icon = <Tag color={PL.green} fg={PL.black} label="MAZEL" />;
  }
  if (state === 'wrong') {
    borderColor = PL.red;
    bg = `linear-gradient(90deg, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.08) 100%)`;
    letterBG = PL.red; letterFG = PL.cream;
    shadow = `0 0 0 1.5px ${PL.red} inset, 0 6px 18px rgba(244,63,94,0.3)`;
    icon = <Tag color={PL.red} fg={PL.cream} label="JACKHOLE" />;
  }
  if (state === 'reveal-correct') {
    borderColor = PL.green;
    bg = 'rgba(74,222,128,0.08)';
    letterBG = PL.green; letterFG = PL.black;
    shadow = `0 0 0 1px ${PL.green} inset`;
    icon = <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 900, color: PL.green, letterSpacing: '0.18em' }}>✓ ANSWER</span>;
  }

  return (
    <button onClick={onClick} disabled={disabled} style={{
      width: '100%',
      padding: '10px 12px',
      borderRadius: 12,
      border: `1.5px solid ${borderColor}`,
      background: bg,
      backdropFilter: 'blur(8px)',
      boxShadow: shadow,
      display: 'flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      textAlign: 'left',
      transition: 'all 0.2s ease',
      color: PL.cream,
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
        color: PL.cream, lineHeight: 1.3, flex: 1,
      }}>{text}</div>
      {icon}
    </button>
  );
}

function Tag({ color, fg, label }: { color: string; fg: string; label: string }) {
  return (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{
        fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
        letterSpacing: '0.18em', color,
      }}>{label}</span>
      <span style={{
        width: 14, height: 14, borderRadius: '50%',
        background: color, border: `1px solid ${PL.black}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: fg, fontSize: 9, fontWeight: 900,
      }}>{label === 'MAZEL' ? '✓' : '✕'}</span>
    </div>
  );
}

function iconBtn(size: number): React.CSSProperties {
  return {
    width: size, height: size, borderRadius: '50%',
    background: 'rgba(10,10,10,0.5)',
    border: '1px solid rgba(255,224,236,0.2)',
    backdropFilter: 'blur(10px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  };
}
