import React,{ useState } from 'react';

// 入力エリアを取得する
import { InputTodo } from './components/InputTodo';

// 未完了TODOエリアを取得する
import { IncompleteTodos } from './components/IncompleteTodos'

// 完了TODOエリアを取得する　
import { CompleteTodos } from './components/CompleteTodos'

export const App = () => {

    // TODO入力テキストボックスのステート
    const [todoText, setTodoText] = useState('');

    // 未完了TODOのステート
    const [incompleteTodos,setIncompleteTodos] = useState([]);

    // 完了TODOのステート
    const [completeTodos, setCompleteTodos] = useState([]);

    /**
     * TODO入力テキストボックス入力処理
     */
    const onChangeTodoText = (event) => {setTodoText(event.target.value)};

    /**
     * 追加ボタン押下処理
     */
    const onClickAdd = () => {

        // TODO入力テキストボックスが入力していない場合動作させない
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

    /**
     * 戻すボタン押下処理
     */
    const onclickBack = (index) => {
        
        // 新完了TODOリストを生成する
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index,1);

        const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];

        // 未完了リストに新未完了TODOリストをセットする
        setIncompleteTodos(newIncompleteTodos);
        
        // 完了リストに新完了TODOリストをセットする
        setCompleteTodos(newCompleteTodos);

    }

    return (
        <>
            <InputTodo todoText ={todoText} onChange ={onChangeTodoText} onClick ={onClickAdd} />
            <IncompleteTodos todos = {incompleteTodos} onClickComplete = { onClickComplete } onClickDelete = { onClickDelete } />
            <CompleteTodos todos = {completeTodos} onclickBack = {onclickBack}/>
        </>
    );
  };