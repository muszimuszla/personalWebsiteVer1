import React, { Component } from "react";
import Hellopic from "../assets/Hello";
import HelloStillpic from "../assets/HelloStill";
import Pokedex from "../assets/Pokedex";
import TransactionList from "../assets/TransactionList";
import Tracker from "../assets/Tracker";
import Visualizer from "../assets/Visualizer";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    var pic;
    if (this.state.width > 770) {
      pic = <Hellopic />;
    } else {
      pic = <HelloStillpic />;
    }
    return (
      <div className="oneBox reverse projects">
        <div className="textBox">
          <h1> Example projects </h1>
          <div className="project">
            <a href="https://muszimuszla.github.io/musicVisualizer/">
              <Visualizer />
            </a>
            <div>
              <h5>Music visualizer</h5>
              <p>
                Music visualizer stylized for the northern lights, created with
                Web Audio API.
              </p>
            </div>
          </div>
          <div className="project">
            <a href="https://muszimuszla.github.io/pokedex/">
              <Pokedex />
            </a>
            <div>
              <h5>Pokedex</h5>
              <p>
                Website visualizing 1st generation Pokedex. Developed with the
                PokeAPI and React.js framework. Graphics have been prepared
                specially for this project.
              </p>
            </div>
          </div>
          <div className="project">
            <a href="https://muszimuszla.github.io/currencyConverter/">
              <TransactionList />
            </a>
            <div>
              <h5>Currency converter app</h5>
              <p>
                Website allowing to create list of transactions, the amounts of
                which are automatically converted based on the given exchange
                rate. Implementation was made using React.js framework with
                Redux and Sass.
              </p>
            </div>
          </div>
          <div className="project">
            <Tracker />
            <div>
              <h5>Tracking system</h5>
              <p>
                Implementation of a software for tracking device with dedicated
                web service. Front-end implementation was done with Vue.js
                framework. Back-end development was made using Node.js platform
                and Express.js framework, as a database I've decided to use
                Mongo DB.
              </p>
            </div>
          </div>
        </div>

        {pic}
      </div>
    );
  }
}

export default Projects;
