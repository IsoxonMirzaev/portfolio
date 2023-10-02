import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <div className="bg-[#5C8374]">
      <Navbar />
      <Header />
      <About />
      <Projects/>
      <Experience/>
    </div>
  );
}
export default App;
