import React from 'react';
// import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import { AddToDoAction } from '../Store/Actions/todo';

export class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onAdd(e) {
        e.preventDefault();
        // debugger;
        if (this.state.task) {
            const newTask = {
                id: uuidv1(),
                task: this.state.task,
                complete: false,
                deleted: false
            }
            this.props.setData(newTask);
        }
    }
    render() {
        return (
            <Navbar className="bg-dark justify-content-center">
                <Form inline className="bg-dark justify-content-center" onSubmit={this.onAdd}>
                    <FormControl type="text" placeholder="ToDo" name="task" value={this.state.task} onChange={this.onChange} className=" mr-sm-2" />
                    <Button type="submit">Add</Button>
                </Form>
            </Navbar>
        );
    }
}

const mapDispatchtoProps = dispatch => (
    {
        setData: taskData => dispatch(AddToDoAction(taskData))
    }
)
export default connect(null, mapDispatchtoProps)(ToDoHeader);