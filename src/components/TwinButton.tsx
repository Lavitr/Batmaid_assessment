import { FC, ReactElement } from "react";
import { setPrevJobs, setNextJobs } from "../redux/switchSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const TwinButton: FC<{}> = (): ReactElement => {
  const isPrevJobs = useAppSelector((state) => state.switch.isPrevJobs);
  const dispatch = useAppDispatch();

  return (
    <div className="twin-buttons">
      <button
        onClick={() => dispatch(setPrevJobs())}
        className={isPrevJobs ? "active" : ""}
      >
        Previous
      </button>
      <button
        onClick={() => dispatch(setNextJobs())}
        className={!isPrevJobs ? "active" : ""}
      >
        Upcoming
      </button>
    </div>
  );
};

export default TwinButton;
