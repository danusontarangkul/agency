import { google, sheets_v4 } from "googleapis";
import { promises as fs } from "fs";
import path from "path";
import { JWT } from "google-auth-library";

const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

interface Credentials {
  client_email: string;
  private_key: string;
}

export async function loadCredentials(): Promise<Credentials> {
  const credentials = await fs.readFile(CREDENTIALS_PATH, "utf-8");
  return JSON.parse(credentials) as Credentials;
}

export async function authorize(): Promise<JWT> {
  const credentials = await loadCredentials();
  const { client_email, private_key } = credentials;
  const auth = new google.auth.JWT(client_email, undefined, private_key, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]);
  await auth.authorize();
  return auth;
}

export async function appendRow(auth: JWT, values: any[]): Promise<void> {
  const sheets: sheets_v4.Sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = "Sheet1!A:G";

  const request: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log(`Added row to Google Sheets: ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error("Error appending row to Google Sheets:", error);
    throw error;
  }
}
