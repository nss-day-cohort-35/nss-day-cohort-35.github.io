import React, { Component } from 'react'

export default class StudentCard extends Component {

    state = {
        hover: false
    }

    componentDidMount() {
            this.setState({
                hover: false
            });
    }

    toggle = () => {
        this.setState(prevState => ({
            hover: !prevState.hover
        }))
    }

    render() {
        return (
        <>
        <div><p>Here's a student card wow!!!!!!!</p></div>
        <div class="student-pic-container" onMouseLeave={() => {this.toggle()}} onMouseOver={() => {this.toggle()}}>
            {this.state.hover == true ?
            <img class="student-pic" src={`./images/${this.props.student.funImg}`}/>
        : <img class="student-pic" src={`./images/${this.props.student.proImg}`}/>}
        </div>
        {this.props.student.firstName} {this.props.student.lastName}
        {this.props.student.concentration}
        </>
            )
    }
}