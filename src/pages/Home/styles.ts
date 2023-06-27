import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  max-width: 90%;
  height: 90vh;

  overflow: auto;
`;

export const Button = styled.button`
  padding: 0.125rem 1rem;
`;
