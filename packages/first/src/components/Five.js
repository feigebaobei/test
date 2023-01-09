import React from 'react'
import MyContext from '../ctx'
import PropTypes from 'prop-types'
class A extends React.Component {
    constructor (props) {
        super(props)
        this.buttonClickHandler = () => {}
        // let ctx = this.context
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.context, 'setTimeout')
            this.context.setFilter('k', 'str')
        }, 800)
    }
    // componentWillUnmount() {...}
    render() {
        return <>five</>
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