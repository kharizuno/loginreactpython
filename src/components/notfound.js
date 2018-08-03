import React, { Component } from 'react';
import * as actload from '../action/preloader';

import Menutop from './widget/menutop';
import Menuside from './widget/menuside';

class Notfound extends Component {
    componentDidMount() {
        actload.loadLoader();
    }

    render() {
        return (
            <div>
                <Menutop title='404 not found'/>
                <Menuside/>
            </div>
        );
    }
  }
  
  export default Notfound;