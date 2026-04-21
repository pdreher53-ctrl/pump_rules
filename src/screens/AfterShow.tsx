import { useState } from 'react';
import { useStore } from '../store/useStore';

const C = {
  hotPink: '#E91E63',
  hotPinkDeep: '#B0124D',
  goldBright: '#FFD700',
  plumDeep: '#4A0E2E',
  plumDeeper: '#2A0519',
  black: '#0A0A0A',
  cream: '#FFF9F0',
  iMessageBlue: '#3B82F6',
};

interface Msg {
  from: 'lisa' | 'me';
  text: string;
  ts: string;
}

const STARTER_MSGS: Msg[] = [
  { from: 'lisa', text: 'Darling. We need to talk about earnest money.', ts: '9:42 PM' },
  { from: 'lisa', text: 'One banking day. ONE. That check is not a bookmark.', ts: '9:42 PM' },
  { from: 'me',   text: 'Ok ok 1 banking day, into the trust account, no commingling.',                  ts: '9:43 PM' },
  { from: 'lisa', text: 'There she is. Now do me a favor and never call it your money again.',           ts: '9:43 PM' },
];

const LISA_REPLIES = [
  'Try again, sweetheart. Slower this time.',
  'Better. Now read it back to me like you mean it.',
  'There she is. Mark it down.',
  'Darling. Have you been reading?',
  'Less talking, more flashcards.',
];

export default function AfterShow() {
  const name = useStore(s => s.name) || 'You';
  const [msgs, setMsgs] = useState<Msg[]>(STARTER_MSGS);
  const [input, setInput] = useState('');

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const ts = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const next: Msg[] = [...msgs, { from: 'me', text, ts }];
    setInput('');
    setMsgs(next);
    setTimeout(() => {
      const reply = LISA_REPLIES[Math.floor(Math.random() * LISA_REPLIES.length)];
      setMsgs(m => [...m, { from: 'lisa', text: reply, ts }]);
    }, 700);
  };

  return (
    <div style={{
      width: '100%', minHeight: '100%', position: 'relative',
      background: `linear-gradient(180deg, ${C.plumDeep} 0%, ${C.plumDeeper} 50%, ${C.black} 100%)`,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* iMessage-style header */}
      <div style={{
        padding: '14px 16px 12px', borderBottom: '1px solid rgba(255,249,240,0.1)',
        background: 'rgba(10,10,10,0.6)',
        display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%', overflow: 'hidden',
          border: `1.5px solid ${C.goldBright}`,
        }}>
          <img src="/assets/Lisa_base.webp" alt="Lisa" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%',
          }}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontWeight: 900, fontSize: 16, color: C.cream, lineHeight: 1,
          }}>Lisa V.</div>
          <div style={{
            fontFamily: 'Inter, system-ui', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.18em', color: C.goldBright, textTransform: 'uppercase',
            marginTop: 2,
          }}>● Active now</div>
        </div>
      </div>

      {/* Conversation */}
      <div style={{ flex: 1, padding: '14px 14px 0', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
        {msgs.map((m, i) => {
          const mine = m.from === 'me';
          return (
            <div key={i} style={{
              display: 'flex', justifyContent: mine ? 'flex-end' : 'flex-start',
            }}>
              <div style={{
                maxWidth: '75%',
                padding: '8px 12px', borderRadius: 16,
                background: mine ? C.iMessageBlue : C.cream,
                color: mine ? C.cream : C.black,
                fontFamily: mine ? 'Inter, system-ui' : '"Playfair Display", serif',
                fontStyle: mine ? 'normal' : 'italic',
                fontSize: 13, lineHeight: 1.35,
                fontWeight: mine ? 500 : 600,
                borderBottomRightRadius: mine ? 4 : 16,
                borderBottomLeftRadius: mine ? 16 : 4,
                boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
              }}>{m.text}</div>
            </div>
          );
        })}
      </div>

      {/* Composer */}
      <div style={{
        padding: '10px 12px',
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        borderTop: '1px solid rgba(255,249,240,0.1)',
        background: 'rgba(10,10,10,0.7)',
        display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0,
      }}>
        <input
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder={`Text Lisa as ${name}\u2026`}
          style={{
            flex: 1, padding: '10px 14px', borderRadius: 22,
            background: 'rgba(255,249,240,0.08)',
            border: '1px solid rgba(255,249,240,0.18)',
            color: C.cream, fontFamily: 'Inter, system-ui', fontSize: 13,
            outline: 'none',
          }}
        />
        <button onClick={send} disabled={!input.trim()} style={{
          width: 40, height: 40, borderRadius: '50%',
          background: input.trim() ? C.iMessageBlue : 'rgba(255,255,255,0.1)',
          border: 'none', cursor: input.trim() ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.cream,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 14V2m0 0L3 7m5-5l5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
