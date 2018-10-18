import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'
import connect from '../connect'


class Content extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <p style={{color:this.props.color, backgroundColor:this.props.bgColor}}>En Taro Tassadar</p>
                <ThemeSwitch />
            </div>
        )
    }
}

function mapStateToProps(storeState, ownProps){
    return {color:storeState.color, bgColor:storeState.bgColor};
}

export default connect(mapStateToProps)(Content);