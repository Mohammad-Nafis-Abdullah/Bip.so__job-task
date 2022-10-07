import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/preBuild/NotFound";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import MovieDetails from "./components/movie/MovieDetails";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="bg-dark min-h-screen">
      <Header/>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </section>
      

      <ToastContainer/>

    </div>
  );
}

export default App;
