import React from 'react';
import { Nav } from 'react-bootstrap';

import './sidenavbar.css';

function SideNavBar() {
    return (
        <Nav variant="pills" className="flex-column">
            <hr className="text-secondary" />
            <Nav.Link href="#" className="text-white">
                <i className="bi bi-bar-chart-line"></i>
                <span className="ms-3 d-none d-sm-inline">Dash</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
                <i className="bi bi-table"></i>
                <span className="ms-3 d-none d-sm-inline">Data</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
                <i className="bi bi-briefcase"></i>
                <span className="ms-3 d-none d-sm-inline">Portfolio</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
                <i className="bi bi-activity"></i>
                <span className="ms-3 d-none d-sm-inline">Strategy</span>
            </Nav.Link>
        </Nav>
    );
}

export default SideNavBar;
