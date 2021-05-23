import React, {Components } from 'react'

export  class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                    <img src = "https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957412.htm#page=1&query=login&position=3" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <label type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <label type="text" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className = "footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
                </div>
            </div>
        );
    }
}
export default Login