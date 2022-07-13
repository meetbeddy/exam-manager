import Dashboard from "./components/dashboard/Dashboard";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <TestPage />
      </Dashboard>
    </div>
  );
}

export default App;
