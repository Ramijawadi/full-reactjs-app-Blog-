import Home from "./Home";
import Navbar from "./Navbar";
import {  BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
const title = "welcome to our Blog site";

// const likes = 50;
// const link = "http://www.google.com"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
           
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
