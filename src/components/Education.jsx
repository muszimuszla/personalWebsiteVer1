import React, { Component } from "react";
import Educationpic from "../assets/Education";
import EducationStillpic from "../assets/EducationStill";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
}

componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
}

updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
}

  render() {

var pic;
if(this.state.width>770){
  pic=<Educationpic/>
}
else{
  pic=<EducationStillpic/>
}

    return (
      <div className="oneBox reverse">
        <div className="textBox">
          <h1> Education </h1>
          <p>
            {" "}
            I recently graduated from AGH University of Science and Technology
            with a master’s degree in applied computer science. I was a member
            of student's scientific team association Creative AGH which give me
            the opportunity to participate in a lot of interesting projects.{" "}
          </p>
        </div>

        {pic}

      </div>
    );
  }
}

export default Education;
