import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import {connect} from 'react-redux';

export class DoneList extends React.Component {

    render() {
        // debugger
        return (
            <Card>
                <Card.Header className="bg-dark text-light">Done List</Card.Header>
                <ListGroup variant="flush">
                    {
                        this.props.todos.filter(task=>(task.complete&& !task.deleted)).map(task => <ToDoTask {...task} />)
                    }
                </ListGroup>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps)(DoneList);