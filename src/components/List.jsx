import { Item } from './Item';
import styled from 'styled-components';

export const List = ({ todoList, toggleCompleted, removeTodo }) => {
  return (
    <StyledList style={{ listStyle: 'none' }}>
      {todoList.map((todo) => {
        const { id, title, completed } = todo;
        return (
          <Item
            key={id}
            title={title}
            completed={completed}
            toggleCompleted={() => toggleCompleted(id)}
            removeTodo={() => removeTodo(id)}
          />
        );
      })}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  padding: 12px;
  border-radius: 4px;
  max-height: 60vh;
  overflow-y: scroll;
  background-color: #fff;
`;
