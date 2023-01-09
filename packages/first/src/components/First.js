import { useContext, useEffect } from "react"
// import { context } from "../ct"
import MyContext from '../ctx'
import { useFilter } from "../hooks"

let clog = console.log
function First () {
    clog('first')
    let ctx = useContext(MyContext)
    let clickButtonHandler = () => {
        console.log('clickButtonHandler')
        ctx.setStore({name: 'other string'})
    }
    return <>
        <p>first {JSON.stringify(ctx.store)}</p>
        <button onClick={clickButtonHandler}>button</button>
    </>
}
export default First