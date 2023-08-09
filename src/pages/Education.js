import React from "react";
import { educations } from "../utils/constants";
const Education = () => {
    return (
        <div className="education-wrapper">
            <div className="container">
                <div className="education">
                    <header>
                        <h3>Education</h3>
                    </header>
                    <div className="education-content">
                        <ul>
                            {educations.map((education) => (
                                <li className="education-list">
                                    <header className="">
                                        {education.title}
                                    </header>
                                    <div className="content">
                                        <ul>
                                            {education.points.map((item) => (
                                                <li>
                                                    <p>{item.text}</p>
                                                    <div className="images">
                                                        {item.imgpaths &&
                                                            item.imgpaths.map(
                                                                (imgpath) => (
                                                                    <img
                                                                        src={
                                                                            imgpath
                                                                        }
                                                                        alt="pic"
                                                                    />
                                                                )
                                                            )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
