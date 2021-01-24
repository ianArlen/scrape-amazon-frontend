import { React } from "react";
import {Route} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import './App.css';
import Home from './components';
import Amazon from './components/Amazon';


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/amazon" component={Amazon}/>
    </>
  );
}

export default App;
