export function Links() {
  const telega = require('../img/telega.png')
  const steam = require('../img/steam.png')
  const github = require('../img/github.png')
  const linked = require('../img/linked.png')
  const email = require('../img/email.png')

  return (
    <>
      <h1 id="linksText">Links</h1>
      <p id="linkP">How to contact me. Where to find me.</p>

      <hr />

      <p id="social">Social networks</p>
      <div className="containerSocials">
        <a href="https://www.linkedin.com/in/dmytro-voloshyn000/" target="_blank" rel="noopener noreferrer"><img id="soc" src={linked}/></a>
        <a href="https://t.me/mr4game" target="_blank" rel="noopener noreferrer"><img id="soc" src={telega}/></a>
        <a title="voloshind000@gmail.com" href="mailto: voloshind000@gmail.com" target="_blank" rel="noopener noreferrer"><img id="soc" src={email}/></a>
        <a href="https://steamcommunity.com/id/nicknameAD/" target="_blank" rel="noopener noreferrer"><img id="soc" src={steam}/></a>
      </div>

      <hr />

      <p id="code">The code</p>
      <div className="containerGit">
        <a href="https://github.com/4geym" target="_blank" rel="noopener noreferrer"><img id="soc" src={github}/></a>
      </div>
      
    </>
  )
}
