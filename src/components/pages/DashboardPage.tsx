import PageHero from "../PageHero"
import { NEWS } from "@/data/Data"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function DashboardPage({ navigate, user, onLogout }: { navigate: (p: any) => void; user: { name: string } | null; onLogout: () => void }) {
  const kpis = [
    { label: 'Applications Today', value: '42', detail: '5 new requests', icon: '📥', color: '#0f2d5e' },
    { label: 'Pending Approvals', value: '18', detail: '3 need attention', icon: '⚠️', color: '#d97706' },
    { label: 'Documents Issued', value: '24', detail: 'Today’s certificates', icon: '📄', color: '#15803d' },
    { label: 'Support Tickets', value: '9', detail: 'Urgent follow-ups', icon: '💬', color: '#2563eb' },
  ]

  const aiActions = [
    { title: 'AI Form Assistant', description: 'Auto-suggest form fields and verify documents for Aadhaar, PAN, and certificates.', action: 'Launch Assistant', route: 'Services' },
    { title: 'Smart Eligibility Check', description: 'Predict scheme eligibility instantly using citizen profile data and service history.', action: 'Check Now', route: 'Schemes' },
    { title: 'Document Smart Fill', description: 'Generate certificate request drafts with AI-prepared upload checklists.', action: 'Create Request', route: 'Certificates' },
  ]

  const modules = [
    { key: 'Schemes', title: 'Scheme Operations', subtitle: 'Apply and manage benefits' },
    { key: 'Services', title: 'Service Requests', subtitle: 'Digital services and payments' },
    { key: 'Certificates', title: 'Certificate Desk', subtitle: 'Issue documents fast' },
    { key: 'Jobs', title: 'Job Portal', subtitle: 'CSC vacancies and listings' },
    { key: 'Help Desk', title: 'Help & Support', subtitle: 'Citizen issues and FAQs' },
    { key: 'Home', title: 'CSC Locator', subtitle: 'Find the nearest center' },
  ]

  const sidebarLinks = [
    { key: 'Home', label: 'Home' },
    { key: 'Schemes', label: 'Schemes' },
    { key: 'Services', label: 'Services' },
    { key: 'Certificates', label: 'Certificates' },
    { key: 'Help Desk', label: 'Help Desk' },
    { key: 'Jobs', label: 'Jobs' },
  ]

  return (
    <>
      <PageHero title="CSC AI Seva Center" subtitle={`Welcome back, ${user?.name ?? 'Operator'}. This dashboard brings analytics, navigation, and operational intelligence together in one place.`} tag="AI SEVA CENTER" />

      <section style={{ padding: '36px 24px', background: '#f0f4f9', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20 }}>
            <aside style={{ background: '#fff', borderRadius: 24, border: '1.5px solid #d1dae8', padding: 24, minHeight: 820, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: F.display, fontSize: 20, fontWeight: 800, color: '#0f2d5e' }}>Control Panel</div>
                <div style={{ color: '#6b7a8d', fontSize: 14 }}>Quick navigation for all CSC modules and operator tasks.</div>
              </div>

              <div style={{ background: '#eef2ff', padding: 18, borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb' }}>Operator</div>
                <div style={{ fontFamily: F.display, fontSize: 20, fontWeight: 700, color: '#0f2d5e' }}>{user?.name ?? 'CSC Agent'}</div>
                <div style={{ color: '#475569', fontSize: 13 }}>ID: CSC-0421</div>
              </div>

              <div style={{ display: 'grid', gap: 10 }}>
                {sidebarLinks.map(link => (
                  <button key={link.key} onClick={() => navigate(link.key as any)} style={{ textAlign: 'left', borderRadius: 14, border: '1px solid #e2e8f0', background: '#fff', padding: '14px 16px', color: '#0f2d5e', fontWeight: 700, cursor: 'pointer' }}>{link.label}</button>
                ))}
              </div>

              <div style={{ marginTop: 'auto', background: '#f8fafc', borderRadius: 18, padding: 18 }}>
                <div style={{ fontSize: 12, color: '#6b7a8d', marginBottom: 10 }}>Today’s focus</div>
                <div style={{ fontFamily: F.display, fontSize: 18, fontWeight: 700, color: '#0f2d5e' }}>Service delivery and verification</div>
                <div style={{ color: '#475569', fontSize: 13, marginTop: 10 }}>Review pending applications, assist with certificate requests, and update citizens quickly.</div>
              </div>
            </aside>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 24 }}>
                {kpis.map(kpi => (
                  <div key={kpi.label} style={{ background: '#fff', borderRadius: 18, padding: 20, border: '1.5px solid #d1dae8', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <div>
                        <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6b7a8d', textTransform: 'uppercase', marginBottom: 6 }}>{kpi.label}</div>
                        <div style={{ fontFamily: F.display, fontSize: 32, fontWeight: 800, color: '#0f2d5e' }}>{kpi.value}</div>
                      </div>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${kpi.color}20`, color: kpi.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{kpi.icon}</div>
                    </div>
                    <div style={{ color: '#6b7a8d', fontSize: 13 }}>{kpi.detail}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 20, marginBottom: 24 }}>
                <div style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 20, padding: 26 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 22 }}>
                    <div>
                      <div style={{ fontFamily: F.display, fontSize: 20, fontWeight: 800, color: '#0f2d5e' }}>AI Service Assistant</div>
                      <div style={{ color: '#6b7a8d', fontSize: 14, marginTop: 6 }}>AI-powered workflows to accelerate citizen service delivery.</div>
                    </div>
                    <div style={{ fontSize: 38 }}>🤖</div>
                  </div>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {aiActions.map(action => (
                      <div key={action.title} style={{ borderRadius: 16, border: '1px solid #e6eaf2', padding: 18, background: '#f8fafc' }}>
                        <div style={{ fontFamily: F.display, fontSize: 16, fontWeight: 700, color: '#0f2d5e' }}>{action.title}</div>
                        <div style={{ color: '#6b7a8d', fontSize: 13, margin: '10px 0' }}>{action.description}</div>
                        <button onClick={() => navigate(action.route as any)} style={{ padding: '10px 14px', borderRadius: 10, border: 'none', background: '#0f2d5e', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>{action.action}</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#0f2d5e', borderRadius: 20, padding: 26, color: '#fff', display: 'grid', gap: 18 }}>
                  <div>
                    <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a8c6e4', marginBottom: 10 }}>Operational pulse</div>
                    <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 800 }}>AI-driven oversight</div>
                  </div>
                  <div style={{ display: 'grid', gap: 12 }}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 16 }}>
                      <div style={{ fontSize: 11, color: '#c7d6f2', marginBottom: 8 }}>Last sync</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>2 minutes ago</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 16 }}>
                      <div style={{ fontSize: 11, color: '#c7d6f2', marginBottom: 8 }}>Active sessions</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>7 CSC operators</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 16 }}>
                      <div style={{ fontSize: 11, color: '#c7d6f2', marginBottom: 8 }}>AI recommendations</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>12 actions ready</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
                    <div>
                      <h2 style={{ fontFamily: F.display, fontSize: 22, fontWeight: 700, color: '#0f2d5e', margin: 0 }}>Quick access</h2>
                      <p style={{ color: '#6b7a8d', fontSize: 14, marginTop: 6 }}>Jump directly into the most important modules for CSC operations.</p>
                    </div>
                    <button onClick={() => navigate('Help Desk')} style={{ color: '#0f2d5e', background: 'transparent', border: '1.5px solid #0f2d5e', borderRadius: 10, padding: '10px 14px', fontWeight: 700, cursor: 'pointer' }}>View all services</button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {modules.map(module => (
                      <div key={module.key} style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #d1dae8', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ fontFamily: F.display, fontSize: 16, fontWeight: 700, color: '#0f2d5e' }}>{module.title}</div>
                        <div style={{ color: '#6b7a8d', fontSize: 13 }}>{module.subtitle}</div>
                        <button onClick={() => navigate(module.key as any)} style={{ marginTop: 'auto', padding: '10px 14px', borderRadius: 10, border: '1px solid #0f2d5e', background: 'transparent', color: '#0f2d5e', fontWeight: 700, cursor: 'pointer' }}>Open</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #d1dae8', padding: 26 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                    <div>
                      <div style={{ fontFamily: F.display, fontSize: 18, fontWeight: 700, color: '#0f2d5e' }}>Important Updates</div>
                      <div style={{ color: '#6b7a8d', fontSize: 13, marginTop: 4 }}>Stay informed about recent policy and service changes.</div>
                    </div>
                    <button onClick={() => navigate('Help Desk')} style={{ background: 'transparent', border: 'none', color: '#0f2d5e', fontWeight: 700, cursor: 'pointer' }}>See all</button>
                  </div>
                  <div style={{ display: 'grid', gap: 14 }}>
                    {NEWS.slice(0, 4).map((item, index) => (
                      <div key={index} style={{ borderRadius: 14, border: '1px solid #e6eaf2', padding: 16, background: '#f8fafc' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', marginBottom: 10 }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#0f2d5e', background: '#e8eef8', padding: '4px 10px', borderRadius: 10 }}>{item.type}</span>
                          <span style={{ fontSize: 11, color: '#6b7a8d' }}>{item.date}</span>
                        </div>
                        <div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 700, color: '#0f2d5e' }}>{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 26, display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={onLogout} style={{ padding: '12px 18px', borderRadius: 10, background: '#e8860a', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardPage
