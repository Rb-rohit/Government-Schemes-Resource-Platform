
const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function TopBanner() {
  return (
    <div style={{ backgroundColor: '#0f2d5e', color: '#cbd5e8', fontSize: '12px', fontFamily: F.sans }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '6px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>🇮🇳&nbsp; Government of India &nbsp;·&nbsp; Common Service Centres Scheme</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <span>Helpline: 1800-121-3468</span>
          <span>|</span>
          <a href="#" style={{ color: '#f5a623', textDecoration: 'none' }}>Locate CSC Centre</a>
          <span>|</span>
          <a href="#" style={{ color: '#f5a623', textDecoration: 'none' }}>Grievance Portal</a>
        </div>
      </div>
    </div>
  )
}
export default TopBanner;
