import { NAV_LINKS } from "@/data/Data"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }


function Footer({ setPage }: { setPage: (p: any) => void }) {
  return (
    <footer style={{ background: '#091d3e', color: '#7a9bbf', fontFamily: F.sans }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'linear-gradient(135deg, #1a4080 0%, #2a5aa0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: F.display }}>CSC</div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontFamily: F.display }}>DigiSeva</div>
              <div style={{ fontSize: 11 }}>CSC Resource Platform</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>A Ministry of Electronics & IT initiative to deliver government services to every citizen through a network of 5.5 lakh Common Service Centres.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['🇮🇳 Hindi', 'मराठी', 'English'].map(lang => (
              <button key={lang} style={{ padding: '4px 10px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, background: 'transparent', color: '#7a9bbf', fontSize: 11, cursor: 'pointer', fontFamily: F.sans }}>{lang}</button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, fontFamily: F.display }}>Pages</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => setPage(l)} style={{ color: '#7a9bbf', fontSize: 13, textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: F.sans, transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#f5a623' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#7a9bbf' }}>{l}</button>
            ))}
          </div>
        </div>

        {[
          { title: 'Resources', links: ['Scheme Finder', 'Eligibility Check', 'Document Checklist', 'Application Status'] },
          { title: 'Organisation', links: ['About CSC', 'Become VLE', 'CSC Academy', 'Press & Media', 'RTI / Transparency'] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 16, fontFamily: F.display }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(l => (
                <a key={l} href="#" style={{ color: '#7a9bbf', fontSize: 13, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#f5a623' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#7a9bbf' }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
          <span>© 2026 CSC e-Governance Services India Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Screen Reader'].map(l => (
              <a key={l} href="#" style={{ color: '#7a9bbf', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;  