import {useRef} from 'react'
function useParams () {
    let mapRef = useRef(new Map())
    // useF
    let getParams = (k) => {
        return mapRef.current.get(k)
    }
    let setParams = (k, v) => {
        mapRef.current.set(k, v)
    }
    return {getParams, setParams}
}
export default useParams