import './StylistInfo.css';

// ----- NaomiInfo -----
// Profile page for Naomi Courtoise, reached from the Team page "Learn More" button
// Layout: photo on the left, bio text on the right, wrapped in a white card
function NaomiInfo() {
    return (
        // Off-white page background
        <div className="bg-light py-4 px-3">

            {/* White card: d-flex lays photo and text side by side on desktop */}
            <div className="d-flex flex-column flex-md-row gap-4 bg-white rounded-3 shadow p-4 mx-auto stylist-box">

                {/* ----- Stylist photo ----- */}
                <img src="/images/naomi.jpg" alt="Naomi Courtoise" className="stylist-photo rounded-3 flex-shrink-0" />

                {/* ----- Bio text ----- */}
                <div>
                    <h2 className="fw-bold mb-3 stylist-name">Meet Naomi Courtoise</h2>
                    <p className="stylist-bio">
                        Naomi has been a hairstylist for over 10 years and has been part of the
                        Clip &amp; Snip team since the salon first opened. She specializes in long
                        layered cuts and elegant styling for special occasions. Known for her 
                        friendly personality and attentive approach, Naomi takes the time to 
                        understand each client's vision and help them achieve a look they love. 
                        Her clients often recommend her for her professionalism, creativity, 
                        and consistently excellent results.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default NaomiInfo;
