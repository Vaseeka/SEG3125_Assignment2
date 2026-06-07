import './SuccessBanner.css';

function SuccessBanner({ onClose }) {
    return (
        // d-flex align-items-center gap-3 px-4 py-3 fw-semibold
        <div className="success-banner d-flex align-items-center gap-3 px-4 py-3 fw-semibold">

            <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>

            <span>Appointment successfully created!</span>

            {/* ms-auto pushes close button to the far right */}
            <button className="success-close ms-auto border-0 bg-transparent text-white" onClick={onClose} aria-label="Close">
                ✕
            </button>
        </div>
    );
}

export default SuccessBanner;
