import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <div className="nav">
        <div className="profile-section">
          <img src="profile_icon.jpg" alt="Profile" className="profile-pic" />
          <span className="username">Username</span>
        </div>
        <Nav vertical>
          <NavItem>
            <NavLink tag={Link} to="/" activeClassName="active">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/create-assessment" activeClassName="active">
              Create Assessment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/access-management" activeClassName="active">
              Access Management
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;