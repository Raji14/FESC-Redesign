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
    title: 'Annual renewable energy production in Florida',
    chartArea: {
      width: '60%'
    },
    hAxis: {
      title: 'Trillion Btu',
      minValue: 0
    },

    vAxis: {
      title: 'Renewable Energy'
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
