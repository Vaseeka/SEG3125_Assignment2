import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="page-fade home-wrap">
            <div className="hero-wrap">

                <img src="/images/home.jpg" alt="Clip & Snip salon interior" className="hero-bg" />
                <div className="hero-dim" />

                {/* ----- Frosted text band ----- */}
                <div className="hero-glass">
                    <h1 className="hero-title">Clip &amp; Snip</h1>
                    <p className="hero-sub">
                        As one of the most highly rated salons in Canada, we pride
                        ourselves on giving the best haircuts for the low price of{' '}
                        <u><strong>$15</strong></u>!
                    </p>
                    <Link to="/booking" className="btn-salmon px-5 py-2">
                        Book Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;