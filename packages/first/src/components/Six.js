import React from 'react'
import MyContext from '../ctx'
import PropTypes from 'prop-types'
class A extends React.Component {
    constructor (props) {
        super(props)
        this.buttonClickHandler = () => {}
        this.state = {
            'k': 's'
        }
    }
    // componentDidMount() {
    //     let t = this.context.getFilter('k')
    //     this.setState({'k': t})
    // }
    // componentWillUnmount() {...}
    render() {
        //  this.ctx = this.context
        return <>six{this.state.k}</>
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