import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderComponent from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhyusSection from "./components/WhyUs/WhyUs";
import AboutUs from "./components/Aboutus/Aboutus";
import Carousel from "./components/Carousel/Carousel";
import BlogPosts from "./components/Blogs/Blogposts";
// import SideBar from "./components/Navbar/SideBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SideBar /> */}
      <HeaderComponent />
      <WhyusSection />
      <AboutUs />
      <Carousel />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
