import { Routes, Route } from "react-router-dom";
import Registration from "./authentication/Registration";
// import Auth from "./auth/Index";
import Dashboard from "./dashboard/Index";
import InitConfig from "./pages/adminpages/initconfig/InitConfig";

// import OldDashboard from "./components/dashboard/Dashboard";
import ConfigPage from "./pages/config/ConfigPage";

function App() {
  return (
    <div className="App">
      {/* <Dashboard>
        <ConfigPage />
      </Dashboard> */}

      <Routes>
        <Route path="/" element={<Registration />} />{" "}
        <Route path="init-config" element={<InitConfig />} />
        {/* 
        <Route path="/forgotpassword" element={<ForgotPassword />} />{" "}
        <Route path="/passwordreset" element={<ResetMain />} />{" "}
        <Route path="/signup" element={<Auth type="register" />} /> */}
        <Route path="/dashboard" element={<Dashboard />}>
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
