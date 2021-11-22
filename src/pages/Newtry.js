import React from 'react'

const Newtry=()=>{
    return(
    <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1><span>THE</span> Berlin<span> RESTAURANT</span><span> & </span>CAFE</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Services</a></li>
            <li><a href="#projects" data-after="Projects">Best Items</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
            {/* <li><Link to="/Images" alt="szbjk">images</Link></li> */}

          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Newtry