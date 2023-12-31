import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.css']
})
export class BarChart1Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "",
          data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38]
        },
      ],
      chart: {
        type: "bar",
        height: 140,
		zoom: {
				enabled: false
		},
		sparkline: {
			enabled: true
		}	
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded"
        }
      },
	  colors: [
        "#FFCE78",
      ],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        width: 2,
        colors: ["transparent"]
      },
	  legend: {
		  show:false,
	  },
	  grid: {
		  show:false,
	  },
      xaxis: {
		 labels: {
          show: false,
		 },
		 axisBorder: {
          show: false,
		 },
		 axisTicks: {
          show: false,
		},
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
	  yaxis: {
		show: false,
	  },
      fill: {
        opacity: 1
      },

    };
  }

  ngOnInit(): void {
  }

}
