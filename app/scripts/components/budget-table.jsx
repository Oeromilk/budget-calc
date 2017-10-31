var React = require("react");
//var DoughnutChart = require("react-chartjs").Doughnut;

var Budget = require("../models/budget.js").MonthlyBudget;


// var chartData = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255,99,132,1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//     }]
// };

var BudgetTable = React.createClass({
  render: function(){
    var budgetData = this.props.budgetData;
    var budgetTable = budgetData.map(budget =>{
      return (
        <tr key={budget.title}><td>{budget.title}</td><td>${budget.amount}</td></tr>
      )
    });
    var tableState = budgetData === [] ? false : true;
    var visibility = tableState === false ? "hidden" : "show";
    var containerClass = "row " + visibility;

    if (!budgetData || budgetData.length === 0){

    } else {
      var amount = budgetData[0].amount;
      for (let i = 1; i < budgetData.length; i++){
        amount = amount - budgetData[i].amount;
      }
    }

    return (
      <div className={containerClass}>
        <table className="table">
          <tbody>
            <tr><th>Title</th><th>Amount</th></tr>
            {budgetTable}
            <tr><td>Remaining Budget</td><td>${amount}</td></tr>
          </tbody>
        </table>

      </div>
    )
  }
});

module.exports = {
  BudgetTable: BudgetTable
};
