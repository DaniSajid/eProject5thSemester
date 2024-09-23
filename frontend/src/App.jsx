import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterComp from "./components/footer/FooterComp"
import HeaderComp from "./components/header/HeaderComp"
import HomeComp from "./components/pages/HomeComp"
import AboutComp from "./components/pages/AboutComp"
import ContactComp from "./components/pages/ContactComp"
import BlogComp from "./components/pages/BlogComp"
import BlogDetailComp from "./components/pages/BlogDetailComp"
import EventComp from "./components/pages/EventComp"
import EventDeatilComp from "./components/pages/EventDeatilComp"
import { useEffect, useState } from "react"
import AcountComp from "./components/LoginSignup/AcountComp"


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('nestu_theme') || 'theme-light');

  const toggleTheme = () => {
      const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';
      setTheme(newTheme);
      localStorage.setItem('nestu_theme', newTheme);
      document.documentElement.className = newTheme;
  };

  useEffect(() => {
      document.documentElement.className = theme;
  }, [theme]); 

  return (
    <>
       <div className="preloader">
            <div className="loader">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>
                <span>N</span>
            </div>
        </div>
        <div className="switch-theme-mode">
            <label id="switch" className="switch">
                <input type="checkbox" onChange={(e) => toggleTheme(e)} id="slider"/>
                <span className="slider round"></span>
            </label>
        </div>

        {/* React Component Start */}
      <BrowserRouter>
  <HeaderComp/>
      <Routes >
  <Route path="/" element={<HomeComp/>} />
  <Route path="/about" element={<AboutComp/>} />
  <Route path="/contact" element={<ContactComp/>} />
  <Route path="/blog" element={<BlogComp/>} />
  <Route path="/blogDetail" element={<BlogDetailComp/>} />
  <Route path="/event" element={<EventComp/>} />
  <Route path="/eventDetail" element={<EventDeatilComp/>} />
  <Route path="/account" element={<AcountComp/>} />
</Routes>
<FooterComp/>
</BrowserRouter>
{/* React Component End  */}

  {/* <!-- Start Go Top Area --> */}
        <div className="go-top">
            <i className="flaticon-up-arrows"></i>
            <i className="flaticon-up-arrows"></i>
        </div>
        {/* <!-- End Go Top Area --> */}
    </>
  )
}

export default App
