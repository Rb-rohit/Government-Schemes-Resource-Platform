import { useState } from "react"
import PageHero from "../PageHero"
import SchemeCard from "../SchemeCard"
import { SCHEMES } from "@/data/Data"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function SchemesPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [search, setSearch] = useState('')
  const tabs = ['All', 'Agriculture', 'Health', 'Housing', 'Banking & Finance', 'Education', 'Women & Child', 'Social Welfare']
  const filtered = SCHEMES.filter(s => {
    const matchTab = activeTab === 'All' || s.tag === activeTab
    const matchSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.ministry.toLowerCase().includes(search.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <>
      <PageHero title="Government Schemes" subtitle="Browse 800+ central and state government schemes across all sectors. Check eligibility, understand benefits, and apply directly from here." tag="SCHEMES · YOJANAS" />
      <section style={{ padding: '40px 24px 64px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Search + filter bar */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flexGrow: 1, minWidth: 260 }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 15, pointerEvents: 'none' }}>🔍</span>
              <input placeholder="Search by scheme name or ministry..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1.5px solid #d1dae8', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: F.sans }}
                onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#0f2d5e' }}
                onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#d1dae8' }} />
            </div>
            <div style={{ fontSize: 13, color: '#6b7a8d', fontFamily: F.mono }}>
              {filtered.length} scheme{filtered.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 32, flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ padding: '7px 16px', border: 'none', borderRadius: 7, cursor: 'pointer', fontFamily: F.sans, fontSize: 13, fontWeight: activeTab === tab ? 600 : 400, color: activeTab === tab ? '#fff' : '#4a5568', background: activeTab === tab ? '#0f2d5e' : '#f0f4f9', transition: 'all 0.15s' }}>
                {tab}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#6b7a8d' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontFamily: F.display, fontSize: 20, fontWeight: 700, color: '#0f2d5e', marginBottom: 8 }}>No schemes found</div>
              <div style={{ fontSize: 14 }}>Try a different search term or category</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {filtered.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
export default SchemesPage;     