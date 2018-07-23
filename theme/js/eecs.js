Highcharts.chart('average-enrollment-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Average Course Enrollment at UofM '
    },
    subtitle: {
        text: 'Across 2016 - 2017'
    },
    xAxis: {
        categories: ['ECON', 'PSYCH', 'STATS', 'MATH', 'DANCE', 'EECS', 'BIOLOGY', 'ASTRO', 'CHEM', 'ACC', 'BCOM'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Students Who Completed Course'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            'name': 'Median',
            'data': [56.375, 63.0, 61.666666666666664, 44.32857142857142, 47.0, {
                'y': 59.75,
                'color': '#f44336'
            }, 73.0, 102.28571428571429, 48.542857142857144, 90.0, 316.75]
            ,
        },
        {
            'name': 'Mean',
            'data': [101.35145046524357, 109.44584795321637, 110.08128908128909, 110.20251322751322, 123.66666666666667, {
                'y': 124.39917695473251,
                'color': 'teal'
            }, 139.47587045570916, 143.37294372294372, 164.42616213151928, 276.92857142857144, 336.1875]
            ,

        }
    ]


});

