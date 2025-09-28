import React from 'react'
import { ImageOff } from 'lucide-react'
import styles from './AppIcon.module.css'

interface AppIconProps {
  color?: string,
  icon?: React.ReactNode,
  applyMask?: boolean
}

export default function AppIcon({ color, icon, applyMask = true }: AppIconProps) {

  if (!icon) {
    applyMask = true
  }

  return (
    <div className={styles['background']} style={{ backgroundColor: color }}>
      <div className={applyMask ? styles['top-gradient'] : ''} />
      <div className={applyMask ? styles['bottom-gradient'] : ''} />
      <div className={styles['icon-container']}>
        {icon ? icon : <ImageOff size={36} color="white" />}
      </div>
      <div className={applyMask ? styles['top-layer'] : ''} />
    </div>
  )
}

