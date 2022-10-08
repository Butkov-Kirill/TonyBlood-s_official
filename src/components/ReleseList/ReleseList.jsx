import React from 'react'
import './ReleseList.style.scss'
import {Releses} from '../../data/ReleseData.js';
import Relese from '../Relese/Relese';
import '../../media/images/background.png'

const ReleseList = (props) => {
  return (
   <div className="relese_list">
        <div className="background"></div>
       <h1 className="title_page">Релизы</h1>
       <div className="releses">
        {Releses.map((relese, index) =>
          <Relese Relese={relese.Relese} key={`relese_index_${index}`}></Relese>
        )}
       </div>
   </div>
  )
}

export default ReleseList
