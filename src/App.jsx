import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SuccessBanner from './components/SuccessBanner';

import Home       from './pages/Home';
import Services   from './pages/Services';
import Team       from './pages/Team';
import NaomiInfo  from './pages/NaomiInfo';
import JordanInfo from './pages/JordanInfo';
import Booking    from './pages/Booking';

function App() {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleBooked = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 6000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Navbar />

            {showSuccess && (
                <SuccessBanner onClose={() => setShowSuccess(false)} />
            )}

            {/* ----- Main content — flex:1 so HomePage hero can fill remaining space ----- */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Routes>
                    <Route path="/"             element={<Home />} />
                    <Route path="/services"     element={<Services />} />
                    <Route path="/team"         element={<Team />} />
                    <Route path="/team/naomi"   element={<NaomiInfo />} />
                    <Route path="/team/jordan"  element={<JordanInfo />} />
                    <Route path="/booking"      element={<Booking onBooked={handleBooked} />} />
                </Routes>
            </main>

            <Footer />

        </div>
    );
}

export default App;