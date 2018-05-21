google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
        ['City', '2017 Estimates', ],
        ['Natural Gas', 8175000],
        ['Motor Gasoline', 3792000],
        ['Coal', 2695000],
        ['Nuclear Electric Power', 2099000],
        ['Biomass', 1526000]
      ]);

  var options = {
    title: 'ANNUAL RENEWABLE ENERGY PRODUCTION IN FLORIDA',
    backgroundColor: '#e1e1e1',
    chartArea: {
      width: '40%'
    },
    hAxis: {
      minValue: 0,
      title: 'TRILLION BTU',
      titleTextStyle: {
        color: 'black'
      }
    },

    vAxis: {
      title: 'RENEWABLE ENERGY',
      titleTextStyle: {
        color: 'black'
      }
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}




google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
          ['Task', 'Usage'],
          ['Air Conditiioning', 27],
          ['Water Heating', 14],
          ['Appliances, electronics, lighting', 50],
          ['Space Heating', 9],

        ]);

  var options = {
    title: 'Total Electricity Consumption'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
