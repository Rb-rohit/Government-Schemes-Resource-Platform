import { useState } from "react";
import SchemeCard from "../SchemeCard";
import { ALL_SERVICES, CATEGORIES, NEWS, SCHEMES, STATS } from "@/data/Data";

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }
type Page = 'Home' | 'Schemes' | 'Services' | 'Certificates' | 'Help Desk'


function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [activeCategory, setActiveCategory] = useState('')
  const [query, setQuery] = useState('')

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #0f2d5e 0%, #0d2350 55%, #091d3e 100%)', padding: '72px 24px 80px', position: 'relative', overflow: 'hidden', fontFamily: F.sans }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #e8860a 33%, #fff 33% 66%, #157a3c 66%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,134,10,0.15)', border: '1px solid rgba(232,134,10,0.35)', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5a623', display: 'inline-block' }} />
              <span style={{ color: '#f5a623', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em' }}>DIGITAL INDIA · CSC SCHEME</span>
            </div>
            <h1 style={{ fontFamily: F.display, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              All Government<br /><span style={{ color: '#f5a623' }}>Schemes & Services</span><br />In One Place
            </h1>
            <p style={{ color: '#a8bcd4', fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}>
              Access 800+ central and state government schemes, digital certificates, utility payments, and civic services — delivered through your nearest CSC centre.
            </p>
            <div style={{ position: 'relative', maxWidth: 580, marginBottom: 28 }}>
              <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', fontSize: 18, pointerEvents: 'none' }}>🔍</span>
              <input type="text" placeholder="Search schemes, services, certificates..." value={query} onChange={e => setQuery(e.target.value)}
                style={{ width: '100%', padding: '16px 140px 16px 52px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 15, outline: 'none', fontFamily: F.sans, backdropFilter: 'blur(8px)' }} />
              <button style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', padding: '9px 22px', background: '#e8860a', border: 'none', borderRadius: 7, color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: F.sans }}>Search</button>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['PM Kisan', 'Ayushman Bharat', 'Mudra Loan', 'Aadhaar Update', 'Scholarship'].map(tag => (
                <button key={tag} style={{ padding: '5px 13px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, background: 'rgba(255,255,255,0.07)', color: '#c8d8ea', fontSize: 12, cursor: 'pointer', fontFamily: F.sans, transition: 'all 0.15s' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.15)'; b.style.color = '#fff' }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.07)'; b.style.color = '#c8d8ea' }}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: '#fff', borderBottom: '1px solid #d1dae8', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: '22px 24px', borderRight: i < 3 ? '1px solid #d1dae8' : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <div>
                <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 700, color: '#0f2d5e', lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#6b7a8d', marginTop: 2 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section style={{ padding: '64px 24px', background: '#f0f4f9', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 700, color: '#0f2d5e', margin: 0 }}>Browse by Category</h2>
              <p style={{ color: '#6b7a8d', fontSize: 14, marginTop: 6 }}>Select a sector to explore relevant schemes and services</p>
            </div>
            <button onClick={() => navigate('Schemes')} style={{ color: '#e8860a', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: F.sans }}>View all schemes →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? '' : cat.id)}
                style={{ background: activeCategory === cat.id ? cat.color : '#fff', border: `1.5px solid ${activeCategory === cat.id ? cat.color : '#d1dae8'}`, borderRadius: 10, padding: '20px', textAlign: 'left', cursor: 'pointer', transition: 'all 0.18s', fontFamily: F.sans }}
                onMouseEnter={e => { if (activeCategory !== cat.id) { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = cat.color; b.style.background = cat.bg } }}
                onMouseLeave={e => { if (activeCategory !== cat.id) { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = '#d1dae8'; b.style.background = '#fff' } }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{cat.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: activeCategory === cat.id ? '#fff' : '#1a2332', marginBottom: 4 }}>{cat.label}</div>
                <div style={{ fontSize: 12, color: activeCategory === cat.id ? 'rgba(255,255,255,0.7)' : '#6b7a8d', fontFamily: F.mono }}>{cat.count} services</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured schemes preview */}
      <section style={{ padding: '64px 24px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 700, color: '#0f2d5e', margin: 0 }}>Popular Schemes</h2>
              <p style={{ color: '#6b7a8d', fontSize: 14, marginTop: 6 }}>Most accessed schemes this month</p>
            </div>
            <button onClick={() => navigate('Schemes')} style={{ color: '#e8860a', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: F.sans }}>View all 800+ schemes →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {SCHEMES.slice(0, 3).map(s => <SchemeCard key={s.id} scheme={s} />)}
          </div>
        </div>
      </section>

      {/* Quick services strip */}
      <section style={{ padding: '64px 24px', background: '#0f2d5e', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
            <div>
              <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 700, color: '#fff', margin: 0 }}>Quick Services</h2>
              <p style={{ color: '#7a9bbf', fontSize: 14, marginTop: 6 }}>Frequently accessed services</p>
            </div>
            <button onClick={() => navigate('Services')} style={{ color: '#f5a623', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: F.sans }}>All services →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
            {ALL_SERVICES.slice(0, 8).map(svc => (
              <button key={svc.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '20px 16px', textAlign: 'center', cursor: 'pointer', fontFamily: F.sans, transition: 'all 0.18s' }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.13)'; b.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.06)'; b.style.transform = 'translateY(0)' }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{svc.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#d0dff0', lineHeight: 1.4 }}>{svc.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section style={{ padding: '64px 24px', background: '#f0f4f9', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48 }}>
          <div>
            <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 700, color: '#0f2d5e', margin: '0 0 24px' }}>Latest Updates</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NEWS.map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 22px', border: '1.5px solid #d1dae8', display: 'flex', gap: 20, cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#0f2d5e'; d.style.boxShadow = '0 4px 12px rgba(15,45,94,0.08)' }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#d1dae8'; d.style.boxShadow = 'none' }}>
                  <div style={{ flexShrink: 0, fontFamily: F.mono, fontSize: 11, color: '#6b7a8d', paddingTop: 3, width: 70 }}>{item.date}</div>
                  <div>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: item.type === 'New Feature' ? '#7c3aed' : item.type === 'Policy' ? '#157a3c' : '#e8860a', background: item.type === 'New Feature' ? '#f3eeff' : item.type === 'Policy' ? '#e8f5ee' : '#fef3e2', padding: '2px 8px', borderRadius: 10, marginBottom: 6, display: 'inline-block' }}>{item.type.toUpperCase()}</span>
                    <div style={{ fontSize: 14, color: '#1a2332', lineHeight: 1.5, fontWeight: 500 }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CSC Locator */}
          <div>
            <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 700, color: '#0f2d5e', margin: '0 0 24px' }}>Find a CSC Centre</h2>
            <div style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4080 100%)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ color: '#a8bcd4', fontSize: 13, margin: 0 }}>Enter your Pincode or use GPS to find the nearest Common Service Centre</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input placeholder="Enter Pincode" style={{ flex: 1, padding: '10px 14px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none', fontFamily: F.sans }} />
                  <button style={{ padding: '10px 18px', background: '#e8860a', border: 'none', borderRadius: 7, color: '#fff', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: F.sans }}>Search</button>
                </div>
                <button style={{ padding: '10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 7, color: '#a8bcd4', fontSize: 13, cursor: 'pointer', fontFamily: F.sans }}>📍 Use my current location</button>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <div style={{ fontSize: 11, color: '#6b7a8d', fontWeight: 700, marginBottom: 14, fontFamily: F.mono, letterSpacing: '0.05em' }}>NEARBY CENTRES</div>
                {[{ name: 'Jana Seva Kendra, Sector 21', dist: '0.8 km', status: 'Open' }, { name: 'Lok Mitra Kendram, MG Road', dist: '1.4 km', status: 'Open' }, { name: 'DigiSeva Point, Old Bus Stand', dist: '2.1 km', status: 'Closes 6pm' }].map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid #e8eef8' : 'none' }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: '#1a2332' }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: '#6b7a8d', fontFamily: F.mono }}>{c.dist} away</div>
                    </div>
                    <span style={{ fontSize: 11, color: '#157a3c', background: '#e8f5ee', padding: '3px 10px', borderRadius: 10, height: 'fit-content', fontWeight: 600 }}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage;