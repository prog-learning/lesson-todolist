import { useState } from 'react';

export const Form = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  /* setInputText('') を追加した関数を定義 */
  const addTodoAndReset = () => {
    addTodo(inputText); // このinputTextがaddTodoの引数のcontentとして渡される
    setInputText('');
  };

  return (
    <div>
      <h3>Create new todo</h3>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodoAndReset}>create</button>
    </div>
  );
};
