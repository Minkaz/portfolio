import './App.css';
import NavigationBar from "./components/navbar/navigation-bar.component";
import Banner from "./components/banner/banner.component";
import Skills from "./components/skills/skills.component";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Banner/>
        <Skills/>
    </div>
  );
}

export default App;
