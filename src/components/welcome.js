import React, { Component } from 'react';
import * as actload from '../action/preloader';

import Menutop from './widget/menutop';
import Menuside from './widget/menuside';

class Welcome extends Component {
    componentDidMount() {
        actload.loadLoader();
    }

    render() {
        return (
            <div>
                <Menutop/>
                <Menuside/>
                <div className='content'>
                    <h1>Welcome to the social world</h1>
                </div>
            </div>
        );
    }
  }
  
  export default Welcome;