import styles  from './promo.css'
import promoIMG from '../../img/images/header-img.jpg'


const Promo = () => (
    <section className='promo'>
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className="highlight"></span>
                        LET’S EXPLORE UNIQUE CLOTHES.</div>

                    <div className="promo__desc">Live for Influential and Innovative fashion!</div>
                    <div className="promo__btn-wrapper"><a href="#" className="promo__btn">Shop Now</a></div>


                </div>
                <img src={promoIMG} className="promo__img" alt="promoImg"/>
            </div>
        </div>
    </section>
);

export default Promo;