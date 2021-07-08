import React from 'react';
import styled from 'styled-components';

export const Checkbox = ({ checked, onChange }) => {
  return (
    <StyledCheckbox>
      <input
        type='checkbox'
        id='checkbox'
        name='custom-checkbox'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor='checkbox' className='custom-checkbox' />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div``;
