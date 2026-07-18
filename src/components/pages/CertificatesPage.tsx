import { useState } from "react";
import PageHero from "../PageHero";
import { CERTIFICATES } from "@/data/Data";

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }


function CertificatesPage() {
  const [selected, setSelected] = useState<typeof CERTIFICATES[0] | null>(null)

  return (
    <>
      <PageHero title="Certificates & Documents" subtitle="Apply for government-issued certificates through CSC centres. View required documents, processing time, and fees before you visit." tag="CERTIFICATES · DOCUMENTS" />
      <section style={{ padding: '40px 24px 64px', background: '#f0f4f9', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 420px' : '1fr', gap: 20, alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
              {CERTIFICATES.map(cert => (
                <div key={cert.title} onClick={() => setSelected(selected?.title === cert.title ? null : cert)}
                  style={{ background: '#fff', border: `1.5px solid ${selected?.title === cert.title ? cert.color : '#d1dae8'}`, borderRadius: 12, padding: '22px', cursor: 'pointer', transition: 'all 0.18s', boxShadow: selected?.title === cert.title ? `0 0 0 2px ${cert.color}22` : 'none' }}
                  onMouseEnter={e => { if (selected?.title !== cert.title) { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = cert.color; d.style.transform = 'translateY(-2px)' } }}
                  onMouseLeave={e => { if (selected?.title !== cert.title) { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#d1dae8'; d.style.transform = 'translateY(0)' } }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: cert.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{cert.icon}</div>
                    <div>
                      <div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 700, color: '#0f2d5e' }}>{cert.title}</div>
                      <div style={{ fontSize: 11, color: '#6b7a8d', fontFamily: F.mono }}>{cert.ministry}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6, margin: '0 0 14px' }}>{cert.desc}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ background: '#f0f4f9', borderRadius: 6, padding: '5px 12px', fontSize: 12, color: '#4a5568' }}>⏱ {cert.time}</div>
                    <div style={{ background: '#f0f4f9', borderRadius: 6, padding: '5px 12px', fontSize: 12, color: '#4a5568' }}>₹ {cert.fee}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            {selected && (
              <div style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 14, overflow: 'hidden', position: 'sticky', top: 88, animation: 'fadeIn 0.2s ease' }}>
                <style>{`@keyframes fadeIn { from { opacity:0; transform:translateX(12px) } to { opacity:1; transform:translateX(0) } }`}</style>
                <div style={{ background: `linear-gradient(135deg, ${selected.color}22 0%, ${selected.bg} 100%)`, padding: '24px', borderBottom: '1px solid #e8eef8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 36 }}>{selected.icon}</div>
                    <button onClick={() => setSelected(null)} style={{ background: 'rgba(0,0,0,0.08)', border: 'none', borderRadius: 6, width: 28, height: 28, cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                  </div>
                  <h3 style={{ fontFamily: F.display, fontSize: 20, fontWeight: 800, color: '#0f2d5e', margin: '12px 0 6px' }}>{selected.title}</h3>
                  <div style={{ fontSize: 12, color: '#6b7a8d', fontFamily: F.mono }}>{selected.ministry}</div>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 22px' }}>{selected.desc}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
                    {[{ label: 'PROCESSING TIME', val: selected.time }, { label: 'FEE', val: selected.fee }].map(({ label, val }) => (
                      <div key={label} style={{ background: '#f0f4f9', borderRadius: 8, padding: '12px 14px' }}>
                        <div style={{ fontSize: 10, color: '#6b7a8d', marginBottom: 4, fontFamily: F.mono }}>{label}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#0f2d5e' }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 22 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#1a2332', marginBottom: 12, fontFamily: F.mono, letterSpacing: '0.04em' }}>REQUIRED DOCUMENTS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {selected.docs.map((doc, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#4a5568' }}>
                          <span style={{ width: 20, height: 20, borderRadius: '50%', background: selected.bg, color: selected.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button style={{ width: '100%', padding: '13px', background: '#0f2d5e', border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: F.sans }}>Apply at Nearest CSC Centre →</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
export default CertificatesPage;