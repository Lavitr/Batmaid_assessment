import {
  sortStrings,
  isNextDate,
  getRepetitionString,
  Repetition,
} from "../../utils/helpers";
import mockData from "../mockData.json";

test("sortStrings should return -1 if first string less then second string", () => {
  expect(sortStrings(mockData[0], mockData[1])).toBe(-1);
});

test("isNextDate should return true if date string is in the future", () => {
  expect(isNextDate("2023-10-28 08:30")).toBe(true);
});

test("getRepetitionString should return repitition string according to days number", () => {
  expect(getRepetitionString(14)).toBe(Repetition.TwoWeek);
});
