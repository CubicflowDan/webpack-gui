const remote = window.require('electron').remote;
const dialog = remote.dialog;

import projectStore from "./store/projectStore.js";

const actions = {
  addProject: function() {
    const projectDir = dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ["openDirectory"]
    })[0];

    let webpackConfig = null
    try {
        webpackConfig = window.require(projectDir + '/webpack.config.js');
    } catch(err){
        alert("Could not find webpack.config.js");
    }
    if (webpackConfig) {
        projectStore.addProject(projectDir, webpackConfig);
    }
  }
};

export default actions;
