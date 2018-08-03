import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import user from '../../assets/logo.svg';

class Menuside extends Component {
    render() {
        let data = JSON.parse(sessionStorage.getItem('UserData'));
        const login = (data) ? data.name : 'Login';
        const urlogin = (data) ? '/profile' : '/login';
        const urlpics = (data) ? data.provider_pic : user;

        return (
            <ul id="menu-out" className="side-nav blue">
                <li>
                    <Link to={urlogin} className="white cl-grey">
                        <div className="layout-row layout-center">
                            <span className="ff-14">{login}</span>
                            <span className="flex"/>
                            <img src={urlpics} alt="" className="circle"/>
                        </div>
                    </Link>
                </li>
                <li><Link to='/' className="waves-effect">Home</Link></li>
            </ul>
        );
    }
}

export default Menuside;