import Development from "./components/Development";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Skills />
      <Development/>
      <Footer/>
    </main>
  );
}
