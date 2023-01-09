// import React from 'react'
// import MyContext from '../context'
// import PropTypes from 'prop-types'
// class A extends React.Component {
//     constructor (props) {
//         super(props)
//         this.buttonClickHandler = () => {}
//     }
//     componentDidMount() {...}
//     componentWillUnmount() {...}
//     render() {
//          this.ctx = this.context
//         return <></>
//     }
// }
// A.contextType = MyContext
// A.propTypes = {
//     k: PropTypes.bool
// }
// A.defaultProps = {
//     k: true
// }
// export default A

import React from "react";

let LogComp = (Comp) => {
    class A extends React.Component {
        componentDidMount() {
            console.log('mount')
        } 
        componentDidUpdate(prevProps) {
            console.log('prevProps', prevProps)
            console.log('this.props', this.props)
        }
        render () {
            return <Comp {...this.props} />
        }
    }
    return A
}
export default LogComp