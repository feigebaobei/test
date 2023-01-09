import React, {
    // useState,
    useEffect,
    Fragment,
    useReducer,
    useContext
} from "react";
// import First from "./components/First";
import MyContext from '../ctx'

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
        console.log('ctx', ctx)
    }, [])
    let buttonClickHander = () => {
        ctx.setParams('k', 'str' + Math.floor(Math.random() * 10))
    }
    return <Fragment>
        <div>
            eight
            <button onClick={buttonClickHander}>button</button>
        </div>
        {/* <First /> */}
    </Fragment>
}
