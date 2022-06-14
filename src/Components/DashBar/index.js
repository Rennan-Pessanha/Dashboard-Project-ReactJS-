import React, { Component } from 'react'
import Chart from 'react-apexcharts'


class DashBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
            dataLabels: {
                enabled: false
              },
            xaxis: {
                categories: ['Brazil', 'Argentina', 'United Kingdom', 'Noruegua', 'Tailândia', 'Angola', 'Japão',
                  'Egito', 'Chile', 'Colômbia'
            ]},
        }
    };


}

render() {
    return(
    <Chart 
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height={260}
        width="200%"
    />
    );
};
}


export default DashBar