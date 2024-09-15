import Memoji from '../Memoji/Memoji'
import './Sidebar.css'

export const Sidebar = () => {
    return (
        <>
            <div className="sidebar bg-dark-secondary rounded-xl h-100 p-3 flex-container justify-center">
                <Memoji/>
            </div>
        </>
    )
}