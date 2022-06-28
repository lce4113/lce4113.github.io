import { Component } from "react";
import { database } from "../database";
import EditProject from "./EditProject";
import Card from "./Card";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editValues: { title: "", link: "", tags: "", description: "", caption: "" },
      projects: []
    };
  }

  componentDidMount() {
    database.getData("Projects").then(x => this.setState({ projects: x }));
    onkeydown = e => {
      if (e.key === "Escape") this.setState({ editing: false });
    };
  }

  addProject() {
    this.setState({
      editing: true,
      editValues: { title: "", link: "", tags: "", description: "", caption: "" }
    });
  }

  editProject(project) {
    this.setState({
      editing: true,
      editValues: {
        title: project.title,
        link: project.link,
        tags: project.tags,
        description: project.description,
        caption: project.caption
      }
    });
  }

  setValue(field, value) {
    this.setState({ editValues: { ...this.state.editValues, [field]: value } });
  }

  render() {
    return (
      <div id="projects" className="flex justify-center items-center w-screen py-24 bg-[#333333]">
        <EditProject editing={this.state.editing} values={this.state.editValues} setValue={(field, value) => this.setValue(field, value)} />
        <div className="w-9/12">
          <h2 className="text-8xl text-white font-black text-shadow mb-8">Projects...</h2>
          <div className="flex flex-wrap">
            {this.state.projects.map(project => <Card key={project.title} data={project} onEdit={() => this.editProject(project)} />)}
            <div onClick={() => this.addProject()} className="w-96 min-h-[172px] my-4 bg-white/0 hover:bg-white/10 flex justify-center items-center cursor-pointer group transition-all duration-300">
              <div className="w-8 h-8 my-8 rounded-full flex justify-center items-center bg-white/50 text-3xl text-[#333333] group group-hover:bg-white/100 transition-all duration-300">+</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}