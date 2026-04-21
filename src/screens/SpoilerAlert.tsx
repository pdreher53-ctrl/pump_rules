import { useMemo } from 'react';
import { useStore } from '../store/useStore';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
};

function diffDays(iso?: string | null) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return Math.round((d.getTime() - today.getTime()) / 86_400_000);
}

const PLAN: Array<{ day: number; focus: string; minutes: number }> = [
  { day: 1,  focus: 'License Law basics',           minutes: 25 },
  { day: 2,  focus: 'Agency duties · OLD CAR',      minutes: 25 },
  { day: 3,  focus: 'Fair Housing protected classes', minutes: 25 },
  { day: 4,  focus: 'Agency vs subagency',          minutes: 25 },
  { day: 5,  focus: 'Contracts: offer, acceptance', minutes: 30 },
  { day: 6,  focus: 'Contingencies & earnest money',minutes: 30 },
  { day: 7,  focus: 'Mid-week recap',               minutes: 20 },
  { day: 8,  focus: 'Disclosure & material defects',minutes: 30 },
  { day: 9,  focus: 'RESPA, TRID, Reg Z',           minutes: 30 },
  { day: 10, focus: 'Financing types',              minutes: 25 },
  { day: 11, focus: 'Property: deeds & estates',    minutes: 30 },
  { day: 12, focus: 'Property: liens & easements',  minutes: 25 },
  { day: 13, focus: 'GA O.C.G.A. \u00a743-40',      minutes: 30 },
  { day: 14, focus: 'GREC rules cram',              minutes: 30 },
  { day: 15, focus: 'BRRETA',                       minutes: 25 },
  { day: 16, focus: 'GA-specific scenarios',        minutes: 30 },
  { day: 17, focus: 'Mock exam · National',         minutes: 90 },
  { day: 18, focus: 'Mock exam · GA',               minutes: 75 },
  { day: 19, focus: 'Weak-domain drills',           minutes: 45 },
  { day: 20, focus: 'Light review',                 minutes: 20 },
  { day: 21, focus: 'EXAM DAY \u2013 take a breath',minutes: 0 },
];

export default function SpoilerAlert() {
  const examDate = useStore(s => s.examDate);
  const days = diffDays(examDate);
  const todayIndex = days !== null ? Math.max(0, PLAN.length - 1 - Math.min(PLAN.length - 1, days)) : 0;

  const niceExam = useMemo(() => {
    if (!examDate) return 'set in Casting Call';
    return new Date(examDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }, [examDate]);

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 35% at 50% 0%, rgba(233, 30, 99, 0.28) 0%, transparent 60%),
        linear-gradient(180deg, ${C.plumDeep} 0%, ${C.plumDeeper} 45%, ${C.black} 100%)
      `,
      paddingBottom: 40,
    }}>
      <div style={{ position: 'relative', zIndex: 1, padding: '20px 18px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '4px 12px',
            background: C.hotPink, transform: 'rotate(-2deg)',
            border: `1.5px solid ${C.black}`,
            boxShadow: `0 3px 0 ${C.black}`,
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
            letterSpacing: '0.3em', color: C.cream,
          }}>⚠ SPOILER ALERT</div>
          <div style={{
            marginTop: 14,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 36, color: C.cream,
            lineHeight: 1, letterSpacing: -1,
          }}>The 21-Day Runway</div>
          <div style={{
            marginTop: 8,
            fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 500,
            color: 'rgba(255,249,240,0.65)',
          }}>Series finale: <span style={{ color: C.goldBright, fontWeight: 800 }}>{niceExam}</span></div>
        </div>

        {/* Big countdown */}
        <div style={{
          marginTop: 18, padding: '20px 16px', borderRadius: 16,
          background: `linear-gradient(180deg, rgba(255,215,0,0.16) 0%, rgba(74,14,46,0.6) 100%)`,
          border: `1.5px solid ${C.goldBright}`,
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
            letterSpacing: '0.3em', color: C.goldBright, textTransform: 'uppercase',
          }}>Days Until Air</div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 96, color: C.cream, lineHeight: 1,
            textShadow: `0 0 24px rgba(255,215,0,0.5), 0 4px 0 ${C.black}`,
            letterSpacing: -3,
          }}>{days !== null ? Math.max(0, days) : '—'}</div>
        </div>

        {/* Plan */}
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {PLAN.map((p, i) => {
            const isToday = i === todayIndex;
            const isPast = i < todayIndex;
            return (
              <div key={p.day} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 10,
                background: isToday ? 'rgba(233,30,99,0.18)' : 'rgba(10,10,10,0.5)',
                border: isToday ? `1px solid ${C.hotPink}` : `1px solid rgba(255,249,240,0.1)`,
                opacity: isPast ? 0.5 : 1,
                boxShadow: isToday ? '0 0 16px rgba(233,30,99,0.25)' : 'none',
              }}>
                <div style={{
                  width: 36, flexShrink: 0,
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontWeight: 900, fontSize: 18, color: isToday ? C.hotPink : C.goldBright,
                  textAlign: 'center',
                }}>D{p.day}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 700,
                    color: C.cream, lineHeight: 1.25,
                  }}>{p.focus}</div>
                  <div style={{
                    fontFamily: 'Inter, system-ui', fontSize: 10, fontWeight: 500,
                    color: 'rgba(255,249,240,0.5)', marginTop: 2,
                  }}>{p.minutes ? `${p.minutes} min · 25-min studio session` : 'Take the exam'}</div>
                </div>
                {isToday && (
                  <div style={{
                    padding: '2px 7px', borderRadius: 4,
                    background: C.hotPink, color: C.cream,
                    fontFamily: 'Inter, system-ui', fontSize: 8, fontWeight: 900,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                  }}>Today</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
