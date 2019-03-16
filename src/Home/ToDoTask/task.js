import React from 'react';
import { Form,ListGroup } from 'react-bootstrap';

export class ToDoTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "first thin to do",
            done: false
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ done: e.target.checked });
    }
    render() {
        return (
            <ListGroup.Item className="d-flex justify-content-between">
                {this.state.task}

                <Form.Check
                    label="Done"
                    name="Done"
                    onChange={this.onChange}
                />
                <i class="fas fa-trash-alt"></i>
            </ListGroup.Item>
        );
    }
}