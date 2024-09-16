// import { NavLink, createBrowserRouter } from 'react-router-dom'
import './Navbar.css'

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: 
//     }
// ])

const Navbar = () => {
  return (
    <div className="navbar flex-container gap-5 position-absolute bg-dark-tertiary px-5 py-3">
        {/* <NavLink title='About'/> */}
        <a href='#'>About</a>
        <a href='#'>Resume</a>
        <a href='#'>Portfolio</a>
        <a href='#'>Blog</a>
        <a href='#'>Contact</a>
    </div>
  )
}

export default Navbar