import React from 'react'
import { useParams } from 'react-router-dom'
import { teams } from '../utils/constants'

const TeamInfo = () => {
    const {name}=useParams()
    const teamMemberInfo=teams.find((item)=>item.name===name)
  return (
    <div className="teams-info-wrapper">
    <div className="container">
        <div className="teams-info">
            <header>
                <h3>{name}</h3>
            </header>
            <div className="teams-info-content-wrapper">
                <div className="teams-info-content">
                    <div className="content">
                        <div className="teams-info-img">
                            <img
                                src={teamMemberInfo.imgpath}
                                alt="research"
                            />
                        </div>
                        <div className="teams-info-content">
                            <h5>{teamMemberInfo.name}</h5>
                            <p>{teamMemberInfo.studies}</p>
                            <p>Phone: {teamMemberInfo.mobile}</p>
                            <p>Email: {teamMemberInfo.email}</p>
                            {teamMemberInfo.colleges.map((college)=>(
                                <p>{college}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TeamInfo
