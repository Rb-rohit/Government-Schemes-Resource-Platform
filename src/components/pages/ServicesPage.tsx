import { useState } from "react";
import PageHero from "../PageHero";
import { ALL_SERVICES } from "@/data/Data";

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }



function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const serviceCategories = ['All', 'Identity', 'Finance', 'Civil', 'Business', 'Travel', 'Transport', 'Revenue', 'Welfare']
  const filtered = activeCategory === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.category === activeCategory)

  return (
    <>
      <PageHero title="Online Services" subtitle="Apply for government services, pay utility bills, track applications, and access digital documents — all through CSC centres near you." tag="DIGITAL SERVICES" />
      <section style={{ padding: '40px 24px 64px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 36, flexWrap: 'wrap' }}>
            {serviceCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: '7px 16px', border: 'none', borderRadius: 7, cursor: 'pointer', fontFamily: F.sans, fontSize: 13, fontWeight: activeCategory === cat ? 600 : 400, color: activeCategory === cat ? '#fff' : '#4a5568', background: activeCategory === cat ? '#0f2d5e' : '#f0f4f9', transition: 'all 0.15s' }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
            {filtered.map(svc => (
              <div key={svc.label} style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 12, padding: '22px', display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'pointer', transition: 'all 0.18s' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = svc.color; d.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'; d.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#d1dae8'; d.style.boxShadow = 'none'; d.style.transform = 'translateY(0)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f0f4f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{svc.icon}</div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontFamily: F.display, fontSize: 14, fontWeight: 700, color: '#0f2d5e', marginBottom: 4 }}>{svc.label}</div>
                  <div style={{ fontSize: 11, color: '#6b7a8d', marginBottom: 10, fontFamily: F.mono }}>{svc.category}</div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ background: '#f0f4f9', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#4a5568' }}>⏱ {svc.time}</div>
                    <div style={{ background: '#f0f4f9', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#4a5568' }}>₹ {svc.fee}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track application */}
      <section style={{ padding: '0 24px 64px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4080 100%)', borderRadius: 16, padding: '40px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: F.mono, fontSize: 11, color: '#f5a623', letterSpacing: '0.06em', marginBottom: 12 }}>APPLICATION TRACKER</div>
              <h3 style={{ fontFamily: F.display, fontSize: 26, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>Track Your Application</h3>
              <p style={{ color: '#a8bcd4', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Enter your application reference number and registered mobile number to check real-time status of any service request.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input placeholder="Application Reference Number" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', fontFamily: F.sans }} />
              <input placeholder="Registered Mobile Number" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', fontFamily: F.sans }} />
              <button style={{ padding: '13px', background: '#e8860a', border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: F.sans }}>Track Application →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ServicesPage;