import styled from 'styled-components';

export const Checkbox = ({ id, checked, onChange }) => {
  return (
    <StyledCheckbox checked={checked}>
      <input
        type='checkbox'
        id={`checkbox-${id}`}
        name='custom-checkbox'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`checkbox-${id}`} className='custom-checkbox' />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

  /* チェックマーク */
  .custom-checkbox::after {
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
`;
