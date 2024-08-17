// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css' // Ensure the CSS is imported here

const Header = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
