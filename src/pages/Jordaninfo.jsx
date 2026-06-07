import './StylistInfo.css';

function JordanInfo() {
    return (
        <div className="bg-light py-4 px-3">
            <div className="d-flex flex-column flex-md-row gap-4 bg-white rounded-3 shadow p-4 mx-auto stylist-box">

                <img src="/images/jordan.png" alt="Jordan Hogger" className="stylist-photo rounded-3 flex-shrink-0" />

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