import React, { Component } from 'react'

export default class PublicationsForm extends Component {

    state= {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAPublication(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' title="title" value={this.state.title} onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
