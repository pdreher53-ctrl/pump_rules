import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  red: '#F43F5E',
  redDeep: '#9F1D3A',
};

export default function StreakBreak() {
  const navigate = useNavigate();
  const bestStreak = useStore(s => s.bestStreak);

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `
        radial-gradient(ellipse 90% 40% at 50% 0%, rgba(244,63,94,0.25) 0%, transparent 60%),
        linear-gradient(180deg, #2C0810 0%, ${C.plumDeeper} 50%, ${C.black} 100%)
      `,
      paddingBottom: 30,
    }}>
      <div style={{ position: 'relative', zIndex: 1, paddingTop: 40 }}>
        {/* AND CUT */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '6px 14px',
            background: C.black, border: `1.5px solid ${C.cream}`,
            transform: 'rotate(-2deg)',
            boxShadow: `0 4px 0 rgba(244,63,94,0.5)`,
          }}>
            <div style={{
              fontFamily: 'Inter, system-ui', fontSize: 11, fontWeight: 900,
              letterSpacing: '0.4em', color: C.cream,
            }}>AND \u2026 CUT.</div>
          </div>
          <div style={{
            marginTop: 14,
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 44, color: C.cream,
            lineHeight: 1, letterSpacing: -1,
            textShadow: `0 0 24px rgba(244,63,94,0.5)`,
          }}>The streak<br/>broke, darling.</div>
          <div style={{
            marginTop: 10,
            fontFamily: '"Bonheur Royale", cursive', fontSize: 26,
            color: C.cream,
            textShadow: `0 0 10px rgba(244,63,94,0.7)`,
          }}>...but Lisa\u2019s here.</div>
        </div>

        {/* Lisa with disapproval */}
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <img src="/assets/LISA_disapprove.png" alt="Lisa disapproving" style={{
            height: 220, width: 'auto',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))',
          }}/>
        </div>

        {/* Save offer */}
        <div style={{ margin: '18px 18px 0' }}>
          <div style={{
            padding: '14px 16px', borderRadius: 14,
            background: `linear-gradient(180deg, rgba(255,215,0,0.16) 0%, rgba(74,14,46,0.6) 100%)`,
            border: `1.5px dashed ${C.goldBright}`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontSize: 28 }}>🛡️</span>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 900,
                letterSpacing: '0.18em', color: C.goldBright, textTransform: 'uppercase',
              }}>Lisa\u2019s 60-second save</div>
              <div style={{
                marginTop: 4,
                fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                fontWeight: 700, fontSize: 13, color: C.cream, lineHeight: 1.35,
              }}>Three rapid-fire questions. Get two right and your streak holds at <span style={{ color: C.goldBright, fontWeight: 900 }}>{Math.max(bestStreak, 1)}</span>.</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ margin: '14px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button onClick={() => navigate('/play')} style={{
            width: '100%', padding: '14px 18px', borderRadius: 14,
            background: `linear-gradient(180deg, ${C.goldBright} 0%, #A8820E 100%)`,
            border: `2px solid ${C.black}`,
            boxShadow: `0 4px 0 ${C.black}, 0 12px 28px -4px rgba(255, 215, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.4)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer',
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 16, color: C.black, letterSpacing: -0.2,
          }}>Take Lisa\u2019s save</button>
          <button onClick={() => navigate('/recap')} style={{
            width: '100%', padding: '12px 18px', borderRadius: 12,
            background: 'rgba(255,255,255,0.06)',
            border: `1.5px solid rgba(255,249,240,0.3)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            cursor: 'pointer', color: C.cream,
            fontFamily: 'Inter, system-ui', fontSize: 12, fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>Skip · go to recap</button>
        </div>
      </div>
    </div>
  );
}
