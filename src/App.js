import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./Components/Context-API-3/Context";
import Nav from "./Components/Context-API-3/nav";
import Login from "./Components/Context-API-3/login";
import Home from "./Components/Context-API-3/Home";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
    

      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
