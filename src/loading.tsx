import { useState, useEffect } from "react";
import "./loading.css";

function Loading() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1250)
    })

    return isLoading ? <div className="loading"><img src="/luicey/luicey.svg"/></div> : null
}

export default Loading
