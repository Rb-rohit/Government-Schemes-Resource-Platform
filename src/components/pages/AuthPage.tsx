import { useState } from "react"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function AuthPage({ onAuth, mode = 'login' }: { onAuth: (user: { name: string }) => void; mode?: 'login' | 'register' }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('CSC Staff')

  function submit(e: any) {
    e.preventDefault()
    // Minimal client-side "auth" — replace with real backend later
    if (!name) return alert('Enter name')
    onAuth({ name })
  }

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 24, fontFamily: F.sans }}>
      <div style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 12, padding: 28 }}>
        <h2 style={{ fontFamily: F.display, fontSize: 22, margin: 0, color: '#0f2d5e' }}>{mode === 'login' ? 'CSC Login' : 'Register as CSC'}</h2>
        <p style={{ color: '#6b7a8d', marginTop: 8 }}>Sign in to access the CSC dashboard and manage citizen applications.</p>
        <form onSubmit={submit} style={{ display: 'grid', gap: 12, marginTop: 14 }}>
          <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} style={{ padding: 12, borderRadius: 8, border: '1.5px solid #d1dae8', outline: 'none' }} />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: 12, borderRadius: 8, border: '1.5px solid #d1dae8', outline: 'none' }} />
          <select value={role} onChange={e => setRole(e.target.value)} style={{ padding: 12, borderRadius: 8, border: '1.5px solid #d1dae8' }}>
            <option>CSC Staff</option>
            <option>VLE</option>
            <option>Admin</option>
          </select>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button type="submit" style={{ flex: 1, padding: 12, borderRadius: 8, background: '#0f2d5e', color: '#fff', border: 'none', fontWeight: 700 }}>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
