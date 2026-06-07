import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import './Services.css';

const MEN_STYLES = [
    { name: 'Buzz Cut',  desc: 'A clean, ultra-short haircut that is easy to maintain and requires little to no styling.', price: '$10', img: '/images/buzz cut.jpg'  },
    { name: 'Fade Cut',  desc: 'A modern haircut featuring a smooth transition from short sides to longer hair on top.',   price: '$15', img: '/images/fade cut.jpg'  },
    { name: 'Crew Cut',  desc: 'A classic tapered cut that keeps the top neat while fading the sides short and clean.',    price: '$12', img: '/images/crew cut.jpg'  },
];

const WOMEN_STYLES = [
    { name: 'Layered Cut', desc: 'Adds movement and volume to long hair while maintaining overall length.',                price: '$20', img: '/images/layered cut.jpg' },
    { name: 'Bob Cut',     desc: 'A classic, shoulder-length style that offers a sleek and professional appearance.',      price: '$18', img: '/images/bob cut.jpg'    },
    { name: 'Pixie Cut',   desc: 'A bold, short style that frames the face beautifully with minimal maintenance.',         price: '$15', img: '/images/pixie cut.jpg'  },
];

const MEN_PANEL   = { heading: "Men's Hairstyles",   desc: "From sharp fades to classic crew cuts, our male hairstyle specialists craft the perfect look for every man. Browse our men's styles and book your appointment today." };
const WOMEN_PANEL = { heading: "Women's Hairstyles", desc: "From layered cuts to chic bobs, our women's specialists bring out the best in every hair type and length. Explore our women's styles and find your next favourite look." };

function Services() {
    const [tab, setTab] = useState('men');
    const styles       = tab === 'men' ? MEN_STYLES   : WOMEN_STYLES;
    const panel        = tab === 'men' ? MEN_PANEL    : WOMEN_PANEL;
    const panelOnRight = tab === 'men';

    return (
        <div>
            <SectionHeader title="Haircuts & Styling" image="/images/services.jpg" />

            <div className="container py-4 pb-5">

                {/* ----- Toggle: d-flex justify-content-center ----- */}
                <div className="d-flex justify-content-center mb-4">
                    <div className="toggle-group">
                        <button className={`toggle-btn ${tab === 'women' ? 'on' : 'off'}`} onClick={() => setTab('women')}>
                            Women's Hairstyles
                        </button>
                        <button className={`toggle-btn ${tab === 'men'   ? 'on' : 'off'}`} onClick={() => setTab('men')}>
                            Men's Hairstyles
                        </button>
                    </div>
                </div>

                {/* ----- Two-column layout via Bootstrap row ----- */}
                <div className={`row g-3 align-items-stretch ${panelOnRight ? '' : 'flex-row-reverse'}`}>

                    {/* Cards column: col-7 */}
                    <div className="col-12 col-md-7 d-flex flex-column gap-3">
                        {styles.map((style) => (
                            // Bootstrap card with d-flex flex-row
                            <div key={style.name} className="d-flex bg-white rounded-3 shadow-sm overflow-hidden service-card">
                                <img src={style.img} alt={style.name} className="service-card-img flex-shrink-0" />
                                <div className="p-3 d-flex flex-column justify-content-center">
                                    <h5 className="fw-bold mb-1 service-card-name">{style.name}</h5>
                                    <p className="text-muted mb-1 service-card-desc">{style.desc}</p>
                                    <p className="fw-bold mb-0 service-card-price">Price: {style.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info panel: col-5, salmon bg */}
                    <div className="col-12 col-md-5">
                        <div className="services-panel rounded-3 p-4 h-100 d-flex flex-column justify-content-center">
                            <h2 className="fw-bold text-white mb-3 services-panel-heading">{panel.heading}</h2>
                            <p className="text-white mb-0 services-panel-desc">{panel.desc}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;