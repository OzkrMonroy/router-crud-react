import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/productos" className="navbar-brand">React CRUD & Routing</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/productos" className="nav-link" activeClassName="active" exact={true}>Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/productos/nuevo-producto" className="nav-link" activeClassName="active" exact={true}>Nuevo producto</NavLink>
        </li>
      </ul>
    </div>
  </nav>
 );
 
export default Header;