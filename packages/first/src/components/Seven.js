// function
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
    console.log('ctx', ctx)
    let t = ctx.getFilter('k')
    useEffect(() => {
        console.log('useEffect', t)
    }, [t])
    return <Fragment>
        <div>seven{JSON.stringify(t)}
        </div>
        {/* <First /> */}
    </Fragment>
}
