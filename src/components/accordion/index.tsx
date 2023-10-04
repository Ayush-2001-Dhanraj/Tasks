import { useState } from "react";
import styles from "./accordion.module.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AccordianInterface } from "../../utility/common";

const Accordion = ({
  isActive: defaultActive,
  header,
  accordianContent = <></>,
}: AccordianInterface) => {
  const [isActive, setIsActive] = useState<boolean>(defaultActive || true);

  const handleAccordionClick = () => setIsActive((preV) => !preV);

  return (
    <>
      <button className={styles.accordionBtn} onClick={handleAccordionClick}>
        {header} {isActive ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
      </button>
      <div
        className={`${
          isActive ? styles.accordionActive : styles.accordionNonActive
        }`}
      >
        {accordianContent}
      </div>
    </>
  );
};

export default Accordion;
