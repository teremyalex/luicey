import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <ul>
                        <li><Link className="logo" to="/">Luicey</Link></li>
                        <li><img src="/luicey/phone.svg"/> +44 7124 451189</li>
                        <li><img src="/luicey/email.svg"/> info@luicey.com</li>
                        <li><img src="/luicey/location.svg"/> 60 High Street, London, England</li>
                        <li>©2025 Luicey LTD. All rights reserved</li>
                    </ul>
                    <ul>
                        <h5>Info</h5>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div>
                        <h5>Connect</h5>
                        <div className="socials">
                            <Link to="/"><img src="/luicey/facebook2.svg"/></Link>
                            <Link to="/"><img src="/luicey/youtube2.svg"/></Link>
                            <Link to="/"><img src="/luicey/instagram2.svg"/></Link>
                            <p>Luicey – Only fruit. Real taste.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
