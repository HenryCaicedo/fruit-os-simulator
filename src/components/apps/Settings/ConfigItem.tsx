import './styles/ConfigItem.css';
import { ChevronRight } from 'lucide-react';

interface ConfigItemProps {
  children: React.ReactNode
  isSwitch?: boolean
}


export default function ConfigItem({ children, isSwitch }: ConfigItemProps) {
  return (
    <div className='main-container'>
      <div className='parent'>
        <div className='icon-container'></div>
        <h1>
          {children}
        </h1>
      </div>
      {isSwitch ? (
        <div className='switch-container'>
          <div className='switch'></div>
        </div>
      ) : (
        <div>
          <ChevronRight className='icon' />
        </div>
      )}
    </div>
  )
}
