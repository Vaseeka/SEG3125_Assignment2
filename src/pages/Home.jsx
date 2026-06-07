import { Link } from 'react-router-dom';
import './Home.css';

// ----- Home -----
// The landing page. Contains a full-height hero image with a frosted glass
// text band overlaid in the centre. The hero stretches to fill all space
// between the navbar and the footer (no white gap).
// Background photo: place home.jpg in public/images/
function Home() {
    return (
        // home-wrap uses flex:1 (via Home.css) so the hero fills remaining viewport height
        <div className="home-wrap">
            <div className="hero-wrap">

                {/* ----- Background salon photo ----- */}
                <img src="/images/home.jpg" alt="Clip & Snip salon interior" className="hero-bg" />

                {/* ----- Dark overlay to improve text readability over the photo ----- */}
                <div className="hero-dim" />

                {/* ----- Frosted glass band: full-width, only as tall as text content ----- */}
                <div className="hero-glass">
                    <h1 className="hero-title">Clip &amp; Snip</h1>
                    <p className="hero-sub">
                        As one of the most highly rated salons in Canada, we pride
                        ourselves on giving the best haircuts for the low price of{' '}
                        <u><strong>$15</strong></u>!
                    </p>
                    {/* Book Now button routes to the booking form page */}
                    <Link to="/booking" className="btn-salmon px-5 py-2">
                        Book Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;