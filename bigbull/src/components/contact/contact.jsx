import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261681.4251947101!2d74.46021956154566!3d16.825156136104106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10c8187f060eb%3A0x37911f53cdc1ddb3!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708602643140!5m2!1sen!2sin" 
          width="600"
           height="450"
            style={{border:"0"}} 
            allowfullscreen="" loading="lazy"
             referrerpolicy="no-referrer-when-downgrade"
             ></iframe>
        
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Arawade Park Sangli MH 416310</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@BigBull.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-8766477553</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

// <iframe src={map}></iframe>