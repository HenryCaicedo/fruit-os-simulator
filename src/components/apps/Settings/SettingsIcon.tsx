import React from 'react'
import './styles/SettingsIcon.css'
import { Cloud } from 'lucide-react'

export default function SettingsIcon() {
  return (
    <div className='settings-icon-background'>
      <div className='settings-icon-top-gradient'>
      </div>
      <div className='settings-icon-bottom-gradient'>
      </div>
      <div className='settings-icon-icon-container'>
        <Cloud size='70%' color="#ffffff" />
      </div>
      <div className='settings-icon-top-layer'>

      </div>
    </div>
  )
}
