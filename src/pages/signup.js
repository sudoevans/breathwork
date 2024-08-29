// src/pages/signup.js
import { useState } from 'react'
import Link from 'next/link'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('en')
  const [speakName, setSpeakName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // We'll add signup logic here later
    console.log('Signup attempt', { name, email, password, language, speakName })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={speakName}
            onChange={(e) => setSpeakName(e.target.checked)}
          />
          Speak my name in sessions
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link href="/login">Already have an account? Log in</Link>
    </div>
  )
}
