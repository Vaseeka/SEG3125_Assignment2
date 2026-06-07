import './SectionHeader.css';

// ----- SectionHeader -----
// Reusable banner used at the top of the Services and Team pages.
// Props:
//   title -- the heading text shown in the frosted band
//   image -- path to the background photo (e.g. "/images/services.jpg")
// The frosted band stretches full width horizontally and is only
// as tall as the text inside it, with the background image showing above and below.
function SectionHeader({ title, image }) {
    return (
        <div className="section-header-wrap">

            {/* Background photo -- fills the entire banner area */}
            <img src={image} alt="" className="section-header-bg" />

            {/* Dark overlay to improve contrast between photo and text */}
            <div className="section-header-dim" />

            {/* Frosted glass band -- full width, vertically centred */}
            <div className="section-header-glass">
                <h1 className="section-header-title">{title}</h1>
            </div>

        </div>
    );
}

export default SectionHeader;