import React, { Component } from "react";
import styled from 'styled-components';
import {observer} from "mobx-react";

import projectStore from "./../store/projectStore.js";
import actions from "./../actions.js"
import StartScreen from "./StartScreen.js";
import ProjectBar from "./ProjectBar.js";

class Frame extends Component {

  addProject(){
    actions.addProject();
  }

  render() {
    const {className} = this.props;
    const {projects, activeProject} = projectStore;
    return (
      <div className={className}>
        <ProjectBar projects={projects} addProject={this.addProject.bind(this)}/>
        <StartScreen activeProject={activeProject} />
      </div>
    );
  }
}

const StyledFrame = styled(observer(Frame))`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: stretch;
`;

export default StyledFrame;
