// lib/mailchimp.ts

import client from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp client
client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY || "",
  server: process.env.MAILCHIMP_SERVER_PREFIX || "",
});

// Define types for Mailchimp API response and subscriber data
interface MailchimpResponse {
  id: string;
  email_address: string;
  status: string;
}

interface MailchimpMergeFields {
  FNAME: string;
  LNAME: string;
  PHONE: string;
}

// Function to subscribe a user to Mailchimp
export const subscribeToMailchimp = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string
): Promise<MailchimpResponse> => {
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID; // Ensure this is defined in your environment

  if (!audienceId) {
    throw new Error("MAILCHIMP_AUDIENCE_ID environment variable is missing.");
  }

  const subscriber = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phoneNumber,
    } as MailchimpMergeFields,
  };

  try {
    const response = await client.lists.addListMember(audienceId, subscriber);
    console.log("Subscriber added to Mailchimp:", response);
    return response;
  } catch (error) {
    console.error("Error adding subscriber to Mailchimp:", error);
    throw error;
  }
};

export default client; // Export Mailchimp client if needed elsewhere
