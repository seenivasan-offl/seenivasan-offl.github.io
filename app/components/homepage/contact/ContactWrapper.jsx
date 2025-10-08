"use client";

import dynamic from "next/dynamic";

// Dynamically import the contact form so it only renders on the client
const ContactForm = dynamic(() => import("./contact-form"), { ssr: false });

export default function ContactWrapper() {
  return <ContactForm />;
}
