import React from 'react'
export const Footer = () => {
  return (
    <div>
       <footer>
      <div className="footer-content">
        <p>
          Lorem ipsum amet adipiscing elit to eiusmod ad tempor incididunt enim.
        </p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Hosting</li>
            <li>Domain</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer</h3>
          <ul>
            <li>Client support</li>
            <li>Help center</li>
            <li>System status</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Say hello</h3>
          <p>Need support? <a href="mailto:hi@domain.com">hi@domain.com</a><br />
          Customer care <a href="tel:+12345678910">+1 234 567 8910</a></p>
        </div>
      </div>
      <div className="newsletter">
        <p>Subscribe our newsletter to get the latest news and updates!</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
    </div>
  )
}
