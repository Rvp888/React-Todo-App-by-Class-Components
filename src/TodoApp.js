
import React from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

import "./TodoApp.css";


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []  
        }
    }

    componentDidMount() {
        let getTasks = JSON.parse(localStorage.getItem("tasks"));
        this.setState({
            tasks: getTasks
        })
    }

    addTask = (task) => {
        this.setState({
            tasks:[...this.state.tasks,task]
        })
    }

    pendingTasks = () => {
        let pendingCount = 0;
        this.state.tasks.forEach((task) => {
            if(!task.completed){
                pendingCount += 1;
            }
        });
        return pendingCount;
    }

    updateTask = (index) => {
        let newTasks = [...this.state.tasks];
        newTasks[index].completed = true;
        this.setState({
            tasks: newTasks
        })
    }

    removeTask = (index) => {
        let newTasks = [...this.state.tasks];
        newTasks.splice(index, 1);
        this.setState({
            tasks: newTasks
        })
    }

    componentDidUpdate() {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    render() {
        return (
            <div className="todo-container">
                <h1 id="app-title">Todo-App</h1>
                <div className="create-todo">
                    <CreateTask addTask={this.addTask}/>
                </div>
                <div className="todo-list">
                    <h2 id="todo-list-title">Todo-Tasks</h2>
                    <div className="task-count">
                        <p id="total-tasks">Total tasks: {this.state?.tasks?.length}</p>
                        <p id="pending-tasks">Pending tasks: {this.pendingTasks()}</p>
                    </div>
                    <div className="task-div">
                        {this.state.tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={this.updateTask} removeTask={this.removeTask}/>)}
                    </div>
                </div>
            </div>
        )
    }
}