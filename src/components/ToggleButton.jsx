import React from 'react';
import styled, { css } from 'styled-components';

export const ToggleButton = ({ id, checked, onChange }) => {
  return (
    <StyledToggleButton checked={checked}>
      <input
        id={`toggle-button-${id}`}
        class='toggle-input'
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <label for={`toggle-button-${id}`} class='toggle-label' />
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.div`
  display: inline-block;
  height: 20px;
  .toggle-input {
    display: none;
  }

  .toggle-label {
    display: inline;
    width: 36px;
    height: 20px;
    background: #aaa;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: 0.4s;
    box-sizing: border-box;
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      left: 0;
      top: 0;
      z-index: 2;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.6s;
    }
  }

  /* checked */
  .toggle-label {
    ${({ checked }) =>
      checked &&
      css`
        background-color: #4bd865;
        &:after {
          left: 16px;
        }
      `}
  }
`;
