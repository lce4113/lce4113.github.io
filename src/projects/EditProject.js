import { useState } from "react";
import { database } from "../database";
import trash from "../assets/trash.png";
import { Component } from "react";

export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionHeight: 100,
      captionHeight: 100
    };
  }

  onChange(field) {
    return e => {
      this.props.setValue(field, e.target.value);
      this.setState({ [field]: e.target.scrollHeight });
    };
  };

  async onSubmit() {
    await database.setData("Projects", this.props.values);
    window.location.reload();
  };

  async trash(title) {
    await database.deleteData("Projects", title);
    window.location.reload();
  }

  render() {
    return (
      <div className={"z-10 left-0 top-0 w-screen h-screen fixed flex justify-center items-center bg-[#333333]/50 backdrop-blur-sm animate-fadeIn" +
        (this.props.editing ? "" : " hidden")} onClick={this.props.exit}>
        <div className="w-1/2 h-5/6 px-20 pt-8 pb-14 flex flex-col bg-[#444444] border rounded-3xl animate-slideIn">
          <div className="self-end absolute opacity-50 hover:opacity-80 cursor-pointer" onClick={() => this.trash(this.props.values.title)}>
            <img src={trash} alt="Trash" className="w-6 invert" />
          </div>
          <h3 className="leading-normal text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7DFFAF] to-[#7DAFFF]">Projects</h3>
          <div className="px-4 overflow-auto">
            <Field name="Title" value={this.props.values.title} onChange={this.onChange("title")} />
            <Field name="Link" value={this.props.values.link} onChange={this.onChange("link")} />
            <Field name="Tags" value={this.props.values.tags} onChange={this.onChange("tags")} />
            <FieldExpandable name="Description" onChange={this.onChange("description")}
              value={this.props.values.description} height={this.state.descriptionHeights} />
            <FieldExpandable name="Caption" onChange={this.onChange("caption")}
              value={this.props.values.caption} height={this.state.captionHeight} />
          </div>
          <Submit onSubmit={() => this.onSubmit()} />
        </div>
      </div>
    );
  }
}

function Field(props) {
  return (
    <div className="mt-6">
      <div className="text-white ml-4 mb-2 text-sm">{props.name}</div>
      <input className="w-full bg-white/10 text-white outline-none focus:shadow-[0_0_0_1px_rgb(255,255,255,0.5)] rounded-md px-4 py-2 font-mono"
        type="text" name={props.name} onChange={props.onChange} value={props.value}
        placeholder={`Enter ${props.name.toLowerCase()} here`} />
    </div>
  );
}

function FieldExpandable(props) {
  return (
    <div className="mt-6">
      <div className="text-white ml-4 mb-2 text-sm">{props.name}</div>
      <textarea className="w-full resize-none bg-white/10 text-white outline-none focus:shadow-[0_0_0_1px_rgb(255,255,255,0.5)] rounded-md px-4 py-2 font-mono"
        name={props.name} onChange={props.onChange} value={props.value} style={{ height: props.height + "px" }}
        placeholder={`Enter ${props.name.toLowerCase()} here`} />
    </div>
  );
}

function Submit(props) {
  return (
    <button
      className="px-2 py-1 mt-6 self-end cursor-pointer rounded-md text-right text-xl font-black text-white bg-gradient-to-r from-[#329664] to-[#3296B9] brightness-90 hover:brightness-100"
      onClick={props.onSubmit}>Save</button>
  );
}