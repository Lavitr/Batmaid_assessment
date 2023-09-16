import { renderWithProviders } from "./test-utils";
import App from "../App";

test("renders CleaningsTable", () => {
  const screen = renderWithProviders(<App />, {
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
  expect(screen.getByText("All my Cleanings")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});
