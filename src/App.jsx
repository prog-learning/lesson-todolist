import { useState, useEffect, useContext } from 'react';
import { List } from './components/List';
import { Form } from './components/Form';
import { Modal } from './components/Modal';
import { Interface } from './components/Interface';
import styled from 'styled-components';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { ToggleButton } from './components/ToggleButton';
import { Context } from './utils/context';

const App = () => {
  const [state] = useContext(Context);
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState(false);

  const toggleEdit = () => {
    if (inputState !== 'edit') setInputState('edit');
    if (inputState === 'edit') setInputState(false);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then((res) => setTodoList(res.data));
  }, []);

  /* TODOを追加する関数 */
  const addTodo = (title) => {
    if (title) {
      setTodoList((prev) => [
        ...prev,
        { id: nanoid(8), title, completed: false },
      ]);
      setInputState(false);
    } else {
      alert('入力してください！');
    }
  };

  /* 指定されたidのTODOのcompletedを切り替える */
  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      })
    );
  };

  /* 指定されたidのTODOを削除 */
  const removeTodo = (id) => {
    setTodoList((prev) =>
      prev.filter((todo) => {
        if (todo.completed || !state.safetyRemove) return todo.id !== id;
        return true;
      })
    );
  };

  const completedAllRemove = () => {
    if (window.confirm('完了したTODOをすべて削除しますか？'))
      setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  const allRemove = () => {
    if (window.confirm('TODOをすべて削除しますか？')) setTodoList([]);
  };

  return (
    <StyledApp>
      <Modal open={inputState === 'create'} close={() => setInputState(false)}>
        <Form addTodo={addTodo} />
      </Modal>
      <div className='app'>
        <h1>TO DO LIST.</h1>
        <div className='toggle-edit'>
          <span>Edit:</span>
          <ToggleButton
            id='edit'
            checked={inputState === 'edit'}
            onChange={toggleEdit}
          />
        </div>
        <Interface
          isCreating={() => setInputState('create')}
          isEditting={() => setInputState('edit')}
          completedAllRemove={completedAllRemove}
          allRemove={allRemove}
          editState={inputState === 'edit'}
        />
        <List
          todoList={todoList}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      135deg,
      rgba(246, 255, 0, 0.6),
      rgba(255, 0, 161, 0.6)
    ),
    url('https://picsum.photos/1000');
  background-size: cover;
  background-position: bottom 0 left 0;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-color: #90f4b9;

  .app {
    background-color: #eee;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 24px;
    position: relative;
    > h1 {
      font-size: 28px;
      text-align: center;
    }
    .toggle-edit {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 12px;

      position: absolute;
      top: 0;
      right: 0;
      > span {
        margin-right: 8px;
      }
    }
  }
`;

export default App;
