import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Signup from './components/Signup';
import LoggedIn from './components/LoggedIn';
import Cookies from "js-cookie";

const userCookie = Cookies.get("user");
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={userCookie ? <Navigate to="/loggedIn" /> : <Login />}
        />
        {/* <Route path="/loggedIn" component={<LoggedIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
