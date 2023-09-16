import { FC, ReactElement, useEffect } from "react";
import { getData } from "./redux/dataSlice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import CleaningsTable from "./components/CleaningsTable";
import TwinButton from "./components/TwinButton";
import "./App.css";

const App: FC<{}> = (): ReactElement => {
  const dataPrev = useAppSelector((state) => state.data.dataPrev);
  const dataNext = useAppSelector((state) => state.data.dataNext);
  const isPrevJobs = useAppSelector((state) => state.switch.isPrevJobs);
  const { status } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getData());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <h3>All my Cleanings</h3>
      <TwinButton />
      <CleaningsTable jobs={isPrevJobs ? dataPrev : dataNext} />
    </div>
  );
};

export default App;
