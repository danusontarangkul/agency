// lib/middleware.ts
import { NextApiRequest, NextApiResponse } from "next";
import { json, urlencoded } from "body-parser";

const bodyParserJson = json();
const bodyParserUrlencoded = urlencoded({ extended: true });

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function parseBody(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers["content-type"]?.includes("application/json")) {
    await runMiddleware(req, res, bodyParserJson);
    console.log("hit middle");
    console.log(req);
  } else if (
    req.headers["content-type"]?.includes("application/x-www-form-urlencoded")
  ) {
    await runMiddleware(req, res, bodyParserUrlencoded);
  }
}
