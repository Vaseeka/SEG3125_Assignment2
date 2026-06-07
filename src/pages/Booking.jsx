import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const HAIRSTYLES   = ['Buzz Cut - $10', 'Fade Cut - $15', 'Crew Cut - $12', 'Layered Cut - $20', 'Bob Cut - $18', 'Pixie Cut - $15'];
const HAIRDRESSERS = ['Naomi Courtoise', 'Jordan Hogger'];
const TIMES        = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM'];

// Field outside Booking to prevent remounting on re-render
function Field({ label, fkey, type, opts, value, error, onChange }) {
    return (
        <div className="mb-3">
            <label className="form-label fw-semibold">{label}</label>
            {opts ? (
                <select
                    className={`form-select booking-input ${error ? 'is-invalid' : ''}`}
                    value={value}
                    onChange={(e) => onChange(fkey, e.target.value)}
                >
                    <option value="">Select...</option>
                    {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
            ) : (
                <input
                    className={`form-control booking-input ${error ? 'is-invalid' : ''}`}
                    type={type || 'text'}
                    value={value}
                    onChange={(e) => onChange(fkey, e.target.value)}
                />
            )}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

function Booking({ onBooked }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        hairstyle: '', hairdresser: '', date: '', time: '',
        firstName: '', lastName: '', email: '', phone: '',
    });
    const [errors, setErrors] = useState({});

    const setField = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

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

    const handleSubmit = () => {
        const e = validate();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        onBooked();
        navigate('/');
    };

    return (
        // d-flex justify-content-center gives horizontal centering; py-4 for vertical breathing room
        <div className="d-flex justify-content-center py-4 px-3">
            <div className="bg-white rounded-3 shadow p-4 p-md-5 w-100 booking-card">

                <h2 className="fw-bold text-center mb-4 booking-title">Appointment Form</h2>

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

                <button className="btn-salmon w-100 mt-2 booking-submit" onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    );
}

export default Booking;