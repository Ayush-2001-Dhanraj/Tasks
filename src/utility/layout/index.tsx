import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.main}>
        <Topbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
