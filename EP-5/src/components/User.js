const User = ({name, location, emailId}) =>{
    return(
        <div className="user-details-ctr">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {emailId}</h4>
        </div>
    )
}

export default User;