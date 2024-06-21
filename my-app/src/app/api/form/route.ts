import type { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "../../../lib/middleware";
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  await parseBody(req, res);
  const { firstname, lastname, email, phoneNumber, website, instagram, goals } =
    req.body;
  console.log(firstname);
  const formData = req.body;
  console.log("Received form data:", formData);
  return Response.json({ status: 200 });
};

export const GET = async (request: NextApiRequest) => {
  console.log("in GET");
  console.log("get");

  return Response.json({ status: 200 });
};
