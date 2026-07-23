import { useState } from "react"
import { useEffect } from "react"

function CurrentTime () {
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    return <p>
        This is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
}

export default CurrentTime;