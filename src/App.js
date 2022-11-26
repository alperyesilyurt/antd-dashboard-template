import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./components/layout/Main";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Main>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Main>
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
