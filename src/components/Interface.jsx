import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../utils/context';
import { ToggleButton } from './ToggleButton';

export const Interface = ({
  isCreating,
  isEditting,
  completedAllRemove,
  allRemove,
  editState,
}) => {
  const [state, setState] = useContext(Context);

  return (
    <StyledInterface>
      <button onClick={isCreating}>+Add</button>
      {editState && (
        <div className='edit-menu'>
          <button onClick={completedAllRemove}>completedAllRemove</button>
          <button onClick={allRemove}>All remove</button>
          <div className='toggle-safety-remove'>
            <span>Safety remove:</span>
            <ToggleButton
              id='afety-remove'
              checked={state.safetyRemove}
              onChange={() =>
                setState((prev) => ({
                  ...prev,
                  safetyRemove: !prev.safetyRemove,
                }))
              }
            />
          </div>
        </div>
      )}
    </StyledInterface>
  );
};

const StyledInterface = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  .edit-menu {
    margin-left: 20px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .toggle-safety-remove {
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        margin-right: 8px;
      }
    }
  }
`;
