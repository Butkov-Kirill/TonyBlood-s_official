import React from 'react'
import './Relese.style.scss'
import BtnPlay from '../../media/images/Buttons/PlayTrack.svg'
import '../../media/images/ReleseBackground.jpg';

const Relese = (props) => {

  const OpenPlayer = () => {
    props.OpenPlayer(props.Album);
  }

  const OpenSmartLink = (link) => {
    let newWindow = window.open();
    newWindow.opener = null;
    newWindow.location = link;
  }

  return (
    <div className="relese">
        <div className="background-wrapper"></div>
        <div className="poster">
            <img src={props.Relese.poster} alt='img_poster' className='img_poster'/>
            <div className="hover_bg">
                <button><img src={BtnPlay} alt="btn" onClick={()=>{OpenSmartLink(props.Relese.smartLink)}}/></button>
            </div>
        </div>
        <div className="info_album">
          <h1 className="name_album">{props.Relese.name}</h1>
          <h4 className="tracks_count">{`Треков: ${props.Relese.tracks}`}</h4>
        </div>
    </div>
  )
}

export default Relese
