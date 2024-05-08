import React from 'react'
import './styles/Section.css'

interface SectionProps {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className='container'>
        {children}
      </div>
    </div>
  )
}
