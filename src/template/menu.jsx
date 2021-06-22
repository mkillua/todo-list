import React from "react";

export default (props) => (
  <nav className="navar navbar-inverse bg-invers">
    <div className="container">
      <div className="nav-bar-header">
        <a href="#" className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
      </div>

      <div id="navbar" className="navbar-collpase collpase">
        <ul className="nav navbar-nav">
          <li>
            <a href="#/todos">Tarefas</a>
          </li>
          <li>
            <a href="#/about">Sobre</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
