import Dashboard from "./components/dashboard/Dashboard";
import ConfigPage from "./pages/config/ConfigPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <ConfigPage />
      </Dashboard>
    </div>
  );
}

export default App;
