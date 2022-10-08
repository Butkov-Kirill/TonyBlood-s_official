import React from 'react'
import './Main.style.scss'
import '../../media/images/background.png';

const Main = () => {
  return (
    <>
    <div className='Main'>
      <div className="background"></div>
      <div className="sides">
          <div className="side left">
            <div className="name">
                <h1 className="name-site">FreshBlood's</h1>
                <p>Family</p>
            </div>
            <div className="text_p">
                <p className="text">
                    FreshBlood's FAMILY - творческое объединение музыкантов, 
                    исполнителей и творчески одаренных людей. 
                </p>
                <p className="text">
                    Совместное творчество, пиар, обмен опытом и просто общение по душам.
                </p>
                <p className="text">
                    Присоединяйся, наши двери всегда открыты для тебя!
                </p>
            </div>
          </div>
          <div className="side">
          </div>
      </div>
    </div>
    <div className="about_us">
        <div className="background"></div>
        <h1 className="title_page">О НАС</h1>
        <div className="sides">  
            <div className="side">
                
            </div>
            <div className="side">
                <p>FreshBlood’s Family - это первое, поэтому и самое больше, творческое объединение в ЛДНР. 
                    В наше объединеие входят исполнители, битмейкеры, музыканты со всего ЛДНР
                     и не только.</p>
                <img src={require('../../media/images/logo.png')} alt="logo" className='logo'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
