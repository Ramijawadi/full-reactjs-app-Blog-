
import Home from "./Home";
import Navbar from "./Navbar";
const title = "welcome to our Blog site";
// const likes = 50;
// const link = "http://www.google.com"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
