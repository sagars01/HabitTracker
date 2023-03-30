import styled , {keyframes} from 'styled-components';

export const ViewWrapper = styled.div`
    height : 30vh;
`


export const Button = styled.button`
  background-color: #f0ad4e;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #22bb33;
  }
`;


export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Count = styled.span`
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
  animation: ${fadeIn} 0.5s;
`;
