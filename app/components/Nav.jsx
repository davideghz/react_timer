var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/countdown" activeClassName="active">Countdown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/davideghz" target="_blank">Davide Ghezzi</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
