import React from 'react';
import StoreContext from './storeContext';

const connect = (mapStateToProps, mapDispatchToProps)=>(OriginalComponent)=>{

    const ConnectWithContext = (props)=>{
        return (
            <StoreContext.Consumer>
                {
                    (store)=>(<Connect store={store} extraProp={props} />)
                }
            </StoreContext.Consumer>
        );
    };

    class Connect extends React.Component {
        constructor(props){
            super(props);
            this.store = this.props.store;
            this.extraProp = this.props.extraProp;
            this.state={allProps:{}};
        }
        componentWillMount(){
            // called before render
            this.store.observe(()=>this._updateProps());
            this._updateProps();
        }
        _updateProps(){
            let mappedState = mapStateToProps ? mapStateToProps(this.store.getState(), this.extraProp):{};
            let mappedDispatch = mapDispatchToProps ? mapDispatchToProps(this.store.dispatch, this.extraProp):{};
            // trigger render
            this.setState({allProps:{
                ...mappedState,
                ...mappedDispatch,
                ...this.extraProp}});
        }
        render(){
            return <OriginalComponent {...this.state.allProps} />
        }
    }
    return ConnectWithContext;
};

export default connect;