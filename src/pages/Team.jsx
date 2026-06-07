import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import './Team.css';

const MEMBERS = [
    { key: 'naomi',   name: 'Naomi Courtoise', role: 'Our feminine hairstyle specialist', img: '/images/naomi.jpg',   linkTo: '/team/naomi'  },
    { key: 'jordan',  name: 'Jordan Hogger',   role: 'Our male hairstyle specialist',     img: '/images/jordan.png',  linkTo: '/team/jordan' },
    { key: 'vaseeka', name: 'Vaseeka Bala',    role: 'Our website designer',              img: '/images/vaseeka.jpg', external: 'https://www.linkedin.com' },
];

function Team() {
    return (
        <div>
            <SectionHeader title="Meet Our Team of Experts" image="/images/team.jpg" />

            {/* container py-5 centres and pads content */}
            <div className="container py-5">
                {/* align-items-stretch makes all col-auto divs the same height */}
                <div className="row justify-content-center g-4 align-items-stretch">
                    {MEMBERS.map((member) => (
                        // d-flex on col so the card inside can use h-100
                        <div key={member.key} className="col-auto d-flex">
                            <div className="team-card d-flex flex-column align-items-center text-center p-3 h-100">

                                <img src={member.img} alt={member.name} className="team-card-img mb-3" />
                                <h5 className="fw-bold mb-1 team-card-name">{member.name}</h5>
                                <p className="text-muted mb-3 team-card-role">{member.role}</p>

                                {member.linkTo ? (
                                    <Link to={member.linkTo} className="btn-salmon mt-auto">Learn More</Link>
                                ) : (
                                    <a href={member.external} target="_blank" rel="noreferrer" className="btn-salmon mt-auto">Learn More</a>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;