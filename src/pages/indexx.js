import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Breathwork.ai - Personalized Breathwork Sessions</title>
        <meta name="description" content="AI-powered personalized breathwork sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Breathwork.ai</h1>
        <p>This is the landing page. We'll add more content here later.</p>
        <Link href="/login">Try Free</Link>
        <Link href="/login">Login</Link>
      </main>
    </div>
  )
}