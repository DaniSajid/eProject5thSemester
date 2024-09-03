import FooterComp from "./components/footer/FooterComp"
import HeaderComp from "./components/header/HeaderComp"
import HomeComp from "./components/pages/HomeComp"


function App() {
 

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
  <HeaderComp/>
<HomeComp/>
<FooterComp/>
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
