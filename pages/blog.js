import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './Blog.module.css';

const featured = {
  title: 'The Ancient Roots of Pranayama: How Breathwork Heals the Modern Body',
  excerpt: 'Pranayama — the yogic science of breath — dates back thousands of years. Today, neuroscience is finally catching up to what ancient sages already knew: breath is the bridge between body and mind.',
  category: 'Breathwork',
  author: 'Clare Bamford',
  date: 'March 28, 2026',
  readTime: '8 min read',
  img: '/images/blog-featured.jpg',
  slug: 'pranayama-ancient-roots',
};

const posts = [
  {
    title: '5 Morning Rituals to Start Your Day with Intention',
    excerpt: 'How you begin your morning shapes the energy you carry all day. These five simple practices take under 20 minutes and transform everything.',
    category: 'Lifestyle',
    author: 'Dana Kimura',
    date: 'March 20, 2026',
    readTime: '5 min read',
    img: '/images/blog-1.jpg',
    slug: 'morning-rituals',
  },
  {
    title: 'Yin Yoga: The Quiet Practice That Changes Everything',
    excerpt: 'While dynamic yoga builds strength, Yin gets at something deeper — the connective tissue, the nervous system, and the emotional body.',
    category: 'Practice',
    author: 'Dana Kimura',
    date: 'March 14, 2026',
    readTime: '6 min read',
    img: '/images/blog-2.jpg',
    slug: 'yin-yoga',
  },
  {
    title: 'Eating with the Seasons: An Ayurvedic Approach to Nutrition',
    excerpt: "Ayurveda teaches that food is medicine — but the right food changes with the seasons. Here's how to align your plate with nature's rhythm.",
    category: 'Nutrition',
    author: 'Ananya Rao',
    date: 'March 7, 2026',
    readTime: '7 min read',
    img: '/images/blog-3.jpg',
    slug: 'ayurvedic-nutrition',
  },
  {
    title: 'Finding Your Edge: How to Progress Without Pushing Too Hard',
    excerpt: "The yoga edge — that place between comfort and strain — is where growth happens. But crossing it too eagerly leads to injury. Here's the art of finding it wisely.",
    category: 'Practice',
    author: 'Marcus Osei',
    date: 'February 28, 2026',
    readTime: '5 min read',
    img: '/images/blog-4.jpg',
    slug: 'finding-your-edge',
  },
  {
    title: 'The Science of Savasana: Why Rest is the Most Important Pose',
    excerpt: "Savasana is not just a cool-down. It's the pose where your body integrates everything it just learned. Skipping it? Here's why you shouldn't.",
    category: 'Science',
    author: 'Clare Bamford',
    date: 'February 20, 2026',
    readTime: '4 min read',
    img: '/images/blog-5.jpg',
    slug: 'science-of-savasana',
  },
  {
    title: 'Kundalini Awakening: Myths, Reality, and What to Expect',
    excerpt: 'Few terms in yoga are as misunderstood as Kundalini awakening. This guide separates spiritual fact from fiction and gives a grounded perspective.',
    category: 'Philosophy',
    author: 'Fatima Al-Nouri',
    date: 'February 12, 2026',
    readTime: '9 min read',
    img: '/images/blog-6.jpg',
    slug: 'kundalini-awakening',
  },
];

const categories = ['All', 'Practice', 'Breathwork', 'Nutrition', 'Lifestyle', 'Science', 'Philosophy'];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog & Insights — Yoga Nova</title>
        <meta name="description" content="Explore yoga guides, wellness insights, breathwork practices, and mindful living stories from the Yoga Nova community." />
      </Head>

      {/* ─── HERO ─── */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="label" style={{ color: 'var(--accent-light)' }}>Wisdom & Wellness</span>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              The Yoga Nova<br /><em>Journal</em>
            </h1>
            <p className={styles.heroSub}>
              Insights on practice, nature, healing, and the art of mindful living — from our community of teachers and wellness practitioners.
            </p>
          </div>
        </div>
        <div className={styles.pageHeroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--white)"/>
          </svg>
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.featuredPost}>
            <div className={`${styles.featuredImg} img-placeholder`}
              style={{ backgroundImage: `url('${featured.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className={styles.featuredContent}>
              <span className="badge badge-sage">{featured.category}</span>
              <h2 className={`display-md ${styles.featuredTitle}`}>{featured.title}</h2>
              <p className="body-lg" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>{featured.excerpt}</p>
              <div className={styles.postMeta}>
                <span>{featured.author}</span>
                <span className={styles.metaDot}>·</span>
                <span>{featured.date}</span>
                <span className={styles.metaDot}>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn btn-primary" style={{ marginTop: '1.8rem' }}>
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button key={cat} className={`${styles.filterBtn} ${cat === 'All' ? styles.filterActive : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSTS GRID ─── */}
      <section className={`section-sm ${styles.postsSection}`}>
        <div className="container">
          <div className={styles.postsGrid}>
            {posts.map(post => (
              <article key={post.slug} className={styles.postCard}>
                <div className={`${styles.postImg} img-placeholder`}
                  style={{ backgroundImage: `url('${post.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className={styles.postBody}>
                  <span className="badge badge-cream">{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className="body-md">{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.postMeta}>
                      <span>{post.author}</span>
                      <span className={styles.metaDot}>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className={styles.readLink}>Read →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className={`section ${styles.newsletterSection}`}>
        <div className="container">
          <div className={styles.newsletter}>
            <div className={styles.newsletterLeaf}>🌿</div>
            <span className="label">Stay Connected</span>
            <h2 className="display-sm" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              Weekly Wisdom, Delivered<br /><em>to Your Inbox</em>
            </h2>
            <p className="body-md" style={{ marginBottom: '2rem', maxWidth: '440px' }}>
              Join 5,000+ mindful readers who receive our curated weekly newsletter — yoga insights, seasonal recipes, and community stories.
            </p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <p className={styles.privacyNote}>No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
