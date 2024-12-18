import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent ComponentDidMount")
}

  render() {
    console.log("Parent Render")
    return (
      <>
        <div>About Page</div>
        <UserClass
          name={"Naganandhini (Class Component)"}
          location={"Salem"}
          emailId={"nagandhini112@gmail.com"}
        />
      </>
    );
  }
}

export default About;
