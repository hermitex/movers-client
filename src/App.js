import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
