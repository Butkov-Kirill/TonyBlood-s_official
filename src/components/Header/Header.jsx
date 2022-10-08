import React, { useEffect, useReducer } from 'react'
import Btn from '../UI/Button/Btn'
import './Header.style.scss'

const reducerPage = (page, action) => {
  switch (action.type){
    case 'main':
      return page=action.type;
    case 'releses':
      return page=action.type;
    case 'theam':
      return page=action.type;
    case 'news':
      return page=action.type;
    default:
      throw new Error();
  }
}

const Header = (props) => {
  const [page, pageDispatch] = useReducer(reducerPage, 'main');

  const clickButton = (type) => {
    pageDispatch({type: type});
  }

  useEffect(()=>{
    props.setPage(page);
    props.renderPages();
  }, [page]);

  return (
    <div className="header">
      <img src={require('../../media/images/logo.png')} alt='logo' className='logo'></img>
            {/*<div className="buttons">
              <Btn onClick={()=>{clickButton('main')}}>Релизы</Btn>
              <Btn onClick={()=>{clickButton('releses')}}>Релизы</Btn>
              <Btn onClick={()=>{clickButton('theam')}}>Команда</Btn>
              <Btn onClick={()=>{clickButton('news')}}>Новости</Btn>
            </div>*/}
      <div className="buttons">
        <button onClick={()=>{clickButton('main')}}> Главная</button>
        <button onClick={()=>{clickButton('releses')}}> Релизы</button>
        <button onClick={()=>{clickButton('theam')}}> Команда</button>
        <button onClick={()=>{clickButton('news')}}> Новости</button>
      </div>
    </div>
  )
}

export default Header
