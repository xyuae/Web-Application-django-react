import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject' 
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  
  componentWillMount(){
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce shopping cart",
          category: "Web development"
        }
      ]});
  }
  
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
  
  render() {
    return (
      <div className="App">
        my app
      <AddProject addProject={this.handleAddProject.bind(this)}/>  
      <Projects projects={this.state.projects}/>  
      </div>
    );
  }
}

export default App;
