import { FC, ReactElement } from "react";
import {
  getRepetitionString,
  getJobType,
  getDateEndTimeString,
} from "../utils/helpers";
import { Job } from "../types";

type CleaningsTableProps = {
  jobs: Job[];
};

const CleaningsTable: FC<CleaningsTableProps> = ({ jobs }): ReactElement => (
  <div className="table-wrapper">
    <table className="job-table">
      <thead>
        <tr>
          <th>Address</th>
          <th>Type</th>
          <th>Date & Time</th>
          <th>Repetition</th>
          <th>Batmaid</th>
        </tr>
      </thead>
      <tbody>
        {jobs?.length
          ? jobs.map((job: Job, index: number) => {
              const prevJobLocation =
                index > 0 ? jobs[index - 1]?.location : "";
              const isSameLocationRow = prevJobLocation === job.location;
              const [date, time] = getDateEndTimeString(
                job.executionDate,
                job.duration
              );
              return (
                <tr
                  className={!isSameLocationRow ? "row-top-border" : ""}
                  key={job.uuid}
                >
                  <td>{isSameLocationRow ? "" : job.location}</td>
                  <td className="job-type">{getJobType(job.type)}</td>
                  <td>
                    <p>{date}</p>
                    <p>{time}</p>
                  </td>
                  <td>{getRepetitionString(job.contractPeriodicity)}</td>
                  <td>{job.agent}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  </div>
);

export default CleaningsTable;
