import nodemailer from "nodemailer";
import { FormValues } from "@/components/ContactForm";

const sendEmail = async (
  formData: FormValues,
  message: string
): Promise<void> => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Form Submission from ${formData.name}`,
      text: message,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

export default sendEmail;
