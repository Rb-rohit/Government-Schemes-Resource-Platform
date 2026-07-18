import { SCHEMES } from "@/data/Data";
import { useState } from "react";
const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function SchemeCard({ scheme }: { scheme: typeof SCHEMES[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: '#fff', border: `1.5px solid ${hovered ? '#0f2d5e' : '#d1dae8'}`, borderRadius: 12,
      padding: '24px', display: 'flex', flexDirection: 'column', transition: 'all 0.18s',
      boxShadow: hovered ? '0 8px 24px rgba(15,45,94,0.1)' : '0 1px 4px rgba(0,0,0,0.04)',
      fontFamily: F.sans,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', color: scheme.tagColor, background: scheme.tagBg, padding: '3px 10px', borderRadius: 12 }}>{scheme.tag.toUpperCase()}</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#157a3c', background: '#e8f5ee', padding: '3px 10px', borderRadius: 12 }}>● {scheme.status}</span>
      </div>
      <h3 style={{ fontFamily: F.display, fontSize: 16, fontWeight: 700, color: '#0f2d5e', margin: '0 0 6px', lineHeight: 1.3 }}>{scheme.title}</h3>
      <p style={{ fontSize: 12, color: '#6b7a8d', margin: '0 0 14px' }}>{scheme.ministry}</p>
      <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.6, margin: '0 0 18px', flexGrow: 1 }}>{scheme.description}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 18 }}>
        {[{ label: 'BENEFIT', val: scheme.benefit }, { label: 'REACH', val: scheme.beneficiaries }].map(({ label, val }) => (
          <div key={label} style={{ background: '#f0f4f9', borderRadius: 8, padding: '10px 12px' }}>
            <div style={{ fontSize: 10, color: '#6b7a8d', marginBottom: 2, fontFamily: F.mono }}>{label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0f2d5e' }}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ flex: 1, padding: '9px', border: '1.5px solid #0f2d5e', borderRadius: 7, background: 'transparent', color: '#0f2d5e', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans }}>Check Eligibility</button>
        <button style={{ flex: 1, padding: '9px', border: 'none', borderRadius: 7, background: '#0f2d5e', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans }}>Apply Now →</button>
      </div>
    </div>
  )
}
export default SchemeCard;