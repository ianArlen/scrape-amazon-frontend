import { React } from "react";
import {Route} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import './App.css';
import Home from './components';
import Amazon from './components/Amazon';
import Login from "./components/Login";


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/amazon" component={Amazon}/>
    </>
  );
}

export default App;
