import React from "react";
import { teams } from "../utils/constants";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

const Team = () => {
  const principalMember=teams.find((item)=>item.isPrincipal===true)
  console.log(principalMember)
    return (
        <div className="teams-wrapper">
            <div className="container">
                <div className="teams">
                    <header>
                        <h3>TEAMS</h3>
                    </header>
                    <div className="teams-content-wrapper">
                        <div className="teams-content">
                            <div className="top-heading">
                                Principal Investigator
                            </div>
                            <div className="content">
                                <div className="teams-img">
                                    <img
                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="research"
                                    />
                                </div>
                                <div className="teams-content">
                                    <h5><Link to={`/team/${principalMember.name}`}>{principalMember.name}</Link></h5>
                                    <p>{principalMember.studies}</p>
                                    <p>Phone: {principalMember.mobile}</p>
                                    <p>Email:  {principalMember.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-about-heading">
                            Current Ph.D. students
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Undergraduate & Master Student Researchers
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">
                            Visiting Students and Scholars
                        </div>
                        <div className="cards-wrapper">
                            {teams.map((team, index) => (
                                <TeamCard item={team} key={index} />
                            ))}
                        </div>
                        <div className="info-about-heading">Lab Alumni</div>
                        <div className="cards-wrapper">
                            <div className="aluminis-card">
                                <h4>Ph.D</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name},{team.to}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Master and Undergraduate</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.to}, {team.designation}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aluminis-card">
                                <h4>Visiting Students and Scholars</h4>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li key={index}>
                                            {team.name}, {team.to}, {team?.colleges[0]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
