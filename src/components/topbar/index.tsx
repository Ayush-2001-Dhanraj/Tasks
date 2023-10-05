import { useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  AiOutlineCalendar,
  AiOutlineDown,
  AiOutlineMail,
} from "react-icons/ai";
import SearchBar from "../searchBar";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const interviewDateRef = useRef();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleInterviewDateClick = () => {
    // @ts-ignore
    if (interviewDateRef.current) interviewDateRef.current.showPicker();
  };

  const handleOnClickAvatar = () => setShowDropdown(true);
  const handleCloseDropdown = () => {
    if (showDropdown) setShowDropdown(false);
  };

  return (
    <div className={styles.header}>
      <div>
        <p className={styles.title}>Hello, Ayush!</p>
        <p>Lets Organize Your Daily Tasks.</p>
      </div>

      {pathname !== "/help" && (
        <SearchBar placeholder="Search task, project or team members" />
      )}

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
        <div className={styles.avatar} onClick={handleOnClickAvatar}>
          {showDropdown && (
            <div className={styles.dropdown} onMouseLeave={handleCloseDropdown}>
              <div className={styles.dp}></div>
              <div className={styles.details}>
                <div>
                  <p className={styles.text}>Name</p>
                  <p className={styles.text}>Location</p>
                </div>
                <button className={styles.email}>
                  <AiOutlineMail />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
