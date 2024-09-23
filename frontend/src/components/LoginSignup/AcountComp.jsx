import  { useState } from 'react';

const AcountComp = () => {
  // Set the initial state to false to show Register form by default
  const [isLogin, setIsLogin] = useState(false);

  // Function to handle the toggle switch change
  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between Login and Register
  };

  return (
    <>
      {/* <!-- Start Page Banner Area --> */}
      <div className="page-banner-area">
        <div className="container-fluid">
          <div className="single-page-banner-content">
            <h1>My Account</h1>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
        <div className="page-banner-shape-1">
          <img src="assets/images/banner/banner-one-shape-1.png" alt="images"/>
        </div>
        <div className="page-banner-shape-2">
          <img src="assets/images/banner/banner-one-shape-2.png" alt="images"/>
        </div>
        <div className="page-banner-shape-3">
          <img src="assets/images/banner/banner-one-shape-3.png" alt="images"/>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start My Account Area --> */}
      <div className="my-account-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">My Account</span>
            <h2>The Conference Create A New Account.</h2>
          </div>

          {/* Toggle Switch */}
          <div className="plans-switcher">
            <div className="switcher-box">
              <label className={`toggler ${isLogin ? 'toggler--is-active' : ''}`} id="filt-yearly">Login</label>
              <div className="toggle">
                <input
                  type="checkbox"
                  id="switcher"
                  className="check"
                  onChange={handleToggle}
                  checked={!isLogin}
                />
                <b className="b switch"></b>
              </div>
              <label className={`toggler ${!isLogin ? 'toggler--is-active' : ''}`} id="filt-monthly">Register</label>
            </div>
          </div>

          {/* Conditional Rendering based on toggle */}
          {isLogin ? (
            <div id="login" className="wrapper-full">
               <form className="my-account-content">
                <h2>Full Up The Login Form</h2>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="text-account">
                      <p><a href="forgot-password.html">Forgot Password?</a></p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="default-btn btn-style-fore">Login</button>
                  </div>
                </div>
                <div className="border-or">
                  <span>Or Login With</span>
                </div>
                <div className="my-account-list">
                  <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                    <li><a href="https://www.google.com/" target="_blank"><i className='bx bxl-google'></i></a></li>
                  </ul>
                </div>
                <p>Don’t Have an Account? <a href="my-account.html">Create One</a></p>
              </form>
            </div>
          ) : (
            <div id="register" className="wrapper-full">
              <form className="my-account-content register-form">
                <h2>Fill Up The Register Form</h2>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="default-btn btn-style-fore">Register</button>
                  </div>
                </div>
                <div className="border-or">
                  <span>Or Register With</span>
                </div>
                <div className="my-account-list">
                  <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                    <li><a href="https://www.google.com/" target="_blank"><i className='bx bxl-google'></i></a></li>
                  </ul>
                </div>
                <p>Don’t Have an Account? <a href="my-account.html">Create One</a></p>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* <!-- End My Account Area --> */}
    </>
  );
}

export default AcountComp;
