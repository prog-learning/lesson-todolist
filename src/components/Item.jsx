import styled from 'styled-components';

export const Item = ({ title, completed, toggleCompleted, removeTodo }) => {
  return (
    <StyledItem>
      <input type='checkbox' checked={completed} onChange={toggleCompleted} />
      <span>{title}</span>
      <button onClick={removeTodo} disabled={!completed}>
        delete
      </button>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  overflow-x: scroll;
  input {
    margin-right: 12px;
  }
  button {
    margin-left: 12px;
  }
`;
