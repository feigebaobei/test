import React, {
    // useState,
    useEffect,
    Fragment,
    useReducer,
    useContext
} from "react";
import MyContext from '../ctx'
// import First from "./components/First";

export default function ReactComp () {
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
    let ctx = useContext(MyContext)
    useEffect(() => {
        console.log('nine', ctx.getParams('k'))
    }, [])
    let buttonClickHandler = () => {
        console.log('buttonClickHandler', ctx)
        console.log('qwert', ctx.getParams('k'))
    }
    return <Fragment>
        <div>
            nine
            <button onClick={buttonClickHandler}>button</button>
        </div>
        {/* <First /> */}
    </Fragment>
}