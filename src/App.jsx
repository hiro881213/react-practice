import React from 'react';

export const App = () => {
    return (
        <>
            <div>
                <input placeholder = 'TODOを入力'/>
                <button>追加</button>
            </div>
            <div>
                <p>未完了のTODO</p>
                <ul>
                    <li>
                        <div>
                            <label>TODOです</label>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <label>TODOです</label>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <p>完了のTODO</p>
                <ul>
                    <li>
                        <div>
                            <label>TODOでした</label>
                            <button>戻す</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
  };