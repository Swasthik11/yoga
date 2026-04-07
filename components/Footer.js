import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#2e3d23"/>
        </svg>
      </div>

      <div className={styles.inner}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span>✦</span> YOGA NOVA
              </div>
              <p className={styles.tagline}>
                Rooted in nature, guided by breath. Begin your transformation today.
              </p>
              <div className={styles.socials}>
                {['Instagram', 'YouTube', 'Facebook', 'Pinterest'].map(s => (
                  <a key={s} href="#" className={styles.social} aria-label={s}>
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Explore</h4>
              <ul>
                {[['/', 'Home'], ['/trainers', 'Trainers'], ['/plans', 'Plans'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}><Link href={href} className={styles.footLink}>{label}</Link></li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Classes</h4>
              <ul>
                {['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Meditation', 'Pranayama', 'Restorative'].map(c => (
                  <li key={c}><a href="#" className={styles.footLink}>{c}</a></li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Connect</h4>
              <p className={styles.connectText}>hello@yoganova.com</p>
              <p className={styles.connectText}>+1 (555) 234-5678</p>
              <p className={styles.connectText}>Mon–Sat · 6am – 8pm</p>
              <div className={styles.newsletter}>
                <input type="email" placeholder="Your email" />
                <button className="btn btn-primary">Join</button>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} Yoga Nova. All rights reserved.</p>
            <div className={styles.legal}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
