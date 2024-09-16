import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Info.css'

export const Info = ({title, subtitle, icon}) => {
    return (
        <div className='flex-container align-center gap-3'>
            <FontAwesomeIcon icon={icon}/>
            <div className='flex-container flex-column'>
                <p className='info-title text-dark-tertiary'>{title}</p>
                <p className='info-subtitle'>{subtitle}</p>
            </div>
            
        </div>
    )
}