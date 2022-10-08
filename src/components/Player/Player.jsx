import React, {useState, useRef, useEffect} from 'react'
import './Player.style.scss'
import PlayBtn from '../../media/images/Buttons/PlayTrack.svg'
import PauseBtn from '../../media/images/Buttons/PauseTrack.svg'
import NextBtn from '../../media/images/Buttons/NextTrack.svg'
import PreviousBtn from '../../media/images/Buttons/PreviousTrack.svg'
import ButtonList from '../ButtonList/ButtonList'
import ArrowBtn from '../../media/images/Buttons/Arrow.svg';

const Player = (props) => {
    const audioRef = React.createRef();
    const progressRef = React.createRef();
    const progressBarRef = useRef();
    const tracksListRef = useRef();

    const [duration, setDuration] = useState(5);
    const [currentTime, setCurrentTime] = useState(0.01);
    const [ActiveBtn, setActiveBtn] = useState(PauseBtn);
    const [isPlay, setIsPlay] = useState(true);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackListIsVisible, setTrackListIsVisible] = useState(false);

    const ClosePlayer = () => {
        props.ClosePlayer();
    }

    const getStrokeTime = (time) => {
        let minuts = `${Math.floor(time/60)}`, seconds = `${Math.floor(time % 60)}`;
        if (Math.floor(time / 60)<10){
            minuts = `0${Math.floor(time/60)}`;
        }
        if (Math.floor(time % 60)<10){
            seconds = `0${Math.floor(time % 60)}`;
        }
        return `${minuts} : ${seconds}`;
    }

    const getCurrentTime = () => {
        return getStrokeTime(currentTime);
    }

    const getDurationTime = () => {
        return getStrokeTime(duration);
    }

    const ClickActiveButton = () => {
        if (isPlay){
            setActiveBtn(PlayBtn);
            audioRef.current.pause();
        } else {
            setActiveBtn(PauseBtn);
            audioRef.current.play();
        }
        setIsPlay(!isPlay);
        getDurationTime();
        getCurrentTime();
    }

    const CLickNextButton = () => {
        if (currentTrack<props.Album.tracks.length-1){
            setCurrentTrack(currentTrack+1);
        } else {
            setCurrentTrack(0);
        }
        if (!isPlay){
            ClickActiveButton();
        }
    }

    const CLickPreviousButton = () => {
        if (currentTrack>0){
            setCurrentTrack(currentTrack-1);
        } else {
            setCurrentTrack(props.Album.tracks.length-1);
        }
        if (!isPlay){
            ClickActiveButton();
        }
    }

    const OnTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
        progressRef.current.style.width=`${currentTime/duration*100}%`;
    }

    useEffect(()=>{
        if (props.Album.tracks.length<2 && currentTime>=duration-1){
            setCurrentTime(0);
            audioRef.current.play();
        }
        if (currentTime>=duration-1){
            setCurrentTime(0);
            CLickNextButton();
        }
    }, [currentTime]);

    const SetTrack = (index) => {
        setCurrentTrack(index);
        if (!isPlay){
            ClickActiveButton();
        }
        OnTimeUpdate();
    }

    const ClickProgressBar = (e) => {
        const width = progressBarRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        audioRef.current.currentTime = ((offset / width) * 100)/100*duration;
        OnTimeUpdate();
    }

    const ClickTrackListActionButton = () => {
        if (trackListIsVisible){
            tracksListRef.current.style.bottom='-100%';
        } else {
            tracksListRef.current.style.bottom='0';
        }
        setTrackListIsVisible(!trackListIsVisible);
    }

  return (
    <div className="player">
        <audio autoPlay={true} ref={audioRef} src={props.Album.tracks[currentTrack].audio} onTimeUpdate={OnTimeUpdate}></audio>
        <div className="background" onClick={ClosePlayer}></div>        
        <div className="player_popup">
            <div className="background_popup">
                <img src={props.Album.poster} alt="background_image" className="background_image" />
                <div className="blur"></div>
            </div>
            <div className="controlls">
                <h4 className="name_album">{props.Album.name}</h4>
                <img src={props.Album.poster} alt="poster" className="poster" />
                <h1 className="name_track">{`${props.Album.tracks[currentTrack].name}`}</h1>
                <h4 className="author">{props.Album.tracks[currentTrack].author}</h4>
                <div className="progress_menu">
                    <div className="time">
                        <h4 className="_time">{getCurrentTime()}</h4>
                        <h4 className="_time">{getDurationTime()}</h4>
                    </div>
                    <div className="progress_bar" onClick={ClickProgressBar} ref={progressBarRef}>
                        <div className="progress" ref={progressRef}></div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={CLickPreviousButton} ><img src={PreviousBtn} alt="btn" /></button>
                    <button onClick={ClickActiveButton}><img src={ActiveBtn} alt="btn" /></button>
                    <button onClick={CLickNextButton} ><img src={NextBtn} alt="btn" /></button>
                </div>
            </div>
            <div className="liner"></div>
            <div className="arrow_up"><img onClick={ClickTrackListActionButton} src={ArrowBtn} alt="arrow" /></div>
            <div className="tracks_list" ref={tracksListRef}>
                <img onClick={ClickTrackListActionButton} src={ArrowBtn} alt="arrow" />
                {props.Album.tracks.map((track, index) => 
                    <ButtonList setTrack={SetTrack} currentTrack={currentTrack} index={index}>{`${index+1}. ${track.name}`}</ButtonList>
                )}
            </div>
        </div>
    </div>
  )
}

export default Player
