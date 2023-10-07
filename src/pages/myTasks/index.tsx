import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./myTasks.module.css";
import { CompWithChildren } from "../../utility/common";
import Accordion from "../../components/accordion";

interface SectionInterface extends CompWithChildren {
  expandedCard?: boolean;
  header: string;
}

const Section = ({ children, expandedCard, header }: SectionInterface) => {
  return (
    <div
      className={`${styles.section} ${expandedCard ? styles.expandedCard : ""}`}
    >
      <div className={styles.header}>
        <p className={styles.text}>
          {header} {!expandedCard && <span>0</span>}
        </p>
        <button className={styles.action}>
          <BsThreeDotsVertical />
        </button>
      </div>
      {children}
    </div>
  );
};

interface TaskCardInterface {
  header: string;
  summary: string;
  duedate: string;
}

const TaskCard = ({ header, summary, duedate }: TaskCardInterface) => {
  return (
    <div className={styles.TaskCard}>
      <p className={styles.head}>{header}</p>
      <p className={styles.summary}>{summary}</p>
      <hr />
      <div className={styles.due}>{duedate}</div>
    </div>
  );
};

export default function MyTasks() {
  const taskData = [
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
    {
      header: "Map User flow",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolor amet pariatur enim, quos.",
      duedate: "Due: Aug 20th, 23",
    },
  ];

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
  ];

  const allTasksConsolidate = (
    <>
      {taskConsolidateData.map((data) => (
        <Accordion isActive={data.isActive} header={data.header} />
      ))}
    </>
  );
  const backlogTasks = (
    <>
      {taskData.map((data) => (
        <TaskCard {...data} />
      ))}
    </>
  );
  const inProgressTasks = (
    <>
      {taskData.map((data) => (
        <TaskCard {...data} />
      ))}
    </>
  );
  const DoneTasks = (
    <>
      {taskData.map((data) => (
        <TaskCard {...data} />
      ))}
    </>
  );

  const sectionData = [
    {
      expandedCard: true,
      header: "Tasks",
      content: allTasksConsolidate,
    },
    {
      expandedCard: false,
      header: "Backlog",
      content: backlogTasks,
    },
    {
      expandedCard: false,
      header: "In Progress",
      content: inProgressTasks,
    },
    {
      expandedCard: false,
      header: "Done",
      content: DoneTasks,
    },
  ];

  return (
    <div className={styles.MyTasks}>
      {sectionData.map((data) => (
        <Section header={data.header} expandedCard={data.expandedCard}>
          {data.content}
        </Section>
      ))}
    </div>
  );
}
