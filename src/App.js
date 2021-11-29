import "../src/index.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BlogPost from "./Components/BlogPost";

function App() {
  return (
    <div>
      <NavBar />
      <BlogPost />

      {/* <BlogIndex /> */}
      <Footer />
    </div>
  );
}

export default App;
