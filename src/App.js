import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/preBuild/NotFound";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="">

      <section>
        <Routes>
          <Route path="/" element={''} />



          <Route path="/*" element={<NotFound />} />
        </Routes>
      </section>
      

      <ToastContainer/>

    </div>
  );
}

export default App;
