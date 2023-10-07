import styles from "./faq.module.css";

import SearchBar, { SearchColor } from "../../components/searchBar";
import Accordion from "../../components/accordion";

export default function FAQ() {
  const taskConsolidateData = [
    {
      header: "Finance App",
      isActive: false,
    },
    {
      header: "Webside Redesign",
      isActive: false,
    },
    {
      header: "Dashboard Management App",
      isActive: false,
    },
    {
      header: "Webside Redesign",
      isActive: false,
    },
    {
      header: "Dashboard Management App",
      isActive: false,
    },
    {
      header: "Webside Redesign",
      isActive: false,
    },
    {
      header: "Dashboard Management App",
      isActive: false,
    },
    {
      header: "Webside Redesign",
      isActive: false,
    },
    {
      header: "Dashboard Management App",
      isActive: false,
    },
    {
      header: "Webside Redesign",
      isActive: false,
    },
    {
      header: "Dashboard Management App",
      isActive: false,
    },
  ];

  const FrequentQuestions = (
    <>
      {taskConsolidateData.map((data) => (
        <Accordion isActive={data.isActive} header={data.header} />
      ))}
    </>
  );
  return (
    <div className={styles.container}>
      <div className={styles.FAQ}>
        <div className={styles.searchContainer}>
          <p>Hello! How can we help??</p>
          <SearchBar fullWidth color={SearchColor.WHITE} />
        </div>
      </div>
      <div className={styles.commonQuestion}>
        <p>Frequenty Asked questions</p>
        {FrequentQuestions}
      </div>
      <div className={styles.ideaImage}></div>
    </div>
  );
}
