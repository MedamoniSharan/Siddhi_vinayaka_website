import styles from "../page-shell.module.css";

export default function AccountPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <h1 className="section-title">My Account</h1>
        <p className={styles.body}>
          Log in and register are disabled in this static frontend demo.
        </p>
      </div>
    </div>
  );
}
