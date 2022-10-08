import React from 'react'
import {Members} from '../../data/MembersTheam.js'
import Member from '../Member/Member.jsx'
import './Theam.style.scss'

const Theam = () => {
  return (
    <div className="theam">
        <div className="background-theam"></div>
        <h1 className="title_page">Команда</h1>
        <div className="members">
            {Members.map((member, index)=>
                (
                    <Member key={`member_index_${index}`} index={index} member={member}></Member>
                )
            )}
        </div>
    </div>
  )
}

export default Theam
