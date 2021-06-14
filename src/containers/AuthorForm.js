import React, { Component } from 'react'

export default class AuthorForm extends Component {

    state= {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAnAuthor(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
