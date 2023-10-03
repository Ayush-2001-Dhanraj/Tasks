import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import { AppRoutes } from "./utility/routes/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
