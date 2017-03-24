import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects){
        projectItems = this.props.projects.map(project => {
        //console.log(this.props.projects)
        return (
            <ProjectItem key={project.title} project={project} />
            );
        });
    }
    //console.log(this.props);
    return (
      <div className="Projects">
        <h2> Ongoing Projects </h2>
        
        {projectItems}
      </div>
    );
  }
}

export default Projects;
