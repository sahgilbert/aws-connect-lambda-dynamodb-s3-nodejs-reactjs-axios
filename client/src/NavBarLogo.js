import React, { Component } from 'react';

class NavBarLogo extends Component {

    render() {
        return (
        <span>
            <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-fort-awesome fa-stack-1x"></i>
            </span>
            {this.props.companyName}
        </span>
        );
    }
}

export default NavBarLogo;