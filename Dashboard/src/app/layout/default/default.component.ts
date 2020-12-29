import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBar = false;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBar = !this.sideBar;
  }

}
