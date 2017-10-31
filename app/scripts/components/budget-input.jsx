var React = require("react");

var BudgetTable = require("./budget-table.jsx").BudgetTable;
var Budget = require("../models/budget.js").MonthlyBudget;

var BudgetInput = React.createClass({
  getInitialState: function(){
    return {
      income: "",
      income2: "Monthly Income",
      intialStatement: "Insert your monthly income.",
      intialButtonStatement: "Add Income",
      budgetStatement: "Great, now add monthly bills.",
      budgetButtonStatement: "Add Bill",
      buttonCounter: 0,
      buttonText: "Add Income",
      headingText: "Insert your monthly income.",
      tableState: false,
      budgetData: []
    }
  },
  handleInput: function(e){
    this.setState({income: e.target.value});
  },
  handleInput2: function(e){
    this.setState({income2: e.target.value});
  },
  handleMoney: function(e){
    e.preventDefault();
    var buttonCounter = this.state.buttonCounter;
    var statement = this.state.intialStatement;
    var budgetDataInfo = this.state.budgetData;
    var line1 = this.state.income2;
    var line2 = this.state.income;
    var newData = {title: line1, amount: line2};
    buttonCounter ++;
    var buttonText = buttonCounter <= 0 ? this.state.intialButtonStatement : this.state.budgetButtonStatement;
    var headingText = buttonText === this.state.intialButtonStatement ? this.state.intialStatement : this.state.budgetStatement;
    budgetDataInfo.push(newData)
    this.setState(
      {buttonText: buttonText,
       headingText: headingText,
       budgetData: budgetDataInfo
     }
    );
  },
  render: function(){
    var buttonText = this.state.buttonText;
    var headingText = this.state.headingText;

    return (
      <div className="row">
      {headingText}
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="IncomeInput">Amount (in dollars)</label>
          <input onChange={this.handleInput2} type="text" className="form-control" id="IncomeInput2" value={this.state.income2} />
          <div className="input-group">
            <div className="input-group-addon">$</div>
            <input onChange={this.handleInput} type="text" className="form-control" id="IncomeInput" value={this.state.income} />
            <div className="input-group-addon">.00</div>
          </div>
        </div>
        <button onClick={this.handleMoney} className="btn btn-primary">{buttonText}</button>
      </form>
      <BudgetTable tableState={this.state.tableState} budgetData={this.state.budgetData} />
    </div>
    )
  }
});

module.exports = {
  BudgetInput: BudgetInput
};
