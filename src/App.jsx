import React from 'react'
import "./App.css"
import hdrimg1 from "./assets/Logo.png"
import hdrimg3 from "./assets/hdrrghimg.png"
import master1 from "./assets/Symbol.png"
import master2 from "./assets/symbol2.png"
import master3 from "./assets/Symbol3.png"
import master4 from "./assets/Symbol4.png"
import about1 from "./assets/about1.jpg"
import about2 from "./assets/about2.jpg"
import about3 from "./assets/about3.jpg"
import about4 from "./assets/about4.jpg"
import horizontal from "./assets/Horizontal Divider.png"
import ppyy1 from "./assets/Paragraph+VerticalBorder.png"
import ppyy2 from "./assets/fsadf.png"
import menu1 from "./assets/1.jpg"
import menu2 from "./assets/2.jpg"
import menu3 from "./assets/3.jpg"
import menu4 from "./assets/4.jpg"
import menu5 from "./assets/5.jpg"
import menu6 from "./assets/6.jpg"
import menu7 from "./assets/7.jpg"
import menu8 from "./assets/8.jpg"
import contactimg from "./assets/contackimg.jpg"
import team1 from "./assets/678ebd512b1597ac257ef87a9ff59a8e245a60ab.jpg"
import tstimg from "./assets/qosh.png"
import ccc from "./assets/611ac053d9c5a3c5ad29ba0a3d99cf1ec3ea9b03.jpg"
const App = () => {
  const master = [
    { name: "Master Chefs", text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", img: master1 },
    { name: "Quality Food", text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", img: master2 },
    { name: "Online Order", text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", img: master3 },
    { name: "24/7 Service", text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", img: master4 },
  ]
  const menu = [
    { name: "Chicken Burger", price: "$115", img: menu1, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu2, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu3, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu4, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu5, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu6, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu7, text: "Ipsum ipsum clita erat amet dolor justo diam" },
    { name: "Chicken Burger", price: "$115", img: menu8, text: "Ipsum ipsum clita erat amet dolor justo diam" },
  ]
  return (
    <div>
      <header>
        <nav>
          <img src={hdrimg1} alt="img" className='logo' />
          <div className="nav-fth">
            <p>HOME</p>
            <p>About</p>
            <p>Service</p>
            <p>menu</p>
            <p>pages</p>
            <p>Contact</p>
            <button>Book A Table</button>
          </div>
        </nav>
        <div className="hdr-fth">
          <div className="hdr-box">
            <h1>Enjoy Our
              Delicious Meal</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet.Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
            <button>Book A Table</button>
          </div>
          <img src={hdrimg3} alt="img" className='hdr-img' />
        </div>
      </header>
      <section className='master'>
        {master.map((box, index) =>
          <div key={index}>
            <img src={box.img} alt="img" />
            <h1>{box.name}</h1>
            <p>{box.text}</p>
          </div>
        )}
      </section>
      <section className='about'>
        <div className="about-images">
          <img src={about1} className='aboutimg' alt="img" />
          <img src={about2} className='aboutimg2 about2' alt="img" />
          <img src={about3} className='aboutimg2 about3' alt="img" />
          <img src={about4} className='aboutimg' alt="img" />
        </div>
        <div className="about-elements">
          <h2 className='sarlavha'>About Us <img src={horizontal} alt="img" /></h2>
          <h1 className='mtv'>Welcome to <img src={master2} alt="img" /> Restoran</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet</p>
          <div className="ppyy">
            <div className="ppyy-box">
              <img src={ppyy1} alt="img" />
            </div>
            <div className="ppyy-box">
              <img src={ppyy2} alt="img" />
            </div>
          </div>
          <button>Read More</button>
        </div>
      </section>
      <section className="menu">
        <h2 className='sarlavha menu-h2'><img src={horizontal} alt="img" /> Food Menu <img src={horizontal} alt="img" /></h2>
        <h1 className="mtv menu-h2">Most Popular Items</h1>
        <div className="menu-father">
          {menu.map((taom, index) =>
            <div className='menu-box' key={index}>
              <img src={taom.img} alt="img" />
              <div className="menu-name-father">
                <div className="menu-name">
                  <h2>{taom.name}</h2>
                  <h2 className='menu-price'>{taom.price}</h2>
                </div>
                <p>{taom.text}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="contact">
        <img src={contactimg} className='ctkimg' alt="img" />
        <div className="contact-fth">
          <h2 className="sarlavha ">Reservation <img src={horizontal} alt="img" /></h2>
          <h1 className='mtv'>Book A Table Online</h1>
          <div className="form">
            <div className="form-father">
              <input type="text" placeholder='Your Name' className="name" />
              <input type="text" placeholder='Your Email' className="name" />
              <input type="text" placeholder='Date & Time' className="name" />
              <div className="select-container">
                <select id="people-count" name="people-count">
                  <option value="1">People 1</option>
                  <option value="2">People 2</option>
                  <option value="3">People 3</option>
                  <option value="4">People 4</option>
                </select>
              </div>
              <textarea placeholder='Special Request'></textarea>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <h2 className="sarlavha uuu">
          <img src={horizontal} alt="img" />
          Testimonial
          <img src={horizontal} alt="img" />
        </h2>
        <h1 className='mtv'>Our Master Chefs</h1>
        <div className="team-fth">
          <div className="team-box">
            <img src={team1} alt="img" />
            <h2>Full Name</h2>
            <p>Designation</p>
          </div>
          <div className="team-box">
            <img src={team1} alt="img" />
            <h2>Full Name</h2>
            <p>Designation</p>
          </div>
          <div className="team-box">
            <img src={team1} alt="img" />
            <h2>Full Name</h2>
            <p>Designation</p>
          </div>
          <div className="team-box">
            <img src={team1} alt="img" />
            <h2>Full Name</h2>
            <p>Designation</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="sarlavha uuu">
          <img src={horizontal} alt="img" />
          Team Members
          <img src={horizontal} alt="img" />
        </h2>
        <h1 className="mtv ttt">Our Clients Say!!!</h1>
        <div className="tst-fth">
          <div className="tst-box">
            <img src={tstimg} className='tst2' alt="img" />
            <p className='ggg'>Dolor et eos labore, stet justo sed
              est sed. Diam sed sed dolor stet
              amet eirmod eos labore diam</p>
            <div className="ccc">
              <img src={ccc} className='eee' alt="img" />
              <div className="fff">
                <h2>Client Name</h2>
                <p className='ggg'>Profeccional</p>
              </div>
            </div>
          </div>
          <div className="tst-box">
            <img src={tstimg} className='tst2' alt="img" />
            <p className='ggg'>Dolor et eos labore, stet justo sed
              est sed. Diam sed sed dolor stet
              amet eirmod eos labore diam</p>
            <div className="ccc">
              <img src={ccc} className='eee' alt="img" />
              <div className="fff">
                <h2>Client Name</h2>
                <p className='ggg'>Profeccional</p>
              </div>
            </div>
          </div>
          <div className="tst-box">
            <img src={tstimg} className='tst2' alt="img" />
            <p className='ggg'>Dolor et eos labore, stet justo sed
              est sed. Diam sed sed dolor stet
              amet eirmod eos labore diam</p>
            <div className="ccc">
              <img src={ccc} className='eee' alt="img" />
              <div className="fff">
                <h2>Client Name</h2>
                <p className='ggg'>Profeccional</p>
              </div>
            </div>
          </div>
          <div className="tst-box">
            <img src={tstimg} className='tst2' alt="img" />
            <p className='ggg'>Dolor et eos labore, stet justo sed
              est sed. Diam sed sed dolor stet
              amet eirmod eos labore diam</p>
            <div className="ccc">
              <img src={ccc} className='eee' alt="img" />
              <div className="fff">
                <h2>Client Name</h2>
                <p className='ggg'>Profeccional</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <h2>©
          Your Site Name
          , All Right Reserved. Designed By
          <u> HTML Codex</u></h2>
        <div className="brother">
          <h2>Home</h2>
          <h2>Cookies</h2>
          <h2>Help</h2>
          <h2>FQAs</h2>
          <button>^</button>
        </div>
      </footer>
    </div>
  )
}

export default App
