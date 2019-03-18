import React from 'react';
import { Form, ListGroup, Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { CompleteToDoAction } from '../../Store/Actions/todo';
import { UncompleteToDoAction } from '../../Store/Actions/todo';
import { DeleteToDoAction } from '../../Store/Actions/todo';
import { unDeleteToDoAction } from '../../Store/Actions/todo';

export class ToDoTask extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     ...this.props
        // }
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onChange(e) {
        console.log(this.props)
        if (e.target.checked) {
            this.props.done(this.props.id);
        }
        else {
            this.props.undone(this.props.id);
        }
    }
    onDelete() {
        console.log(this.props)
        if (!this.props.deleted) {
            //toggle
            this.props.delete(this.props.id);
        }
        else {
            debugger;
            this.props.undelete(this.props.id);
        }
    }
    render() {
        debugger
        return (
            <ListGroup.Item key={this.props.id} className="d-flex justify-content-between">
                <Col col={10}>
                    {this.props.task}
                </Col>
                <Row>
                    <Col col={1}>
                        <Form.Check
                            label="Done"
                            name="complete"
                            onChange={this.onChange}
                            checked={this.props.complete}
                            disabled={this.props.deleted}
                        />
                    </Col>
                    <Col col={1}>
                        <i className="fas fa-trash-alt" onClick={this.onDelete}>{(this.props.deleted ? "Undelete" : "Delete")}</i>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        done: id => dispatch(CompleteToDoAction(id)),
        undone: id => dispatch(UncompleteToDoAction(id)),
        delete: id => dispatch(DeleteToDoAction(id)),
        undelete: id => dispatch(unDeleteToDoAction(id)),
    }
)

export default connect(null, mapDispatchToProps)(ToDoTask);