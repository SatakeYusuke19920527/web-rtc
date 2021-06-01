import React,{useState} from 'react'

const App = () => {
  const [localPeerName, setLocalPeerName] = useState('')
  const [remotePeerName, setRemotePeerName] = useState('')

  console.log(!localPeerName)
  return localPeerName !== '' ? (
    <div>
      <h1>App</h1>
    </div>
  ) : (
      <div>
        <h1>else</h1>
      </div>
  )
}

export default App;
