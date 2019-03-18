import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ToDoTask from '../ToDoTask/task';

import {connect} from 'react-redux';

export class DeletedList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     list: [],
        // }
    }
    render() {
        return (
            <Card>
                <Card.Header className="bg-dark text-light">Deleted List</Card.Header>
                <ListGroup variant="flush">
                    {
                        this.props.todos.filter(task => (task.deleted)).map(task => <ToDoTask {...task} />)
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

export default connect(mapStateToProps)(DeletedList);