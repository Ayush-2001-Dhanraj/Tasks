import React from "react";
import styles from "./removeInMobile.module.css";

interface RemoveInMobileInterface {
  children: JSX.Element;
}

export default function RemoveInMobile({ children }: RemoveInMobileInterface) {
  return <div className={styles.removeInMobile}>{children}</div>;
}
