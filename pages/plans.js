import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Plans.module.css';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 14, yearly: 10 },
    tag: null,
    color: 'light',
    desc: 'Perfect for those new to yoga or exploring a consistent practice.',
    features: [
      '4 classes per month',
      'Access to beginner library',
      'Group meditation sessions',
      'Community forum access',
      'Monthly newsletter',
    ],
    cta: 'Join Starter',
  },
  {
    name: 'Basic',
    price: { monthly: 29, yearly: 22 },
    tag: 'Most Popular',
    color: 'featured',
    desc: 'The most loved plan — unlimited classes and rich community connection.',
    features: [
      'Unlimited class access',
      'Full video library',
      'Weekly live sessions',
      'Community coaching circles',
      '1 personal session / month',
      'Workshop discounts (20%)',
    ],
    cta: 'Start 15-Day Free Trial',
  },
  {
    name: 'Premium',
    price: { monthly: 139, yearly: 99 },
    tag: 'Best Results',
    color: 'dark',
    desc: 'For the dedicated student seeking transformation with expert personal guidance.',
    features: [
      'Everything in Basic',
      'Unlimited personal sessions',
      'Custom wellness program',
      'Priority instructor access',
      'Nutrition & lifestyle coaching',
      'Retreat early-bird access',
      'Annual wellness assessment',
    ],
    cta: 'Join Premium',
  },
];

const faqs = [
  {
    q: 'Can I switch my plan at any time?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'The Basic plan includes a 15-day free trial. No credit card required to get started — just sign up and begin.',
  },
  {
    q: 'What happens after my trial ends?',
    a: "After your trial, you'll be prompted to choose a paid plan to continue. We'll send you a reminder 3 days before it expires.",
  },
  {
    q: 'Are classes live or recorded?',
    a: 'We offer both! Live sessions are scheduled throughout the week, and all classes are recorded for on-demand access.',
  },
  {
    q: 'Can I pause my membership?',
    a: 'Yes, you can pause your membership for up to 2 months per year if you need a break.',
  },
  {
    q: 'Do you offer family or group plans?',
    a: 'We offer studio and corporate wellness packages. Contact us for custom pricing and group arrangements.',
  },
];

export default function Plans() {
  const [billing, setBilling] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Membership Plans — Yoga Nova</title>
        <meta name="description" content="Choose the perfect Yoga Nova membership plan for your wellness journey. Flexible monthly or annual billing." />
      </Head>

      {/* ─── HERO ─── */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="label" style={{ color: 'var(--accent-light)' }}>Membership Plans</span>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Choose Your<br /><em>Path to Wellness</em>
            </h1>
            <p className={styles.heroSub}>
              Flexible plans designed for every stage of your journey — from curious beginner to dedicated practitioner.
            </p>
          </div>
        </div>
        <div className={styles.pageHeroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--white)"/>
          </svg>
        </div>
      </section>

      {/* ─── BILLING TOGGLE ─── */}
      <section className={`section ${styles.plansSection}`}>
        <div className="container">
          <div className={styles.toggleWrap}>
            <button
              className={`${styles.toggleBtn} ${billing === 'monthly' ? styles.active : ''}`}
              onClick={() => setBilling('monthly')}
            >Monthly</button>
            <button
              className={`${styles.toggleBtn} ${billing === 'yearly' ? styles.active : ''}`}
              onClick={() => setBilling('yearly')}
            >
              Yearly <span className={styles.saveBadge}>Save 28%</span>
            </button>
          </div>

          {/* ─── PLANS ─── */}
          <div className={styles.plansGrid}>
            {plans.map(plan => (
              <div key={plan.name} className={`${styles.planCard} ${styles[plan.color]}`}>
                {plan.tag && <div className={styles.planTag}>{plan.tag}</div>}
                <div className={styles.planHeader}>
                  <p className={styles.planName}>{plan.name}</p>
                  <div className={styles.planPrice}>
                    <span className={styles.planCurrency}>$</span>
                    <span className={styles.planAmount}>{plan.price[billing]}</span>
                    <span className={styles.planPeriod}>/mo</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className={styles.planBilled}>Billed annually</p>
                  )}
                  <p className={styles.planDesc}>{plan.desc}</p>
                </div>

                <ul className={styles.planFeatures}>
                  {plan.features.map(f => (
                    <li key={f}>
                      <span className={styles.checkIcon}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn ${plan.color === 'featured' ? 'btn-primary' : plan.color === 'dark' ? 'btn-white' : 'btn-outline'} ${styles.planCta}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARE TABLE ─── */}
      <section className={`section ${styles.compareSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Compare Plans</span>
            <div className="divider" />
            <h2 className="display-md">What's Included</h2>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th className={styles.featuredCol}>Basic</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Class Access', '4/month', 'Unlimited', 'Unlimited'],
                  ['Video Library', 'Beginner', 'Full Access', 'Full Access'],
                  ['Live Sessions', '—', '✓', '✓'],
                  ['Personal Sessions', '—', '1/month', 'Unlimited'],
                  ['Custom Program', '—', '—', '✓'],
                  ['Workshop Discount', '—', '20%', '30%'],
                  ['Nutrition Coaching', '—', '—', '✓'],
                  ['Priority Support', '—', '—', '✓'],
                ].map(([feature, ...vals], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={j === 1 ? styles.featuredCol : ''}>
                        {v === '—' ? <span className={styles.dash}>—</span> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqGrid}>
            <div className={styles.faqLeft}>
              <span className="label">Got Questions?</span>
              <div className="divider divider-left" />
              <h2 className="display-md">Frequently<br /><em>Asked Questions</em></h2>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                Can't find your answer here? We'd love to hear from you directly.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Contact Us
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
