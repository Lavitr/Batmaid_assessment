import { FC, ReactElement, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { getData, Status } from "./redux/dataSlice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import CleaningsTable from "./components/CleaningsTable";
import TwinButton from "./components/TwinButton";
import ErrorComponent from "./components/ErrorComponent";
import "./App.css";

const App: FC<{}> = (): ReactElement => {
  const dataPrev = useAppSelector((state) => state.data.dataPrev);
  const dataNext = useAppSelector((state) => state.data.dataNext);
  const error = useAppSelector((state) => state.data.error);
  const isPrevJobs = useAppSelector((state) => state.switch.isPrevJobs);
  const { status } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === Status.idle) {
      dispatch(getData());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {status === Status.loading ? (
        <div className="loader-wrapper">
          <BounceLoader color="#21a7d1" size={120} />
        </div>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <>
          <h3>All my Cleanings</h3>
          <TwinButton />
          <CleaningsTable jobs={isPrevJobs ? dataPrev : dataNext} />
        </>
      )}
    </div>
  );
};

export default App;
