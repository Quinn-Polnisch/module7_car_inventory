

function CarForm() {
  return (
    <div>
        <form action="#">
            <div className="flex flex-col align-items-center text-start justify-center">
                <div className="m-1 p-1">
                    <label htmlFor="make" className="p-1">Make</label>
                    <input type="text" name="make" placeholder="Make" className="w-full outline rounded p-1"/>
                </div>
                <div className="m-1 p-1">
                    <label htmlFor="model" className="p-1">Model</label>
                    <input type="text" name="model" placeholder="Model" className="w-full outline rounded p-1"/>
                </div>
                <div className="m-1 p-1"> 
                    <label htmlFor="year" className="p-1">Year</label>
                    <input type="text" name="year" placeholder="Year" className="w-full outline rounded p-1" />
                </div>
                <div className="align-items-center m-1 p-1 justify-center">
                    <button className="p-1 rounded bg-slate-300">
                        Submit
                    </button>
                </div>
            </div>

        </form>
    </div>
  )
}

export default CarForm