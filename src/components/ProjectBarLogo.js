import React, { Component } from "react";
import styled from 'styled-components';

import logo from './../images/logo.svg';

const ProjectBarLogo = function(props){
    return (
        <ProjectBarLogoHolder>
            <img src={logo} alt="Logo"/>
        </ProjectBarLogoHolder>
    );
};

const ProjectBarLogoHolder = styled.div`
    width: 100%;
    background-color: #2C3A42;
    padding: 30px 40px 30px 30px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: auto;
    }
`;

export default ProjectBarLogo;
