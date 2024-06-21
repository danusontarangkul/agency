// app/api/submitForm.ts

import type { NextApiRequest, NextApiResponse } from "next";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  goals: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const formData: FormValues = req.body;

    // Example: Save formData to database or perform other backend operations
    console.log("Form Data:", formData);

    // Respond with a success message or appropriate status
    res.status(200).json({ message: "Form data received successfully!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
