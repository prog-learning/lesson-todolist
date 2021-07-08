import styled, { css } from 'styled-components';
import { CircleMinusFill } from 'akar-icons';

export const RemoveButton = ({ className, onClick, disabled }) => {
  return (
    <StyledRemoveButton className={className} disabled={disabled}>
      <CircleMinusFill size={20} onClick={onClick} />
    </StyledRemoveButton>
  );
};

const StyledRemoveButton = styled.div`
  svg {
    color: red;
    cursor: pointer;

    ${({ disabled }) =>
      disabled &&
      css`
        pointer-events: none;
        color: #ccc;
      `};
  }
`;
