import { Link } from "react-router-dom";
import Navbar from "../navbar.tsx";
import Social from "../social.tsx";
import Loading from "../loading.tsx";
import Footer from "../footer.tsx";



function Home(){

    const headerAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting){
                setTimeout(()=> entry.target.classList.add("visible"), 60*index)
            }
        })
    })
    setTimeout(()=>{
        headerAnim.observe(document.querySelector(".header .note")!)
        setTimeout(()=> document.querySelectorAll(".header h1 span").forEach(span=>headerAnim.observe(span)), 60)
        setTimeout(()=> headerAnim.observe(document.querySelector(".header p")!), 60)
        setTimeout(()=> headerAnim.observe(document.querySelector(".header .cta-container")!), 60)

        setTimeout(()=> {
            const parents = document.querySelectorAll(".juice > div > div")
            parents.forEach(parent => Array.from(parent.children).forEach(element => headerAnim.observe(element)))
        }, 60)

    }, 1250)

    const headerImgAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting){
                setTimeout(()=> entry.target.classList.add("visible"), 350*index)
            }
        })
    })
    setTimeout(()=> document.querySelectorAll(".header .header-img div").forEach(span=>headerImgAnim.observe(span)), 1400)

    const juiceAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting){
                setTimeout(()=> entry.target.classList.add("visible"), 60*index)
            }
        })
    }, {threshold:0.1})
    setTimeout(()=>{
        setTimeout(()=> {
            const parents = document.querySelectorAll(".juice > div > div")
            parents.forEach(parent => Array.from(parent.children).forEach(element => juiceAnim.observe(element)))
        }, 60)

    }, 1250)



    return(
        <>
            <Loading />
            <Navbar />
            <Social />
            <section className="header">
                <div>
                    <div className="header-img">
                        <div><img className="hero" src="/luicey/header-orange.png"/></div>
                        <div><img className="hero" src="/luicey/header-kiwi.png"/></div>
                        <div><img className="hero" src="/luicey/header-strawberry.png"/></div>
                    </div>
                    <div>
                        <div className="note">100% FRUIT</div>
                        <h1><span>The </span><span>Pure </span><span>Nature</span></h1>
                        <p>What if just one sip could take you back to a place where everything is pure, fresh, and untouched – where flavors are still real?</p>
                        <div className="cta-container"><Link className="cta" to="/products">LOOK MORE <img width="62" src="/luicey/cta-icon.svg"/></Link></div>
                    </div>
                </div>
            </section>

            <section className="stat">
                <div>
                    <div>
                        <h3>46</h3>
                        <p>countries available</p>
                    </div>
                    <div>
                        <h3>1M+</h3>
                        <p>bottles sold</p>
                    </div>
                    <div>
                        <h3>3</h3>
                        <p>flavors</p>
                    </div>
                </div>
            </section>

            <section className="juice">
                <div>
                    <div>
                        <img className="hero" src="/luicey/orange2.png"/>
                    </div>
                    <div>
                        <h3>Orange Juice</h3>
                        <h4>Sun-Kissed Freshness</h4>
                        <p>Pure, sun-ripened oranges, hand-pressed for the ultimate freshness. Sourced from Spain’s Valencia region, these juicy oranges bring their naturally vibrant taste to every sip. No added sugar, no artificial ingredients—just the pure energy of nature, bottled in recycled glass.</p>
                        <Link className="cta" to="/products">LOOK MORE <img width="62" src="/luicey/cta-icon.svg"/></Link>
                    </div>
                </div>

                <div>
                    <div>
                        <img className="hero" src="/luicey/kiwi2.png"/>
                    </div>
                    <div>
                        <h3>Kiwi Juice</h3>
                        <h4>Exotic Vitality</h4>
                        <p>Refreshing, juicy, and slightly tangy—premium kiwi captures the essence of tropical flavors. Grown in the sunny orchards of New Zealand, each fruit is handpicked and crafted into a 100% natural homemade juice. One sip, and you’ll feel transported to an exotic paradise!</p>
                        <a className="cta" href="/luicey/products">LOOK MORE <img width="62" src="/luicey/cta-icon.svg"/></a>
                    </div>
                </div>

                <div>
                    <div>
                        <img className="hero" src="/luicey/strawberry2.png"/>
                    </div>
                    <div>
                        <h3>Strawberry Juice</h3>
                        <h4>Nature’s Sweetest Kiss</h4>
                        <p>Hand-picked, fragrant, sun-ripened strawberries—bottling the very essence of spring. Sourced from France’s renowned Loire Valley, these luscious berries deliver a silky, full-bodied taste. It’s like biting into a freshly picked strawberry, only more intense!</p>
                        <Link className="cta" to="/products">LOOK MORE <img width="62" src="/luicey/cta-icon.svg"/></Link>
                    </div>
                </div>
            </section>

            <section className="map">
                <div>
                    <img src="/luicey/map.svg"/>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home