import {Link, useLocation} from "react-router-dom";
import "./social.css";

function Social(){

    const socialAnim = new IntersectionObserver(entries =>{
        entries.forEach((entry,index) => {
            if(entry.isIntersecting) setTimeout(()=> entry.target.classList.add("visible"), 60*index)
        })
    })
    setTimeout(()=> {
        document.querySelectorAll('.social a').forEach(a=>socialAnim.observe(a))
        setTimeout(()=>socialAnim.observe(document.querySelector(".social")!), 300)
    }, 1250)

    const location = useLocation()
    const specialPages = ["/products"]

    return (
        <>
            <div className={`social ${specialPages.includes(location.pathname) ? "white" : ""}`}>
                <Link to="/"><img src="/luicey/facebook.svg"/></Link>
                <Link to="/"><img src="/luicey/youtube.svg"/></Link>
                <Link to="/"><img src="/luicey/instagram.svg"/></Link>
            </div>
        </>
    )
}

export default Social