import Input from "./Input"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { choosMake, chooseModel, choseYear } from "../redux/slices/RootSlice"

// interfaces

interface CarFormProps {
    id?: string[]
}

function CarForm(props: CarFormProps) {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data);
            console.log(`Updated: ${ data } ${ props.id }`);
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            // use dispatch to update our state in our store
            dispatch(choosMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(choseYear(data.year));
    
            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000);
            
        }
        
      }

  return (
    <div>
        <form onSubmit={(handleSubmit(onSubmit))}>
            <div className="flex flex-col align-items-center text-start justify-center">
                <div className="m-1 p-1">
                    <label htmlFor="make" className="p-1">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make" />
                </div>
                <div className="m-1 p-1">
                    <label htmlFor="model" className="p-1">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model" />
                </div>
                <div className="m-1 p-1"> 
                    <label htmlFor="year" className="p-1">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
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