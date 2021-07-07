import React from 'react';
import styled from 'styled-components';

export const Modal = ({ open, close, children }) => {
  if (!open) return null;
  return (
    <StyledModal>
      <div className='mask' onClick={close} />
      <div className='box'>{children}</div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #444;
    opacity: 0.6;
  }
  .box {
    width: 300px;
    height: 300px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    padding: 12px;
    border: 1px solid #444;
    border-radius: 8px;
    box-shadow: 0 0 12px #444;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
