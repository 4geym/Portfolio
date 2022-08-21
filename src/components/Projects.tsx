export function Projects() {
  const carousel = require('../img/carousel.gif')
  const nicknameGenerator = require('../img/Nickname generator.gif')
  const backgroundChange = require('../img/Background change on click.gif')
  const noPhoto = require('../img/noPhoto.jpg')
  

  return (
    <>
      <h1 id="projectsText">Projects</h1>
      <p id="listP">List of my projects</p>

      <hr />

      <div className="containerList">
        <div className="contProject">
          <img id="carousel" src={carousel}/>
          <a href="https://github.com/4geym/Carousel" target="_blank" rel="noopener noreferrer">Carousel</a>
        </div>
        <div className="contProject">
          <img id="carousel" src={nicknameGenerator}/>
          <a href="https://github.com/4geym/Nickname-generator" target="_blank" rel="noopener noreferrer">Nickname generator</a>
        </div>
      </div>
      <div className="containerList">
        <div className="contProject">
          <img id="carousel" src={backgroundChange}/>
          <a href="https://github.com/4geym/random-background-color" target="_blank" rel="noopener noreferrer">Background change on click</a>
        </div>
        <div className="contProject">
          <img id="invalid" src={noPhoto}/>
          <a href="https://github.com/4geym/EpamProject_InternetProvider" target="_blank" rel="noopener noreferrer">EPAM project "Internet provider"</a>
        </div>
      </div>
    </>
  )
}
