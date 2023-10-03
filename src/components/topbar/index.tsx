import styles from "./styles.module.css";

export default function Topbar() {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.title}>Hello, Ayush</p>
        <p>Lets Organize Your Daily Tasks.</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
