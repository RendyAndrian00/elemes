//file gambar
import logo from './assets/img/logo.png';
import slider from './assets/img/slider.png';
import cupcake from './assets/img/categori/cupcake.png';
import pizza from './assets/img/categori/pizza.png';

import './App.css';
import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/fontawesome-free/css/all.min.css';

import './assets/vendor/owlcarousel1/owl.carousel.css';
import './assets/vendor/owlcarousel1/owl.theme.default.css';


function App() {
  return (
    <div className="App">
      <header className="fixed-top" id="header">
        <div className="container d-flex align-items-center">
        <h1 className="logo"><a href="#"><img src={logo} /></a></h1>
        <nav id="navbar" className="navbar order-last order-lg-0" >
          <ul>
            <li><span className="feature-default">&nbsp;</span><a className="nav-link scrollto active" href="#">Home</a></li>
            <li><span className="feature-default">&nbsp;</span><a className="nav-link scrollto" href="#">About</a></li>
            <li><span className="feature-new">New</span><a className="nav-link scrollto" href="#">Promotions</a> </li>
            <li><span className="feature-default">&nbsp;</span><a className="nav-link scrollto" href="#">Blogs</a></li>
            <li><span className="feature-default">&nbsp;</span><a className="nav-link scrollto" href="#">Contact Us</a></li>
          </ul>
          <div className="fixed-menu" ></div>
            <i className="bi bi-list mobile-nav-toggle"><span >Home</span></i>
            <i className="bi bi-list mobile-nav-toggle" ><span >Promotions</span></i>
            <i className="bi bi-list mobile-nav-toggle" ><span >Other</span></i>
        </nav>
        <span className="d-none d-md-inline"><b>Masuk</b></span>
        <a href="#" className="appointment-btn scrollto"><span >Daftar Sekarang</span></a>
      </div>
      </header>
      <div id="hero" className="d-flex align-items-center">
        <div id="bgSlider" >
        </div>
        <div className="container menu-top text-left">
          <div className="row">
            <div className="col-md-5">
              <h1 className="colorDefault" >Good Food Us{'\n'}Good Mood</h1>
              <div className="d-block d-sm-none sliderNow mt-4 mb-4">
                <div className="roundImage">
                  <div className="p-5"><img src={slider} className='image-slider-round'/></div>
                </div>
                <div className="deskripsiImage shadow">
                  <div className="row p-2">
                    <div className="col-4">
                      <div className="imageDeskripsi m-2" style={{width: "100%"}}>
                          <img src={slider} style={{width: "80px"}} />
                      </div>
                    </div>
                    <div className="col-7">
                      <p className="mb-0"><b>Green Salad Tomato</b></p>
                      <p className="m-0 colorGrey" >Tomato</p>
                      <span>
                        <i className="fa fa-star colorStarActive"></i>
                        <i className="fa fa-star colorStarActive"></i>
                        <i className="fa fa-star colorStarActive"></i>
                        <i className="fa fa-star colorStarActive"></i>
                        <i className="fa fa-star colorGrey"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="mt-4 mb-3">I Would think tht coserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy</h2>
              <a href="#about" className="btn-get-started scrollto shadow"><b>Daftar Sekarang</b></a>
              <a href="#about" className="m-3 btn-get-started scrollto custom-btn-aboutUs" >About Us</a>
            </div>    
            <div className="col-md-7 d-none d-md-inline position-relative">
            <div className="sliderNow" >
              <div className="roundImage">
                <center className="p-5"><img src={slider} style={{width: "100%"}}/></center>  
              </div>
              <div className="deskripsiImage shadow">
                <div className="row p-2">
                  <div className="col-md-4">
                    <div className="imageDeskripsi m-2" style={{width: "100%"}}>
                      <center>
                        <img src={slider} style={{width: "80%"}}/>
                      </center>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <p className="mb-0 text-left" ><b>Green Salad Tomato</b></p>
                    <p className="m-0 colorGrey text-left" >Tomato</p>
                    <span className="float-left">
                      <i className="fa fa-star colorStarActive"></i>
                      <i className="fa fa-star colorStarActive"></i>
                      <i className="fa fa-star colorStarActive"></i>
                      <i className="fa fa-star colorStarActive"></i>
                      <i className="fa fa-star colorGrey"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* tutup hero */}
      <div id="mainCategory">
        <div className="category text-left">
            <div className="container">
              <div className="row">
                <div className="titleCategory">
                  <h3><b>Browser Our Category</b></h3>
                  <h3 className="colorDefault"><b>Receipt</b></h3>
                </div>
              </div>
            </div>
        </div>
         <div className="slideCategory pt-4">
          <div className="container">
            <div className="row">
              <div className="slideCategoryitem">
                <div className="owl-carousel owl-theme">
                  <div className="item ">
                    <div className="container-custom1 shadow-sm" >
                      <div className="image1">
                      </div>
                      <div className="middle1">
                        <div className="text1"></div>
                      </div>
                      <div className="image-categori" >
                        <img src={cupcake} />
                        <center>
                          <span className="font-14"><b>Cupcake</b></span>{'\n'}
                          <span className="font-12">22 Items</span>
                        </center>
                      </div>
                    </div>
                  </div> 
                  <div className="item ">
                    <div className="container-custom shadow-sm">
                      <div className="image">
                      </div>
                      <div className="middle">
                        <div className="text"></div>
                      </div>
                      <div className="image-categori" >
                        <img src={pizza} />
                        <center>
                          <span className="font-14"><b>Pizza</b></span>{'\n'}
                          <span className="font-12">25 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="item" >
                    <div className="container-custom2 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image2">
                      </div>
                      <div className="middle2">
                        <div className="text2"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/kebab.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Kebab</b></span>{'\n'}
                          <span style="font-size: 12px;">12 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="container-custom3 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image3">
                      </div>
                      <div className="middle3">
                        <div className="text3"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/salmon.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Salmon</b></span>{'\n'}
                          <span style="font-size: 12px;">22 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <div className="container-custom4 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image4">
                      </div>
                      <div className="middle4">
                        <div className="text4"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/doughnut.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Doughnut</b></span>{'\n'}
                          <span style="font-size: 12px;">11 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="container-custom1 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image1">
                      </div>
                      <div className="middle1">
                        <div className="text1"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/cupcake.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Cupcake</b></span>{'\n'}
                          <span style="font-size: 12px;">22 Items</span>
                        </center>
                      </div>
                    </div>
                    
                  </div>
                  <div className="item ">
                    <div className="container-custom shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image">
                      </div>
                      <div className="middle">
                        <div className="text"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/pizza.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Pizza</b></span>{'\n'}
                          <span style="font-size: 12px;">25 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <div className="container-custom2 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image2">
                      </div>
                      <div className="middle2">
                        <div className="text2"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/kebab.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Kebab</b></span>{'\n'}
                          <span style="font-size: 12px;">12 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="container-custom3 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image3">
                      </div>
                      <div className="middle3">
                        <div className="text3"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/salmon.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Salmon</b></span>{'\n'}
                          <span style="font-size: 12px;">22 Items</span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <div className="container-custom4 shadow-sm" style="width: 100%; border-radius: 10px;">
                      <div className="image4">
                      </div>
                      <div className="middle4">
                        <div className="text4"></div>
                      </div>
                      <div className="image-categori" >
                        <img src="assets/img/categori/doughnut.png" style="width: 50px;">
                        <center>
                          <span style="font-size: 14px;"><b>Doughnut</b></span>{'\n'}
                          <span style="font-size: 12px;">11 Items</span>
                        </center>
                      </div>
                    </div>
                  </div> */}
               </div> 
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* tutup category */}
    </div>
  );
}

export default App;
