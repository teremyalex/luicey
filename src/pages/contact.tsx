import Navbar from "../navbar.tsx";
import Social from "../social.tsx";
import Loading from "../loading.tsx";
import "./contact.css";
import Footer from "../footer.tsx";

function Contact(){

    const contactAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting){
                setTimeout(()=> entry.target.classList.add("visible"), 100*index)
            }
        })
    }, {threshold:0.1})
    setTimeout(()=> contactAnim.observe(document.querySelector(".contact h1")!), 1250)

    setTimeout(()=> document.querySelectorAll(".contact > div > div").forEach(div=>contactAnim.observe(div)), 1350)
    setTimeout(()=> contactAnim.observe(document.querySelector("#form > div > div")!), 1450)
    setTimeout(()=> contactAnim.observe(document.querySelector("#form form")!), 1550)



    return(
        <>
            <Loading />
            <Navbar />
            <Social />

            <section className="contact">

                <h1>Contact Us</h1>

                <div>
                    <div>
                        <h3>Call Us</h3>
                        <p>Need help or have questions? Give us a call, and we’ll be happy to assist you!</p>
                        <p><strong>Monday-Friday: 9am to 5pm.</strong></p>
                        <p>+44 7124 451189</p>
                    </div>
                    <div>
                        <h3>Visit Us</h3>
                        <p>Meet with us to explore partnership opportunities.</p>
                        <p><strong>Visit our UK office</strong></p>
                        <p>30 St Mary Axe, London, England</p>
                    </div>
                    <div>
                        <h3>Message Us</h3>
                        <p>Send us a message, and we’ll get back to you as soon as possible!</p>
                            <a className="cta" href="#form">SAY HELLO <img width="62" src="/luicey/cta-icon.svg"/></a>
                    </div>
                </div>

            </section>

            <section id="form">
                <div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9229995932856!2d-0.0799524505570363!3d51.51462864464976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034d372b3ded%3A0x5c81b8a1a822fda8!2s30%20St%20Mary%20Axe!5e0!3m2!1shu!2sus!4v1740828482425!5m2!1shu!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form action="">
                        <input type="text" name="first_name" placeholder="FIRST NAME" required />
                        <input type="text" name="last_name" placeholder="LAST NAME" required />
                        <input type="text" name="email" placeholder="EMAIL" required />
                        <input type="text" name="phone" placeholder="PHONE" required />
                        <textarea  name="text" placeholder="PLEASE TELL US HOW WE CAN HELP" required></textarea>
                        <button>SEND <img width="62" src="/luicey/cta-icon.svg"/></button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact