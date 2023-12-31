import { rest } from "msw";
import data from "./data.json";

export const handlers = [
  rest.get("/data", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
