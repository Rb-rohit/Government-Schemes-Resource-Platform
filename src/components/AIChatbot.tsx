import { useEffect, useRef, useState } from "react"


type Message = { role: 'user' | 'bot'; text: string; time: string }

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }


const BOT_RESPONSES: Record<string, string> = {
  'pm kisan': 'PM Kisan Samman Nidhi provides ₹6,000/year in three instalments to small and marginal farmers with land up to 2 hectares. Apply at your nearest CSC centre with Aadhaar, land records, and bank passbook.',
  'ayushman': 'Ayushman Bharat PM-JAY offers ₹5 lakh health cover per family per year for secondary and tertiary hospitalisation. Check eligibility at pmjay.gov.in or visit a CSC centre.',
  'mudra': 'PM Mudra Yojana offers collateral-free loans — Shishu (up to ₹50K), Kishore (₹50K–5L), Tarun (₹5L–10L). Apply through any empanelled bank or CSC.',
  'aadhaar': 'For Aadhaar update (name, address, mobile), visit your nearest CSC centre with valid ID proof. Online updates for some fields are available at myaadhaar.uidai.gov.in.',
  'pan': 'You can apply for a new PAN card or correction via CSC centres. Bring proof of identity, address, and date of birth. Processing takes 7–15 working days.',
  'scholarship': 'The National Scholarship Portal (scholarships.gov.in) offers pre-matric, post-matric, and merit-cum-means scholarships. Apply online with Aadhaar-linked bank account and mark sheets.',
  'ration card': "Ration card applications are handled by your state's Food & Civil Supplies department. Visit the CSC centre with Aadhaar, family photo, and income certificate.",
  'pension': 'For NPS (National Pension System), APY (Atal Pension Yojana), or state pension schemes, CSC centres can register and process applications. Bring Aadhaar and bank details.',
  'passport': 'Passport applications are processed through Passport Seva Kendras. CSC can assist with form filling and document verification. Apply at passportindia.gov.in.',
  'hello': "Hello! I'm DigiSeva AI, your government scheme assistant. Ask me about any scheme, service, or document — I'm here to help! 🇮🇳",
  'hi': "Namaste! I'm DigiSeva AI. How can I help you access government services today?",
  'help': 'I can help you with:\n• Finding government schemes you\'re eligible for\n• Explaining benefits and how to apply\n• Locating your nearest CSC centre\n• Document requirements for any service\n\nJust type your query!',
}

function getBotReply(input: string): string {
  const lower = input.toLowerCase()
  for (const [key, reply] of Object.entries(BOT_RESPONSES)) {
    if (lower.includes(key)) return reply
  }
  if (lower.includes('scheme') || lower.includes('yojana')) return "We have 800+ schemes across Agriculture, Health, Education, Housing, and more. Could you share more details — such as your occupation or state — so I can suggest the most relevant schemes for you?"
  if (lower.includes('certificate') || lower.includes('document')) return "CSC centres issue income certificates, caste certificates, domicile certificates, and more. Requirements vary by state. Would you like details for a specific certificate?"
  if (lower.includes('csc') || lower.includes('centre') || lower.includes('center')) return "There are 5.5 lakh+ CSC centres across India. Use the 'Find a CSC Centre' section on the Home page, or call our helpline at 1800-121-3468 to locate the nearest one."
  return "I didn't quite catch that. You can ask me about PM Kisan, Ayushman Bharat, Mudra Loan, Aadhaar, PAN, scholarships, ration cards, or any government service. How can I assist?"
}

function nowTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

const SUGGESTIONS = ['PM Kisan scheme', 'Health insurance', 'Mudra loan', 'Aadhaar update', 'Scholarships']

function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Namaste! 🙏 I'm DigiSeva AI — your personal guide to government schemes and services. Ask me anything!", time: nowTime() },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, typing])

  function sendMessage(text?: string) {
    const msg = (text ?? input).trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg, time: nowTime() }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getBotReply(msg), time: nowTime() }])
    }, 900 + Math.random() * 600)
  }

  return (
    <>
      {open && (
        <div style={{ position: 'fixed', bottom: 96, right: 24, width: 370, maxHeight: '75vh', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(15,45,94,0.22)', border: '1.5px solid #d1dae8', zIndex: 1000, fontFamily: F.sans, animation: 'slideUp 0.22s ease' }}>
          <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}} @keyframes blink{0%,100%{opacity:0.3}50%{opacity:1}}`}</style>
          <div style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4080 100%)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #e8860a, #f5a623)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🤖</div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: F.display }}>DigiSeva AI</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                <span style={{ color: '#a8bcd4', fontSize: 11 }}>Online · Government Scheme Assistant</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 6, color: '#fff', width: 28, height: 28, cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>

          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: m.role === 'user' ? 'row-reverse' : 'row', gap: 8, alignItems: 'flex-end' }}>
                {m.role === 'bot' && <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #0f2d5e, #1a4080)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>🤖</div>}
                <div style={{ maxWidth: '78%' }}>
                  <div style={{ padding: '10px 14px', borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: m.role === 'user' ? '#0f2d5e' : '#f0f4f9', color: m.role === 'user' ? '#fff' : '#1a2332', fontSize: 13.5, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>{m.text}</div>
                  <div style={{ fontSize: 10, color: '#9aabb8', marginTop: 3, textAlign: m.role === 'user' ? 'right' : 'left', fontFamily: F.mono }}>{m.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #0f2d5e, #1a4080)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>🤖</div>
                <div style={{ background: '#f0f4f9', borderRadius: '14px 14px 14px 4px', padding: '12px 16px', display: 'flex', gap: 4, alignItems: 'center' }}>
                  {[0, 1, 2].map(j => <span key={j} style={{ width: 6, height: 6, borderRadius: '50%', background: '#7a9bbf', display: 'inline-block', animation: `blink 1.2s ease ${j * 0.2}s infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 && (
            <div style={{ padding: '0 14px 10px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => sendMessage(s)}
                  style={{ padding: '5px 12px', border: '1.5px solid #d1dae8', borderRadius: 14, background: '#fff', color: '#0f2d5e', fontSize: 11.5, fontWeight: 500, cursor: 'pointer', fontFamily: F.sans, transition: 'all 0.15s' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#e8eef8'; b.style.borderColor = '#0f2d5e' }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#fff'; b.style.borderColor = '#d1dae8' }}>{s}</button>
              ))}
            </div>
          )}

          <div style={{ padding: '10px 14px 14px', borderTop: '1px solid #e8eef8', display: 'flex', gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Ask about any scheme or service..."
              style={{ flex: 1, padding: '10px 14px', border: '1.5px solid #d1dae8', borderRadius: 10, fontSize: 13.5, outline: 'none', fontFamily: F.sans, color: '#1a2332', transition: 'border-color 0.15s' }}
              onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#0f2d5e' }}
              onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#d1dae8' }} />
            <button onClick={() => sendMessage()} disabled={!input.trim()}
              style={{ width: 40, height: 40, border: 'none', borderRadius: 10, background: input.trim() ? '#0f2d5e' : '#e8eef8', color: input.trim() ? '#fff' : '#9aabb8', fontSize: 17, cursor: input.trim() ? 'pointer' : 'default', transition: 'all 0.15s', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>➤</button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(o => !o)}
        style={{ position: 'fixed', bottom: 28, right: 24, width: 60, height: 60, borderRadius: '50%', border: 'none', cursor: 'pointer', zIndex: 1001, background: open ? '#091d3e' : 'linear-gradient(135deg, #0f2d5e 0%, #1a4080 100%)', boxShadow: '0 8px 24px rgba(15,45,94,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, transition: 'all 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
        title="DigiSeva AI Assistant">
        {open ? '✕' : '🤖'}
        {!open && <span style={{ position: 'absolute', top: 4, right: 4, width: 12, height: 12, borderRadius: '50%', background: '#4ade80', border: '2px solid #fff' }} />}
      </button>
    </>
  )
}
export default AIChatbot;