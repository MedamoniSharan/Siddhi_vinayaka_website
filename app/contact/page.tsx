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
            <a href="mailto:siddhivinayakaofficial@gmail.com">
              siddhivinayakaofficial@gmail.com
            </a>
          </li>
          <li>
            Phone/Whatsapp:{" "}
            <a href="tel:+919948647319">+91 99486 47319</a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/siddhivinayakaofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @siddhivinayakaofficial
            </a>
          </li>
        </ul>
        <ContactForm />
      </div>
    </div>
  );
}
