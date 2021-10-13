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
        <div className="container-fluid d-flex ">
          <a className="navbar-brand" href="#">Wonder Text</a>

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}


            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => {
                { props.toggleDarkMode(); }
              }} />
              <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} for="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
            </div>
          </div>
        {/* </div> */}
      </nav>

    </>
  )
}

export default Navbar




