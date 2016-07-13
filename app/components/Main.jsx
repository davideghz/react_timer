var React = require('react');
var Nav = require('Nav');

// don't use this.props.children because props is passed as
// an argument of the arrow function

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
