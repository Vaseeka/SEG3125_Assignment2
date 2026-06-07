import './StylistInfo.css';

// ----- NaomiInfo -----
// Profile page for Naomi Courtoise, reached from the Team page "Learn More" button.
// Layout: photo on the left, bio text on the right, wrapped in a white card.
// On mobile (max-width 640px) the photo stacks above the text (see StylistInfo.css).
// Photo: place naomi.jpg in public/images/
function NaomiInfo() {
    return (
        // bg-light py-4 px-3 -- off-white page background with breathing room
        <div className="bg-light py-4 px-3">

            {/* White card: d-flex lays photo and text side by side on desktop */}
            <div className="d-flex flex-column flex-md-row gap-4 bg-white rounded-3 shadow p-4 mx-auto stylist-box">

                {/* ----- Stylist photo ----- */}
                <img src="/images/naomi.jpg" alt="Naomi Courtoise" className="stylist-photo rounded-3 flex-shrink-0" />

                {/* ----- Bio text ----- */}
                <div>
                    <h2 className="fw-bold mb-3 stylist-name">Meet Naomi Courtoise</h2>
                    <p className="stylist-bio">
                        Naomi has been working with Clip &amp; Snip for over 10 years. She's
                        experienced in all sorts of trendy haircuts, especially for young girls
                        all the way to older women, short or long! She's passionate about her
                        job and enjoys chatting while working to make the experience as relaxed
                        as possible. Customers who've had a haircut from her always leave a
                        glowing review about her services!
                    </p>
                </div>

            </div>
        </div>
    );
}

export default NaomiInfo;