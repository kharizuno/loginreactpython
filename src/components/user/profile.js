import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actload from '../../action/preloader';

import Menutop from '../widget/menutop';
import Menuside from '../widget/menuside';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        actload.loadLoader();
    }

    logout(e) {
        sessionStorage.removeItem('UserData');
        this.setState({redirect: true});
    }

    render() {
        let data = JSON.parse(sessionStorage.getItem('UserData'));
        if (!data || this.state.redirect) {
            return (<Redirect to={'/'}/>)
        }

        return (
            <div>
                <Menutop title='Profile'/>
                <Menuside/>
                <div className='content'>
                    <h1>Welcome, {data.name}</h1><br/>
                    Email : {data.email}<br/>
                    Provider : {data.provider}<br/><br/>
                    <button className='btn red lighten-1 waves-effect' onClick={e => this.logout(e)}>Logout</button>
                </div>
            </div>
        );
    }
}

export default Profile;