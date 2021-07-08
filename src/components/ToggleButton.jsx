import React from 'react';
import styled from 'styled-components';

export const ToggleButton = ({ onChange }) => {
  return (
    <StyledToggleButton>
      <input
        id='toggle-button'
        class='toggle-input'
        type='checkbox'
        onChange={onChange}
      />
      <label for='toggle-button' class='toggle-label' />
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.div`
  // input
  .toggle-input {
    /* position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    cursor: pointer; */
    display: none;
  }

  // label
  .toggle-label {
    width: 75px;
    height: 42px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: 0.4s;
    box-sizing: border-box;
    &:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 100%;
      left: 0;
      top: 0;
      z-index: 2;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.4s;
    }
  }

  // input:ckeecked
  .toggle-input:checked {
    + .toggle-label {
      background-color: #4bd865;
      &:after {
        left: 40px;
      }
    }
  }
`;
