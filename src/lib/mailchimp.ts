// lib/mailchimp.ts

import client from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp client
client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY || "",
  server: process.env.MAILCHIMP_SERVER_PREFIX || "",
});

// Function to subscribe a user to Mailchimp
export const subscribeToMailchimp = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string
): Promise<void> => {
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID; // Ensure this is defined in your environment

  if (!audienceId) {
    throw new Error("MAILCHIMP_AUDIENCE_ID environment variable is missing.");
  }

  const subscriber = {
    email_address: email,
    status: "subscribed" as const,
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phoneNumber,
    },
  };

  try {
    const response = await client.lists.addListMember(audienceId, subscriber);

    console.log("Subscriber added to Mailchimp:", response);
  } catch (error) {
    console.error("Error adding subscriber to Mailchimp:", error);
    throw error;
  }
};
