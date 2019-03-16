import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { ToDoTask } from '../ToDoTask/task';

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    render() {
        return (
            <Card>
                <Card.Header className="bg-dark text-light">To Do List</Card.Header>
                <ListGroup variant="flush">
                    <ToDoTask />
                </ListGroup>
            </Card>
        );
    }
}