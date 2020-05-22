import React from 'react'
import Login from '../containers/LoginContainer'
import ShowMorningTodoList from '../containers/ShowMorningTodoList'
import ShowLunchtimeTodoList from '../containers/ShowLunchtimeTodoList';
import ShowEveningTodoList from '../containers/ShowEveningTodoList';
import ShowHolidayTodoList from '../containers/ShowHolidayTodoList';
import ShowAdHocTodoList from '../containers/ShowAdHocTodoList';
import AddTodo from '../containers/AddTodo'
import { Table, Card, Accordion, Tabs, Tab, Button} from 'react-bootstrap';
import '../style.css';

const Home = () => {
return (
	<div>
        <div className = "container">
            <div className="wrapper">
                <h3 className="form-signin-heading" >Task List</h3>
                <hr className="colorgraph" />
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            平日朝
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ShowMorningTodoList />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            平日昼
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <ShowLunchtimeTodoList />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            平日夜
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <ShowEveningTodoList />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            休日
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        <ShowHolidayTodoList />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Ad Hoc
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <ShowAdHocTodoList />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>      
            </div>
        </div>
    </div>
	)

}

export default Home