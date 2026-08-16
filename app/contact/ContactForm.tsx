"use client";

import { useState } from "react";
import styles from "../page-shell.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 400);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "done" ? (
        <p className={styles.note} role="status">
          Thanks — this static demo does not send messages to a server.
        </p>
      ) : null}
      {status === "error" ? (
        <p className={styles.note} role="alert">
          Something went wrong. Try again.
        </p>
      ) : (
        <p className={styles.note}>Static demo — form does not submit to a server.</p>
      )}
    </form>
  );
}
