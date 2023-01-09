import { useContext, useEffect } from 'react'
// import { useFilter } from "../hooks"
// import {context} from '../ct'
import MyContext from '../ctx'


let clog = console.log

function Third () {
    // clog()
    // let {getFilter} = useFilter()
    // let k = getFilter('k')
    // let {getFilter} = useContext(context)
    // clog(ct)
    // ct.getFi
    let ctx = useContext(MyContext)
    useEffect(() => {

    })
    // let k = getFilter('k')
    // clog('k', k)
    // // clog(ct.getFilter('key'))
    // // let t = ct.getFilter('key')
    // useEffect(() => {
    //     clog('t', t)
    // }, [t])
    // return <p>string{ct.key}</p>
    return <p>string{JSON.stringify(ctx.store)}</p>
}
export default Third