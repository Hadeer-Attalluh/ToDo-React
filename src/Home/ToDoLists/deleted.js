import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export class DeletedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    render() {
        return (
            <Card>
                <Card.Header className="bg-dark text-light">Deleted List</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}