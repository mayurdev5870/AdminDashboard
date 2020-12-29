import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart(){
    return [{
      name: 'Asia',
      data: [45, 35, 80, 97, 1402, 634, 268]
  }, {
      name: 'Africa',
      data: [16, 107, 11, 133, 221, 77, 1766]
  }, {
      name: 'Europe',
      data: [163, 23, 276, 408, 57, 729, 68]
  }, {
      name: 'America',
      data: [18, 1, 54, 156, 339, 88, 1201]
  }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 1, 30, 46]
  }];
     
  }

  cards(){
    return [4, 35, 30, 97, 45, 4, 68];
  }

  pieChart(){
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }];
  }


}
