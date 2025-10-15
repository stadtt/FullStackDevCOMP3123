function StudentObj(props) {
    return (
        <div>
            <h1>Student Details</h1>
            <h5>{JSON.stringify(props)}</h5>
            <h3>Student First Name: {props.stud.fnm}</h3>
            <h3>Student Last Name: {props.stud.lnm}</h3>
            <h3>Student City Name: {props.stud.city}</h3>
        </div>
    )
}

export default StudentObj