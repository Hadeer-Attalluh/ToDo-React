import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import {connect} from 'react-redux';

export class ToDoList extends React.Component {


    render() {
        // debugger;
        return (
            <Card>
                <Card.Header className="bg-dark text-light">To Do List</Card.Header>
                <ListGroup variant="flush">
                    {this.props.todos.filter(task=>{return !(task.complete||task.deleted)}).map(task=><ToDoTask {...task}/>)}
                </ListGroup>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
todos: state.todos
}};

export default connect(mapStateToProps)(ToDoList);