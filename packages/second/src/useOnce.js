import { useEffect, useState } from "react"

export default function useOnce (cf, fn, args, dep) {
    let [hasRun, setHasRun] = useState(false)
    useEffect(() => {
        if (cf(dep) && !hasRun) {
            fn(args)
            setHasRun(true)
        }
    }, [dep, args, cf, fn, hasRun])
}