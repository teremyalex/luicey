import Navbar from "../navbar.tsx";
import Social from "../social.tsx";
import Loading from "../loading.tsx";
import Footer from "../footer.tsx";
import "./about.css";




function About() {

    const teamAnim = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), 100 * index)
            }
        })
    }, {threshold:0.1})
    setTimeout(() => document.querySelectorAll(".member").forEach(span => teamAnim.observe(span)), 1250)

    setTimeout(() => {
        if (window.innerWidth > 500) {
            const orangeFarm = document.querySelector('.orange-farm .bg-1') as HTMLElement
            const orangeFarm2 = document.querySelector('.orange-farm .bg-2') as HTMLElement
            orangeFarm.style.backgroundPositionY = `${(orangeFarm.offsetTop - scrollY) / 2}px`
            orangeFarm2.style.backgroundPositionY = `${(orangeFarm.offsetTop - scrollY) / 2}px`
            window.addEventListener('scroll', () => {
                orangeFarm.style.backgroundPositionY = `${(orangeFarm.offsetTop - scrollY) / 2}px`
                orangeFarm2.style.backgroundPositionY = `${(orangeFarm.offsetTop - scrollY) / 2}px`
            })
        }
    }, 200)


    return (
        <>
            <Loading/>
            <Navbar/>
            <Social/>

            <div className="gradient-blur"></div>


            <div className="quote">At Luicey, we believe in pure, natural refreshment. Our juices are crafted with care,
                using only the finest fruits, with no added sugar or artificial flavors. Every bottle is a taste of
                nature, just as it should be.
            </div>
            <section className="orange-farm">
                <div className="bg-1">
                    <div className="bg-2">
                        <div>
                            <div>
                                <h3>Sustainability First</h3>
                                <p>We use 100% recycled glass bottles and responsibly sourced ingredients to minimize
                                    waste
                                    and protect the planet. Every sip supports a greener future.</p>
                            </div>
                            <div>
                                <h3>Crafted with Care</h3>
                                <p>From selecting the finest fruits to bottling with precision, every step is handled
                                    with
                                    care to ensure the best taste and quality in every bottle.</p>
                            </div>
                            <div>
                                <h3>Expertly Made</h3>
                                <p>Our team of skilled professionals combines tradition and innovation to create juices
                                    that
                                    are pure, fresh, and full of natural flavor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div>
                    <h3>Our Team</h3>
                    <p>We combine global expertise and local insight to help you</p>
                    <div>
                        <div className="member">
                            <img src="/luicey/about1.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini1.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Hannah Moore</h4>
                                    <p className="job">Founder & CEO</p>
                                </div>
                            </div>
                        </div>

                        <div className="member">
                            <img src="/luicey/about2.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini2.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Thomas King</h4>
                                    <p className="job">Product Manager</p>
                                </div>
                            </div>
                        </div>

                        <div className="member">
                            <img src="/luicey/about3.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini3.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Denis Smith</h4>
                                    <p className="job">Head of Sustainability</p>
                                </div>
                            </div>
                        </div>

                        <div className="member">
                            <img src="/luicey/about4.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini4.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Philip White</h4>
                                    <p className="job">Marketing Director</p>
                                </div>
                            </div>
                        </div>

                        <div className="member">
                            <img src="/luicey/about5.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini5.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Sarah Brown</h4>
                                    <p className="job">Sales Manager</p>
                                </div>
                            </div>
                        </div>

                        <div className="member">
                            <img src="/luicey/about6.jpg" className="profile"/>
                            <div className="info">
                                <img src="/luicey/about-mini6.jpg" className="mini-profile"/>
                                <div>
                                    <h4 className="name">Lukas Kyle</h4>
                                    <p className="job">IT Shadow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default About