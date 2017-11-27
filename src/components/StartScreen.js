import React, { Component, PureComponent } from "react";

import Button from "./Button.js";
import Heading from "./Heading.js";

const styles = {
  textAlign: "center",
  padding: "20px",
  width: '100%',
  height: '100%',
  color: '#CCC'
};

class StartScreen extends PureComponent {
  render() {
    const {activeProject} = this.props;
    console.log('active project:', activeProject);
    return (
      <div style={styles}>
        {(activeProject.path) &&
          <div>ACTIVE ROE</div>
        }
        {(!activeProject.path) &&
          <div>Add a project</div>
        }
      </div>
    );
  }
}

export default StartScreen;
