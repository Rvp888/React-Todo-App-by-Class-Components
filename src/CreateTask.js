
import React from "react";

import "./CreateTask.css";

export default class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props?.addTask({
            title: this.state?.value,
            completed: false
        });
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <form id="task-form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state?.value} id="task-input" placeholder="Add a Todo" onChange={(e) => this.setState({value:e?.target?.value})}/>
                <input type="submit" value="Add" id="submit-btn"/>
            </form>
        )
    }
}