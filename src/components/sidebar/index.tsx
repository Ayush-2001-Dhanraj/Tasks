import styles from "./sidebar.module.css";
import {
  MdOutlineDashboardCustomize,
  MdOutlineAnalytics,
} from "react-icons/md";
import {
  AiOutlineCalendar,
  AiOutlinePlus,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import { RiTaskLine } from "react-icons/ri";
import { BiHelpCircle, BiLogOut } from "react-icons/bi";
import { SiTask } from "react-icons/si";
import Accordion from "../accordion";
import {
  AccordionStyles,
  SideBarAccordionsData,
  SideTabDataInterface,
} from "../../utility/common";
import SideTab from "../SideTab";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sideTabsData: Array<SideTabDataInterface> = [
  {
    icon: <MdOutlineDashboardCustomize className={styles.sideTabIcon} />,
    label: "Dashboard",
    to: "/",
  },
  {
    icon: <AiOutlineCalendar className={styles.sideTabIcon} />,
    label: "Calendar",
    to: "/calendar",
  },
  {
    icon: <RiTaskLine className={styles.sideTabIcon} />,
    label: "My Tasks",
    to: "/myTasks",
  },
  {
    icon: <MdOutlineAnalytics className={styles.sideTabIcon} />,
    label: "Analytics",
    to: "/analytics",
  },
];

const actionData: Array<SideTabDataInterface> = [
  {
    icon: <BiHelpCircle className={styles.sideTabIcon} />,
    label: "Help",
    to: "/help",
  },
  {
    icon: <BiLogOut className={styles.sideTabIcon} />,
    label: "Logout",
    to: "/logout",
  },
];

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSideTabClick = (to: string) => {
    navigate(to);
  };

  const homeAccordionContent: JSX.Element = (
    <>
      {sideTabsData.map((tab: SideTabDataInterface) => {
        return (
          <SideTab
            data={tab}
            selected={pathname === tab.to}
            onSideTabClick={() => handleSideTabClick(tab.to)}
          />
        );
      })}
    </>
  );

  const projectAccordionContent: JSX.Element = (
    <>
      <div className={styles.addProjectContainer}>
        <button className={styles.addProject}>
          <AiOutlinePlus className={styles.sideTabIcon} />
          Add Project
        </button>
      </div>
    </>
  );

  const teamsAccordionData: JSX.Element = <></>;

  const sideBarAccordions: Array<SideBarAccordionsData> = [
    {
      header: "Home",
      content: homeAccordionContent,
    },
    {
      header: "Projects",
      content: projectAccordionContent,
    },
    {
      header: "Teams",
      content: teamsAccordionData,
    },
  ];

  const handleToggle = () => setOpenSidebar((preV) => !preV);

  return (
    <div
      className={`${styles.sidebar} ${openSidebar ? styles.openSideBar : ""}`}
    >
      <div className={styles.logoContainer}>
        <SiTask size={30} />
        <p className={styles.brandName}>Tasks</p>
      </div>
      <div>
        {sideBarAccordions.map((data) => (
          <Accordion
            header={data.header}
            accordianContent={data.content}
            design={AccordionStyles.HEADER}
          />
        ))}
      </div>
      <div className={styles.actions}>
        {actionData.map((tab: SideTabDataInterface) => {
          return <SideTab data={tab} />;
        })}
      </div>
      <div className={styles.closeSidebar} onClick={handleToggle}>
        {openSidebar ? (
          <AiFillLeftCircle size={25} />
        ) : (
          <AiFillRightCircle size={25} />
        )}
      </div>
    </div>
  );
}
