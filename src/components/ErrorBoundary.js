import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops! There was an error</h1>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;
