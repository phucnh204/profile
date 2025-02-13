import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}
