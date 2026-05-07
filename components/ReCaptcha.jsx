"use client";

import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha({ onChange }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn("reCAPTCHA site key is missing");
    return null;
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
    />
  );
}