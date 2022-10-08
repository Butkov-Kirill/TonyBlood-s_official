import React, {useRef} from 'react'
import styles from './ButtonList.module.scss'

const ButtonList = ({children, ...props}) => {

    const click = () => {
        if (props.currentTrack!==props.index){
            props.setTrack(props.index);
        }
    }

  return (
    <div>
        {props.currentTrack==props.index
            ?
            <button style={{color: '#fff'}} onClick={click} className={styles.button_list}>{children}</button>
            :
            <button onClick={click} className={styles.button_list}>{children}</button>
        }
    </div>
  )
}

export default ButtonList
