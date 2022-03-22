import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./Pages/Store/Store";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Checkout from "./Pages/Checkout/Checkout";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#242526',
    },
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Store} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/checkout" component={Checkout} />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
