import { renderWithProviders } from "./test-utils";
import App from "../App";

test("renders App", () => {
  const screen = renderWithProviders(<App />, {
    preloadedState: {
      data: {
        dataNext: [],
        dataPrev: [],
        status: "complete",
        error: "",
      },
      switch: { isPrevJobs: true },
    },
  });
  expect(screen.getByText("All my Cleanings")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});

test("App should display loader when loading data", () => {
  const screen = renderWithProviders(<App />, {
    preloadedState: {
      data: {
        dataNext: [],
        dataPrev: [],
        status: "loading",
        error: "",
      },
      switch: { isPrevJobs: true },
    },
  });
  expect(document.querySelector(".loader-wrapper")).toBeInTheDocument();
});

test("App should display error when fetching is failed", () => {
  const screen = renderWithProviders(<App />, {
    preloadedState: {
      data: {
        dataNext: [],
        dataPrev: [],
        status: "complete",
        error: "Error",
      },
      switch: { isPrevJobs: true },
    },
  });
  expect(screen.getByText("Something went wrong:")).toBeInTheDocument();
});
