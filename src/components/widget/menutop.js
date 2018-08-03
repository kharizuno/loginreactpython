import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

class Menutop extends Component {
    render() {
        let title = (this.props.title) ? this.props.title : 'Home';
        return (
            <nav>
                <div className="nav-wrapper nav-pad blue">
                    <Link to='/' className="title">{title}</Link>
                    <div className="right">
                        <div className="show-menu" data-activates="menu-out">
                            <i className="fa fa-fw fa-navicon"/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menutop;