var React = require('react');
var Nav = require('Nav');

// don't use this.props.children because props is passed as
// an argument of the arrow function

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
