import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
            href="https://www.linkedin.com/in/dhinakar-sellamuthu/"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
            href="https://github.com/DhinakarDhina"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
            href ="https://x.com/DhinakarsD46945?t=bSetsU-rTT9dVT6WDX1Gtg&s=09"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
