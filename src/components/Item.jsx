import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Checkbox } from './Checkbox';
import { RemoveButton } from './RemoveButton';
import { Context } from '../utils/context';

export const Item = ({
  id,
  title,
  completed,
  toggleCompleted,
  removeTodo,
  isEdit,
}) => {
  const [state] = useContext(Context);

  return (
    <StyledItem checked={completed}>
      <Checkbox id={id} checked={completed} onChange={toggleCompleted} />
      <span
        contentEditable={isEdit}
        onInput={(e) => console.log(e.target.innerText)} // 編集機能
      >
        {title}
      </span>
      {isEdit && (
        <RemoveButton
          onClick={removeTodo}
          disabled={!completed && state.safetyRemove}
        />
      )}
    </StyledItem>
  );
};

const StyledItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 100%;
    text-align: left;
    overflow-x: scroll;
    user-select: none;
    margin-right: 12px;

    ${({ checked }) =>
      checked &&
      css`
        color: #666;
        text-decoration: line-through;
      `};
  }
`;
