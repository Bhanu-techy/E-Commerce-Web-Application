import "./index.css"

function Footer() {
  return (
    <div className="footer-div">
        <div className="footer-card">
            <h2>Luminia Store</h2>
            <p>Your one-stop destination for premium modern goods. We source the finest material to bring you good quality</p>
        </div>
        <div>
            <h2>Company</h2>
            <p>About US</p>
            <p>Careers</p>
            <p>Store Locations</p>
            <p>Privacy Policy</p>
        </div>
        <div>
            <h2>Support</h2>
            <p>Contact Support</p>
            <p>Terms & Services</p>
            <p>FAQs</p>
        </div>
        <div>
            <h2>Connect</h2>
            <div className="dflex">
            <p className="social-media">FB</p>
            <p className="social-media">IG</p>
            <p className="social-media">TW</p>
            </div>
        </div>
    </div>
  )
}

export default Footer