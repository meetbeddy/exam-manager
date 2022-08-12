import { Routes, Route } from "react-router-dom";
import Registration from "./authentication/Registration";
import Dashboard from "./dashboard/Index";
import UserManager from "./pages/adminpages/users/Index";
import InitConfig from "./pages/adminpages/initconfig/InitConfig";

import ConfigPage from "./pages/adminpages/config/ConfigPage";

function App() {
  return (
    <div className="App">
      {/* <Dashboard>
        <ConfigPage />
      </Dashboard> */}

      <Routes>
        <Route path="/" element={<Registration />} />{" "}
        <Route path="init-config" element={<InitConfig />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UserManager />} />
          {/* <Route index element={<MainDashboard />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="cv-upload" element={<UploadCs />} />
          <Route path="reunion" element={<Reunion />} /> */}

          <Route path="config" element={<ConfigPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
