import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../connect';

class Header extends Component {
    render () {
        return (
            <h1 style={{color:this.props.color, backgroundColor:this.props.bgColor}}>Greetings React</h1>
        )
    }
}

function mapStateToProps(storeState, ownProps){
    return {color: storeState.color, bgColor:storeState.bgColor};
}
export default connect(mapStateToProps)(Header);