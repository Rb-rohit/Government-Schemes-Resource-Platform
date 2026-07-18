const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }
function PageHero({ title, subtitle, tag, bg }: { title: string; subtitle: string; tag?: string; bg?: string }) {
  return (
    <div style={{
      background: bg ?? 'linear-gradient(160deg, #0f2d5e 0%, #091d3e 100%)',
      padding: '52px 24px 56px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #e8860a 33%, #fff 33% 66%, #157a3c 66%)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {tag && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(232,134,10,0.15)', border: '1px solid rgba(232,134,10,0.35)', borderRadius: 20, padding: '4px 12px', marginBottom: 18 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f5a623', display: 'inline-block' }} />
            <span style={{ color: '#f5a623', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', fontFamily: F.mono }}>{tag}</span>
          </div>
        )}
        <h1 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{title}</h1>
        <p style={{ color: '#a8bcd4', fontSize: 16, lineHeight: 1.65, margin: 0, maxWidth: 560 }}>{subtitle}</p>
      </div>
    </div>
  )
}
export default PageHero;