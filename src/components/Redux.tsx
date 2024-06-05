import { useSelector } from 'react-redux';

const Redux = () => {
  const counter = useSelector((state: { counter: number }) => state.counter);

  return (
    <div>
      <h1>Liczba zadań: {counter}</h1>
    </div>
  );
};

export default Redux;