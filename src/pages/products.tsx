import Navbar from "../navbar.tsx";
import Social from "../social.tsx";
import Loading from "../loading.tsx";
import "./products.css";
import {useEffect, useState} from "react";




function Products(){

    const [product, setProduct] = useState<"orange" | "kiwi" | "strawberry">("orange");


    function switchBTN(productName: "orange" | "kiwi" | "strawberry") {
        document.querySelector('.product-info')!.classList.add('switch-product')
        document.querySelectorAll('.velemeny').forEach(velemeny => velemeny.classList.add('switch-product'))
        setTimeout(()=>{
            setProduct(productName);
            document.querySelector('.product-info')!.classList.remove('switch-product')
            document.querySelectorAll('.velemeny').forEach(velemeny => velemeny.classList.remove('switch-product'))
        }, 500)
    }

    useEffect(() => {
        const displayAnim = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                setTimeout(()=>{
                    if (entry.isIntersecting){
                        setTimeout(() => entry.target.classList.add('visible'), 200*index)
                        setTimeout(() => entry.target.classList.add('animation'),2000*index)
                    }
                }, 700)
            })
        })
        displayAnim.observe(document.querySelector('.product-info')!)
        document.querySelectorAll('.velemeny').forEach(velemeny => displayAnim.observe(velemeny))
    }, [product])

    //BACKGROUND ANIMATION
    useEffect(() => {
        if(window.innerWidth < 1024) return
        const juiceBG =  document.querySelector('.' + product) as HTMLElement
        let targetX= 0, targetY= 0, currentX= 0, currentY= 0;

        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2

            targetX = (e.clientX - centerX) / 20
            targetY = (e.clientY - centerY) / 20
        }

        window.addEventListener('mousemove', handleMouseMove);

        function animate() {
            currentX += (targetX - currentX) * 0.025
            currentY += (targetY - currentY) * 0.025

            juiceBG.style.backgroundPosition = `${currentX}px ${currentY}px`

            requestAnimationFrame(animate)
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        };
    }, [])





    return(
        <>
            <Loading />
            <Navbar />
            <Social />


            <section className={`product ${product}`}>
                <div className="info">
                    {product==="orange" ?
                    <>
                    <div className="product-info">
                        <div className="switch">
                            <button className="orangeBTN active" onClick={()=>switchBTN("orange")}>Orange</button>
                            <button className="kiwiBTN" onClick={()=>switchBTN("kiwi")}>Kiwi</button>
                            <button className="strawberryBTN" onClick={()=>switchBTN("strawberry")}>Strawberry</button>
                        </div>

                        <h1>Orange Juice</h1>
                        <h3>Sun-Kissed Freshness</h3>
                        <div className="ml500">500 ml</div>
                        <div>
                            <h5>Nutrition Facts (Per 100 ml)</h5>
                            <ul>
                                <li>Calories: 45 kcal</li>
                                <li>Total Fat: 0 g</li>
                                <li>Saturated Fat: 0 g</li>
                                <li>Carbohydrates: 10.5 g</li>
                                <li>Sugars: 8.4 g</li>
                                <li>Protein: 0.7 g</li>
                                <li>Vitamin C: 50 mg (55% DV)</li>
                                <li>Fiber: 0.2 g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="velemenyek">
                        <div className="velemeny">
                            <p>The freshest, most natural-tasting orange juice I've ever had – pure sunshine in a bottle!</p>
                            <div>
                                <img src="/luicey/velemeny2.jpg"/>
                                <div>
                                    <div className="nev">Josh</div>
                                    <div className="orszag">London</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>This orange juice is so fresh and zesty, it tastes like it was just squeezed straight from the grove!</p>
                            <div>
                                <img src="/luicey/velemeny1.jpg"/>
                                <div>
                                    <div className="nev">Tiffany</div>
                                    <div className="orszag">Riga</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>Perfectly sweet and tangy, this is hands down the best orange juice I’ve ever tasted!</p>
                            <div>
                                <img src="/luicey/velemeny3.jpg"/>
                                <div>
                                    <div className="nev">Katy</div>
                                    <div className="orszag">Sydney</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>

                    : product==="kiwi" ?
                    <>
                    <div className="product-info">
                        <div className="switch">
                            <button className="orangeBTN" onClick={()=>switchBTN("orange")}>Orange</button>
                            <button className="kiwiBTN active" onClick={()=>switchBTN("kiwi")}>Kiwi</button>
                            <button className="strawberryBTN" onClick={()=>switchBTN("strawberry")}>Strawberry</button>
                        </div>
                        <h1>Kiwi Juice</h1>
                        <h3>Exotic Vitality</h3>
                        <div className="ml500">500 ml</div>
                        <div>
                            <h5>Nutrition Facts (Per 100 ml)</h5>
                            <ul>
                                <li>Calories: 41 kcal</li>
                                <li>Total Fat: 0.2 g</li>
                                <li>Saturated Fat: 0 g</li>
                                <li>Carbohydrates: 9.3 g</li>
                                <li>Sugars: 8.0 g</li>
                                <li>Protein: 0.8 g</li>
                                <li>Vitamin C: 92 mg (100% DV)</li>
                                <li>Fiber: 0.4 g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="velemenyek">
                        <div className="velemeny">
                            <p>I wasn’t sure what to expect, but it turned out really good! Sweet, a little tangy, and super easy to drink.</p>
                            <div>
                                <img src="/luicey/velemeny4.jpg"/>
                                <div>
                                    <div className="nev">Emma</div>
                                    <div className="orszag">Dublin</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>I don’t usually go for kiwi juice, but this one is smooth and not too sour. Definitely worth a try!</p>
                            <div>
                                <img src="/luicey/velemeny5.jpg"/>
                                <div>
                                    <div className="nev">Jake</div>
                                    <div className="orszag">Stockholm</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>Tastes so natural, not too sweet. Feels like real fruit, which I really like.</p>
                            <div>
                                <img src="/luicey/velemeny6.jpg"/>
                                <div>
                                    <div className="nev">Mia</div>
                                    <div className="orszag">Wellington</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <div className="product-info">
                        <div className="switch">
                            <button className="orangeBTN" onClick={()=>switchBTN("orange")}>Orange</button>
                            <button className="kiwiBTN" onClick={()=>switchBTN("kiwi")}>Kiwi</button>
                            <button className="strawberryBTN active" onClick={()=>switchBTN("strawberry")}>Strawberry</button>
                        </div>
                        <h1>Strawberry Juice</h1>
                        <h3>Nature’s Sweetest Kiss</h3>
                        <div className="ml500">500 ml</div>
                        <div>
                            <h5>Nutrition Facts (Per 100 ml)</h5>
                            <ul>
                                <li>Calories: 34 kcal</li>
                                <li>Total Fat: 0.1 g</li>
                                <li>Saturated Fat: 0 g</li>
                                <li>Carbohydrates: 7.7 g</li>
                                <li>Sugars: 5.8 g</li>
                                <li>Protein: 0.6 g</li>
                                <li>Vitamin C: 59 mg (65% DV)</li>
                                <li>Fiber: 0.8 g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="velemenyek">
                        <div className="velemeny">
                            <p>I didn’t expect much, but this strawberry juice is actually really nice. It has a light, pleasant flavor.</p>
                            <div>
                                <img src="/luicey/velemeny7.jpg"/>
                                <div>
                                    <div className="nev">Lena</div>
                                    <div className="orszag">Rome</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>It’s got a mellow, natural taste, not too intense. Feels like something homemade.</p>
                            <div>
                                <img src="/luicey/velemeny8.jpg"/>
                                <div>
                                    <div className="nev">Adam</div>
                                    <div className="orszag">London</div>
                                </div>
                            </div>
                        </div>

                        <div className="velemeny">
                            <p>Smooth and easy to drink. A simple, tasty strawberry juice without anything extra.</p>
                            <div>
                                <img src="/luicey/velemeny9.jpg"/>
                                <div>
                                    <div className="nev">Gukesh</div>
                                    <div className="orszag">Berlin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                        }
                </div>


                {/*
                <div className="price">€3.<sup>99</sup></div>
                <a className="cta" href="/products">BUY NOW
                    <svg>
                        <rect width="62" height="62" rx="31"/>
                        <path d="M23.5872 25.4326L23.5872 23.8996C23.5872 23.2505 24.112 22.7257 24.7577 22.7291L38.1782 22.7257C38.8273 22.7257 39.3521 23.2505 39.3487 23.8961L39.3487 37.3201C39.3487 37.9692 38.8239 38.494 38.1782 38.4906H36.6452C35.9892 38.4906 35.461 37.9485 35.4748 37.2925L35.6716 29.1684L25.7486 39.0913C25.2894 39.5505 24.5505 39.5505 24.0913 39.0913L22.9865 37.9865C22.5273 37.5273 22.5273 36.7884 22.9865 36.3292L32.9095 26.4062L24.7853 26.603C24.1259 26.6203 23.5838 26.092 23.5872 25.4326Z" fill="#EFEBE2"/>
                    </svg>
                </a>
                */}
            </section>

        </>
    )
}

export default Products