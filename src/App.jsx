import React,{ useState } from 'react';

export const App = () => {

    // 未完了TODOのステート
    const [incompleteTodos,setIncompleteTodos] = useState(['TODOです','TODOです']);

    // 完了TODOのステート
    const [completeTodos, setCompleteTodos] = useState(['TODOでした','TODOでした']);

    return (
        <>
            <div className = 'input-area'>
                <input placeholder = 'TODOを入力'/>
                <button>追加</button>
            </div>
            <div className = 'incomplete-area'>
                <p className = 'title'>未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo) => {
                        return (
                        <li key = {todo}>
                            <div className = 'list-row'>
                                <label>{todo}</label>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        </li>);
                    })}
                </ul>
            </div>

            <div className = 'complete-area'>
                <p className = 'title'>完了のTODO</p>
                <ul>
                    {completeTodos.map((todo) => {
                        return(
                            <li key = {todo}>
                                <div className = 'list-row'>
                                    <label>{todo}</label>
                                    <button>戻す</button>
                                </div>
                            </li>);
                    })}
                </ul>
            </div>
        </>
    );
  };