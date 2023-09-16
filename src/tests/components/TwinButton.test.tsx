import TwinButton from "../../components/TwinButton";
import { renderWithProviders } from "../test-utils";

test("renders TwinButton", () => {
  const screen = renderWithProviders(<TwinButton />, {
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
  expect(screen.getAllByRole("button")).toHaveLength(2);
  expect(screen.getByText("Previous")).toBeInTheDocument();
});
