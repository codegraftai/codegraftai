import React from 'react';

export default function Home() {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="container">
          <div className="logo-text">CodeGraft</div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Structural Integrity for Modern Software</h1>
            <p className="hero-subtitle">
              The platform that ensures architectural coherence and prevents structural drift in high-velocity engineering teams.
            </p>
            <div className="btn-group">
              <a href="mailto:contact@codegraftai.com" className="btn btn-primary">Get Early Access</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">The Foundation of Reliable Systems</h2>
            <div className="grid">
              <div className="card">
                <h3 className="card-title">Architectural Enforcement</h3>
                <p className="card-desc">
                  Define and enforce structural invariants at the compiler and commit levels. Prevent layer violations and circular dependencies before they merge.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Drift Detection</h3>
                <p className="card-desc">
                  Continuously monitor the divergence between design intent and actual implementation. Identify shadow dependencies and structural entropy in real-time.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Automated Governance</h3>
                <p className="card-desc">
                  Scale technical leadership through automated policy enforcement. Ensure every line of code adheres to your organization's architectural standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 CodeGraft. Built for the architects of the future.</p>
        </div>
      </footer>
    </div>
  );
}
