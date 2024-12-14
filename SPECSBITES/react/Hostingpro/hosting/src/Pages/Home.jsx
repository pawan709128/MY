import React from 'react'
import { Header } from './Common/Header'
import { Footer } from './Common/Footer'
import { Link } from 'react-router-dom'
import Homemy from '../Assets/IMG/home-slider-01.png'
import homeman from '../Assets/IMG/demo-hosting-home-slider-02.png'

export const Home = () => {
  return (
    <div>
      <Header />
      <div className='Main_div'>
        <div className='template_main'>
          <div className="box2">
            <div className='template_main_text' >
              <div className='template_main_text1'>
                <h1>Power up web</h1>
                <h1>with hosting</h1>
              </div>
              <div className='template_main_text2'>
                <p>Get access to tons of free apps to create websites,</p>
                <p>eCommerce websites and blogs installations.</p>
              </div>
              <div className='template_main_button_text'>
                <div className='template_main_button'><Link to='/'>Gat sarted <i class="fa-solid fa-arrow-right"></i></Link></div>
                <div className='template_main_textp'><p> Starting at only <span><b>$2.78/mo</b><sup><b>*</b></sup></span></p></div>
              </div>
            </div>
          </div>
          <div className="box2 ">
            <div className="template_img">
            <div className="img_template1">
              <img src={Homemy} />
              </div>
              <div className="img_template2">
                <img src={homeman} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
    </div>
  )
}
