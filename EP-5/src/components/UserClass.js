import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            count: 0,
            count1: 1,
        };
        console.log("Child Constructor");
    }
    componentDidMount() {
        console.log("Child ComponentDidMount");
    }
    render() {
        console.log("Child Render");
        const { name, location, emailId } = this.props;
        const { count } = this.state;
        return (
            <div className="user-details-ctr">
                <h1>Count: {count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                            count1: this.state.count1 + 2,
                        });
                    }}
                >
                    Increase
                </button>
                {/* Consuming context data in class based component */}
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h2>Name: {loggedInUser}</h2>}
                </UserContext.Consumer>
                <h3>Location: {location}</h3>
                <h4>Contact: {emailId}</h4>
            </div>
        );
    }
}

export default UserClass;
