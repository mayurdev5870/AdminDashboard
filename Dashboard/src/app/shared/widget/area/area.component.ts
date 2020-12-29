import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  Highcharts = Highcharts;
  @Input() data = [];

  constructor() { }

  ngOnInit() {
  this.chartOptions= ({
    chart: {
        type: 'area'
    },
    title: {
        text: 'Charts for population growth'
    },
    subtitle: {
        text: 'Stats Analysis'
    },

    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
     
    credits:{
      enabled: false
    },

    exporting : {
      enabled: true
    },

    series: this.data
});

HC_exporting(Highcharts);


 setTimeout(()=>{
     window.dispatchEvent(
         new Event('resize')
     );
 },300);
    

  }



}
