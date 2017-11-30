import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createTodo, updateTodo, getTodos, getCompletedTodos, loadTodosFromMyJson} from 'src/data/store/todos';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';



const Container = styled.div`
    margin: 20px;
    background: white;
    width: 440px;
    box-shadow: 0px 1px 10px #575b75;
`

const Header = styled.div`
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: #455A64;
    background: #ECEFF1;

    width: 100%;
    align-items: center;
`

class TodoList extends Component {
    componentWillMount() {
        const {loadTodosFromMyJson} = this.props;
        loadTodosFromMyJson()
    }
    render() {
        const {todos, completedTodos, updateTodo, deleteTodo, createTodo} = this.props;
        console.log(todos);
        return (
            <div>
                <Container>
                    <Header>todo ({todos.length})</Header>
                    <TodoForm onSubmit={(value) => createTodo(value)} />
                    {todos.map((todo) => 
                        <TodoItem 
                            todo={todo}
                            onDelete={() => deleteTodo(todo.id)}
                            onUpdate={updates => updateTodo(todo.id, updates)} />
                    )}
                </Container>
                <Container>
                    {completedTodos.length > 0 && <Header>done ({completedTodos.length})</Header>}
                    {completedTodos.map((todo) => 
                        <TodoItem 
                            todo={todo}
                            onDelete={() => deleteTodo(todo.id)}
                            onUpdate={updates => updateTodo(todo.id, updates)} />
                    )}
                </Container>
            </div>
        );
    }
}



export default connect(
    state => ({todos: getTodos(state.todos), completedTodos: getCompletedTodos(state.todos)}),
    {createTodo, updateTodo, loadTodosFromMyJson}
)(TodoList);

