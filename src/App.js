import { Routes, Route } from "react-router-dom";
import routes from "./constant/routes";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;