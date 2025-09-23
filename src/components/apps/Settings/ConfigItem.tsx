import './styles/ConfigItem.css';
import { ChevronRight, BoxSelect } from 'lucide-react';
import SettingsIcon from './SettingsIcon';

interface ConfigItemProps {
  children: React.ReactNode
  isSwitch?: boolean
  icon?: React.ReactNode
}


export default function ConfigItem({ children, isSwitch, icon }: ConfigItemProps) {
  return (
    <div className='main-container'>
      <div className='parent'>
        <div className='settings-icon-container'>
        </div>
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
