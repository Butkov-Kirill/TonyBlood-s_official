import React, {useRef, useState} from 'react'
import './Member.style.scss'
import '../../media/images/MemberBackground.jpg';
import '../../media/images/MemberBackgroundBack.jpg';
import telegram_svg from '../../media/images/Buttons/tg.svg'

let deg = 180;

const Member = (props) => {

    const cardRef = useRef();
    const backCardRef = useRef();
    const [rotated, setRotated] = useState(false);

    const rotateCard = () => {
        let style = `transform: rotateX(0deg) rotateY(${rotated ? 5 : deg}deg)`;
        cardRef.current.style=style;
        style = `transform: rotateX(0deg) rotateY(${rotated ? deg*-1 : 5}deg)`;
        backCardRef.current.style=style;
        setRotated(!rotated);
    }

    const goToTelegram = (href) => {
        if (href!='null'){
            let newWindow = window.open();
            newWindow.opener = null;
            newWindow.location = href;
        } else {
            alert('Контакта нет');
        }
    }

  return (
        <div className="card" onClick={rotateCard}>
            <div className="member" ref={cardRef} key={`member_index_${props.index}`} >
                <div className="background"></div>
                <button className="tg_button" onClick={()=>goToTelegram(props.member.tg)}><img src={telegram_svg} alt="telegram" /></button>
                <img src={props.member.avatar} alt="avatar" className="avatar" />
                <div className="info_member">
                    <h1 className="name">{props.member.name}</h1>
                    <p className="status">{props.member.status}</p>
                    <p className="post_member">{props.member.post}</p>
                </div>
            </div>
            <div className="back_card" ref={backCardRef}>
                {props.member.dossier}
                <div className="background"></div>
            </div>
        </div>
  )
}

export default Member
