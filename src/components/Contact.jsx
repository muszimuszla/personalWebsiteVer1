import React, { Component } from "react";
import Contactpic from "../assets/Contact";
import ContactStillpic from "../assets/ContactStill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

class Contact extends Component {
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
  pic=<Contactpic/>
}
else{
  pic=<ContactStillpic/>
}
    return (

        <div className="oneBox reverse">
          <div className="textBox">
            <h1> Contact me </h1>
            <p style={{ textAlign: "center" }}>
              So now you know some things about me. If you'd like to ask me more
              questions or just friendly talk with a cup of coffee don't
              hesitate to contact me.
            </p>
            <div className="socialMediaContact icon">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a href="https://github.com/muszimuszla">
                  <FontAwesomeIcon icon={faGithub} color="#ec1b97" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a href="https://instagram.com/muszimuszla">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="#ec1b97"
                  />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a href="https://magdalenasulkowska.artstation.com/">
                  <FontAwesomeIcon
                    icon={faArtstation}
                    color="#ec1b97"
                  />
                </a>
              </motion.div>

            </div>
          </div>

          {pic}

        </div>

    );
  }
}

export default Contact;
