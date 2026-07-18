import UserMenu from './UserMenu'


const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function Header({ setPage, isAuthenticated, userName, onLogout }: { setPage: (p: any) => void; isAuthenticated?: boolean; userName?: string | undefined; onLogout?: () => void }) {
  return (
    <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #d1dae8', position: 'sticky', top: 0, zIndex: 100, fontFamily: F.sans }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 68, gap: 40 }}>
        <button onClick={() => setPage('Home')} style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4080 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: F.display }}>CSC</div>
          <div>
            <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 16, color: '#0f2d5e', lineHeight: 1.2 }}>DigiSeva</div>
            <div style={{ fontSize: 11, color: '#6b7a8d', lineHeight: 1.2 }}>CSC Resource Platform</div>
          </div>
        </button>

        <div style={{ flexGrow: 1 }} />

        <div style={{ display: 'flex', gap: 10, flexShrink: 0, alignItems: 'center' }}>
          {isAuthenticated ? (
            <>
              <button onClick={() => setPage('Dashboard')} style={{ padding: '8px 14px', border: '1.5px solid #0f2d5e', borderRadius: 7, background: 'transparent', color: '#0f2d5e', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans }}>Dashboard</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <UserMenu name={userName ?? 'User'} />
                <button onClick={() => onLogout && onLogout()} style={{ padding: '8px 14px', border: 'none', borderRadius: 7, background: '#e8860a', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans }}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => setPage('Login')} style={{ padding: '8px 18px', border: '1.5px solid #0f2d5e', borderRadius: 7, background: 'transparent', color: '#0f2d5e', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans, transition: 'all 0.15s' }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#0f2d5e'; b.style.color = '#fff' }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.color = '#0f2d5e' }}>Login</button>
              <button onClick={() => setPage('Register')} style={{ padding: '8px 18px', border: 'none', borderRadius: 7, background: '#e8860a', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.sans, transition: 'all 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4780a' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e8860a' }}>Register</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header;