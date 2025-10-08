import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,    // your Gmail
    pass: process.env.GMAIL_PASSKEY,    // Gmail App Password
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,   // you receive the message
      subject: `New message from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error.message);
    return NextResponse.json({
      success: false,
      message: "Failed to send message",
    }, { status: 500 });
  }
}
