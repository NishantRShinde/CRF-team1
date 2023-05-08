import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { SeriesOptionsType } from 'highcharts';
import { _ParseAST } from '@angular/compiler';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  products: any;
  productNames: string[] = [];
  xLabels: string[] = [];
  lineChart: Chart = new Chart();
  previewBeerDataSeries: SeriesOptionsType[] = [];
  actualBeerDataSeries: SeriesOptionsType[] = [];
  chartOptions: any;

  constructor(
    public shimmerService: ShimmerEffectService,
    public http: HttpClient
  ) {
    this.http
      .get('../../assets/jsonfiles/line-chart-data.json')
      .subscribe((res) => {
        this.products = res;
        this.productNames = Object.keys(this.products);

        let grayShades = 0;
        let previewData = 1;
        for (let owner of this.products.beer) {
          let actualLineData: SeriesOptionsType = {
            name: '',
            type: 'line',
            data: [],
          };
          let previewLineData: SeriesOptionsType = {
            name: '',
            type: 'line',
            data: [],
            color: '',
          };

          let name = 'BEER|' + owner.company.toUpperCase();
          previewLineData.name = name;
          actualLineData.name = name;

          previewLineData.color = `rgb(${110 + grayShades}, ${
            110 + grayShades
          }, ${110 + grayShades})`;

          for (let intervalSale of owner.revenueOfAWeekInterval) {
            actualLineData.data!.push(intervalSale.sales);
            previewLineData.data!.push(previewData);
          }
          this.previewBeerDataSeries.push(previewLineData);
          this.actualBeerDataSeries.push(actualLineData);
          grayShades += 10;
          if (grayShades === 120) {
            grayShades = 0;
          }
          previewData = 1.5 * previewData;
        }

        for (let xlabel of this.products.beer[0].revenueOfAWeekInterval) {
          this.xLabels.push('1w/e ' + xlabel.date);
        }

        this.chartOptions = {
          chart: {
            type: 'line',
          },
          credits: {
            enabled: false,
          },
          title: {
            text: '',
          },
          xAxis: {
            categories: this.xLabels,
            lineWidth: 0,
          },
          yAxis: {
            title: {
              text: `<b style="color: #2f2f2f; font-size: 15px;">$</b>`,
            },
            gridLineWidth: 0,
            labels: {
              formatter: function () {
                return '##';
              },
            },
          },
          series: this.previewBeerDataSeries,
          tooltip: {
            formatter: function () {
              return '##';
            },
          },
          plotOptions: {
            line: {
              lineWidth: 1.5,
            },
          },
        };
        this.lineChart = new Chart(this.chartOptions);
      });
  }

  renderLineChart(): void {
    this.chartOptions.series = this.actualBeerDataSeries;
    this.chartOptions.yAxis.labels.formatter = function () {
      return '$' + this.value;
    };
    this.lineChart = new Chart(this.chartOptions);
  }
}
