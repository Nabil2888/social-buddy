import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TopNav from './components/TopNav/TopNav';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <Router>
      <TopNav/>
      <Switch>
        <Route path="/post/:postId">
          <BlogDetails/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
