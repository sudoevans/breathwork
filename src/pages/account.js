// src/pages/account.js
import { useState, useEffect } from 'react'

export default function Account() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // We'll fetch the user data here later
    setUser({ name: 'John Doe', email: 'john@example.com', language: 'en' })
  }, [])

  const handleSave = () => {
    // We'll add save logic here later
    console.log('Saving user data', user)
  }

  return (
    <div>
      <h1>Account Settings</h1>
      {user && (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <select
            value={user.language}
            onChange={(e) => setUser({ ...user, language: e.target.value })}
          >
            <option value="en">English</option>
            <option value="sv">Swedish</option>
          </select>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  )
}