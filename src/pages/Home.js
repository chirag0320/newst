import React from 'react'
import {Link} from 'react-router-dom'
import ck from './js'


 const   Home=()=>{
 
    return (
      
        <React.Fragment>
            {/* <!-- Header --> */}
            
  
  {/* <!-- End Header --> */}


  {/* <!-- Hero Section  --> */}
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello <span></span></h1>
        <h1>Welcome To The <span></span></h1>
        <h1 id="ck">Berlin Restaurant<span></span></h1>
        <Link to="/Images" type="button" className="cta">Our Gallery</Link>
      </div>
    </div>
    
  </section>
  {/* <!-- End Hero Section  --> */}


  {/* <!-- Service Section --> */}
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">Serv<span>i</span>ces</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
          magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
          voluptatum explicabo!</p>
      </div>
      <div className="service-bottom">
        <div className="service-item">
          <div className="icon"><img src="assets/img/ic1.jpg" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="assets/img/ic1.jpg" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="assets/img/ic1.jpg" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="assets/img/ic1.jpg" /></div>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
            architecto placeat beatae tenetur officia quod</p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Service Section --> */}

  {/* <!-- Projects Section --> */}
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Best <span>Items</span></h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
            <h1>Item 1</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src="assets/img/punjabi.jpg" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Item 2</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src="assets/img/puj2.jpg" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Item 3</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src="assets/img/p3.jpg" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Item 4</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src="assets/img/p4.jpg" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Item 5</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
              rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
              harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src="assets/img/p5.jpg" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Projects Section --> */}

  {/* <!-- About Section --> */}
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src="assets/img/bb.jpg" alt="img"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>us</span></h1>
        <h2>The Berlin</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque
          repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt
          exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!
          Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt
          reprehenderit libero enim!</p>
        <a href="#footer" className="cta">More About</a>

      </div>
    </div>
  </section>

  {/* <!-- End About Section --> */}

  {/* <!-- Contact Section --> */}
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+884 940 7950</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>info@gmail.com</h2>
            <h2>abcd@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>

          <div className="contact-info">
          <a href="https://www.google.co.in/maps/search/1st+floor+prashiddhi+complex,opp+ambedkar+hall,saraspur+,ahmedabad/@23.030237,72.6043881,17z/data=!3m1!4b1" target="blank">

            <h1>Address</h1>
            <h2>Saraspur, Ahmedabad, India</h2>
            </a>
          </div>
        </div>
    
      </div>
    </div>
  </section>
  {/* <!-- End Contact Section --> */}

  {/* <!-- Footer --> */}
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>The</span> Berlin <span>Restaurant</span> & Cafe</h1>
      </div>
      <h2>Best Place </h2>
      <div className="social-icon">
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/the_berlin_restaurant_n_cafe/" target="blank"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
        </div>
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        </div>
      </div>
      <p>Copyright © 2020 The Berlin. All rights reserved</p>
    </div>
  </section>
  {/* <!-- End Footer --> */}
  {/* 
  // 
   */}
   
   
   
        </React.Fragment>
      
    )
}
function gohil() {
  ck();
}
export default Home