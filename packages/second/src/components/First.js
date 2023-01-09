// function
import React, {
    useState,
    useEffect,
    Fragment,
    useReducer
} from "react";
import useOnce from "../useOnce";
// import First from "./components/First";


export default function ReactComp () {
    let cf = (v) => {
        // console.log('cf', v, v.length % 2)
        // return v
        return v.length % 3 === 2
    }
    let fn = (v) => {
        console.log('fn', v)
    }
    let [v, setV] = useState('')
    useOnce(cf, fn, 'str', v)
    // let [state, dispatch] = useReducer((state, action) => {
    //     let res = state
    //     switch (action.type) {
    //         case '':
    //             break
    //         default:
    //             break
    //     }
    //     return res
    // }, {})
    // useEffect(() => {}, [])
    let buttonClickHandler = () => {
        setV(v + 'a')
    }
    return <Fragment>
        <div>
            First
            <button onClick={buttonClickHandler}>button</button>
        </div>
        {/* <First /> */}
    </Fragment>
}