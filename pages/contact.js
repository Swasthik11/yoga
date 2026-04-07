import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './Contact.module.css';
import { useState } from 'react';

const contactInfo = [
  { icon: '📍', label: 'Studio Location', value: '42 Willow Grove Lane, Portland, OR 97201' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 234-5678' },
  { icon: '✉️', label: 'Email', value: 'hello@yoganova.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat · 6:00 AM – 8:00 PM' },
];

const reasons = [
  'General Enquiry',
  'Book a Class',
  'Personal Coaching',
  'Corporate Wellness',
  'Retreat Information',
  'Partnership',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us — Yoga Nova</title>
        <meta name="description" content="Get in touch with Yoga Nova. Book a class, ask a question, or schedule a personal consultation." />
      </Head>

      {/* ─── HERO ─── */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="label" style={{ color: 'var(--accent-light)' }}>We'd Love to Hear From You</span>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Get In<br /><em>Touch</em>
            </h1>
            <p className={styles.heroSub}>
              Whether you have a question, want to book a consultation, or simply want to say hello — our team is here and happy to connect.
            </p>
          </div>
        </div>
        <div className={styles.pageHeroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--white)"/>
          </svg>
        </div>
      </section>

      {/* ─── MAIN CONTACT ─── */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* LEFT — Info */}
            <div className={styles.contactInfo}>
              <span className="label">Reach Out</span>
              <div className="divider divider-left" />
              <h2 className="display-sm">
                Let's Start a<br /><em>Conversation</em>
              </h2>
              <p className="body-lg" style={{ marginTop: '1.2rem', marginBottom: '2.5rem' }}>
                Our team typically responds within one business day. For same-day enquiries, feel free to call us directly.
              </p>

              <div className={styles.infoCards}>
                {contactInfo.map(item => (
                  <div key={item.label} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{item.icon}</div>
                    <div>
                      <p className={styles.infoLabel}>{item.label}</p>
                      <p className={styles.infoValue}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <p className={styles.followLabel}>Follow Our Journey</p>
                <div className={styles.socials}>
                  {['Instagram', 'YouTube', 'Facebook', 'Pinterest'].map(s => (
                    <a key={s} href="#" className={styles.social}>
                      {s[0]}
                      <span>{s}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>🌿</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll be in touch within one business day.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>Send Us a Message</h3>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="hello@email.com"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="reason">Reason for Contact</label>
                    <select
                      id="reason"
                      value={form.reason}
                      onChange={e => setForm({ ...form, reason: e.target.value })}
                    >
                      <option value="">Select a reason…</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell us how we can help…"
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP / STUDIO ─── */}
      <section className={`section ${styles.studioSection}`}>
        <div className="container">
          <div className={styles.studioGrid}>
            <div className={styles.studioText}>
              <span className="label">Visit the Studio</span>
              <div className="divider divider-left" />
              <h2 className="display-sm">
                Our Sacred<br /><em>Space</em>
              </h2>
              <p className="body-lg" style={{ marginTop: '1.2rem', marginBottom: '2rem' }}>
                Located in the heart of Portland's wellness district, our studio is designed as a true sanctuary — warm, light-filled, and surrounded by nature.
              </p>
              <div className={styles.studioDetails}>
                <div className={styles.studioDetail}>
                  <span className={styles.studioDetailIcon}>🚇</span>
                  <div>
                    <strong>By Transit</strong>
                    <p>Green Line — Willow Station (3 min walk)</p>
                  </div>
                </div>
                <div className={styles.studioDetail}>
                  <span className={styles.studioDetailIcon}>🚗</span>
                  <div>
                    <strong>By Car</strong>
                    <p>Free parking available on Willow Grove Lane and nearby streets</p>
                  </div>
                </div>
                <div className={styles.studioDetail}>
                  <span className={styles.studioDetailIcon}>🚲</span>
                  <div>
                    <strong>By Bike</strong>
                    <p>Secure bike storage available at the studio entrance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapPin}>📍</div>
                <p className={styles.mapLabel}>Yoga Nova Studio</p>
                <p className={styles.mapAddress}>42 Willow Grove Lane, Portland</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section className={`section ${styles.bookingSection}`}>
        <div className="container">
          <div className={styles.bookingGrid}>
            {[
              { icon: '🧘', title: 'Drop-In Class', desc: 'No commitment needed. Join any class that calls to you.', cta: 'Book a Class', href: '/plans' },
              { icon: '🌿', title: 'Free Consultation', desc: '30-minute session to find the right practice for your goals.', cta: 'Schedule Now', href: '/contact' },
              { icon: '🏡', title: 'Studio Retreat', desc: 'Immersive half-day and full-day retreats for deep renewal.', cta: 'Learn More', href: '/plans' },
            ].map(item => (
              <div key={item.title} className={styles.bookingCard}>
                <div className={styles.bookingIcon}>{item.icon}</div>
                <h3 className={styles.bookingTitle}>{item.title}</h3>
                <p className="body-md">{item.desc}</p>
                <a href={item.href} className={`btn btn-outline ${styles.bookingBtn}`}>{item.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
