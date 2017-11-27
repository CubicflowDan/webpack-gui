import { extendObservable, action } from "mobx";

class Project {
  constructor(projectPath, webpackConfig) {
    extendObservable(this, {
      path: projectPath,
      dirName: projectPath.split("/").reverse()[0],
      webpackConfig: webpackConfig ? webpackConfig : null
    });
  }
}

export class ProjectStore {
  constructor() {
    extendObservable(this, {
      projects: [],
      activeProject: {},

      addProject: action((projectPath, webpackConfig) => {
        console.log("adding project", projectPath);
        const newProject = new Project(projectPath, webpackConfig);
        this.projects = [...this.projects, newProject];
        this.setActiveProject(newProject);
      }),
      setActiveProject: action(project => {
        console.log("Seting Active Project", project);
        this.activeProject = project;
      })
    });
  }
}

export default new ProjectStore();
