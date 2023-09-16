import CleaningsTable from "../../components/CleaningsTable";
import { renderWithProviders } from "../test-utils";
import mockData from "../mockData.json";

test("renders CleaningsTable", () => {
  const screen = renderWithProviders(<CleaningsTable jobs={mockData} />, {
    preloadedState: {
      data: {
        dataNext: [],
        dataPrev: [],
        status: "idle",
        error: "",
      },
      switch: { isPrevJobs: true },
    },
  });
  expect(screen.getAllByRole("table")[0]).toBeInTheDocument();
});
