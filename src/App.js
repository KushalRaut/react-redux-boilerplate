import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, reset, sub } from './actions/countActions';

function App() {
  const dispatch = useDispatch();

  const { loading, value, isError } = useSelector((state) => state.countData);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  const handleAdd = () => {
    dispatch(add(value));
  };

  return (
    <>
      <div className="container">
        <h1>Counter with React,Redux and Typescript</h1>
        <p className="fs-1">{value}</p>
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(sub(value));
          }}
        >
          Sub
        </button>
        <button
          onClick={() => {
            dispatch(reset(value));
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
