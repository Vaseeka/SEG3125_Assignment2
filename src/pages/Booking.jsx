import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

// ----- Dropdown option lists -----
// To add a new hairstyle or time slot, add a string to the relevant array
const HAIRSTYLES   = ['Buzz Cut - $10', 'Fade Cut - $15', 'Crew Cut - $12', 'Layered Cut - $20', 'Bob Cut - $18', 'Pixie Cut - $15'];
const HAIRDRESSERS = ['Naomi Courtoise', 'Jordan Hogger'];
const TIMES        = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM'];

// ----- Field component -----
// Reusable form field that renders either a <select> dropdown or a text <input>
// Props:
//   label   -- the label text shown above the field
//   fkey    -- the key in the form state object (e.g. 'firstName')
//   type    -- input type (e.g. 'text', 'email', 'date') -- ignored for dropdowns
//   opts    -- if provided, renders a <select> with these options instead of an <input>
//   value   -- current value from form state
//   error   -- validation error message (shown in red below the field if set)
//   onChange -- callback: (key, value) => void
function Field({ label, fkey, type, opts, value, error, onChange }) {
    return (
        <div className="mb-3">
            {/* form-label fw-semibold -- Bootstrap label style */}
            <label className="form-label fw-semibold">{label}</label>

            {opts ? (
                // Dropdown menu
                <select
                    className={`form-select booking-input ${error ? 'is-invalid' : ''}`}
                    value={value}
                    onChange={(e) => onChange(fkey, e.target.value)}
                >
                    <option value="">Select...</option>
                    {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
            ) : (
                // Text / email / date / phone number input
                <input
                    className={`form-control booking-input ${error ? 'is-invalid' : ''}`}
                    type={type || 'text'}
                    value={value}
                    onChange={(e) => onChange(fkey, e.target.value)}
                />
            )}

            {/* Validation error -- Bootstrap's is-invalid + invalid-feedback pair */}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

// ----- Booking -----
// Appointment booking form. All fields are validated on submit
// On successful submission: calls onBooked() (shows success banner) then navigates to home
// Props:
//   onBooked -- callback after successful form submission
function Booking({ onBooked }) {
    const navigate = useNavigate();

    // ----- Form state -----
    // One key per form field. Starts empty
    const [form, setForm] = useState({
        hairstyle: '', hairdresser: '', date: '', time: '',
        firstName: '', lastName: '', email: '', phone: '',
    });

    // ----- Error state -----
    // Populated by validate() on submit. Each key matches a form field
    const [errors, setErrors] = useState({});

    // Updates a single field in form state without touching other fields
    const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

    // ----- Validation -----
    // Returns an object of error messages keyed by field name
    // If the object is empty, all fields are valid
    const validate = () => {
        const e = {};
        if (!form.hairstyle)                                   e.hairstyle   = 'Please select a hairstyle.';
        if (!form.hairdresser)                                 e.hairdresser = 'Please select a hairdresser.';
        if (!form.date)                                        e.date        = 'Please select a date.';
        if (!form.time)                                        e.time        = 'Please select a time.';
        if (!form.firstName.trim())                            e.firstName   = 'First name is required.';
        if (!form.lastName.trim())                             e.lastName    = 'Last name is required.';
        if (!form.email.includes('@'))                         e.email       = 'Valid email is required.';
        if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ''))) e.phone       = 'Valid phone number required.';
        return e;
    };

    // ----- Submit handler -----
    // Validates all fields; if any errors, shows them inline
    // If valid, fires onBooked() and navigates back to home
    const handleSubmit = () => {
        const e = validate();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        onBooked();
        navigate('/');
    };

    return (
        // Centres the card horizontally
        // Adds space above and below, separating it from navbar and footer
        <div className="d-flex justify-content-center py-5 px-3 my-3">

            {/* White card with Bootstrap shadow and rounded corners */}
            <div className="bg-white rounded-3 shadow p-4 p-md-5 w-100 booking-card">

                <h2 className="fw-bold text-center mb-4 booking-title">Appointment Form</h2>

                {/* ----- Row 1: Hairstyle + Hairdresser ----- */}
                <div className="row">
                    <div className="col-6">
                        <Field label="Hairstyle"   fkey="hairstyle"   opts={HAIRSTYLES}
                               value={form.hairstyle}   error={errors.hairstyle}   onChange={setField} />
                    </div>
                    <div className="col-6">
                        <Field label="Hairdresser" fkey="hairdresser" opts={HAIRDRESSERS}
                               value={form.hairdresser} error={errors.hairdresser} onChange={setField} />
                    </div>
                </div>

                {/* ----- Row 2: Date + Time ----- */}
                <div className="row">
                    <div className="col-6">
                        <Field label="Date" fkey="date" type="date"
                               value={form.date} error={errors.date} onChange={setField} />
                    </div>
                    <div className="col-6">
                        <Field label="Time" fkey="time" opts={TIMES}
                               value={form.time} error={errors.time} onChange={setField} />
                    </div>
                </div>

                {/* ----- Row 3: First Name + Last Name ----- */}
                <div className="row">
                    <div className="col-6">
                        <Field label="First Name" fkey="firstName"
                               value={form.firstName} error={errors.firstName} onChange={setField} />
                    </div>
                    <div className="col-6">
                        <Field label="Last Name" fkey="lastName"
                               value={form.lastName} error={errors.lastName} onChange={setField} />
                    </div>
                </div>

                {/* ----- Row 4: Email + Phone ----- */}
                <div className="row">
                    <div className="col-6">
                        <Field label="Email" fkey="email" type="email"
                               value={form.email} error={errors.email} onChange={setField} />
                    </div>
                    <div className="col-6">
                        <Field label="Phone Number" fkey="phone" type="tel"
                               value={form.phone} error={errors.phone} onChange={setField} />
                    </div>
                </div>

                {/* Submit button -- full width, salmon colour from Navbar.css .btn-salmon */}
                <button className="btn-salmon w-100 mt-2 booking-submit" onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    );
}

export default Booking;