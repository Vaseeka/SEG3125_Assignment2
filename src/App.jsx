import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// ----- Shared layout components (appear on every page) -----
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SuccessBanner from './components/SuccessBanner';

// ----- Page components -----
import Home       from './pages/Home';
import Services   from './pages/Services';
import Team       from './pages/Team';
import NaomiInfo  from './pages/NaomiInfo';
import JordanInfo from './pages/JordanInfo';
import Booking    from './pages/Booking';

function App() {
    // ----- Success banner state -----
    // showSuccess is set to true when the booking form is submitted.
    // It auto-dismisses after 6 seconds, or can be closed manually.
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBooked = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 6000);
    };

    return (
        // Outer flex column fills full viewport height so footer always sits at bottom
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* ----- Sticky navbar (shown on all pages) ----- */}
            <Navbar />

            {/* ----- Success banner (only visible after booking submission) ----- */}
            {showSuccess && (
                <SuccessBanner onClose={() => setShowSuccess(false)} />
            )}

            {/* ----- Page content area -----
                flex: 1 makes this grow to fill remaining height between navbar and footer.
                display: flex + flexDirection: column allows HomePage hero to stretch to fill it. */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Routes>
                    {/* Home page */}
                    <Route path="/"             element={<Home />} />

                    {/* Services / haircut catalogue */}
                    <Route path="/services"     element={<Services />} />

                    {/* Team overview page */}
                    <Route path="/team"         element={<Team />} />

                    {/* Individual stylist profile pages */}
                    <Route path="/team/naomi"   element={<NaomiInfo />} />
                    <Route path="/team/jordan"  element={<JordanInfo />} />

                    {/* Appointment booking form */}
                    <Route path="/booking"      element={<Booking onBooked={handleBooked} />} />
                </Routes>
            </main>

            {/* ----- Footer (shown on all pages) ----- */}
            <Footer />

        </div>
    );
}

export default App;