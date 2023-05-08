import { useState } from "react"
import { Link } from 'react-router-dom'

 
function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(!isVisible)
    }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' className="font-semibold text-xl tracking-light">Garage</Link>
        </div>
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-white border rounded border-blue-900 
                bg-blue-700 hover:border-blue-300">
                <i className="fas fa-bars"></i>
            </button>
        </div>
        { isVisible ? (
            <div className="w-full block flex-grow items-center">
                <button onClick={clicked} className="p-3 m-5 bg-blue-500 justify-center">
                    <div>
                        <Link to='/' className="flex place-items-center lg:inline-block text-white">Home</Link>
                    </div>
                </button>
                <button onClick={clicked} className="p-3 m-5 bg-blue-500 justify-center">
                    <div>
                        <Link to='/about' className="flex place-items-center lg:inline-block text-white">About</Link>
                    </div>
                </button>
                <button onClick={clicked} className="p-3 m-5 bg-blue-500 justify-center">
                    <div>
                        <Link to='/dashboard' className="flex place-items-center lg:inline-block text-white">Dashboard</Link>
                    </div>
                </button>
            </div>
        ) : (
            <></>
        )}
    </nav>
  )
}

export default Navbar