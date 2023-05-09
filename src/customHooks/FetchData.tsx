import { useEffect, useState } from "react"
import { server_calls } from "../api/server"


export const useGetData = () => {
    const [ contactData, setData] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])  // nothing every time something happens, 
    //[] when component comes into existence, componentName only when componentName is changed

    return { contactData, getData:handleDataFetch } 
}

