import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./utility/routes/Routing";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
