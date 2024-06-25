import { DateTime } from "luxon";
import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "../../../lib/telegram";
import { authorize, appendRow } from "../../../lib/googleSheets"; // Import Google Sheets functions
import sendEmail from "@/lib/email";
import { splitFullName } from "@/lib/helper";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();
    const { firstname, lastname } = splitFullName(body.name);
    const { email, phoneNumber, website, instagram, name } = body;

    const timestamp = DateTime.now()
      .setZone("America/Los_Angeles")
      .toFormat("MMMM dd, yyyy HH:mm a");

    const auth = await authorize();
    await appendRow(auth, [
      timestamp,
      firstname,
      lastname,
      email,
      phoneNumber,
      website,
      instagram,
    ]);

    const message = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nWebsite: ${website}\nInstagram: ${instagram}`;
    await sendEmail(body, message);
    await sendTelegramMessage(message);

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error in form entry", error);
    return NextResponse.json(
      { status: "error", error: error as Error },
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({ status: 200 });
};
