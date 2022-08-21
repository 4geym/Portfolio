import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className='nav'>
      <div className="head">
      <Link to='/Portfolio'>Voloshyn</Link>
      </div>
      
      <div className="links">
        <Link to='/Projects'>Projects</Link>
        <Link to='/Links'>Links</Link>
        <Link to='/Biography'>Biography</Link>
      </div>
    </div>
  )
}
