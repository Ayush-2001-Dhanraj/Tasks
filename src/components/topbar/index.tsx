import { useRef } from "react";
import getURIFromIcon from "../../utility/getURIFromIcon";
import styles from "./styles.module.css";
import {
  AiOutlineSearch,
  AiOutlineCalendar,
  AiOutlineDown,
} from "react-icons/ai";

export default function Topbar() {
  const interviewDateRef = useRef();
  const handleInterviewDateClick = () => {
    // @ts-ignore
    if (interviewDateRef.current) interviewDateRef.current.showPicker();
  };

  return (
    <div className={styles.header}>
      <div>
        <p className={styles.title}>Hello, Ayush!</p>
        <p>Lets Organize Your Daily Tasks.</p>
      </div>

      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search task, project or team members"
        style={{ backgroundImage: getURIFromIcon(<AiOutlineSearch />) }}
      />

      <div className={styles.rightSection}>
        <div
          className={styles.calendarSection}
          onClick={handleInterviewDateClick}
        >
          <AiOutlineCalendar />
          <input
            type="date"
            className={styles.calendar}
            // @ts-ignore
            ref={interviewDateRef}
          />
          <AiOutlineDown />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
}
