import React from 'react';
import Title from './Title';
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <Title text="Greets Lu!" color={this.props.color} bgColor={this.props.bgColor} />
            <Title text="How are you today?" color={this.props.color} bgColor={this.props.bgColor} />
            <Title text="Let's have fun!" color={this.props.color} bgColor={this.props.bgColor} />
            <Title text="WTF, you don't want to?" color={this.props.color} bgColor={this.props.bgColor} />
            <Title text="Screw you, I'm going home!" color={this.props.color} bgColor={this.props.bgColor} />
        </div>
        );
    }
}

export default App;