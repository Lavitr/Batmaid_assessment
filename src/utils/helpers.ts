import { Job } from "../types";

export const sortStrings = (a: Job, b: Job): number => {
  if (a.location > b.location) {
    return 1;
  }
  if (a.location < b.location) {
    return -1;
  }
  return 0;
};

export const isNextDate = (date: string): boolean =>
  new Date() <= new Date(date);

export enum Repetition {
  Weekly = "Weekly",
  Monthly = "Monthly",
  TwoWeek = "Every two weeks",
}

const DAY_IN_WEEK = 7;
const DAY_IN_TWO_WEEK = 14;

export const getRepetitionString = (repetition: number) =>
  repetition === DAY_IN_WEEK
    ? Repetition.Weekly
    : repetition === DAY_IN_TWO_WEEK
    ? Repetition.TwoWeek
    : Repetition.Monthly;

export const getJobType = (type: string): string =>
  type.replaceAll("_", " ").toLowerCase().replace("tenancy", "Tenancy");

export const getDateEndTimeString = (
  date: string,
  duration: number
): string[] => {
  const time = date.split(" ")[1];
  const minutes = time.split(":")[1];
  const fullDate = new Date(date);
  const hours = fullDate.getHours();
  const endHours = hours + duration;
  const resDate = fullDate.toDateString().split(" ");
  resDate.splice(-1);
  return [
    `${resDate.join(" ")}`,
    `${hours}:${minutes} - ${endHours}:${minutes}`,
  ];
};
