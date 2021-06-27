import React from 'react';

export const CompleteTodos = (props) => {

    const {todos,onclickBack} = props;

    return (
        <div className = 'complete-area'>
        <p className = 'title'>完了のTODO</p>
        <ul>
            {todos.map((todo,index) => {
                return(
                    <li key = {todo}>
                        <div className = 'list-row'>
                            <label>{todo}</label>
                            <button onClick = {() => {onclickBack(index)}}>戻す</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>

    );
};