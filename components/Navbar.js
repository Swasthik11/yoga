import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/plans', label: 'Plans' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoLeaf}>✦</span>
            YOGA NOVA
          </Link>

          <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${router.pathname === link.href ? styles.active : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileBtn}>
              <Link href="/plans" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Start Free Trial
              </Link>
            </li>
          </ul>

          <div className={styles.actions}>
            <Link href="/plans" className="btn btn-primary">
              Start Free Trial
            </Link>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
