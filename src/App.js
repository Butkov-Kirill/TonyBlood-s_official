import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import News from './components/News/News';
import Player from './components/Player/Player';
import ReleseList from './components/ReleseList/ReleseList';
import Theam from './components/Theam/Theam';
import Main from './components/Main/Main';
import Copyright from './components/Copyright/Copyright';

function App() {

  const [Album, setAlbum] = useState(null);
  const [page, setPage] = useState('releses')


  const OpenPlayer = (Album) => {
    setAlbum(Album);
  }

  const ClosePlayer = () => {
    setAlbum(null);
  }

  const renderPages = () => {
    switch (page){
      case 'main' :{
        return(
          <Main></Main>
        )
      }
      case 'releses':{
        return (
          <>
            <ReleseList OpenPlayer={OpenPlayer}/>
            {Album!=null ? <Player ClosePlayer={ClosePlayer} Album={Album} key='player'></Player>:<div key='null_player'></div>}
          </>
        )
      }
      case 'theam':{
        return (
          <Theam></Theam>
        )
      }
      case 'news':{
        return (
          <News></News>
        )
      }
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header setPage={setPage} renderPages={renderPages}/>
        {renderPages()}
      </div>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
