import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './Home.module.css';

export default function Home() {
  const stats = [
    { value: '3.2K+', label: 'Active Members' },
    { value: '18+', label: 'Expert Trainers' },
    { value: '250+', label: 'Yoga Courses' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  const services = [
    {
      icon: '🌿',
      title: 'Yoga Classes',
      desc: 'From Hatha to Vinyasa, our classes are crafted for every level — beginners to advanced practitioners.',
      link: '/plans',
    },
    {
      icon: '🧘',
      title: 'Meditation',
      desc: 'Guided mindfulness sessions that help you reconnect with stillness, calm your nervous system, and restore clarity.',
      link: '/plans',
    },
    {
      icon: '🌱',
      title: 'Wellness Workshops',
      desc: 'Immersive seasonal workshops exploring breathwork, nutrition, ayurveda, and holistic lifestyle practices.',
      link: '/plans',
    },
    {
      icon: '💫',
      title: 'Personal Coaching',
      desc: 'One-on-one sessions tailored to your unique body, goals, and energy — move at your own pace.',
      link: '/trainers',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Mehta',
      role: 'Member since 2022',
      text: 'Yoga Nova completely transformed how I relate to my body. I came for flexibility and stayed for the peace.',
      img: '/images/testimonial-1.jpg',
    },
    {
      name: 'Sarah Okafor',
      role: 'Member since 2023',
      text: 'The instructors here truly care. Every class feels personal, intentional, and deeply nourishing.',
      img: '/images/testimonial-2.jpg',
    },
    {
      name: 'James Lin',
      role: 'Member since 2021',
      text: 'I was skeptical at first, but the Yin Yoga and breathwork sessions have been game-changing for stress relief.',
      img: '/images/testimonial-3.jpg',
    },
    {
      name: 'Amara Diallo',
      role: 'Member since 2023',
      text: 'Beautiful space, beautiful people, beautiful practice. Yoga Nova is my sanctuary in a busy world.',
      img: '/images/testimonial-4.jpg',
    },
  ];

  const whyUs = [
    {  title: 'Flexible Scheduling', desc: 'Morning, evening, and weekend classes to fit your life.' },
    {  title: 'Personalized Programs', desc: 'Plans designed around your goals, body type, and experience.' },
    {  title: 'Expert Instructors', desc: 'RYT-500 certified teachers with deep passion and knowledge.' },
    {  title: 'Holistic Approach', desc: 'Mind, body, and spirit — we address the whole of you.' },
  ];

  return (
    <Layout>
      <Head>
        <title>Yoga Nova — Embrace Your Inner Peace</title>
        <meta name="description" content="Transform your body and mind through nature-inspired yoga, meditation, and holistic wellness." />
      </Head>

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgImage}
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className={styles.heroOverlay} />

        </div>

        <div className="container">
          <div className={styles.heroContent}>
            <p className="label" style={{ color: 'var(--accent-light)' }}>Welcome to Yoga Nova</p>
            <h1 className={styles.heroTitle}>
              Embrace Your<br />
              <em>Inner Peace.</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Root yourself in nature. Move with intention. Discover the yoga practice that awakens your truest self.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/plans" className="btn btn-primary">Begin Your Journey</Link>
              <Link href="/trainers" className="btn btn-white">Meet Our Guides</Link>
            </div>
          </div>
        </div>

        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className={`section ${styles.aboutStrip}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImages}>
              <div className={`${styles.aboutImg1} img-placeholder`}
                style={{ backgroundImage: "url('/images/about-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className={`${styles.aboutImg2} img-placeholder`}
                style={{ backgroundImage: "url('/images/about-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className={styles.aboutBadge}>
                <span className={styles.aboutBadgeNum}>15+</span>
                <span>Years of<br />Practice</span>
              </div>
            </div>

            <div className={styles.aboutText}>
              <span className="label">Our Story</span>
              <div className="divider divider-left" />
              <h2 className="display-md">
                Helping You Find Peace<br />
                <em>Through Mindfulness</em>
              </h2>
              <p className="body-lg" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                Born from a deep love of nature and ancient wisdom, Yoga Nova is a sanctuary where movement becomes meditation. We offer thoughtfully designed classes, retreats, and coaching to help you return to yourself.
              </p>
              <p className="body-md" style={{ marginBottom: '2rem' }}>
                Whether you're stepping onto the mat for the first time or deepening a lifelong practice, our community of certified instructors will meet you exactly where you are.
              </p>
              <Link href="/trainers" className="btn btn-outline">Discover Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">What We Offer</span>
            <div className="divider" />
            <h2 className="display-md">Our Services</h2>
            <p className="body-md" style={{ marginTop: '1rem' }}>
              A complete wellness ecosystem to support every dimension of your being.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className="body-md">{s.desc}</p>
                <Link href={s.link} className={styles.serviceLink}>
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROMO BANNER ─── */}
      <section className={styles.promoBanner}>
        <div className={styles.promoBg}
          style={{ backgroundImage: "url('/images/promo-bg.jpg')" }}
        />
        <div className={styles.promoOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.promoContent}>
            <span className="label" style={{ color: 'var(--accent-light)' }}>Limited Offer</span>
            <h2 className="display-md" style={{ color: 'var(--white)', marginTop: '0.5rem' }}>
              25% Off All Fitness<br />Classes This Summer
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.75)', marginTop: '1rem', marginBottom: '2rem', fontSize: '1rem' }}>
              Join now and unlock premium access to unlimited classes, exclusive workshops, and personal coaching sessions.
            </p>
            <Link href="/plans" className="btn btn-cream">Claim Your Discount</Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <span className="label">Why Yoga Nova</span>
              <div className="divider divider-left" />
              <h2 className="display-md">
                Transform Your Mind<br />
                <em>and Body with Expert Guidance</em>
              </h2>
              <p className="body-lg" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                Our carefully curated programs blend ancient yogic wisdom with modern wellness science, delivering results that go beyond the physical.
              </p>
              <Link href="/plans" className="btn btn-primary">View All Plans</Link>
            </div>

            <div className={styles.whyCards}>
              {whyUs.map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <div>
                    <h4 className={styles.whyTitle}>{w.title}</h4>
                    <p className="body-md">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className={`section ${styles.testimonialSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Community Love</span>
            <div className="divider" />
            <h2 className="display-md">Over 200+ Reviews<br /><em>from Our Clients</em></h2>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map(t => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={`${styles.testimonialAvatar} img-placeholder`}
                    style={{ backgroundImage: `url('${t.img}')`, backgroundSize: 'cover' }}
                  />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="label" style={{ color: 'var(--accent)' }}>Start Today</span>
            <h2 className="display-md" style={{ marginTop: '0.5rem' }}>
              Ready to Begin<br /><em>Your Journey?</em>
            </h2>
            <p className="body-lg" style={{ marginTop: '1.2rem', marginBottom: '2.5rem' }}>
              Join thousands of students who've found their peace, their strength, and their community at Yoga Nova.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/plans" className="btn btn-primary">Start Free Trial</Link>
              <Link href="/contact" className="btn btn-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}