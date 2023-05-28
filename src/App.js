import './App.css';
import NavigationBar from "./components/navbar/navigation-bar.component";
import Banner from "./components/banner/banner.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
