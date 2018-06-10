google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawEnergyProductionChart);
google.charts.setOnLoadCallback(drawElectricityChart);

function getData(seriesId, draw) {
  // Create a new request object
  let request = new XMLHttpRequest()
  // URL to contact goes here 
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=" + seriesId
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function () {
    let theActualData = JSON.parse(request.response).series[0].data
    draw(theActualData)
  }
  // Callback for when there's an error
  request.error = function (err) {
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}


function drawEnergyProductionChart() {
  getData("SEDS.REPRB.FL.A", function (freshData) {
    freshData.unshift(["Year", "Billion BTUs"])
    var data = google.visualization.arrayToDataTable(freshData);

    var options = {
      title: 'ANNUAL RENEWABLE ENERGY PRODUCTION IN FLORIDA',
      backgroundColor: '#e1e1e1',
      legend: {
        position: 'bottom',
        maxLines: 3
      },
      chartArea: {
        width: '70%'

      },
      hAxis: {
        minValue: 0,
        title: 'BILLION BTU',
        titleTextStyle: {
          color: 'black'
        },
        textStyle: {
          fontName: 'Roboto',
          fontSize: 12,
        },
      },

      vAxis: {
        title: 'RENEWABLE ENERGY',
        titleTextStyle: {
          color: 'black'
        },
        textStyle: {
          fontName: 'Roboto',
          fontSize: 11,
        },
      }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  })
}

function drawElectricityChart() {
  getData("SEDS.TETCB.FL.A", function (freshData) {
    freshData.unshift(["Year", "Billion BTUs"])
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable(freshData);

    var options = {
      title: 'ELECTRICITY CONSUMPTION IN FLORIDA',
      backgroundColor: '#e1e1e1',
      legend: {
        position: 'bottom',
        maxLines: 3
      },
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('container'));
    chart.draw(data, options);
  })
}
