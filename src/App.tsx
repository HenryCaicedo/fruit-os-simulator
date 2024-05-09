import SettingsApp from './components/apps/Settings/SettingsApp'
import './App.css'
import Navbar from './components/apps/Settings/Navbar'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 100px)', // Adjust the value as needed
    }}>
      <div className='phone'>
        <SettingsApp />
      </div>
    </div>
  )
}

export default App
