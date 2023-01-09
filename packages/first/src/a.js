// import createContainer from './ctx2'
import React from 'react'
import {useFilter} from './hooks'
import useHooks from './hooks/useHooks'
// let {getFilter, setFilter} = useFilter()

let context = React.createContext(null)
// export default 
function createContainer (useHooks) {
    let Provider = (props) => {
        let value = useHooks()
        return <context.Provider value={value}>{props.children}</context.Provider>
    }
    let useContainer = () => {
        return React.useContext(context)
    }
    return {
        Provider,
        useContainer
    }
}
export default createContainer(useHooks) // { Provider, useContainer }
// export default createContainer({}) // { Provider, useContainer }