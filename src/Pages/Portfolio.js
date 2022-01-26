import React from "react";

import { Link } from "react-router-dom";
import Navbars from '../components/Navber/Navbers'
import Footers from '../components/footer/Footers';
// import cabin from '../images/portfolio/cabin.png'
// import cake from '../images/portfolio/cake.png'
import circus from '../images/portfolio/circus.png'
import game from '../images/portfolio/game.png'
import safe from '../images/portfolio/safe.png'
import submarine from '../images/portfolio/submarine.png'
// import ham from '../images/portfolio/ham.jpg'
import IMG_6204 from '../images/portfolio/IMG_6204.jpg'
import Picture3 from '../images/Senior_Project/Picture3.png'
import Picture2 from '../images/Senior_Project/Picture2.png'
import Picture1 from '../images/Senior_Project/Picture1.png'
import a02 from '../images/IT_camp_63/02.png'
import a03 from '../images/IT_camp_63/03.png'
import a04 from '../images/IT_camp_63/04.png'
import a05 from '../images/IT_camp_63/05.png'
import { Carousel } from 'react-bootstrap';
const Portfolio = () => {

  return (
    <>
      <Navbars />

      <body id="page-top">
        {/* <!-- Navigation--> */}

        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            {/* <!-- Masthead Avatar Image--> */}
            <img className="masthead-avatar mb-5 rounded-circle" src={IMG_6204} alt="..." />
            {/* <!-- Masthead Heading--> */}
            <h1 className="masthead-heading text-uppercase mb-0">Chayanon chongsuk</h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p className="masthead-subheading font-weight-light mb-0"> SOFTWARE DEVELOPER
            </p>
          </div>
        </header>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div className="row justify-content-center">
              {/* <!-- Portfolio Item 1--> */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0">Senior Project</i></h2></div>
                  </div>
                  <img className="img-fluid" src={Picture1} alt="..." />

                </div>
              </div>
              {/* <!-- Portfolio Item 2--> */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0"> กิจกรรมอบรมและสันทนาการ
                      #ค่ายไอที63</i></h2></div>
                  </div>
                  <img className="img-fluid" src={a02} alt="..." />
                </div>
              </div>
              {/* <!-- Portfolio Item 3--> */}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0"> Project</i></h2></div>
                  </div>
                  <img className="img-fluid" height={500} src={circus} alt="..." />
                </div>
              </div>
              {/* <!-- Portfolio Item 4--> */}
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0">Project</i></h2></div>
                  </div>
                  <img className="img-fluid" src={game} alt="..." />
                </div>
              </div>
              {/* <!-- Portfolio Item 5--> */}
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0">Project</i></h2></div>
                  </div>
                  <img className="img-fluid" src={safe} alt="..." />
                </div>
              </div>
              {/* <!-- Portfolio Item 6--> */}
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><h2><i className="masthead-subheading font-weight-light mb-0">Project</i></h2></div>
                  </div>
                  <img className="img-fluid" src={submarine} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Section--> */}
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            {/* <!-- About Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- About Section Content--> */}
            <div className="row page-section-heading text-uppercase y mb-0">
              <div className="col-lg-4 ms-auto"><p className="lead">
                <h2>PERSONAL INFOMATION </h2>
                <h5>Name : Chayanon Chongsuk</h5>
                <h5>Born : November 5 , 1999</h5>
                <h5>Religion : Buddhism</h5>
                <h5>E-mail : hamjombo10@gmail.com</h5>
                <h5>Sex : male</h5>
                <h5>Nationality : Thai</h5>
                <h5>Mobile : 0644580471</h5>
                <br />
                <h2>EDUCATION</h2>
                <h5>2018 - present : Rajabhat Maha Sarakham University</h5>
                <h5>Major : Information Technology</h5>
                <h5>Faculty : Information Technology</h5>
                <h5>GPA : 3.56</h5><br />

              </p>
              </div>

              <div className="col-lg-4 me-auto"><p className="lead">
                <h2 className="text-uppercase">Computer Abilities</h2>
                <h5> Programming Language</h5>
                <h5> - NodeJS(express)</h5>
                <h5> Analysis & Design Methodology</h5>
                <h5> - OOAD , UML</h5>
                <h5> DBMS</h5>
                <h5> - MySQL , SQLServer</h5>
                <h5> Editor</h5>
                <h5> - Postman,VSCode,</h5>
                <h5> API</h5>
                <h5> - Restful API</h5>
                <h5> Design Patterns</h5>
                <h5> - MVC</h5>
                <h5> Component</h5>
                <h5> - JWT</h5>
                <h5> Data Exchange Technology</h5>
                <h5> - JSON , XML</h5>
                <h5> Web Design</h5>
                <h5> - CSS , Bootstrap</h5></p><br />
              </div>

              <div className="col-lg-4 me-auto "><p className="lead">
                <h2 className="text-uppercase">Certificate &Training</h2>
                <h5>Java Struts2 Frame Work<br />
                  (October 9-10, 2019)</h5>
                <h5>Java Spring boot Frame
                  work + MySQL<br />
                  (October 26-27, 2019)</h5>
                <h5>Technical analysis and
                  design of computer systems<br />
                  (September 12-13, 2019)</h5>
                <h5>C# and Postgres SQL Basic<br />
                  (November 23-24, 2019)</h5>
                <h5> JAVA Spring boot REST API
                  + JDBC + MySQL<br />
                  (September 26-27, 2020)</h5>
                <h5>Application development
                  with nodejs and
                  mysql(CRUD)<br />
                  (March 6-7, 2021)</h5>
                <h5>Python Basic With Google
                  Colab<br />
                  (March 8-9, 2021)</h5>
                <h5>Python Programming For
                  Data Science<br />
                  (March 10-12, 2021)</h5>
              </p>
              </div>
            </div>
           
          </div>
        </section>

        {/* <!-- Contact Section--> */}
        <section className="page-section" id="contact">
          <div className="container">
            {/* <!-- Contact Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
              {/* <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div> */}
            </div>
            {/* <!-- Contact Section Form--> */}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">


                

                  <div className="form-floating">
                    <div className=" ms-auto page-section-heading text-center text-uppercase text-secondary mb-0">
                      <h5>Name : Chayanon Chongsuk</h5>
                      <h5>E-mail : hamjombo10@gmail.com</h5>
                      <h5>Mobile : 0644580471</h5>
                      <br />

                    </div>
                    <div className="wrapper">
                      <ul>
                        <li className="facebook"><Link to="https://www.facebook.com/profile.php?id=100008535001948"><i className="fab fa-facebook-f fa-2x" aria-hidden="true"></i></Link></li>
                        <li className="twitter"><Link to="https://twitter.com/"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></Link></li>
                        <li className="instagram"><Link to="https://www.instagram.com/chayanon_chongsuk/"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></Link></li>
                        <li className="google"><Link to="https://mail.google.com"><i className="fab fa-google fa-2x" aria-hidden="true"></i></Link></li>
                        <li className="whatsapp"><Link to="https://line.me/ti/p/6AVF6XP1eX"><i className="fab fa-line fa-2x" aria-hidden="true"></i></Link></li>
                      </ul>
                    </div>
                  </div>

              
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Senior Project</h2>

                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"></div>
                        <h4 className="masthead-subheading font-weight-light mb-0">Application development of car insurance center</h4>
                        <div className="divider-custom-line"></div>
                      </div>

                      {/* <!-- Portfolio Modal - Image--> */}
                      <Carousel variant="dark" className="img-fluid">
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={Picture1}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={Picture2}
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={Picture3}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel><br />
                      {/* <img className="img-fluid rounded mb-5" src={Picture1} alt="..." /> */}
                      {/* <!-- Portfolio Modal - Text--> */}

                      <h5 className="text-secondary text-uppercase">Project Scope Web Application</h5>
                      <p className="mb-4">
                        - Subscription system<br />
                        - Login -Logout system<br />
                        - Agent information management system<br />
                        - Member Information Management System<br />
                        - Auto Insurance Policy Search System<br />
                        - Car insurance policy submission system<br />
                        - Car insurance policy information management system<br />
                        - Approval system for applying for a car insurance policy<br />
                        - Reporting system
                        <h5 className="text-secondary text-uppercase">DATABASE</h5>
                        -Mongodb</p>

                      
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio Modal 2--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">กิจกรรมอบรมและสันทนาการ<br /><br />
                        #ค่ายไอที63</h2>
                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <!-- Portfolio Modal - Image--> */}
                      {/* <img className="img-fluid rounded mb-5" src={cake} alt="..." /> */}
                      <Carousel variant="dark" className="img-fluid">
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={a02}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={a03}
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={a04}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            height={500}
                            className="img-fluid rounded mb-5"
                            src={a05}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      {/* <!-- Portfolio Modal - Text--> */}
                      <p className="mb-4">ลิ้งรูปกิจกรรม#ค่ายไอที63<Link className=" btn btn-primary" to="https://drive.google.com/drive/folders/1T_8mr_hEU47GBkfAHhk8LfcIqMyFUjOx?usp=sharing">เพิ่มเติม</Link></p>
                      {/* <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw"></i>
                        Close Window
                      </button> */}
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio Modal 3--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <!-- Portfolio Modal - Image--> */}
                      <img className="img-fluid rounded mb-5" src={circus} alt="..." />
                      {/* <!-- Portfolio Modal - Text--> */}
                      
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio Modal 4--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <!-- Portfolio Modal - Image--> */}
                      <img className="img-fluid rounded mb-5" src={game} alt="..." />
                      {/* <!-- Portfolio Modal - Text--> */}
                      {/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> */}
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio Modal 5--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <!-- Portfolio Modal - Image--> */}
                      <img className="img-fluid rounded mb-5" src={safe} alt="..." />
                      {/* <!-- Portfolio Modal - Text--> */}
                      {/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> */}
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio Modal 6--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* <!-- Portfolio Modal - Title--> */}
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                      {/* <!-- Icon Divider--> */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* <!-- Portfolio Modal - Image--> */}
                      <img className="img-fluid rounded mb-5" src={submarine} alt="..." />
                      {/* <!-- Portfolio Modal - Text--> */}
                      {/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> */}
                      <button className=" btn btn-secondary" type="button" data-bs-dismiss="modal" aria-label="Close">Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <Footers />
    </>
  );
}

export default Portfolio;
