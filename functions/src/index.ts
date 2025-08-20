import * as admin from "firebase-admin";

import * as nodemailer from "nodemailer";

import * as path from "path";

import * as dotenv from "dotenv";

import { onDocumentCreated } from "firebase-functions/firestore";

dotenv.config({ path: path.resolve(__dirname, ".env") });

admin.initializeApp();

// email will be sent out from cbuscodeandcoff
const cbusGmail = process.env.EMAIL;
const appPassword = process.env.PASSWORD;

// test email that will receive forms after they are created in firebase
const testEmail = "yenterefe@gmail.com";

//Email transporter with GMAIL SDK
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: cbusGmail,
    pass: appPassword,
  },
});

interface SubmissionData {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

//when document is created and sent to firebase, this will be exported to firestore
export const onSubmission = onDocumentCreated(
  "submissions/{docID}",
  async (event) => {
    //delete
    console.log("⚡ onSubmission TRIGGERED");

    const snapshot = event.data;

    //delete
    if (!snapshot) {
      console.log("❌ No snapshot data found");
      return null;
    }

    //to get the fields from the data
    const data = snapshot?.data() as SubmissionData;

    const firstName = (data.firstName ?? "").toString();
    const lastName = (data.lastName ?? "").toString();
    const email = (data.email ?? "").toString();
    const subject = (data.subject ?? "").toString();
    const message = (data.message ?? "").toString();

    const testEmailSubject = `New contact submission from ${firstName || "Unknown"}`;

    const submittedFormHtml = `   
      <h2>New form submission</h2>
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      <hr/><small>Doc ID: ${event.params.docID}</small>`;

    try {
      await transporter.sendMail({
        from: cbusGmail,
        to: testEmail,
        subject: testEmailSubject,
        html: submittedFormHtml,
      });

      if (email) {
        await transporter.sendMail({
          from: cbusGmail,
          to: email,
          subject: `Hi ${firstName}, your message was successfully submitted.`,
          text:
            `${firstName ? " " + firstName : ""},\n\n` +
            "Thank you for contacting Columbus Code and Coffee. We’ll be in touch with you shortly.\n\n Admin",
        });
      }

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);
