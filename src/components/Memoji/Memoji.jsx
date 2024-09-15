import memoji from '../../assets/images/my-memoji.png'
import './Memoji.css'

const Memoji = () => {
  return (
    <img src={memoji} alt="my avatar" className='memoji'/>
  )
}

export default Memoji