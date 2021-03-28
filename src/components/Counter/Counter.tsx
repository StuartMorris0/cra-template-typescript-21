import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from 'features/counter/counterSlice';
import { useAppDispatch } from 'hooks/storeHooks';

import { CounterButton, CounterInput, CounterValues, CounterWrapper } from './Counter.styles';

const Counter: React.FC = () => {
  //   const count = useAppSelector((state) => state.counter.value);
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <CounterWrapper>
      <div>
        <CounterButton type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </CounterButton>
        <CounterValues>
          useAppSelector: <span data-testid="count">{count}</span>
          {/* useSelector:<span> {alternativeCount}</span> */}
        </CounterValues>
        <CounterButton type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </CounterButton>
      </div>
      <div>
        <CounterButton type="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </CounterButton>
        <CounterInput data-testid="counterinput" aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <CounterButton type="button" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </CounterButton>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
