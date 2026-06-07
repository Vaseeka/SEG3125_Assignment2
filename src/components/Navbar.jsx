import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// ----- Navigation links -----
// Add or remove entries here to change which links appear in the navbar
const NAV_LINKS = [
    { label: 'Home',     path: '/'         },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team'     },
];

function Navbar() {
    const { pathname } = useLocation();

    // ----- Active page detection -----
    // Highlights the current page link with a salmon underline
    const isActive = (path) => {
        if (path === '/team') return pathname === '/team' || pathname.startsWith('/team/');
        return pathname === path;
    };

    return (
        // navbar-sticky-wrapper keeps the whole navbar (white bar + pink line) stuck to the top
        <div className="navbar-sticky-wrapper">

            {/* ----- White bar: brand on left, links on right ----- */}
            {/* py-3 controls the height of the white section */}
            <nav className="bg-white px-4 py-3 d-flex align-items-center">

                {/* Brand logo -- me-auto pushes everything else to the right */}
                <Link to="/" className="brand-font me-auto text-decoration-none">
                    Clip &amp; Snip
                </Link>

                {/* Nav links and Book Now button */}
                <div className="d-flex align-items-center gap-3">
                    {NAV_LINKS.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`nav-link-custom text-decoration-none fw-semibold ${isActive(path) ? 'active' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Book Now -- styled as a pill button, routes to the booking form */}
                    <Link to="/booking" className="btn-salmon">
                        Book Now
                    </Link>
                </div>
            </nav>

            {/* ----- Salmon accent bar below the white nav bar ----- */}
            {/* Height is controlled by .navbar-bottom-line in Navbar.css */}
            <div className="navbar-bottom-line" />
        </div>
    );
}

export default Navbar;