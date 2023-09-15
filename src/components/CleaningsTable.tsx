function CleaningsTable({ data }: any) {
  return (
    <div className="table-wrapper">
      <table>
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
          {data?.length
            ? data.map(
                ({
                  location,
                  type,
                  executionDate,
                  agent,
                  contractPeriodicity,
                  uuid,
                }: any) => (
                  <tr key={uuid}>
                    <td>{location}</td>
                    <td>{type}</td>
                    <td>{executionDate}</td>
                    <td>{contractPeriodicity}</td>
                    <td>{agent}</td>
                  </tr>
                )
              )
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default CleaningsTable;
