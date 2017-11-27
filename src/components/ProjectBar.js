import React, { Component } from "react";
import styled from 'styled-components';

import ProjectBarLogo from './ProjectBarLogo.js';
import ProjectBarAddButton from './ProjectBarAddButton.js';

class ProjectBar extends Component {
  render() {
    const {className, projects, addProject} = this.props;
    return (
      <div className={className}>
        <ProjectBarLogo/>
        <ProjectBarAddButton onClick={addProject}>
          Add Project
        </ProjectBarAddButton>
        <ul>
          {projects.map((project) => {
            return <li>{project.dirName}</li>
          })}
        </ul>
      </div>
    );
  }
}

const StyledProjectBar = styled(ProjectBar)`
  min-width: 250px;
  background-color: #f1f1f1;
  position: relative;
`;

export default StyledProjectBar;
