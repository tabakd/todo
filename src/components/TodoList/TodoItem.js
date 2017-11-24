
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #ECEFF1;
`


const TodoText = styled.span`
    flex: 1;
    text-align: center;
    * {
        outline: none;
    }
    ${props => props.checked && `
        text-decoration: line-through;
        color: #CFD8DC;
    `}
`

class TodoItem extends Component {
    handleCheckbox(e) {
        const {onUpdate} = this.props;
        onUpdate({completed: e.target.checked})
    }
    handleText(e) {
        const {onUpdate} = this.props;
        onUpdate({text: e.target.value})
    }
    render() {
        const {todo: {completed, text}} = this.props;
        return (
            <Container>
                <Checkbox
                    checked={completed}
                    onChange={this.handleCheckbox.bind(this)}/>
                <TodoText checked={completed}>
                    <ContentEditable html={text} onChange={this.handleText.bind(this)} />
                </TodoText>
            </Container>
        );
    }
}

export default TodoItem;