import React from 'react';

const Navbar = () => {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
               <div className="container-fluid">
                   <a className="navbar-brand" href="/">JooyTools</a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       {/* <li className="nav-item">
                       <a className="nav-link" href="/reportes">Reports</a>
                       </li> */}
                       {/* <li className="nav-item">
                       <a className="nav-link" href="#">Pricing</a>
                       </li> */}
                       {/* <li className="nav-item">
                       <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                       </li> */}
                   </ul>
                   </div>
               </div>
               </nav>
            </div>
        );
};

export default Navbar;