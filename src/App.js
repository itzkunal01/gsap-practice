// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GsapRoadmap from "./component/GsapRoadmap";
import Hero from "./component/Hero";
import GsapSlider from "./component/GsapSlider";

function App() {
  return (
    <div className="App">
      <GsapRoadmap />
      {/* <Hero /> */}
      <GsapSlider />
    </div>
  );
}

export default App;
