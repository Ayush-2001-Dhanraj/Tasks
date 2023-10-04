import { SideTabInterface } from "../../utility/common";
import styles from "./sidetab.module.css";

const SideTab = ({ data, selected }: SideTabInterface) => {
  return (
    <div
      className={`${styles.sidetab} ${selected ? styles.sideTabSelected : ""} `}
    >
      {data.icon}
      {data.label}
    </div>
  );
};

export default SideTab;
