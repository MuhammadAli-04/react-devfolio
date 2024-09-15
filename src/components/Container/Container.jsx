import './container.css'

const Container = ({children}) => {
  return (
    <div className='container grid-container h-100 place-center'>{children}</div>
  )
}

export default Container