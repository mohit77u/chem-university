import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({item}) => {
  return (
    <div className="team-card">
        <header>{item.name}</header>
        <div className='team-card-content'>
            <img src={item.imgpath} alt="" />
            <p> <Link to={`/team/${item.name}`}>{item.name}</Link>  {item.info}</p>
        </div>

    </div>
  )
}

export default TeamCard
