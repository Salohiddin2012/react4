import { useState } from 'react'
import reactLogo from './assets/Group 20.png'
import react from './assets/salom.png'
import samp from './assets/intersect.png'
import sam from './assets/pngwing 3.png'
import sa from './assets/pngwing 4.png'
import s from './assets/pngwing 6.png'
import samh from './assets/pngwing 7.png'
import egg from './assets/Egg salad.png'
import Fatt from './assets/Fattoush salad.png'
import Veg from './assets/Vegetable salad.png'
import mask from './assets/Mask group.png'
import mask1 from './assets/Mask group (2).png'
import mask2 from './assets/Mask group (3).png'
import fr from './assets/salad.png'
import fr1 from './assets/soat.png'
import fr2 from './assets/magazin.png'
import fr3 from './assets/padarka.png'
import f from './assets/f.png'
import i from './assets/i.png'
import t from './assets/t.png'
import y from './assets/y.png'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='container'>
          <img src={reactLogo} alt="" />
          
            <nav>
            <a href="#"><span>Home</span></a>
            <a href="#">Menu</a>
            <a href="#">Services</a>
            <a href="#">Offers</a>
          </nav>
          <div className='name'>
          <img src={react} alt="" />
          <button className='red'>Comtact</button>
          </div>
        </div>
      </header>
      <main>
        <section id='hero'>
            <div className='container'>
                <div className='data'>
                  <h1>Dive into Delights <br /> Of Delectable Food</h1>
                  <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                  <div className='were'>
                    <button className='na'>Order Now</button>
                    <h2>Watch Video</h2>
                  </div>
                </div>
                <img src={samp} alt="" />
            </div>
        </section>
        <section id='gth'>
          <div className='container'>
            <h3 className='dem'>Customer Favorites</h3>
            <h1>Popular Categories</h1>
           <div className='bo'>
             <div className='card'>
              <img src={sam} alt="" />
              <h3>Main Dish</h3>
              <h5>(86 dishes)</h5>
            </div>
            <div className='card'>
              <img src={sa} alt="" />
              <h3>Main Dish</h3>
              <h5>(86 dishes)</h5>
            </div>
            <div className='card'>
              <img src={s} alt="" />
              <h3>Main Dish</h3>
              <h5>(86 dishes)</h5>
            </div>
            <div className='card'>
              <img src={samh} alt="" />
              <h3>Main Dish</h3>
              <h5>(86 dishes)</h5>
            </div>
           </div>
          </div>
        </section>
        <section id='fet'>
          <div className='container'>
            <h3 className='dem'>Special Dishes</h3>
            <h1 className='terminal'>Standout Dishes <br /> From Our Menu</h1>
            <div className='veg'>
              <div className='das'>
              <img src={Fatt} alt="" />
              <h2>Fattoush salad</h2>
              <h4>Description of the item</h4>
              <div className='flex'>
                <h3>24.00</h3>
                <h3>4.9</h3>
              </div>
            </div>
             <div className='das'>
              <img src={egg} alt="" />
              <h2>Fattoush salad</h2>
              <h4>Description of the item</h4>
              <div className='flex'>
                <h3>24.00</h3>
                <h3>4.9</h3>
              </div>
            </div>
             <div className='das'>
              <img src={Veg} alt="" />
              <h2>Fattoush salad</h2>
              <h4>Description of the item</h4>
              <div className='flex'>
                <h3>24.00</h3>
                <h3>4.9</h3>
              </div>
            </div>
            </div>
            
          </div>
        </section>
        <section id='uy'>
          <div className='container'>
            <img src={mask} alt="" />
            <div className='open'>
              <h3 className='dem'>Testimonials</h3>
            <div>
              <h1 className='h1'>What Our Customers Say About Us</h1>
              <p className='p'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            </div>
            <div className='fr'>
              <div>
              <img src={mask1} alt="" />
              <img src={mask2} alt="" />
              </div>
              <div>
                <h2>Customer Feedback</h2>
              <p>4.9 (18.6k Reviews)</p>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section id='just'>
          <div className='container'>
            <div className='open1'>
              <h3 className='dem'>Our Story & Services</h3>
            <h1 className='h'>Our Culinary Journey And Services</h1>
            <p className='1'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className='btn'>Explore</button>
            </div>
            <div className='kok'>
              <div className='openda'>
                <img src={fr} alt="" />
                <h2>Catering</h2>
                <p>Delight your guests with our flavors and  presentation</p>
              </div>
              <div className='openda'>
                <img src={fr1} alt="" />
                <h2>Fast delivery</h2>
                <p>We deliver your order promptly to your door</p>
              </div>
              <div className='openda'>
                <img src={fr2} alt="" />
                <h2>ONLINE ORDERING</h2>
                <p>Explore menu & order with ease using our Online Ordering </p>
              </div>
              <div className='openda'>
                <img src={fr3} alt="" />
                <h2>GIFT CARDS</h2>
                <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
              </div>
            </div>
          </div>
        </section>
        <section id='id'>
          <div className='container'>
            <div className='fodd'>
              <img src={reactLogo} alt="" />
              <p>Savor the artistry where every dish is a culinary masterpiece</p>
            </div>
            <div className='about'>
              <h2>Useful links</h2>
              <p>About us</p>
              <p>Events</p>
              <p>Blogs</p>
              <p>FAQ</p>
            </div>
            <div className='about'>
              <h2>Main Menu</h2>
              <p>Home</p>
              <p>Offers</p>
              <p>Menu</p>
              <p>Reservation</p>
            </div>
            <div className='about'>
              <h2>Conatct Us</h2>
              <p>example@email.com</p>
              <p>+64 958 248 966</p>
              <p>Social media</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='container'>
          
            <div className='fd'>
              <div className='df'>
          <img className='f' src={f} alt="" />
          <img src={t} alt="" />
          <img src={i} alt="" />
          <img src={y} alt="" />
            </div>
          <div>
            <p>Copyright       2023 Dscode | All rights reserved</p>
          </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
