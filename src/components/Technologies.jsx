import React, { Component } from "react";
import Technologiespic from "../assets/Technologies";
import TechnologiesStillpic from "../assets/TechnologiesStill";
import Wave2 from "../assets/Wave2";

class Technologies extends Component {
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
  pic=<Technologiespic/>
}
else{
  pic=<TechnologiesStillpic/>
}
    return (
      <div>
        <div className="wave_2">
          <Wave2 />
        </div>
        <div className="wave_2">
          <Wave2 />
        </div>
        <div className="wave_2">
          <Wave2 />
        </div>
        <div className="oneBox">

          {pic}

          <div className="textBox">
            <h1> Technologies </h1>
            <p>
              {" "}
              As a student I've gained experience with various programming
              languages and decided that web design is a thing for me, cause it
              allows to combine my two biggest passions, which are coding and
              drawing. I create websites with the use of frameworks like
              React.js and Vue.js. And for design projects my favourite software
              solutions are Affinity Designer and Affinity Photo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
