import styled, { css } from 'styled-components';
import { CircleMinusFill } from 'akar-icons';

export const Item = ({ id, title, completed, toggleCompleted, removeTodo }) => {
  return (
    <StyledItem checked={completed}>
      <input
        type='checkbox'
        id={`checkbox-${id}`}
        name='custom-checkbox'
        checked={completed}
        onChange={toggleCompleted}
      />
      <label htmlFor={`checkbox-${id}`} className='custom-checkbox' />
      <span>{title}</span>
      <div class='remove-button'>
        <StyledCircleMinusFill
          size={20}
          onClick={removeTodo}
          disabled={!completed}
        />
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  display: flex;
  align-items: center;

  span {
    overflow-x: scroll;
    user-select: none;
  }

  button {
    margin-left: 12px;
    user-select: none;
  }

  > input[type='checkbox'] {
    display: none;
  }
  .custom-checkbox {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: 0 20px;
    position: relative;
    width: auto;
  }
  .custom-checkbox::before {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    content: '';
    display: block;
    height: 16px;
    left: 5px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
    ${({ checked }) => checked && 'border-color: #666;'};
  }
  .custom-checkbox::after {
    /* チェックマーク */
    border-right: 6px solid #00cccc;
    border-bottom: 3px solid #00cccc;
    content: '';
    display: block;
    height: 20px;
    left: 7px;
    margin-top: -16px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 9px;
    ${({ checked }) => checked && 'opacity: 1;'};
  }
  .remove-button {
    margin-left: 12px;
    flex-grow: 999;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledCircleMinusFill = styled(CircleMinusFill)`
  color: red;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: #ccc;
    `};
`;
