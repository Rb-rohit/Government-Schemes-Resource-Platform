import { useState } from "react"
import PageHero from "../PageHero"
import { FAQS } from "@/data/Data"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }


function HelpDeskPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <PageHero title="Help Desk" subtitle="Find answers to common questions, get support, or contact us directly. We're here to help every citizen access government services." tag="SUPPORT · HELPDESK" />

      <section style={{ padding: '60px 24px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          {/* FAQs */}
          <div>
            <h2 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 700, color: '#0f2d5e', margin: '0 0 28px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ border: `1.5px solid ${openFaq === i ? '#0f2d5e' : '#d1dae8'}`, borderRadius: 10, overflow: 'hidden', transition: 'all 0.15s' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '16px 20px', background: openFaq === i ? '#e8eef8' : '#fff', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontFamily: F.sans }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#0f2d5e', lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ fontSize: 18, color: '#0f2d5e', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px', fontSize: 14, color: '#4a5568', lineHeight: 1.7 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 700, color: '#0f2d5e', margin: '0 0 28px' }}>Contact & Support</h2>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {[
                { icon: '📞', label: 'Helpline', val: '1800-121-3468', note: 'Mon–Sat, 8am–8pm (Toll-free)', color: '#0f2d5e', bg: '#e8eef8' },
                { icon: '✉️', label: 'Email Support', val: 'support@csc.gov.in', note: 'Response within 2 working days', color: '#157a3c', bg: '#e8f5ee' },
                { icon: '💬', label: 'WhatsApp', val: '+91 98180 12345', note: 'Chat support Mon–Sat, 9am–6pm', color: '#25d366', bg: '#e8fdf0' },
              ].map(c => (
                <div key={c.label} style={{ background: c.bg, border: `1px solid ${c.color}33`, borderRadius: 12, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: '#6b7a8d', marginBottom: 2, fontFamily: F.mono }}>{c.label}</div>
                    <div style={{ fontFamily: F.display, fontSize: 16, fontWeight: 700, color: c.color }}>{c.val}</div>
                    <div style={{ fontSize: 12, color: '#6b7a8d', marginTop: 2 }}>{c.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grievance form */}
            <div style={{ background: '#f0f4f9', borderRadius: 14, padding: '28px' }}>
              <h3 style={{ fontFamily: F.display, fontSize: 18, fontWeight: 700, color: '#0f2d5e', margin: '0 0 20px' }}>Submit a Grievance</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input placeholder="Full Name" style={{ padding: '11px 14px', border: '1.5px solid #d1dae8', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: F.sans, background: '#fff' }}
                  onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#0f2d5e' }}
                  onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#d1dae8' }} />
                <input placeholder="Mobile / Email" style={{ padding: '11px 14px', border: '1.5px solid #d1dae8', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: F.sans, background: '#fff' }}
                  onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#0f2d5e' }}
                  onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#d1dae8' }} />
                <select style={{ padding: '11px 14px', border: '1.5px solid #d1dae8', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: F.sans, background: '#fff', color: '#4a5568' }}>
                  <option value="">Select Issue Type</option>
                  <option>Application not processed</option>
                  <option>Wrong information provided</option>
                  <option>CSC centre behaviour</option>
                  <option>Payment issue</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Describe your issue in detail..." rows={4} style={{ padding: '11px 14px', border: '1.5px solid #d1dae8', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: F.sans, background: '#fff', resize: 'vertical' }}
                  onFocus={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#0f2d5e' }}
                  onBlur={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#d1dae8' }} />
                <button style={{ padding: '13px', background: '#0f2d5e', border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: F.sans }}>Submit Grievance</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default HelpDeskPage;


