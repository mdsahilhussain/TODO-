import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [{ task: "Gud Moring", id: 0 }],
      currTask: "",
      date:"",
      time:"",
    };
  }
  handleChange = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currTask, id: this.state.tasks.length + 1 },
      ],
      currTask: "",
    });
  };

  handleDelete = (id) => {
    let newArr = this.state.tasks.filter((taskObj) => {
      return taskObj.id !== id;
    });
    this.setState({
      tasks: [...newArr],
    });
  };
  


  render() {
    var currDate = new Date().toLocaleDateString();
    var currTime = new Date().toLocaleTimeString([], {
      timeStyle: "short",
    });
   
    return (
      <div className="glassMorphism container">
       
       <h1 className="textOne">Hii,, M Sahil Hussain</h1>
        <h5 className="textThree">Finish these work by tonight.</h5>
        <div
          className="flex items__center justify__between"
          style={{ marginBottom: "10px" }}
        >
          <input
            type="text"
            value={this.state.currTask}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} className="btn">
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <hr></hr>
        {this.state.tasks.map((taskObj) => {
          return (
            <li key={taskObj.id}
              style={{
                listStyle: "none",
                marginBottom: "18px",
                display: "flex",
                flexDirection: "column",
              }}
              className="ghap glassMorphism scale-up-tr"
            >
              <p className="textTwo">{taskObj.task}</p>
              <p>
                <button
                  onClick={() => this.handleDelete(taskObj.id)}
                  className="btn"
                  style={{ color: "red", float: "right" }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </p>
              <p className="textThree" style={{ marginTop: "-40px" }}>
                {currTime}, {currDate}
              </p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Todo;
