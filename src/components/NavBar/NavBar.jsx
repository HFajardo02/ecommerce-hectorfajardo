const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            {/* <img src="../../images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="Hot Wheels" /> */}
            <a className="navbar-brand" href="#">Hot Wheels</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Autos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Trucks</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Clasicos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Super Mario Bros</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default NavBar