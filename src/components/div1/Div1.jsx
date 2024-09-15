import MainContainer from '../MainContainer/MainContainer'
import { Sidebar } from '../Sidebar/Sidebar'
import './div1.css'


export const Div1 = () => {
  return (
    <>
      <div className='div1 flex-container h-100 w-100 gap-5 p-10'>
        <Sidebar/>
        <MainContainer/>
      </div>
    </>
  )
}
