import React, {useEffect, useState} from 'react'
import './ControllPanel.style.scss'
import Points from './Points/Points';
import Arrow from '../../../media/images/Buttons/Arrow.svg'

const ControllPanel = (props) => {
  const [currentPoint, setCurrentPoint] = useState(0);

  useEffect(()=>{
    props.setImage(currentPoint);
  },[currentPoint]);

  const clickButton = (side) => {
    if (side=='left'){
      if (currentPoint>0){
        setCurrentPoint(currentPoint-1);
      } else {
        setCurrentPoint(props.length.length-1);
      }
    } else if (side=='right'){
      if (currentPoint<props.length.length-1){
        setCurrentPoint(currentPoint+1);
      } else {
        setCurrentPoint(0);
      }
    }
  }

  return (
    <div className="controll_panel">
      <button className='left_button' onClick={()=>clickButton('left')}><img src={Arrow}></img></button>
        <div className="points">
            <Points index={currentPoint} length={props.length} setImage={props.setImage}></Points>
        </div>
        <button className='right_button' onClick={()=>clickButton('right')}><img src={Arrow}></img></button>
    </div>
  )
}

export default ControllPanel
