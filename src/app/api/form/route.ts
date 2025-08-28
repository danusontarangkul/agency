import { DateTime } from "luxon";
import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "../../../lib/telegram";
import { authorize, appendRow } from "../../../lib/googleSheets";
import sendEmail from "@/lib/email";
import { splitFullName } from "@/lib/helper";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();

    // Extract fields from new form
    const name: string = body.name ?? "";
    const { firstname, lastname } = splitFullName(name);
    const email: string = body.email ?? "";
    const phoneNumber: string = body.phoneNumber ?? "";
    const messageText: string = body.message ?? "";
    // Prefer client-provided referrer, fallback to header
    const referrer: string =
      body.referrer ??
      req.headers.get("referer") ??
      req.headers.get("referrer") ??
      "";

    const timestamp = DateTime.now()
      .setZone("America/Los_Angeles")
      .toFormat("MMMM dd, yyyy hh:mm a");

    const auth = await authorize();

    const notification = [
      "New contact form submission:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone Number: ${phoneNumber}`,
      `Referrer: ${referrer}`,
      "",
      "Message:",
      messageText,
    ].join("\n");

    const tasks = [
      // Append to your sheet with the new columns
      appendRow(auth, [
        timestamp,
        firstname,
        lastname,
        email,
        phoneNumber,
        messageText,
        referrer,
      ]),
      sendEmail(body, notification),
      sendTelegramMessage(notification),
    ];

    await Promise.all(tasks);

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error in form entry", error);
    return NextResponse.json(
      { status: "error", error: (error as Error)?.message ?? "unknown" },
      { status: 500 }
    );
  }
};

export const GET = async (_req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({ status: 200 });
};
