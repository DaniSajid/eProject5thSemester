import React from 'react'

const HeaderComp = () => {
  return (
<>
<div className="submenu-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9">
                        <div className="submenu-left-content">
                            <ul>
                                <li>
                                    <img src="assets/images/submenu-icon-1.svg" alt="images"/>
                                    <a href="tel:012325621563">012-3256-21563</a>
                                </li>
                                <li>
                                    <img src="assets/images/submenu-icon.svg" alt="images"/>
                                    <p>Milton Street Here, New York 512 USA</p>
                                </li>
                                <li>
                                    <img src="assets/images/submenu-icon-2.svg" alt="images"/>
                                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#741c1118181b341a110700015a171b19"><span className="__cf_email__" data-cfemail="aac2cfc6c6c5eac4cfd9dedf84c9c5c7">[email&#160;protected]</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3">
                        <div className="submenu-right-content">
                            <ul>
                                <li>
                                    <p>Follow Us:</p>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className='bx bxl-pinterest'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Menubar Area -->  */}
        <div className="navbar-area"> 
            {/* <!-- Start Menu For Mobile Device -->   */}
            <div className="container"> 
                <div className="mobile-nav">  
                    <div className="logo">
                        <a href="index.html"> 
                            <img src="assets/images/logo-one.png" className="logo-light" alt="images"/>   
                            <img src="assets/images/logo-two.png" className="logo-dark" alt="images"/>   
                        </a> 
                    </div>
                </div>  
            </div> 
            {/* <!-- End Menu For Mobile Device -->  */}
            
            <div className="main-nav">         
                <div className="container-fluid">    
                    <nav className="navbar navbar-expand-md navbar-light">   

                        <a href="index.html">   
                            <img src="assets/images/logo-one.png" className="logo-light" alt="images"/>   
                            <img src="assets/images/logo-two.png" className="logo-dark" alt="images"/>   
                        </a>   

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent"> 
                            <ul className="navbar-nav m-auto">  
                                <li className="nav-item nav-item-five">  
                                    <a href="#" className="nav-link  active">
                                        Home
                                    </a>            
                                </li> 
                                <li className="nav-item nav-item-five"> 
                                    <a href="#" className="nav-link">
                                        About Us
                                    </a>    
                                </li> 

                                <li className="nav-item nav-item-five"> 

                                    <a href="#" className="nav-link dropdown-toggle">
                                        Event
                                    </a>    
                                    
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="event.html" className="nav-link bg-border-top">Event</a>     
                                        </li> 
                                        <li className="nav-item">
                                            <a href="event-details.html" className="nav-link">Event Details</a>     
                                        </li> 

                                        <li className="nav-item"> 

                                            <a href="#" className="nav-link dropdown-toggle">
                                                Speakers
                                            </a>   
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="speakers.html" className="nav-link bg-border-top">Speakers Style One</a>     
                                                </li>
                                               <li className="nav-item">
                                                    <a href="speakers-two.html" className="nav-link">Speakers Style Two</a>     
                                                </li>
                                                    <li className="nav-item"> 
                                                    <a href="speakers-three.html" className="nav-link bg-border-2">Speakers Style Three</a>      
                                                </li>  
                                            </ul>
        
                                        </li>

                                       <li className="nav-item">
                                            <a href="gallery.html" className="nav-link">Gallery</a>     
                                        </li> 
                                        <li className="nav-item">
                                            <a href="venue.html" className="nav-link bg-border-2">Venue</a>     
                                        </li> 
                                    </ul>

                                </li> 

                                <li className="nav-item nav-item-five"> 

                                    <a href="#" className="nav-link dropdown-toggle">
                                        Pages
                                    </a>   

                                    <ul className="dropdown-menu">

                                        <li className="nav-item">
                                            <a href="pricing.html" className="nav-link bg-border-top">Pricing</a>     
                                        </li> 

                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ’s</a>     
                                        </li> 

                                        <li className="nav-item"> 
 
                                            <a href="#" className="nav-link dropdown-toggle">
                                                Schedules
                                            </a>   
                                            
                                           <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="schedules.html" className="nav-link bg-border-top">Schedules Style One</a>     
                                                </li>
                                               <li className="nav-item">
                                                    <a href="schedules-2.html" className="nav-link">Schedules Style Two</a>     
                                                </li>
                                                <li className="nav-item"> 
                                                    <a href="schedules-3.html" className="nav-link bg-border-2">Schedules Style Three</a>      
                                                </li>  
                                            </ul>
        
                                        </li>  

                                        <li className="nav-item">
                                            <a href="sponsors.html" className="nav-link">Sponsors</a>     
                                        </li> 

                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>     
                                        </li>   

                                        <li className="nav-item"> 

                                            <a href="#" className="nav-link dropdown-toggle">
                                                User
                                            </a>   
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="my-account.html" className="nav-link bg-border-top">My Account</a>     
                                                </li>
                                               <li className="nav-item">
                                                    <a href="login.html" className="nav-link">Login</a>     
                                                </li>
                                                    <li className="nav-item"> 
                                                    <a href="register.html" className="nav-link">Register</a>      
                                                </li>  
                                                <li className="nav-item">
                                                    <a href="forgot-password.html" className="nav-link bg-border-2">Forgot Password</a>     
                                                </li>  
                                            </ul>
        
                                        </li>

                                        <li className="nav-item"> 
                                            <a href="terms-conditions.html" className="nav-link">Terms & Conditions</a>         
                                        </li> 
                                        <li className="nav-item"> 
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>         
                                        </li>  
                                        <li className="nav-item"> 
                                            <a href="error.html" className="nav-link">Error</a>         
                                        </li>   
                                        <li className="nav-item"> 
                                            <a href="coming-soon.html" className="nav-link bg-border-2">Coming Soon</a>         
                                        </li>   
                                    </ul>  

                                </li>

                                <li className="nav-item nav-item-five"> 

                                    <a href="#" className="nav-link">
                                        Blog
                                    </a>   
                                   </li> 
                                
                                <li className="nav-item"> 
                                    <a href="contact.html" className="nav-link">Contact Us</a>      
                                </li> 
                            </ul> 


                            <div className="others-option-vg d-flex align-items-center"> 

                                <div className="option-item">
                                    <form className="search-form">
                                        <input className="search-input" placeholder="Search Here" type="text"/>
            
                                        <button type="submit" className="search-button">
                                            <i className='bx bx-search' ></i>
                                        </button>
                                    </form>
                                </div>

                               <div className="option-item">
                                    <a href="pricing.html" className="default-btn">Buy A Tickets <i className='bx bx-plus' ></i></a> 
                                </div>
                            </div>
                        </div>
                    </nav> 
                </div>
            </div> 

            <div className="others-option-for-responsive"> 
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="circle circle-one"></div>
                            <div className="circle circle-two"></div>
                            <div className="circle circle-three"></div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="option-inner">
                            <div className="others-option justify-content-center d-flex align-items-center">

                                <div className="option-item">
                                    <form className="search-form">
                                        <input className="search-input" placeholder="Search Here" type="text"/>
            
                                        <button type="submit" className="search-button">
                                            <i className='bx bx-search' ></i>
                                        </button>
                                    </form>
                                </div>

                                 <div className="option-item">
                                    <a href="pricing.html" className="default-btn">Get Free Estimate <i className='bx bx-plus' ></i></a> 
                                </div>
                                
                            </div>
                        </div> 
                    </div>
                </div>
            </div>    
        </div>
        {/* <!-- End Menubar Area --> */}
</>
  )
}

export default HeaderComp
