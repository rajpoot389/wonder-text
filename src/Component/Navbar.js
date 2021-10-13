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
     

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>













    
    </>
  )
}

export default Navbar







// <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
// <div className="container-fluid">
//   <a className="navbar-brand" href="#">Wonder Text</a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//     </ul>

//     <div className="form-check form-switch">
//       <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => {
//         { props.toggleDarkMode();  }
//       }} />
//       <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} for="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
//     </div>
//   </div>
// </div>
// </nav>