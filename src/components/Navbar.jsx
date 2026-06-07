import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Home',     path: '/'         },
    { label: 'Services', path: '/services' },
    { label: 'Our Team', path: '/team'     },
];

function Navbar() {
    const { pathname } = useLocation();

    const isActive = (path) => {
        if (path === '/team') return pathname === '/team' || pathname.startsWith('/team/');
        return pathname === path;
    };

    return (
        // position-sticky top-0 keeps navbar fixed; z-index via CSS since Bootstrap z-index classes are limited
        <div className="navbar-sticky-wrapper">

            {/* bg-white px-4 py-2 d-flex align-items-center */}
            <nav className="bg-white px-4 py-2 d-flex align-items-center">

                {/* ----- Brand — me-auto pushes links to the right ----- */}
                <Link to="/" className="brand-font me-auto text-decoration-none">
                    Clip &amp; Snip
                </Link>

                {/* ----- Nav links — d-flex gap-3 ----- */}
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

                    <Link to="/booking" className="btn-salmon">
                        Book Now
                    </Link>
                </div>
            </nav>

            {/* ----- Salmon accent bar ----- */}
            <div className="navbar-bottom-line" />
        </div>
    );
}

export default Navbar;