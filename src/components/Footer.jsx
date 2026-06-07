import './Footer.css';

// ----- Footer -----
// Appears on every page via App.jsx.
// Three-column layout:
//   Col 1 (col-md-3): Contact info and location
//   Col 2 (col-md-5): Salon opening hours table
//   Col 3 (col-md-4): Footer image flush with bottom edge
// Horizontal position of text cols: adjust paddingLeft
// Image transparency: adjust opacity in Footer.css .footer-illustration
function Footer() {
    return (
        <footer className="footer-wrap">
            {/* container-fluid px-0 so the image column can reach the page edge */}
            <div className="container-fluid px-0">
                {/* align-items-stretch so image column fills the full footer height */}
                <div className="row g-0 align-items-stretch">

                    {/* ----- Col 1: Contact & Location ----- */}
                    {/* paddingLeft controls how far from the left edge this column starts */}
                    <div className="col-12 col-md-3 d-flex flex-column align-self-start ps-6 pe-3 py-4" style={{ paddingLeft: '9rem' }}>
                        <p className="footer-heading fw-bold mb-2">CONTACT US</p>

                        {/* Phone */}
                        <p className="footer-body mb-1">
                            <svg className="footer-icon me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                            </svg>
                            Phone: 613-123-4567
                        </p>

                        {/* Email */}
                        <p className="footer-body mb-3">
                            <svg className="footer-icon me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            Email: clipnsnip@gmail.com
                        </p>

                        <p className="footer-heading fw-bold mb-1">LOCATION</p>
                        <p className="footer-body mb-0">789 Somerset St W, Ottawa ON</p>
                    </div>

                    {/* ----- Col 2: Salon Hours ----- */}
                    {/* paddingLeft controls horizontal position */}
                    <div className="col-12 col-md-5 align-self-start ps-5 pe-3 py-4" style={{ paddingLeft: '9rem' }}>
                        <p className="footer-heading fw-bold mb-2">SALON HOURS</p>
                        <table className="footer-hours-table">
                            <tbody>
                                <tr><td className="footer-day pe-4">Sunday:</td>    <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Monday:</td>    <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Tuesday:</td>   <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Wednesday:</td> <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Thursday:</td>  <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Friday:</td>    <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                                <tr><td className="footer-day pe-4">Saturday:</td>  <td className="footer-time">9:00 AM - 6:00 PM</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ----- Col 3: Illustration ----- */}
                    {/* p-0 so image isn't clipped */}
                    {/* paddingRight shifts the image left */}
                    {/* Image transparency set in Footer.css .footer-illustration opacity */}
                    <div className="col-12 col-md-4 p-0 footer-img-col" style={{ paddingRight: '7rem' }}>
                        <img src="/images/footer.png" alt="" className="footer-illustration" />
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;