import React from 'react';
import PropTypes from 'prop-types'
function Student(props) {
    let { fnm, lnm } = props
    return (
        <div>
            <h1>Student Details</h1>
            <h5>{JSON.stringify(props)}</h5>
            <h3>Student First Name: {props.fnm}</h3>
            <h3>Student Last Name: {props.lnm}</h3>
        </div>
    )
}

Student.propTypes = {
    fnm: PropTypes.string.isRequired,
    lnm: PropTypes.string.isRequired,
}

Student.defaultProps = {
    fnm: "First Name",
    lnm: "Last Name"
}

export default Student