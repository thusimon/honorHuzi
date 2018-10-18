import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../connect';

class ThemeSwitch extends Component {

    buttonClick(btn){
        switch (btn){
            case 0:
                //light color
                this.props.btnClick({type:"CHANGE_FONT_COLOR", color:"#000000"});
                this.props.btnClick({type:"CHANGE_BACKGROUND_COLOR", color:"#FFFFFF"});
                break;
            case 1:
                // dark color
                this.props.btnClick({type:"CHANGE_FONT_COLOR", color:"#FFFFFF"});
                this.props.btnClick({type:"CHANGE_BACKGROUND_COLOR", color:"#000000"});
                break;
        }
    }
    render () {
        return (
            <div>
                <button style={{color:this.props.color, backgroundColor:this.props.bgColor}}
                        onClick={this.buttonClick.bind(this, 0)}>Light
                </button>
                <button style={{color:this.props.color, backgroundColor:this.props.bgColor}}
                        onClick={this.buttonClick.bind(this, 1)}>Dark
                </button>
            </div>
        )
    }
}

function mapStateToProps(storeState, ownProps){
    return {color:storeState.color, bgColor:storeState.bgColor};
}
function mapDispatchToProps(dispatch, ownProps){
    return {
        btnClick: (action)=>{
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);