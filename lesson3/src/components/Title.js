import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillReceiveProps(nextProps){
    }
    componentWillUpdate(){
    }
    componentDidUpdate(){
    }
    render(){
        return (
            <h1 style={{color:this.props.color, backgroundColor:this.props.bgColor}}>
                {this.props.text}
            </h1>
        )
    }
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};

export default Title;