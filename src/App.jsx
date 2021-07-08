import { useState, useEffect } from 'react';
import { List } from './components/List';
import { Form } from './components/Form';
import { Modal } from './components/Modal';
import { Interface } from './components/Interface';
import styled from 'styled-components';
import axios from 'axios';
import { nanoid } from 'nanoid';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState(false);

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
        if (todo.completed) return todo.id !== id;
        return true;
      })
    );
  };

  const completedAllRemove = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  const allRemove = () => {
    if (window.confirm('TODOをすべて削除しますか？')) setTodoList([]);
  };

  console.log(todoList);
  return (
    <StyledApp>
      <Modal open={inputState === 'create'} close={() => setInputState(false)}>
        <Form addTodo={addTodo} />
      </Modal>
      <div className='app'>
        <h1>TO DO LIST.</h1>
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
    > h1 {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export default App;
