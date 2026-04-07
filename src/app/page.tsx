import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CodeGraft AI</h1>
          <p className="hero-subtitle">
            Architectural integrity and structural drift prevention.
          </p>
          <div className="hero-actions">
            <Link href="https://github.com/codegraftai" className="btn btn-primary">
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Architectural Enforcement</h3>
              <p className="card-desc">
                Define and enforce structural invariants at the compiler and commit levels.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Drift Detection</h3>
              <p className="card-desc">
                Continuously monitor the divergence between design intent and actual implementation.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Automated Governance</h3>
              <p className="card-desc">
                Scale technical leadership through automated policy enforcement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
            Our mission is to build robust, scalable, and accessible technology that empowers 
            the global developer community and drives meaningful innovation.
          </p>
        </div>
      </section>
    </div>
  );
}
