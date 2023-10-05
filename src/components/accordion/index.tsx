import { useState } from "react";
import styles from "./accordion.module.css";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AccordianInterface, AccordionStyles } from "../../utility/common";

const Accordion = ({
  isActive: defaultActive,
  header,
  design = AccordionStyles.PRIMARY,
  accordianContent = <></>,
}: AccordianInterface) => {
  const [isActive, setIsActive] = useState<boolean>(defaultActive || true);

  const handleAccordionClick = () => setIsActive((preV) => !preV);

  return (
    <>
      <button
        className={`${styles.accordionBtn} ${
          design === AccordionStyles.HEADER ? styles.accordionBtnHeader : ""
        }`}
        onClick={handleAccordionClick}
      >
        {header}
        {isActive ? (
          <BiSolidDownArrow
            size={design === AccordionStyles.PRIMARY ? 10 : 15}
          />
        ) : (
          <BiSolidUpArrow size={design === AccordionStyles.PRIMARY ? 10 : 15} />
        )}
      </button>
      <div
        className={`${
          isActive ? styles.accordionActive : styles.accordionNonActive
        }`}
      >
        {accordianContent}
      </div>
      <hr />
    </>
  );
};

export default Accordion;
