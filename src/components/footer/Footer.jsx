import "./styles.css";

function Footer() {
  return (
    <footer>
        <div className='us'>
            <div className='longer1'>
                <h5>Subscribe to Aesop communications</h5>
                <input type='text' placeholder='Email Address'/>
                <input type='checkbox' />
                <label> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</label>
            </div>
            <div>
                <h5>Orders and support</h5>
                <ul>
                    <li>Contact us<i className="fa-solid fa-arrow-right"></i></li>
                    <li>FAQs<i className="fa-solid fa-arrow-right"></i></li>
                    <li>Shipping<i className="fa-solid fa-arrow-right"></i></li>
                    <li>Return<i className="fa-solid fa-arrow-right"></i></li>
                    <li>Order history</li>
                    <li>Terms and conditions</li>
                </ul>
            </div>
            <div>
                <h5>Services</h5>
                <ul>
                    <li>Live assistance</li>
                    <li>Corporate gifts</li>
                    <li>Facial Appointments</li>
                    <li>Click and Collect</li>
                    <li>Video consultation</li>
                </ul>
            </div>
            <div>
                <h5>Location Preference</h5>
                <ul>
                    <li>Shipping:</li>
                    <li>Hong Kong SAR, China</li>
                    <li>Language:</li>
                    <li>English</li>
                    <li>繁體中文</li>
                </ul>
            </div>
            <div className='longer2'>
                <h5>Sustainability</h5>
                <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
            </div>

            <div>
                <h5>About</h5>
                <ul>
                    <li>Our story</li>
                    <li>Foundation</li>
                    <li>Careers</li>
                    <li>Privacy policy</li>
                    <li>Accessibility</li>
                    <li>TCookie Policy</li>
                </ul>
            </div>
            <div className='social'>
                <h5>Social Media</h5>
                <ul>
                    <li>Instagram<i className="fa-solid fa-arrow-right"></i></li>
                    <li>Twitter<i className="fa-solid fa-arrow-right"></i></li>
                    <li>LinkedIn<i className="fa-solid fa-arrow-right"></i></li>
                    <li>WeChat</li>
                    <li>Weibo<i className="fa-solid fa-arrow-right"></i></li>
                </ul>
            </div>
        </div>
        <div  className='bottom'>
            <p>© Aesop</p>
            <p className='social-icons'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </p>
        </div>
    </footer>
  )
}

export default Footer