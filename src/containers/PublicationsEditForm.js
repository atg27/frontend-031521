import React, { Component } from 'react'

export default class PublicationsEditForm extends Component {
    state= {
        id: null,
        title: ''
    }

    componentDidMount(){
        this.setState({
            id: this.props.publication.id,
            title: this.props.publication.title
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editThePublication(this.state)
        this.props.toggleForm()
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
