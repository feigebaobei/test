import React from 'react'
import PropTypes from 'prop-types'
import MyContext from '../ctx'
class A extends React.Component {
    constructor (props) {
        super(props)
        this.buttonClickHandler = () => {
            console.log('buttonClickHandler', this.context)
            this.context.setStore({name: 'from four'})
        }
    }
    // componentDidMount() {...}
    // componentWillUnmount() {...}
    render() {
        return <>four{JSON.stringify(this.context.store)}<button onClick={this.buttonClickHandler}>button</button></>
    }
}
A.contextType = MyContext
A.propTypes = {
    k: PropTypes.bool
}
A.defaultProps = {
    k: true
}
export default A