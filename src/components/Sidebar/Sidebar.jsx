import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Memoji from '../Memoji/Memoji'
import { Skill } from '../Skill/Skill'
import './Sidebar.css'
import { Info } from '../RelatedInfo/Info'
import { Footer } from '../Footer/Footer'
import { Divider } from '../Divider/Divider'

export const Sidebar = () => {
    return (
        <div className="sidebar bg-dark-secondary rounded-xl h-100 p-10 flex-container align-center flex-column">
            <Memoji/>
            <h1 className='name text-center py-5 font-weight-normal'>Muhammad Ali</h1>
            <Skill title={"Web Developer"} />
            {/* <Skill title={"Mobile App Developer"} /> */}
            <Divider/>
            <div className='flex-container flex-column gap-3 h-100'>
                <Info title={"Email"} subtitle={"m.ali@techno-soft.com"} icon={faEnvelope}/>
                <Info title={"Location"} subtitle={"Lahore, Pakistan"} icon={faLocationDot}/>
            </div>
            <Footer/>
        </div>
    )
}