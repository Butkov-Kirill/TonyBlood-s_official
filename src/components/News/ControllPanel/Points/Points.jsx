import React from 'react'

const Points = (props) => {

  const renderPoint = (index) => {
    if (props.index==index){
      return <div style={{background: '#fff'}} className="point" key={`point_index_${index}_${Date.now()}`}></div>
    } else {
      return <div className="point" key={`point_index_${index}_${Date.now()}`}></div>
    }
  }

  return (
    <div className="points">
        {props.length.map((img, index) => 
          renderPoint(index)
        )}
    </div>
  )
}

export default Points
