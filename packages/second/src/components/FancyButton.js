// // function
// import React, {
//     // useState,
//     useEffect,
//     Fragment,
//     useReducer
// } from "react";
// // import First from "./components/First";

// export default function ReactComp () {
//     let [state, dispatch] = useReducer((state, action) => {
//         let res = state
//         switch (action.type) {
//             case '':
//                 break
//             default:
//                 break
//         }
//         return res
//     }, {})
//     useEffect(() => {}, [])
//     return <Fragment>
//         <div>
//             from ReactComp
//         </div>
//         {/* <First /> */}
//     </Fragment>
// }


// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   ));

import React, { useEffect, useState } from "react"
function A (props, ref) {
    let [state, setState] = useState('hi')
    useEffect(() => {
        let timeId = setInterval(() => {
            setState('hi' + Math.floor(Math.random() * 10))
        }, 800)
        return () => {
            timeId && clearInterval(timeId)
        }
    }, [])
    return <button ref={ref} className={props.cn}>{props.children} {state}</button>
}


const FancyButton = React.forwardRef(A)
export default FancyButton     