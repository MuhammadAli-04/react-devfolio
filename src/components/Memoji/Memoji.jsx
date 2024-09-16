import memoji from '../../assets/images/my-memoji.png'
import './Memoji.css'

const Memoji = () => {
  return (
    <div className='memoji bg-dark-tertiary p-2 rounded-lg'>
      <img src={memoji} alt="my avatar" width={'50px'}  />
    </div>
  )
}

export default Memoji