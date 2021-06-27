import React,{ useState } from 'react';

export const App = () => {

    // TODO入力テキストボックスのステート
    const [todoText, setTodoText] = useState('');

    // 未完了TODOのステート
    const [incompleteTodos,setIncompleteTodos] = useState(['TODOです','TODOです']);

    // 完了TODOのステート
    const [completeTodos, setCompleteTodos] = useState(['TODOでした','TODOでした']);

    /**
     * TODO入力テキストボックス入力処理
     */
    const onChangeTodoText = (event) => {setTodoText(event.target.value)};

    /**
     * 追加ボタン押下処理
     */
    const onClickAdd = () => {

        if (todoText === '') return;

        // 新未完了TODOリストを生成する
        const newTodos = [...incompleteTodos, todoText];
        
        // 未完了リストに新未完了TODOリストをセットする
        setIncompleteTodos(newTodos);

        // TODO入力テキストボックスを初期化する
        setTodoText("");

    }

    /**
     * 完了ボタン押下処理
     */
    const onClickComplete = (index) => {

        // 新未完了TODOリストを生成する
        const newIncompleteTodos = [...incompleteTodos];

        // 指定の未完了TODOリストの場所を削除する
        newIncompleteTodos.splice(index,1);

        // 新完了TODOリストを生成する
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        // 未完了リストに新未完了TODOリストをセットする
        setIncompleteTodos(newIncompleteTodos);
        
        // 完了リストに新完了TODOリストをセットする
        setCompleteTodos(newCompleteTodos);
        
    }

    /**
     * 削除ボタン押下処理
     */
    const onClickDelete = (index) => {
                
        // 新未完了TODOリストを生成する
        const newTodos = [...incompleteTodos];

        // 指定のTODOリストの場所を削除する
        newTodos.splice(index,1);

        // 未完了リストに新未完了TODOリストをセットする
        setIncompleteTodos(newTodos);

    }

    return (
        <>
            <div className = 'input-area'>
                <input placeholder = 'TODOを入力' value = {todoText} onChange ={onChangeTodoText}/>
                <button onClick = {onClickAdd}>追加</button>
            </div>
            <div className = 'incomplete-area'>
                <p className = 'title'>未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo,index) => {
                        return (
                        <li key = {todo}>
                            <div className = 'list-row'>
                                <label>{todo}</label>
                                <button onClick ={() => {onClickComplete(index)}}>完了</button>
                                <button onClick = {() => {onClickDelete(index)}}>削除</button>
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
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
  };