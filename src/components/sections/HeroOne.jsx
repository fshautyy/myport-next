import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Particles from "@layouts/particles/Index";

const HeroOne = () => {
    return (
        <>
            {/* banner */}
            <section className="mil-banner mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="mil-noOpacity mil-position-4 mil-dark mil-scale" data-value-1="7" data-value-2="1.4" style={{"right": "10%"}}>
                        <Particles />
                    </div>

                    <div className="mil-gradient" />

                    <div className="container">
                        <div className="mil-banner-content mil-up">

                            <h1 className="mil-muted mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />

                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60">{Data.description}</p>
                                </div>
                            </div>

                            <Link href={Data.button1.link} className="mil-button mil-arrow-place mil-btn-space">
                                <span>{Data.button1.label}</span>
                                <ArrowIcon />
                            </Link>

                            <Link href={Data.button2.link} className="mil-link mil-muted mil-arrow-place">
                                <span>{Data.button2.label}</span>
                                <ArrowIcon />
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;