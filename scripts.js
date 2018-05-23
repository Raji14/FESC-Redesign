google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
        ['Year', 'Billion Btu', {
      role: 'style'
    }],
        ['2015', 234192, 'fill-color: #2e64c6'],
        ['2014', 226863, 'fill-color: #2e64c6'],
        ['2013', 229666, 'fill-color: #2e64c6'],
        ['2012', 220020, 'fill-color: #2e64c6'],
        ['2011', 222956, 'fill-color: #2e64c6'],
        ['2010', 223518, 'fill-color: #2e64c6'],
        ['2009', 213642, 'fill-color: #2e64c6'],
        ['2008', 195232, 'fill-color: #2e64c6'],
        ['2007', 190489, 'fill-color: #2e64c6'],
        ['2006', 185564, 'fill-color: #2e64c6'],
        ['2005', 183175, 'fill-color: #2e64c6'],
        ['2004', 179462, 'fill-color: #2e64c6'],
        ['2003', 188473, 'fill-color: #2e64c6'],
        ['2002', 174327, 'fill-color: #2e64c6'],
        ['2001', 158038, 'fill-color: #2e64c6'],
        ['2000', 194952, 'fill-color: #2e64c6'],
        ['1999', 204114, 'fill-color: #2e64c6'],
        ['1998', 205485, 'fill-color: #2e64c6'],
        ['1997', 231308, 'fill-color: #2e64c6'],
        ['1996', 240343, 'fill-color: #2e64c6'],
        ['1995', 220211, 'fill-color: #2e64c6'],
        ['1994', 215563, 'fill-color: #2e64c6'],
        ['1993', 217028, 'fill-color: #2e64c6'],
        ['1992', 230779, 'fill-color: #2e64c6'],
        ['1991', 212955, 'fill-color: #2e64c6'],
        ['1990', 198986, 'fill-color: #2e64c6'],
        ['1989', 232261, 'fill-color: #2e64c6'],
        ['1988', 113802, 'fill-color: #2e64c6'],
        ['1987', 107606, 'fill-color: #2e64c6'],
        ['1986', 116356, 'fill-color: #2e64c6'],
        ['1985', 110698, 'fill-color: #2e64c6'],
        ['1984', 108740, 'fill-color: #2e64c6'],
        ['1983', 91705, 'fill-color: #2e64c6'],
        ['1982', 104674, 'fill-color: #2e64c6'],
        ['1981', 83117, 'fill-color: #2e64c6'],
        ['1980', 90049, 'fill-color: #2e64c6'],
        ['1979', 69419, 'fill-color: #2e64c6'],
        ['1978', 65357, 'fill-color: #2e64c6'],
        ['1977', 59953, 'fill-color: #2e64c6'],
        ['1976', 56507, 'fill-color: #2e64c6'],
        ['1975', 50007, 'fill-color: #2e64c6'],
        ['1974', 52429, 'fill-color: #2e64c6'],
        ['1973', 56250, 'fill-color: #2e64c6'],
        ['1972', 54389, 'fill-color: #2e64c6'],
        ['1971', 49968, 'fill-color: #2e64c6'],
        ['1970', 51035, 'fill-color: #2e64c6'],
        ['1969', 51489, 'fill-color: #2e64c6']
      ]);

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
      title: 'TRILLION BTU',
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
}



google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
      ['Year', 'Billion Btu'],
      ['1960', 57344],
      ['1961', 62705],
      ['1962', 71216],
      ['1963', 78258],
      ['1964', 87016],
      ['1965', 95878],
      ['1966', 108610],
      ['1967', 119314],
      ['1968', 135509],
      ['1969', 153032],
      ['1970', 171346],
      ['1971', 188564],
      ['1972', 209665],
      ['1973', 237104],
      ['1974', 235482],
      ['1975', 242096],
      ['1976', 252408],
      ['1977', 270767],
      ['1978', 289031],
      ['1979', 295551],
      ['1980', 309694],
      ['1981', 317921],
      ['1982', 315744],
      ['1983', 329216],
      ['1984', 353246],
      ['1985', 379307],
      ['1986', 398095],
      ['1987', 417862],
      ['1988', 444382],
      ['1989', 472473],
      ['1990', 489741],
      ['1991', 499299],
      ['1992', 501598],
      ['1993', 521176],
      ['1994', 544365],
      ['1995', 571483],
      ['1996', 586291],
      ['1997', 597240],
      ['1998', 639254],
      ['1999', 638966],
      ['2000', 668216],
      ['2001', 684966],
      ['2002', 718136],
      ['2003', 741696],
      ['2004', 745810],
      ['2005', 767622],
      ['2006', 778685],
      ['2007', 788461],
      ['2008', 771702],
      ['2009', 766848],
      ['2010', 788887],
      ['2011', 768009],
      ['2012', 752941],
      ['2013', 757189],
      ['2014', 771379],
      ['2015', 803865],
      ['2016', 804283]
            ]);

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
}
