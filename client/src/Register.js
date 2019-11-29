import React from 'react'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse : "no resposnse"}
    }

    callApi() {
        console.log("registration api called")
        fetch("http://localhost:8081/register")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse : res}))
            .catch(err => err)
    }
    componentDidMount() {
        this.callApi();
    }


    render() {
        return(
            <div class="Registration">
                <h1> testing </h1>
                <h1> {this.state.apiResponse} </h1>
            </div>
        )
    }
}

export default Register