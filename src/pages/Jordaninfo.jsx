import './StylistInfo.css';

// ----- JordanInfo -----
// Profile page for Jordan Hogger, reached from the Team page "Learn More" button.
// Layout: photo on the left, bio text on the right, wrapped in a white card.
// On mobile (max-width 640px) the photo stacks above the text (see StylistInfo.css).
// Photo: place jordan.png in public/images/
function JordanInfo() {
    return (
        // bg-light py-4 px-3 -- off-white page background with breathing room
        <div className="bg-light py-4 px-3">

            {/* White card: d-flex lays photo and text side by side on desktop */}
            <div className="d-flex flex-column flex-md-row gap-4 bg-white rounded-3 shadow p-4 mx-auto stylist-box">

                {/* ----- Stylist photo ----- */}
                <img src="/images/jordan.png" alt="Jordan Hogger" className="stylist-photo rounded-3 flex-shrink-0" />

                {/* ----- Bio text ----- */}
                <div>
                    <h2 className="fw-bold mb-3 stylist-name">Meet Jordan Hogger</h2>
                    <p className="stylist-bio">
                        Jordan has been a barber for over 8 years and joined the Clip &amp; Snip
                        family 5 years ago. He specializes in sharp fades, classic taper cuts,
                        and modern men's styling. Known for his attention to detail and great
                        conversation, Jordan makes every client feel comfortable in the chair.
                        His regulars come from all across Ottawa just to see him!
                    </p>
                </div>

            </div>
        </div>
    );
}

export default JordanInfo;