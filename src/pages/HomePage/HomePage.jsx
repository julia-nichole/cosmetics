import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class HomePage extends Component {
    render(props) {
        return (
            <div>
                <NavBar user={this.props.user} handleLogout={this.props.handleLogout}/>
            </div>
        )
    }
}

export default HomePage;