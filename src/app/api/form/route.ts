import { DateTime } from "luxon";
import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "../../../lib/telegram";
import { authorize, appendRow } from "../../../lib/googleSheets"; // Import Google Sheets functions
import sendEmail from "@/lib/email";
import { splitFullName } from "@/lib/helper";
import { subscribeToMailchimp } from "@/lib/mailchimp";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();
    const { firstname, lastname } = splitFullName(body.name);
    const { email, phoneNumber, website, instagram, name, referrer } = body;

    const timestamp = DateTime.now()
      .setZone("America/Los_Angeles")
      .toFormat("MMMM dd, yyyy HH:mm a");

    const auth = await authorize();
    const message = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nWebsite: ${website}\nInstagram: ${instagram}\nReferrer: ${referrer}`;

    const tasks = [
      appendRow(auth, [
        timestamp,
        firstname,
        lastname,
        email,
        phoneNumber,
        website,
        instagram,
        referrer,
      ]),
      sendEmail(body, message),
      sendTelegramMessage(message),
      // subscribeToMailchimp(firstname, lastname, email, phoneNumber),
    ];

    await Promise.all(tasks);

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
