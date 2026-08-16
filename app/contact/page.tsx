import { ContactForm } from "./ContactForm";
import styles from "../page-shell.module.css";

export default function ContactPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We&apos;re always here to help you</p>
        <ul className={styles.list}>
          <li>
            Email:{" "}
            <a href="mailto:care@sidhivinayaka.com">care@sidhivinayaka.com</a>
          </li>
          <li>
            Phone/Whatsapp:{" "}
            <a href="tel:+919876543210">+91 98765 43210</a>
          </li>
        </ul>
        <ContactForm />
      </div>
    </div>
  );
}
