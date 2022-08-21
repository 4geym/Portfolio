import { Link } from "react-router-dom"

export function Portfolio() {
  const photo = require('../img/Photo.jpg')
  const done = require('../img/done.png')
  const star = require('../img/star.png')
  const reactITVDN = require('../img/ITVDNreact.png')
  const jsSolo = require('../img/SololearnJS.png')
  const git = require('../img/git.png')

  return (
    <>
      <div className="mainSector">
        <img className="photo" src={photo}/>
        <h1>Dmytro Voloshyn</h1>
        <p>Frontend/Javascript/React Developer</p>
      </div>

      <hr />

      <p className="A">About Me</p>
      <div className="aboutMe">
        <p>21 years old (11.20.2000), I live in Ukraine. I love doing front-end development. Modest, responsible, self-organized, sociable, stress-resistant, versatile, assiduous, handsome <Link to='/Biography'>...</Link></p>
      </div>

      <hr />

      <div className="headS">
        <p>What can I</p>
        <p>What do I want</p>
      </div>
      <div className="skills">
        <div>
          <div className="do">
            <img id="done" src={done}/>
            <p>HTML</p>
          </div>
          <div className="do">
            <img id="done" src={done}/>
            <p>CSS/SASS/SCSS</p>
          </div>
          <div className="do">
            <img id="done" src={done}/>
            <p>JavaScript</p>
          </div>
          <div className="do">
            <img id="done" src={done}/>
            <p>React</p>
          </div>
          <div className="do">
            <img id="done" src={done}/>
            <p>Website layout</p>
          </div>
          <div className="do">
            <img id="done" src={done}/>
            <p>Design</p>
          </div>
        </div>
        <div>
          <div className="want">
            <img id="star" src={star}/>
            <p>Build a house</p>
          </div>
          <div className="want">
            <img id="star" src={star}/>
            <p>Pump up the body in the hall</p>
          </div>
          <div className="want">
            <img id="star" src={star}/>
            <p>Make a million dollars</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="containerCertificates">
        <a href="https://testprovider.com/ru/search-certificate/tp91709635d" target="_blank" rel="noopener noreferrer"><img src={reactITVDN}/></a>
        <a href="https://testprovider.com/ru/search-certificate/TP43237122" target="_blank" rel="noopener noreferrer"><img src={git}/></a>
        <a href="https://www.sololearn.com/Certificate/CT-BDEWSNRX/png" target="_blank" rel="noopener noreferrer"><img src={jsSolo}/></a>
      </div>
    </>
  )
}
