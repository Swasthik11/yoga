import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <Layout>
      <Head><title>Page Not Found — Yoga Nova</title></Head>
      <section className={styles.wrap}>
        <div className={styles.leaf}>🍃</div>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Lost in the Forest?</h2>
        <p className={styles.sub}>
          Even the most mindful practitioners take a wrong turn sometimes. Let's guide you back.
        </p>
        <Link href="/" className="btn btn-primary">Return Home</Link>
      </section>
    </Layout>
  );
}
