import React from 'react'
// images
import Pic1 from "../images/about-img.png";
import Pic2 from "../images/searching.png";
import Pic3 from "../images/dating.png";
import Pic4 from "../images/place.png";
import Pic5 from "../images/resturant.png";
import Pic6 from "../images/gifts.png";
import Pic7 from "../images/drive.png";
import Pic8 from "../images/perfect.png";
import Pic9 from "../images/user.png";
import Pic10 from "../images/stories.png";
import Pic11 from "../images/caption.png";
import Pic12 from "../images/gallery1.png";
import Pic13 from "../images/testmonial1.png";
import Pic14 from "../images/gallery2.png";
import Pic15 from "../images/gallery3.png";
import Pic16 from "../images/gallery4.png";
import Pic17 from "../images/gallery5.png";
// styling
import "../css/style.css";

const Home = () => {

  return (
    <div>
        <div className="header">
            <div className="header-content">
                <div className="header-content-title">
                    <h2>
                        Millions Of People Found Their Perfect Match Here!
                    </h2>
                    <p>
                        You too can find a life partner
                    </p>
                </div>
                <div className="form">
                    <div className="whom">
                        <label for="">I am looking for</label>
                        <select name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Transgender</option>
                            <option value="">Others</option>
                        </select>
                    </div>
                    <div className="whom">
                        <label for="">Age</label>
                        <select name="" id="">
                            <option value="">18-25</option>
                            <option value="">25-35</option>
                            <option value="">35-40</option>
                        </select>
                    </div>
                    <div className="whom">
                        <label for="">Religion</label>
                        <select name="" id="">
                            <option value="">Islam</option>
                            <option value="">Hindu</option>
                            <option value="">Christan</option>
                        </select>
                    </div>
                    <div className="whom">      
                        <label for="">Living in</label>
                        <select name="" id="">
                            <option value="">Pakistan</option>
                            <option value="">India</option>
                            <option value="">USA</option>
                            <option value="">Afganistan</option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="btn">
                        <button className="border">
                            <a href="/">Lets Begin</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-us">
            <div className="about-content">
                <div className="about-img">
                    {/* <img src={Pic1} alt="about-img" /> */}
                    <img src={Pic1} alt=""/>
                </div>
        <div className="about">
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque condimentum ullamcorper sit sed
                turpis. Euismod id etiam est fames metus sed dignissim habitant eros. Quis amet sit erat amet in viverra
                bibendum netus mauris. Porttitor diam aenean est, sed fusce magna.
            </p>
            <div className="btn">
                <button className="border">
                    <a href='/'>Read More</a>
                </button>
            </div>
        </div>
            </div>
        </div>
        <div className="services">
            <div className="services-content">
                <div className="services-content-title">
                    <h2>Our Services</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={Pic2} alt="searching" />
                        <h3>Looking for good partner</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Pic3} alt="dating" />
                        <h3>Dating</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img style={{ width: "50%" }} src={Pic4} alt="searching" />
                        <h3>Beautiful Place</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Pic5} alt="resturant" />
                        <h3>Resturant</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Pic6} alt="gifts" />
                        <h3>Gifts</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img style={{width: "50%" }} src={Pic7} alt="drive" />
                        <h3>Long Drives</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="record">
            <div className="record-content">
                <div className="cards">
                    <div className="card">
                        <img style={{ width: "25px" }} src={Pic8} alt="perfect" />
                        <h3>Perfect Life Partner</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img style={{ width: "25px" }} src={Pic9} alt="user" />
                        <h3>Perfect Life Partner</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                    <div className="card">
                        <img style={{ width: "25px" }} src={Pic10} alt="stories" />
                        <h3>Perfect Life Partner</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sagittis diam nisl      morbi morbi
                            congue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="testimonial-content">
                <div className="testimonial-content-title">
                    <h2>Testimonial</h2>
                 </div>
                <div className="cards">
                    <div className="card">
                        <img src={Pic11} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec integer euismod diam et,         id in id viverra tortor.Donec .
                        </p>
                        <div className="user">
                            <img src={Pic13} alt="" />
                            <caption>Ristooo</caption>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Pic11} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec integer euismod diam et,         id in id viverra tortor.Donec .
                        </p>
                        <div className="user">
                            <img src={Pic13} alt="" />
                            <caption>Ristooo</caption>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Pic11} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec integer euismod diam et,         id in id viverra tortor.Donec .
                        </p>
                        <div className="user">
                            <img src={Pic13} alt="" />
                            <caption>Ristooo</caption>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gallery">
            <div className="gallery-content-title">
                <h2>Gallery</h2>
            </div>
            <div style={{ display: "flex" }}>
            <div className="image" style={{ width : "40%" }}>
                    <img style={{ width: "100%" }} src={Pic12} alt="" />
                
                    <img style={{ width: "100%" }} src={Pic14} alt="" />
            </div>
            <div className="image" style={{ 
                width: "40%",
                display: "flex",
                flexDirection : "column",
                justifyContent : "center",
                }}>
                <img style={{ width: "100%" }} src={Pic15} alt="" />
            </div>
            <div className="image" style={{ width: "40%" }}>
                <img style={{ width: "100%" }} src={Pic16} alt="" />
                <img style={{ width: "100%" }} src={Pic17} alt="" />
            </div>
            </div>
        </div>
    </div>
    )
}

export default Home;