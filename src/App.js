// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GsapRoadmap from "./component/GsapRoadmap";
import Hero from "./component/Hero";
import GsapSlider from "./component/GsapSlider";
// import AnimatedImages from "./component/AnimatedImages";

function App() {
  return (
    <div className="App">
      <GsapRoadmap />
      <Hero />
      <GsapSlider />
      {/* <AnimatedImages /> */}
    </div>
  );
}

export default App;
