import React, { Component } from "react";
import Hello from "./components/Hello";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Also from "./components/Also";
import Contact from "./components/Contact";
import { Scroll, Frame } from "framer";

class App extends Component {
  state = {
    frameBgColor: "transparent"
  };

  render() {
    return (
      <Scroll
        height={"100vh"}
        width={"100vw"}
        alignment="center"
        direction="vertical"
      >
        <Frame
          className={"helloFrame"}
          background={this.state.frameBgColor}
          height={"500px"}
        >
          <Hello />
        </Frame>
        <Frame
          className={"educationFrame"}
          background={this.state.frameBgColor}
          top={"500px"}
          height={"500px"}
        >
          <Education />
        </Frame>
        <Frame
          className={"technologiesFrame"}
          background={this.state.frameBgColor}
          top={"1000px"}
          height={"500px"}
        >
          <Technologies />
        </Frame>
        <Frame
          className={"projectsFrame"}
          background={this.state.frameBgColor}
          top={"1520px"}
          height={"1050px"}
        >
          <Projects />
        </Frame>
        <Frame
          className={"alsoFrame"}
          background={this.state.frameBgColor}
          top={"2470px"}
          height={"500px"}
        >
          <Also />
        </Frame>
        <Frame
          className={"contactFrame"}
          background={this.state.frameBgColor}
          top={"2970px"}
          height={"500px"}
        >
          <Contact />
        </Frame>
      </Scroll>
    );
  }
}

export default App;
