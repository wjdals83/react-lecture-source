import TodoItems from "./TodoItems"
import React, { useState, useEffect } from 'react';

function TodoList() {

    const [todos, setTodos] = useState([
        {id: 1, description: '할 일을 추가해 주세요', isDone: false}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChangeHandler = e => {
        setInputText(e.target.value);
    }

    const onClickHandler = () => {
        const changedTodos = todos.concat({
            id: nextId,
            description: inputText, 
            isDone: false
        });

        setTodos(changedTodos);
        setNextId(nextId + 1);
        setInputText('');
    }

    return(
        <>
            <h3>Todo-List!</h3>
            <div className="todo-list">
                <TodoItems
                    todos = { todos }
                    setTodos = { setTodos }
                />
            </div>
            <div className="append-list">
                <input 
                    type="text"
                    onChange = { onChangeHandler }
                    value = { inputText }
                />
                <button onClick={ onClickHandler }>
                    추가하기
                </button>
            </div>
        </>
    );
}

export default TodoList;