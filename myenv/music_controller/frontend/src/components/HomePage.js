import React, {Component} from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomName';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route path="/" ><p>This is the Home Page</p></Route>
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/create" component={CreateRoomPage} />
                
            </Switch>
        </Router>
    }
}