import React from 'react';
import { Form,ListGroup } from 'react-bootstrap';

import {connect} from 'react-redux';
import {CompleteToDoAction} from '../../Store/Actions/todo';
import {UncompleteToDoAction} from '../../Store/Actions/todo';

export class ToDoTask extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     ...this.props
        // }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {      
        console.log(this.props)
            if(e.target.checked)
            {
                this.props.done(this.props.id);
            }
            else
            {
                this.props.undone(this.props.id);
            }
    }
    render() {
        debugger
        return (
            <ListGroup.Item key={this.props.id} className="d-flex justify-content-between">
                {this.props.task}

                <Form.Check
                    label="Done"
                    name="complete"
                    onChange={this.onChange}
                    checked={this.props.complete}
                />
                <i className="fas fa-trash-alt"></i>
            </ListGroup.Item>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        done: id => dispatch(CompleteToDoAction(id)),
        undone: id=> dispatch(UncompleteToDoAction(id))
    }
)

export default connect(null,mapDispatchToProps)(ToDoTask);