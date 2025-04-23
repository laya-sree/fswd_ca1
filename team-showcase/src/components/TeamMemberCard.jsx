import React from 'react'
import TeamMemberList from './TeamMemberList'

const Members = [
    {
        id:1,
        name:'Laya',
        Job:'software Developer'
    },
    {
        id:2,
        name:'Keerthan',
        Job:'ui/ux Developer'
    },
    {
        id:3,
        name:'Arav',
        Job:'web Developer'
    },
]

function TeamMemberCard() {
  return (
    <div className='flex justify-center'>
        <h3>Team Members</h3>
        {Members.map((member,i)=>(
            <TeamMemberList key={i} member={member}/>
        ))}
      
    </div>
  )
}

export default TeamMemberCard
