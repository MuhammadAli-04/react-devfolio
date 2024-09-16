import { AboutContainer } from '../AboutContainer/AboutContainer'
import Navbar from '../Navbar/Navbar'
import './MainContainer.css'

const MainContainer = () => {
  return (
    <div className='main-container bg-dark-secondary rounded-xl p-6 h-100 position-relative overflow-auto'>
      <Navbar/>
      <AboutContainer/>
    </div>
  )
}

export default MainContainer