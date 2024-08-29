// src/pages/create-session.js
import { useState } from 'react'
import GuideSelector from '../components/GuideSelector'
import PurposeSelector from '../components/PurposeSelector'
import MusicSelector from '../components/MusicSelector'

export default function CreateSession() {
  const [guide, setGuide] = useState('')
  const [purpose, setPurpose] = useState('')
  const [music, setMusic] = useState('')

  const handleCreate = () => {
    // We'll add session creation logic here later
    console.log('Creating session with', { guide, purpose, music })
  }

  return (
    <div>
      <h1>Create Your Personal Breathwork Session</h1>
      <GuideSelector onSelect={setGuide} />
      <PurposeSelector onSelect={setPurpose} />
      <MusicSelector onSelect={setMusic} />
      <button onClick={handleCreate}>Create</button>
    </div>
  )
}