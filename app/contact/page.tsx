"use client";

import { FormEvent, useState } from "react";
import { buildContactMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const contactImage =
  "https://anandhaassweets.com/cdn/shop/files/Frame_2121453320.png?v=1768471102";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
};

const fields: FieldProps[] = [
  {
    id: "full-name",
    label: "Full Name",
    placeholder: "Enter full name",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter email address",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Enter phone number",
    type: "tel",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Enter subject",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const message = buildContactMessage({
      name: String(data.get("full-name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page { min-height: 100vh; display: grid; place-items: center; padding: 52px 24px; background: #f7f4e8; color: #111111; font-family: Inter, Arial, sans-serif; }
        .contact-shell { width: min(1420px, 100%); display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); min-height: 735px; border-radius: 24px; overflow: hidden; box-shadow: 0 22px 55px rgba(91, 26, 29, 0.12); }
        .contact-visual { min-height: 735px; background: #ded2bf; }
        .contact-visual img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; }
        .contact-panel { padding: clamp(32px, 5vw, 60px); background: #b02a2e; color: #fbf8e7; }
        .contact-panel h1 { margin: 0 0 16px; color: #f7db49; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(36px, 4vw, 52px); line-height: .98; letter-spacing: -2px; font-weight: 600; }
        .contact-intro { max-width: 440px; margin: 0; font-size: 15px; line-height: 1.65; color: #fbf8e7; }
        .divider { display: flex; align-items: center; justify-content: flex-end; gap: 0; min-height: 82px; }
        .divider::before { content: ''; width: 100%; border-top: 2px solid rgba(251, 248, 231, .72); }
        .divider-mark { flex: 0 0 auto; margin-left: -88px; margin-right: 26px; padding: 0 15px; background: #b02a2e; color: #f7db49; font-family: Georgia, serif; font-size: 25px; line-height: 1; transform: rotate(45deg); }
        .contact-form { display: flex; flex-wrap: wrap; gap: 20px; }
        .field { flex: 1 1 calc(50% - 10px); min-width: 210px; }
        .field label, .message-field label { display: block; margin-bottom: 10px; color: #fbf8e7; font-size: 13px; line-height: 1; font-weight: 700; letter-spacing: 1.35px; text-transform: uppercase; }
        .field input, .message-field textarea { width: 100%; border: 1px solid #eee; border-radius: 10px; padding: 14px 18px; background: #fbf8e7; color: #111; font: 400 16px/1.1 Inter, Arial, sans-serif; outline: none; transition: box-shadow .2s, border-color .2s; }
        .field input { height: 48px; }
        .message-field { flex: 1 1 100%; margin-top: 0; }
        .message-field textarea { min-height: 142px; resize: vertical; line-height: 1.4; }
        .field input:focus, .message-field textarea:focus { border-color: #f7db49; box-shadow: 0 0 0 3px rgba(247, 219, 73, .28); }
        .submit-button { border: 0; padding: 17px 27px; background: #f7db49; color: #111; cursor: pointer; font: 700 16px/1 Inter, Arial, sans-serif; clip-path: polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px)); transition: transform .2s, background .2s; }
        .submit-button:hover { background: #ffe978; transform: translateY(-2px); }
        .submit-button:focus-visible { outline: 3px solid #fbf8e7; outline-offset: 4px; }
        .success-message { margin: 0; color: #f7db49; font-size: 14px; font-weight: 600; }
        @media (max-width: 760px) { .contact-page { padding: 20px 14px; place-items: start center; } .contact-shell { grid-template-columns: 1fr; min-height: auto; border-radius: 18px; } .contact-visual { height: 300px; min-height: 0; } .contact-panel { padding: 34px 24px 30px; } .divider { min-height: 68px; } .field { flex-basis: 100%; min-width: 0; } }
      `}</style>
      <section className="contact-shell" aria-labelledby="contact-heading">
        <figure className="contact-visual">
          <img
            src={contactImage}
            alt="Assorted traditional sweets arranged for sharing"
          />
        </figure>
        <section className="contact-panel">
          <header>
            <h1 id="contact-heading">Get in Touch</h1>
            <p className="contact-intro">
              We will get back to you between 24-48 hours. Thank you for your
              patience.
            </p>
          </header>
          <div className="divider" aria-hidden="true">
            <span className="divider-mark">✦</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div className="field" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            ))}
            <div className="message-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Write here..."
              />
            </div>
            {submitted ? (
              <p className="success-message" role="status">
                Opening WhatsApp — send the pre-filled message to complete your
                enquiry.
              </p>
            ) : (
              <button className="submit-button" type="submit">
                Submit
              </button>
            )}
          </form>
        </section>
      </section>
    </div>
  );
}
