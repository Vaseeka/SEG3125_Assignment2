import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './Services.css';

// ----- Hairstyle data -----
// To add a new hairstyle, add an entry to MEN_STYLES or WOMEN_STYLES.
// img: place the photo in public/images/ using the exact filename below (all lowercase).
const MEN_STYLES = [
    { name: 'Buzz Cut',  desc: 'A clean, ultra-short haircut that is easy to maintain and requires little to no styling.', price: '$10', img: '/images/buzzcut.png'  },
    { name: 'Fade Cut',  desc: 'A modern haircut featuring a smooth transition from short sides to longer hair on top.',   price: '$15', img: '/images/fadecut.png'  },
    { name: 'Crew Cut',  desc: 'A classic tapered cut that keeps the top neat while fading the sides short and clean.',    price: '$12', img: '/images/crewcut.png'  },
];

const WOMEN_STYLES = [
    { name: 'Layered Cut', desc: 'Adds movement and volume to long hair while maintaining overall length.',                price: '$20', img: '/images/layeredcut.jpg' },
    { name: 'Bob Cut',     desc: 'A classic, shoulder-length style that offers a sleek and professional appearance.',      price: '$18', img: '/images/bobcut.png'    },
    { name: 'Pixie Cut',   desc: 'A bold, short style that frames the face beautifully with minimal maintenance.',         price: '$15', img: '/images/pixiecut.png'  },
];

// ----- Info panel text -----
// The salmon-coloured panel that sits in the same row as the cards.
// Men's: panel on the right. Women's: panel on the left (order-first / order-last).
const MEN_PANEL   = { heading: "Men's Hairstyles",   desc: "From sharp fades to classic crew cuts, our male hairstyle specialists craft the perfect look for every man. Browse our men's styles and book your appointment today." };
const WOMEN_PANEL = { heading: "Women's Hairstyles", desc: "From layered cuts to chic bobs, our women's specialists bring out the best in every hair type and length. Explore our women's styles and find your next favourite look." };

// ----- Services -----
// All four items (three cards + info panel) sit in a single flex row.
// The toggle switches between men's and women's styles.
// When men's is selected: cards first, panel last.
// When women's is selected: panel first (order-first), cards after (order-last).
function Services() {
    // tab: 'men' | 'women' -- controls which set of cards and panel text is shown
    const [tab, setTab] = useState('men');

    const styles       = tab === 'men' ? MEN_STYLES   : WOMEN_STYLES;
    const panel        = tab === 'men' ? MEN_PANEL    : WOMEN_PANEL;
    const panelOnRight = tab === 'men';

    return (
        <div>
            {/* Banner image with frosted title -- uses services.png */}
            <SectionHeader title="Haircuts & Styling" image="/images/services.png" />

            <div className="container py-4 pb-5">

                {/* ----- Toggle: two connected pill buttons, centred ----- */}
                {/* Active side: salmon tint + bold + scale up (see Services.css) */}
                <div className="d-flex justify-content-center mb-4">
                    <div className="toggle-group">
                        <button className={`toggle-btn ${tab === 'women' ? 'on' : 'off'}`} onClick={() => setTab('women')}>
                            Women's Hairstyles
                        </button>
                        <button className={`toggle-btn ${tab === 'men' ? 'on' : 'off'}`} onClick={() => setTab('men')}>
                            Men's Hairstyles
                        </button>
                    </div>
                </div>

                {/* ----- Single flex row: three cards + info panel -----
                    All four items share equal width (flex: 1 1 0) and the same height.
                    On medium screens two items wrap to a second row; on small screens
                    each item takes the full width (see Services.css). */}
                <div className="services-row">

                    {/* ----- Info panel -----
                        order-first places it before the cards for women's; default order for men's.
                        Rendered before the cards in the DOM so the order class works correctly. */}
                    <div className={`services-panel rounded-3 px-5 py-4 d-flex flex-column justify-content-center ${panelOnRight ? 'order-last' : 'order-first'}`}>
                        <h2 className="fw-bold text-white mb-3 services-panel-heading">{panel.heading}</h2>
                        <p className="text-white mb-0 services-panel-desc">{panel.desc}</p>
                    </div>

                    {/* ----- Three hairstyle cards -----
                        Each card is vertical: image stacked above text.
                        Even index (0, 2): image on top, text on bottom.
                        Odd index (1): text on top, image on bottom (flex-column-reverse). */}
                    {styles.map((style, index) => (
                        <div
                            key={style.name}
                            className={`bg-white rounded-3 shadow-sm overflow-hidden service-card d-flex ${index % 2 === 1 ? 'flex-column-reverse' : 'flex-column'}`}
                        >
                            <img src={style.img} alt={style.name} className="service-card-img w-100 flex-shrink-0" />
                            <div className="px-4 py-3 d-flex flex-column justify-content-center flex-grow-1">
                                <h5 className="fw-bold mb-1 service-card-name">{style.name}</h5>
                                <p className="text-muted mb-1 service-card-desc">{style.desc}</p>
                                <p className="fw-bold mb-0 service-card-price">Price: {style.price}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Services;