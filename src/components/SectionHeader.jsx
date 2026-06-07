import './SectionHeader.css';

// image prop lets each page pass its own banner photo
function SectionHeader({ title, image }) {
    return (
        <div className="section-header-wrap">
            <img src={image} alt="" className="section-header-bg" />
            <div className="section-header-dim" />
            <div className="section-header-glass">
                <h1 className="section-header-title">{title}</h1>
            </div>
        </div>
    );
}

export default SectionHeader;
