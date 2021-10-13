import React, { useState } from 'react'
import Alert from './Alert';

const Navbar = (props) => {
  const [alert, setAlert] = useState(null);

  // const showAlert = (msg, type) => {
  //   console.log("called am i");
  //   setAlert({ msg, type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500)
  // }

  return (
    <>
      <Alert content={alert} />
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Wonder Text</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => {
                { props.toggleDarkMode();  }
              }} />
              <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} for="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
            </div>
          </div>
        </div>
      </nav>

    
    </>
  )
}

export default Navbar
