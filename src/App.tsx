import SettingsApp from './components/apps/Settings/SettingsApp'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='screen-container'>
        <SettingsApp />
      </div>
    </div>
  )
}

export default App
