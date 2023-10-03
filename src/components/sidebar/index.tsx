import styles from "./sidebar.module.css";
import {
  MdOutlineDashboardCustomize,
  MdOutlineAnalytics,
} from "react-icons/md";
import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { RiTaskLine } from "react-icons/ri";
import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiHelpCircle,
  BiLogOut,
} from "react-icons/bi";
import { SiTask } from "react-icons/si";
import { useState } from "react";

interface SideTabDataInterface {
  icon: JSX.Element;
  label: string;
}

interface SideTabInterface {
  data: SideTabDataInterface;
  selected?: boolean;
}

const sideTabsData: Array<SideTabDataInterface> = [
  {
    icon: <MdOutlineDashboardCustomize className={styles.sideTabIcon} />,
    label: "Dashboard",
  },
  {
    icon: <AiOutlineCalendar className={styles.sideTabIcon} />,
    label: "Calendar",
  },
  {
    icon: <RiTaskLine className={styles.sideTabIcon} />,
    label: "My Tasks",
  },
  {
    icon: <MdOutlineAnalytics className={styles.sideTabIcon} />,
    label: "Analytics",
  },
];

const actionData: Array<SideTabDataInterface> = [
  { icon: <BiHelpCircle className={styles.sideTabIcon} />, label: "Help" },
  { icon: <BiLogOut className={styles.sideTabIcon} />, label: "Logout" },
];

const SideTabs = ({ data, selected }: SideTabInterface) => {
  return (
    <div
      className={`${styles.sidetab} ${selected ? styles.sideTabSelected : ""} `}
    >
      {data.icon}
      {data.label}
    </div>
  );
};

interface AccordianInterface {
  isActive?: boolean;
  header: string;
  accordianContent?: JSX.Element;
}

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

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <SiTask size={30} /> Tasks
      </div>
      <Accordion
        header="Home"
        accordianContent={
          <>
            {sideTabsData.map((tab: SideTabDataInterface) => {
              return <SideTabs data={tab} />;
            })}
          </>
        }
      />
      <Accordion
        header="Projects"
        accordianContent={
          <>
            <div className={styles.addProjectContainer}>
              <button className={styles.addProject}>
                <AiOutlinePlus className={styles.sideTabIcon} />
                Add Project
              </button>
            </div>
          </>
        }
      />
      <Accordion header="Teams" />
      <div className={styles.actions}>
        {actionData.map((tab: SideTabDataInterface) => {
          return <SideTabs data={tab} />;
        })}
      </div>
    </div>
  );
}
