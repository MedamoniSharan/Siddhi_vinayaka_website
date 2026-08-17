import { ContactForm } from "./ContactForm";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import styles from "../page-shell.module.css";

export default function ContactPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We&apos;re always here to help you</p>
        <ul className={styles.list}>
          <li>
            Address: 7-2-199, Opp. Surabhi Car Wash, Mankammathota, Karimnagar
            505001 —{" "}
            <a
              href="https://maps.app.goo.gl/bjEE3ky7dcjrfG8w6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:siddhivinayakaofficial@gmail.com">
              siddhivinayakaofficial@gmail.com
            </a>
          </li>
          <li>
            Phone/Whatsapp:{" "}
            <a
              href={getWhatsAppUrl(
                "Hello Siddhi Vinayaka Home Foods, I would like to get in touch.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {WHATSAPP_DISPLAY}
            </a>
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
