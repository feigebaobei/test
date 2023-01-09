// function
import React, {
    // useState,
    useEffect,
    Fragment,
    useReducer
} from "react";
import xx
// , {context} 
from '../a'
// import First from "./components/First";
// import MyContext from '../ctx2'

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
    let ctx = xx.useContainer()
    console.log('xx', ctx)
    useEffect(() => {}, [])
    return <Fragment>
        <div>
            Ten
            {JSON.stringify(ctx)}
            {/* <xx.ContextConsumer>
            </xx.ContextConsumer> */}
            {/* <context.Consumer>

            </context.Consumer> */}
        </div>
    </Fragment>
}
