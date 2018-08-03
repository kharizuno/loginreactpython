import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { PostData } from '../action/fetch';
import * as actload from '../action/preloader';

import Menutop from './widget/menutop';
import Menuside from './widget/menuside';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginErr: false,
            redirect: false
        }

        this.signup = this.signup.bind(this);
    }

    componentDidMount() {
        actload.loadLoader();
    }

    signup(res, type) {
        let dt;
        if (type === 'facebook' && res.email) {
            dt = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            }
        }

        if (type === 'google' && !res.error) {
            dt = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            }
        }

        if (dt) {
            PostData(type, dt).then((result) => {
               sessionStorage.setItem("UserData", JSON.stringify(result));
               this.setState({redirect: true});
            });
        }
    }

    render() {
        if (this.state.redirect || sessionStorage.getItem('UserData')) {
            return (<Redirect to={'/profile'}/>)
        }

        const responseFacebook = (response) => {
            // console.log("facebook console");
            // console.log(response);
            this.signup(response, 'facebook');
        }
        
        const responseGoogle = (response) => {
            // console.log("google console");
            // console.log(response);
            this.signup(response, 'google');
        }

        return (
            <div>
                <Menutop title='Login'/>
                <Menuside/>
                <div className='content'>
                    <FacebookLogin
                    appId="232821630699385"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}/>
                    <br/><br/>

                    <GoogleLogin
                    clientId="437949992412-5ek5socrfduie7oma5q4dhgctk2lalhb.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
                </div>
            </div>
        );
    }
}

export default Login;