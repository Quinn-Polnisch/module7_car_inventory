import Modal from "./Modal"
import { useState } from "react"

function DataTable() {
    const [ open, setOpen ] = useState(false)
    // const []

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-blue-950 hover:text-white"
                    onClick={handleOpen}
                >

                        Add a Car
                </button>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-blue-950 hover:text-white"
                    onClick={handleOpen}
                >
                        Update a Car
                </button>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-blue-950 hover:text-white"
                    // onClick={deletData}
                >
                        Delete a Car
                </button>
            </div>
        </div>
    </>
  )
}

export default DataTable