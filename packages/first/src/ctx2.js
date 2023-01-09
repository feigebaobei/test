import React from 'react'

let context = React.createContext(null)
export default function createContainer (initValue) {
    let Provider = (props) => {
        let value = initValue
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