import {Component, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'dash-table',
  styleUrls: ['./table.css'],
  templateUrl: './table.html'
})
export class Table {
  rows = [];
  temp = [];
  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
    constructor() {
      this.fetch((data) => {
        // cache our list
        this.temp = [...data];
  
        // push our inital complete list
        this.rows = data;
      });
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/company.json`);
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
    }
  
    updateFilter(event) {
      const val = event.target.value.toLowerCase();
  
      // filter our data
      const temp = this.temp.filter(function(d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
  
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }
  
  }
