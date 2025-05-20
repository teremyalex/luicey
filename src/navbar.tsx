import { Link, useLocation } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../src/assets/mobilbar.json";
import { useEffect, useRef, useState } from "react";
import "./navbar.css";

interface MobileBarAnimationProps {
    isReversed: boolean
    toggleAnimation: () => void
    lottieRef: React.RefObject<LottieRefCurrentProps | null>
    specialPages: string[]
}

function MobileBarAnimation({ isReversed, toggleAnimation, lottieRef, specialPages }:MobileBarAnimationProps) {

    useEffect(() => {
        if (lottieRef.current) lottieRef.current.goToAndStop(0, true)
    }, [])


    const handleClick = () => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(isReversed ? 1 : -1)
            lottieRef.current.play()
        }
        toggleAnimation();
        document.documentElement.classList.toggle("mobil")
    };

    return <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} onClick={handleClick} className={`mobil-bar ${specialPages.includes(location.pathname) ? "white" : ""}`} />
}

function Navbar() {
    const [isReversed, setIsReversed] = useState(true)
    const lottieRef = useRef<LottieRefCurrentProps  | null>(null)

    const toggleAnimation = () => {
        setIsReversed(prev => !prev)
    };

    const closeMenu = () => {
        setIsReversed(true)
        document.documentElement.classList.toggle("mobil")

        if (lottieRef.current) {
            lottieRef.current.setDirection(-1)
            lottieRef.current.play()
        }
    }

    const location = useLocation()
    const specialPages = ["/products"]


    const navAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting){
                setTimeout(()=> entry.target.classList.add("visible"), 140*index)
            }
        })
    })

    setTimeout(()=> document.querySelectorAll("nav.desktop li a").forEach(a=>navAnim.observe(a)), 1800)
    setTimeout(()=> navAnim.observe(document.querySelector("nav.desktop .logo")!), 3200)


    return (
        <>
            <nav className={`desktop ${specialPages.includes(location.pathname) ? "white" : ""}`}>
                <div><Link className="logo" to="/">Luicey</Link></div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    {/*<li><Link to="/"><img src="/luicey/cart.svg" className={specialPages.includes(location.pathname) ? "white" : ""}/><div className="cart-count">0</div></Link></li>*/}
                </ul>
            </nav>

            {window.innerWidth<=500 ? <Link className={`mobil-logo ${specialPages.includes(location.pathname) ? "white" : ""}`} to="/">Luicey</Link> : null}
            <MobileBarAnimation isReversed={isReversed} toggleAnimation={toggleAnimation} lottieRef={lottieRef} specialPages={specialPages}/>
            <nav className={`mobil ${isReversed ? "" : "active"}`}>
            <Link className="logo" to="/" onClick={closeMenu}>Luicey</Link>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
                    <li><Link to="/products" onClick={closeMenu}>PRODUCTS</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
