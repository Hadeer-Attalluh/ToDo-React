import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDo: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.targer.value });
    }
    onAdd(e) {

    }
    render() {
        return (
            <Navbar className="bg-dark justify-content-center">
                <Form inline className="bg-dark justify-content-center">
                    <FormControl type="text" placeholder="ToDo" className=" mr-sm-2" />
                    <Button type="submit">Add</Button>
                </Form>                       
            </Navbar>
        );
    }
}