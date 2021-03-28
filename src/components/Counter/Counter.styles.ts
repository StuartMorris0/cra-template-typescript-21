import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;

  & > div {
    display: flex;
  }
`;

const CounterButton = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: black;
  outline: none;
  border: 0px;
  padding: 20px;
  font-size: 18px;
  margin: 10px;
`;

const CounterValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  & span {
    font-size: 48px;
    font-weight: bold;
  }
`;

const CounterInput = styled.input`
  font-size: 48px;
  text-align: center;
`;

export { CounterWrapper, CounterButton, CounterValues, CounterInput };
