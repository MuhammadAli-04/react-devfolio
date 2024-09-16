import Navbar from '../Navbar/Navbar'
import { Divider } from '../Divider/Divider'
import './MainContainer.css'
import { Heading, Subheading } from '../Heading/Heading'
import { TechnicalSkill } from '../TechnicslSkill/TechnicalSkill'

import WebDesign from '../../assets/images/web-design.png'
import WebDev from '../../assets/images/web-dev.png'
import MobileDev from '../../assets/images/mobile-dev.png'
import MVP from '../../assets/images/business.png'
import { TechnicalSkillList } from '../TechnicalSkillList/TechnicalSkillList'

const MainContainer = () => {
  return (
    <div className='main-container bg-dark-secondary rounded-xl p-8 position-relative'>
      <Navbar/>
      <Heading title={"About Me"} />
      <Divider/>
      <p>I’m a web developer with expertise in the MERN stack and a mobile developer skilled in Flutter for Android and iOS. I’ve worked on SaaS, social, and healthcare platforms, building scalable, user-friendly solutions that meet modern needs.<br/><br/>Guided by a user-centric design philosophy, I focus on creating functional yet visually appealing products. Whether its social or healthcare apps, my aim is to deliver impactful solutions that offer smooth and engaging experiences.</p>
      <div className='py-3'></div>
      <Subheading title={"What I'm Doing"}/>
      <div className='py-3'></div>
      <TechnicalSkillList>
        <TechnicalSkill title={'UI/UX Design'} subtitle={'Modern and high-quality design made at a professional level'} iconPath={WebDesign}/>
        <TechnicalSkill title={'Web Development'} subtitle={'High quality development of sites at the performance level'} iconPath={WebDev}/>
        <TechnicalSkill title={'Mobile App Development'} subtitle={'Professional development of applications for iOS and Android'} iconPath={MobileDev}/>
        <TechnicalSkill title={'MVP and Rapid-Prototyping'} subtitle={'Rapid Prototyping and great experience in developing Minimum Viable Product'} iconPath={MVP}/>
      </TechnicalSkillList>
    </div>
  )
}

export default MainContainer