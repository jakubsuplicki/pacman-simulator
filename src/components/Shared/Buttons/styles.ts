import styled from 'styled-components';

export const StyledMainButton = styled.button`
  padding: .8rem 1.4rem;
  border: none;
  border-radius: .4rem;
  cursor: pointer;
  background-color: #4681f4;
  transition: background-color 0.3s;
  color: white;

  &:hover {
    background-color: #55c2da;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`;
