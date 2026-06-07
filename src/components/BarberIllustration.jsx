// Inline barber illustration used in the footer
function BarberIllustration() {
    return (
        <svg
            viewBox="0 0 120 160"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 140, opacity: 0.55, display: 'block', margin: '0 auto' }}
        >
            <circle cx="60" cy="38" r="22" fill="#fff" opacity="0.9" />
            <rect x="38" y="60" width="44" height="60" rx="10" fill="#fff" opacity="0.9" />
            <rect x="52" y="120" width="8" height="30" rx="4" fill="#fff" opacity="0.9" />
            <rect x="68" y="120" width="8" height="30" rx="4" fill="#fff" opacity="0.9" />
            <line x1="20" y1="75" x2="38" y2="75" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
            <line x1="82" y1="75" x2="100" y2="75" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
            <g transform="translate(85,55) rotate(-30)">
                <circle cx="0"  cy="0" r="5"  fill="none" stroke="#fff" strokeWidth="2" opacity="0.85" />
                <circle cx="12" cy="8" r="5"  fill="none" stroke="#fff" strokeWidth="2" opacity="0.85" />
                <line x1="4"  y1="3"  x2="16" y2="11" stroke="#fff" strokeWidth="1.5" opacity="0.85" />
                <line x1="4"  y1="-3" x2="16" y2="5"  stroke="#fff" strokeWidth="1.5" opacity="0.85" />
            </g>
        </svg>
    );
}

export default BarberIllustration;
