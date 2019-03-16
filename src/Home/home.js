import React from 'react';
import {Switch,Router, Route, Link } from "react-router-dom";
import { ToDoHeader } from './header';
import {Container,Row,Col} from 'react-bootstrap';
import {ToDoList} from './ToDoLists/toDo';
import { DoneList } from './ToDoLists/done';
import { DeletedList } from './ToDoLists/deleted';
export class ToDoHome extends React.Component
{
    constructor(props)
    {
        super(props);

    }
    render()
    {
        return(
            <>
            <ToDoHeader/>
            <Container fluid={true}>
            <Row noGutters={true} className="p-2 m-n1">
                <Col col={4} className="p-2">
                <ToDoList/>
                </Col>
                <Col col={4} className="p-2">
                <DoneList/>
                </Col>
                <Col col={4} className="p-2"> 
                <DeletedList/>
                </Col>
            </Row>
            </Container>
            </>
        );
    }
}