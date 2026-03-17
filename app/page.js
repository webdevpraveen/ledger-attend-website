export default function Home() {
  return (
    <>
      {/* ═══════════ NAVIGATION ═══════════ */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span className="nav-logo-icon" style={{ overflow: 'hidden' }}>
              <img src="/icon.png" alt="LedgerAttend Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </span>
            LedgerAttend
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#tech">Tech Stack</a></li>
            <li><a href="#download" className="nav-cta">Download App</a></li>
          </ul>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">

            <h1 className="hero-title animate-in delay-1">
              Intelligent Campus<br />
              <span className="hero-title-gradient">Attendance System</span>
            </h1>
            <p className="hero-desc animate-in delay-2">
              LedgerAttend uses precision GPS geofencing,
              cryptographic timestamps, and real-time cloud analytics to ensure every
              attendance record is accurate, verified, and irrefutable.
            </p>
            <div className="hero-actions animate-in delay-3">
              <div className="hero-buttons">
                <a href="/app-arm64-v8a-release.apk" download className="btn btn-primary">
                  📥 Download for Android 11+ (v8a)
                </a>
                <a href="/app-armeabi-v7a-release.apk" download className="btn btn-outline">
                  📥 Download for Android 10 & Below (v7a)
                </a>
              </div>
              <div className="last-updated">
                <span className="last-updated-dot"></span>
                Last Updated: 17 March . 08:01 AM
              </div>
            </div>
            <div className="hero-stats animate-in delay-4">
              <div>
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Geofence Precision</div>
              </div>
              <div>
                <div className="hero-stat-value">3-Level</div>
                <div className="hero-stat-label">Role Architecture</div>
              </div>
              <div>
                <div className="hero-stat-value">Real-Time</div>
                <div className="hero-stat-label">Cloud Sync</div>
              </div>
              <div>
                <div className="hero-stat-value">00%</div>
                <div className="hero-stat-label">Proxy Tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEM → SOLUTION ═══════════ */}
      <section className="section" id="problem">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Why LedgerAttend?</span>
            <h2 className="section-title" style={{ margin: '0 auto 8px' }}>The Problem We Solve</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Traditional attendance is broken. We fixed it.
            </p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card comparison-old">
              <h3 style={{ color: '#f87171' }}>❌ The Old Way</h3>
              <ul>
                <li><span>📝</span> Manual roll calls waste 15+ minutes daily</li>
                <li><span>🎭</span> Proxy attendance is rampant and undetectable</li>
                <li><span>📊</span> Paper records are error-prone and unsearchable</li>
                <li><span>⏳</span> Report generation takes hours of manual work</li>
                <li><span>🔓</span> No verification of physical presence</li>
              </ul>
            </div>
            <div className="comparison-divider">→</div>
            <div className="comparison-card comparison-new">
              <h3 style={{ color: '#34d399' }}>✅ The LedgerAttend Way</h3>
              <ul>
                <li><span>📍</span> GPS geofencing verifies physical presence instantly</li>
                <li><span>🛡️</span> Cryptographic timestamps prevent manipulation</li>
                <li><span>☁️</span> Cloud-first data - searchable, exportable, real-time</li>
                <li><span>📈</span> One-click analytics and compliance-ready reports</li>
                <li><span>🔐</span> Zero-trust architecture with Firebase Auth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="section" id="features" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Platform Capabilities</span>
            <h2 className="section-title" style={{ margin: '0 auto 8px' }}>Powerful Features</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to modernize campus attendance operations.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(99, 102, 241, 0.12)' }}>📍</div>
              <h3 className="feature-title">Precision Geofencing</h3>
              <p className="feature-desc">
                High-accuracy GPS geofencing ensures students are physically within a 5 to 50 meter
                radius of the classroom. No spoofing, no proxy - guaranteed.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(6, 182, 212, 0.12)' }}>🛡️</div>
              <h3 className="feature-title">Anti-Proxy Architecture</h3>
              <p className="feature-desc">
                Cryptographic time-stamping with server-side validation prevents device-time
                manipulation. Every check-in is tamper-proof.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(16, 185, 129, 0.12)' }}>📊</div>
              <h3 className="feature-title">Real-Time Dashboards</h3>
              <p className="feature-desc">
                Live analytics showing ongoing classes, active events, and granular attendance
                metrics. Auto-refreshing data with zero lag.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(245, 158, 11, 0.12)' }}>👥</div>
              <h3 className="feature-title">Role-Based Access</h3>
              <p className="feature-desc">
                Three-tier RBAC system - Super Admin, Faculty, and Students - each with
                precisely scoped permissions and data visibility.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.12)' }}>📱</div>
              <h3 className="feature-title">Cross-Platform App</h3>
              <p className="feature-desc">
                Native Flutter application delivering a premium experience across both iOS (currently unreleased)
                and Android with background location integration while app is in use.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(168, 85, 247, 0.12)' }}>📋</div>
              <h3 className="feature-title">One-Click Reports</h3>
              <p className="feature-desc">
                Generate compliance-ready CSV exports instantly. Subject-wise breakdowns,
                student-level reports, and class-wide analytics at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Simple Workflow</span>
            <h2 className="section-title" style={{ margin: '0 auto 8px' }}>How It Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Three seamless steps from setup to attendance verification.
            </p>
          </div>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Admin Configures</h3>
              <p className="step-desc">
                Super Admin creates classes, adds day-wise subjects, assigns faculty,
                and verifies student registrations through the web portal.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Faculty Manages</h3>
              <p className="step-desc">
                Faculty sets geofence boundaries for their classroom, activates
                attendance sessions, and monitors check-ins in real-time via the app.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Students Check-In</h3>
              <p className="step-desc">
                Students open the app within the geofenced zone. GPS validates
                their presence, timestamps are locked, and attendance is recorded instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className="section" id="tech" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Engineering</span>
            <h2 className="section-title" style={{ margin: '0 auto 8px' }}>Built With Modern Tech</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Enterprise-grade technology stack designed for performance and scale.
            </p>
          </div>
          <div className="tech-grid">
            <div className="tech-badge">
              <span className="tech-badge-icon">💙</span> Flutter & Dart
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">⚛️</span> Next.js 15
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">🔥</span> Firebase
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">📘</span> TypeScript
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">🗄️</span> Cloud Firestore
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">▲</span> Vercel Edge
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">🔐</span> Firebase Auth
            </div>
            <div className="tech-badge">
              <span className="tech-badge-icon">📍</span> Geolocation API
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DOWNLOAD CTA ═══════════ */}
      <section className="section cta-section" id="download">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">
              Ready to Modernize Your Attendance?
            </h2>
            <p className="cta-desc">
              Download the LedgerAttend app and eliminate proxy attendance from day one.
              Choose the right version for your Android device.
            </p>
            <div className="cta-buttons">
              <a href="/app-arm64-v8a-release.apk" download className="btn btn-primary" style={{ fontSize: '16.5px', padding: '18px 40px' }}>
                📥 Android 11 & Above (v8a)
              </a>
              <a href="/app-armeabi-v7a-release.apk" download className="btn btn-outline" style={{ fontSize: '16px', padding: '18px 40px' }}>
                📥 Android 10 & Below (v7a)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/icon.png" alt="LedgerAttend Logo" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
                LedgerAttend
              </h3>
              <p>
                Geofenced attendance and campus operations ecosystem.
                Built to eliminate proxy attendance and streamline institutional workflows fluently.
              </p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#tech">Tech Stack</a>
              <a href="#download">Download</a>
            </div>
            <div className="footer-col">
              <h4>Contact & Team</h4>
              <p>Sundram Gupta <a href="tel:6307748088">6307748088</a></p>
              <p>Praveen Kr Singh <a href="tel:6306108993">6306108993</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} LedgerAttend. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
