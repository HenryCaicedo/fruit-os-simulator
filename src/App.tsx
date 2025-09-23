import SettingsApp from './components/apps/Settings/SettingsApp'
import './App.css'
import AppIcon from './components/ui/AppIcon/AppIcon'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 100px)',
    }}>
      <div className='phone'>
        <SettingsApp />
      </div>
    </div>
  )
}

export default App
