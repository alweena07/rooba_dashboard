import React from "react";
import Chart from "react-apexcharts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 50],
      options: {
        chart: {
          type: "donut",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#4cd7f6", "#E17CFD"],
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "78px",
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  label: "Direct",
                },
              },
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={300}
        />
      </div>
    );
  }
}

export default DonutChart;
