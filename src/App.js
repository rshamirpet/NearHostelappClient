import { useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Main from "./components/Main";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import HostelOwner from "./components/AddHostel";
import GetHostel from "./components/GetHostel";
import GetForms from "./components/GetFroms";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/search" component={Main} />

      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/becomeHostelOwner" component={HostelOwner} />
      <Route exact path="/hostel/:hid" component={GetHostel} />
      <Route exact path="/getForms" component={GetForms} />
    </Switch>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
