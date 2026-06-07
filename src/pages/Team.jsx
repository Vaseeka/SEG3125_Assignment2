import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import './Team.css';

// ----- Team member data -----
// To update a team member, edit their entry here
// linkTo: routes to an internal profile page (/team/naomi, /team/jordan)
// external: opens a URL in a new tab (used for portfolio)
const MEMBERS = [
    {
        key:    'naomi',
        name:   'Naomi Courtoise',
        role:   'Our feminine hairstyle specialist',
        img:    '/images/naomi.jpg',
        linkTo: '/team/naomi',
    },
    {
        key:    'jordan',
        name:   'Jordan Hogger',
        role:   'Our male hairstyle specialist',
        img:    '/images/jordan.png',
        linkTo: '/team/jordan',
    },
    {
        key:      'vaseeka',
        name:     'Vaseeka Bala',
        role:     'Our website designer',
        img:      '/images/vaseeka.jpg',
        // External link -- opens portfolio in a new tab instead of routing internally
        external: 'https://vaseeka-portfolio.netlify.app/',
    },
];

// ----- Team -----
// Displays three equal-height cards for each team member
// Naomi and Jordan route to internal profile pages on "Learn More"
// Vaseeka opens my portfolio website
function Team() {
    return (
        <div>
            {/* Banner image with frosted title -- uses team.jpg */}
            <SectionHeader title="Meet Our Team of Experts" image="/images/team.jpg" />

            <div className="container py-5">
                {/* ----- Team card grid -----
                    align-items-stretch + d-flex on each col forces all cards to the same height
                    justify-content-center keeps the row centred regardless of how many cards there are */}
                <div className="row justify-content-center g-4 align-items-stretch">
                    {MEMBERS.map((member) => (
                        // col-auto d-flex so the card inside can use h-100 for equal heights
                        <div key={member.key} className="col-auto d-flex">
                            <div className="team-card d-flex flex-column align-items-center text-center p-3 h-100">

                                <img src={member.img} alt={member.name} className="team-card-img mb-3" />
                                <h5 className="fw-bold mb-1 team-card-name">{member.name}</h5>
                                <p className="text-muted mb-3 team-card-role">{member.role}</p>

                                {/* mt-auto pushes button to the bottom of every card regardless of text length */}
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