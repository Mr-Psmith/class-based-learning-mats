import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false }
    }

    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <p>Something Went Wrong Here!</p>
        }
        return this.props.children; /* so we wrap this ErrorBundary around other comps*/
    }
}


export default ErrorBoundary;