import { useEffect } from "react";
import { getData } from "./redux/dataSlice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import "./App.css";

function App() {
  const data = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.data.loading);

  useEffect(() => {
    if (!status) {
      dispatch(getData());
    }
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => dispatch(getData())}
        className="btn btn-lg btn-primary"
      >
        Tell me a joke
      </button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
