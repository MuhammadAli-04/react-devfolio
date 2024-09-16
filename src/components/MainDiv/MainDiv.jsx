import MainContainer from '../MainContainer/MainContainer'
import { Sidebar } from '../Sidebar/Sidebar'


export const MainDiv = () => {
  return (
    <>
      <div className='flex-container h-100 w-100 gap-5 p-10'>
        <Sidebar/>
        <MainContainer/>
      </div>
    </>
  )
}
