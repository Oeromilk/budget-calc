var React = require("react");

var BudgetInput = require("./budget-input.jsx").BudgetInput;

var HomeContainer = React.createClass({
  render: function(){
    return (
      <div className="container">
        <h1>Calc Yo Budge</h1>
        <BudgetInput/>
      </div>
    )
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
