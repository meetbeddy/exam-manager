import { Routes, Route } from "react-router-dom";
import Registration from "./authentication/Registration";
import SignIn from "./authentication/SignIn";
import Dashboard from "./dashboard/Index";
import UserManager from "./pages/adminpages/users/Index";
import InitConfig from "./pages/adminpages/initconfig/InitConfig";
import { schoolId } from "./store/api";

import ConfigPage from "./pages/adminpages/config/ConfigPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />{" "}
        <Route path="/:id/signin" element={<SignIn />} />{" "}
        <Route path="/:id" element={<SignIn />} />
        <Route path="/:id/init-config" element={<InitConfig />} />
        <Route path={`/${schoolId}/dashboard`} element={<Dashboard />}>
          <Route path="users" element={<UserManager />} />
          <Route path="config" element={<ConfigPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
