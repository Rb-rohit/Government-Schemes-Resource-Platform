import PageHero from "../PageHero"
import { JOBS } from "@/data/Data"

const F = { sans: "'DM Sans', sans-serif", display: "'Lexend', sans-serif", mono: "'DM Mono', monospace" }

function JobsPage() {
  return (
    <>
      <PageHero title="Job Vacancies" subtitle="Browse government job openings, application deadlines, and official links — all through the CSC network." tag="JOB ALERTS" />
      <section style={{ padding: '40px 24px 64px', background: '#fff', fontFamily: F.sans }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {JOBS.map(job => (
              <div key={job.id} style={{ background: '#fff', border: '1.5px solid #d1dae8', borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: F.display, fontSize: 18, fontWeight: 700, color: '#0f2d5e' }}>{job.title}</div>
                    <div style={{ fontSize: 13, color: '#6b7a8d', marginTop: 4 }}>{job.department}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#157a3c', background: '#e8f5ee', padding: '6px 10px', borderRadius: 10 }}>{job.type}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 12, color: '#4a5568' }}>
                  <span>Location: {job.location}</span>
                  <span>Salary: {job.salary}</span>
                </div>
                <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{job.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: 12, color: '#4a5568' }}>
                  <div style={{ background: '#f0f4f9', borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontSize: 10, letterSpacing: '0.06em', fontFamily: F.mono }}>ELIGIBILITY</div>
                    <div style={{ marginTop: 4 }}>{job.eligibility}</div>
                  </div>
                  <div style={{ background: '#f0f4f9', borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontSize: 10, letterSpacing: '0.06em', fontFamily: F.mono }}>APPLICATION DEADLINE</div>
                    <div style={{ marginTop: 4 }}>{job.closingDate}</div>
                  </div>
                </div>
                <a href={job.applyUrl} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 18px', borderRadius: 10, background: '#0f2d5e', color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Apply for Job →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default JobsPage
