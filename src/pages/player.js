// src/pages/player.js
import { useState, useEffect } from 'react'
import AudioPlayer from '../components/AudioPlayer'

export default function Player() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // We'll fetch the session data here later
    setSession({ name: 'Sample Session', length: '10:00' })
  }, [])

  return (
    <div>
      <h1>Breathwork Session Player</h1>
      {session && (
        <>
          <h2>{session.name}</h2>
          <p>Length: {session.length}</p>
          <AudioPlayer />
        </>
      )}
    </div>
  )
}
