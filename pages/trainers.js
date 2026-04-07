import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './Trainers.module.css';

const trainers = [
  {
    name: 'Clare Bamford',
    role: 'Head Instructor · Hatha & Vinyasa',
    bio: 'With over 15 years of experience, Clare blends classical Hatha principles with fluid Vinyasa sequences. Her classes are an invitation to slow down and truly feel.',
    specialties: ['Hatha', 'Vinyasa', 'Pranayama'],
    experience: '15 years',
    students: '1,200+',
    rating: '5.0',
    img: '/images/trainer-1.jpg',
    featured: true,
  },
  {
    name: 'Dana Kimura',
    role: 'Yin Yoga & Meditation',
    bio: 'Dana trained in Thailand and Bali, specializing in long-hold Yin postures and mindfulness meditation. She helps students find stillness in a fast-paced world.',
    specialties: ['Yin Yoga', 'Meditation', 'Ayurveda'],
    experience: '10 years',
    students: '850+',
    rating: '4.9',
    img: '/images/trainer-2.jpg',
  },
  {
    name: 'Marcus Osei',
    role: 'Power Yoga & Fitness',
    bio: 'A former athlete turned yoga teacher, Marcus brings dynamic energy and scientific precision to his Power Yoga and strength conditioning classes.',
    specialties: ['Power Yoga', 'Fitness', 'Core Work'],
    experience: '8 years',
    students: '900+',
    rating: '4.9',
    img: '/images/trainer-3.jpg',
  },
  {
    name: 'Ananya Rao',
    role: 'Restorative & Prenatal Yoga',
    bio: 'Ananya is a compassionate guide specializing in therapeutic, restorative, and prenatal yoga. She is dedicated to supporting women through every stage of life.',
    specialties: ['Restorative', 'Prenatal', 'Therapeutic'],
    experience: '12 years',
    students: '700+',
    rating: '5.0',
    img: '/images/trainer-4.jpg',
  },
  {
    name: 'Leo Vasquez',
    role: 'Ashtanga & Breathwork',
    bio: 'Leo is deeply committed to the traditional Ashtanga lineage and advanced pranayama practices. He guides students toward greater discipline and inner freedom.',
    specialties: ['Ashtanga', 'Pranayama', 'Philosophy'],
    experience: '11 years',
    students: '600+',
    rating: '4.8',
    img: '/images/trainer-5.jpg',
  },
  {
    name: 'Fatima Al-Nouri',
    role: 'Kundalini & Sound Healing',
    bio: 'Fatima brings the transformative power of Kundalini yoga, mantra, and sound healing to her students, creating deeply healing and awakening experiences.',
    specialties: ['Kundalini', 'Mantra', 'Sound Healing'],
    experience: '9 years',
    students: '550+',
    rating: '4.9',
    img: '/images/trainer-6.jpg',
  },
];

export default function Trainers() {
  return (
    <Layout>
      <Head>
        <title>Our Expert Trainers — Yoga Nova</title>
        <meta name="description" content="Meet our certified yoga instructors, each bringing unique expertise and deep passion to their teaching." />
      </Head>

      {/* ─── PAGE HERO ─── */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="label" style={{ color: 'var(--accent-light)' }}>The People Behind the Practice</span>
            <h1 className={`display-lg ${styles.pageHeroTitle}`}>
              Meet Our Expert<br /><em>Coaches</em>
            </h1>
            <p className={styles.pageHeroSub}>
              Our team of RYT-500 certified instructors brings decades of combined experience, diverse training lineages, and a shared passion for supporting your growth.
            </p>
          </div>
        </div>
        <div className={styles.pageHeroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--white)"/>
          </svg>
        </div>
      </section>

      {/* ─── FEATURED TRAINER ─── */}
      {trainers.filter(t => t.featured).map(trainer => (
        <section key={trainer.name} className={`section ${styles.featured}`}>
          <div className="container">
            <div className={styles.featuredGrid}>
              <div className={`${styles.featuredImg} img-placeholder`}
                style={{ backgroundImage: `url('${trainer.img}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
              />
              <div className={styles.featuredText}>
                <span className="label">Lead Instructor</span>
                <div className="divider divider-left" />
                <h2 className="display-md">{trainer.name}</h2>
                <p className={styles.featuredRole}>{trainer.role}</p>
                <p className="body-lg" style={{ marginTop: '1.2rem', marginBottom: '1.5rem' }}>{trainer.bio}</p>

                <div className={styles.featuredStats}>
                  <div className={styles.featuredStat}>
                    <strong>{trainer.experience}</strong>
                    <span>Experience</span>
                  </div>
                  <div className={styles.featuredStat}>
                    <strong>{trainer.students}</strong>
                    <span>Students</span>
                  </div>
                  <div className={styles.featuredStat}>
                    <strong>{trainer.rating} ★</strong>
                    <span>Rating</span>
                  </div>
                </div>

                <div className={styles.specialties}>
                  {trainer.specialties.map(s => (
                    <span key={s} className="badge badge-sage">{s}</span>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                  Book with Clare
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── ALL TRAINERS ─── */}
      <section className={`section ${styles.trainerSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Our Team</span>
            <div className="divider" />
            <h2 className="display-md">All Instructors</h2>
            <p className="body-md" style={{ marginTop: '1rem' }}>
              Each guide brings a unique gift — find the teacher whose energy resonates with yours.
            </p>
          </div>

          <div className={styles.trainersGrid}>
            {trainers.filter(t => !t.featured).map(trainer => (
              <div key={trainer.name} className={styles.trainerCard}>
                <div className={`${styles.trainerImg} img-placeholder`}
                  style={{ backgroundImage: `url('${trainer.img}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
                />
                <div className={styles.trainerBody}>
                  <div className={styles.trainerMeta}>
                    <div>
                      <h3 className={styles.trainerName}>{trainer.name}</h3>
                      <p className={styles.trainerRole}>{trainer.role}</p>
                    </div>
                    <span className={styles.trainerRating}>★ {trainer.rating}</span>
                  </div>
                  <p className="body-md">{trainer.bio}</p>
                  <div className={styles.trainerSpecialties}>
                    {trainer.specialties.map(s => (
                      <span key={s} className="badge badge-cream">{s}</span>
                    ))}
                  </div>
                  <div className={styles.trainerFooter}>
                    <span className={styles.trainerExp}>{trainer.experience} · {trainer.students} students</span>
                    <Link href="/contact" className={styles.bookBtn}>Book →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN CTA ─── */}
      <section className={`section ${styles.joinCta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="label">Get in Touch</span>
              <h2 className="display-sm" style={{ marginTop: '0.5rem' }}>
                Not sure which instructor is right for you?
              </h2>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
              <Link href="/plans" className="btn btn-outline">Explore Plans</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
