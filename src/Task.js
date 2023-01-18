
import React from "react";

import "./Task.css";

export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUpdateTask = () => {
        this.props.updateTask(this.props.index);
    }

    handleRemoveTask = () => {
        this.props.removeTask(this.props.index);
    }

    render() {
        return (
            <div className="task">
                <p id="task-title">{this.props.title}</p>
                <div className="update-delete-btns">
                    {this.props.completed && <button id="complete-btn">Completed</button>}
                    {!this.props.completed && <button id="update-btn" onClick={this.handleUpdateTask}>Pending</button>}
                    <button id="delete-btn" onClick={this.handleRemoveTask}>Remove</button>
                </div>
            </div>
        )
    }
}