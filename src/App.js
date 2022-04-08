import "./App.css";
import logo from "./logo.png";
import RoutingPath from "./configs";
import { Header, Footer} from "./components";


function App() {
  return (
    <div className="App">
      <Header/>
      <RoutingPath/>
      <Footer/>
    </div>
  );
}

export default App;
