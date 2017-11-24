import React, { Component } from 'react';
import styled from 'styled-components';

const TodoInput = styled.input`
    border: none;
    width: 100%;
    padding: 20px;
    font-size: 1em;
    outline: none;
    text-align: center;

    border-bottom: 1px solid #ECEFF1;
`

TodoInput.defaultProps = {
    type: 'text',
    autoFocus: true,
    placeholder: 'What do you need to do?'
}

class TodoForm extends Component {
    state = {value: ''}
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        const {value} = this.state;
        const {onSubmit} = this.props;
        if (value) {
            onSubmit(value);
            this.setState({value: ''});
        }
    }
    render() {
        const {value} = this.state;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TodoInput value={value} onChange={this.handleChange.bind(this)} />
            </form>
        );
    }
}

export default TodoForm;