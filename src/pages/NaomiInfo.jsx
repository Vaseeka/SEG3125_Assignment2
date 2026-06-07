import './StylistInfo.css';

function NaomiInfo() {
    return (
        <div className="bg-light py-4 px-3">
            {/* mx-auto centres card; shadow rounded for Bootstrap card feel */}
            <div className="d-flex flex-column flex-md-row gap-4 bg-white rounded-3 shadow p-4 mx-auto stylist-box">

                <img src="/images/naomi.jpg" alt="Naomi Courtoise" className="stylist-photo rounded-3 flex-shrink-0" />

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
