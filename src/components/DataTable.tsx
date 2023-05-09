import Modal from "./Modal"
import { server_calls } from "../api/server";
import { useGetData } from "../customHooks/FetchData";
import { useState } from "react"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'year', headerName: "Year", flex: 1},

]

function DataTable() {
    const [ open, setOpen ] = useState(false)
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
        
        // TODO finish writing and test
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        {/* buttons */}
        <div className="flex flex-row">
            <div>
                <button 
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-blue-950 hover:text-white"
                    onClick={() => handleOpen()}
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
                    onClick={deleteData}
                >
                        Delete a Car
                </button>
            </div>
        </div>

        {/* data table section */}

        <div className={ open ? "hidden" : "container mx-5 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
        >
            <h2 className="p-3 bg-slate-300 my-3 rounded">My Cars</h2>
            <DataGrid 
                rows={contactData} 
                columns={columns} 
                rowsPerPageOptions={[5]} 
                checkboxSelection={true} 
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
            />
        </div>
    </>
  )
}

export default DataTable