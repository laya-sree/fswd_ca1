import React from 'react'

function TeamMemberList({member}) {
  return (
    <div className=' border m-5 p-6'>
        <h1>{member.name}</h1>
        <h2>{member.Job}</h2>
      
    </div>
  )
}

export default TeamMemberList
